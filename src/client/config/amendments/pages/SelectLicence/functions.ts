/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import bpm from 'client/services/bpm';
import {
  PROCESS_NAME,
  SOMETHING_WENT_WRONG,
} from 'client/config/amendments/constants';
import {
  getLicenceDetails,
  checkApplicationStatus,
} from 'client/config/amendments/services';
import { licenceDetailMapper } from 'client/config/amendments/utils/mapper';
import {
  getLegalForm,
  getLicenceType,
} from 'client/config/amendments/utils/functions';
import { setReduxState } from 'client/config/amendments/utils/setUpdateReduxState';
// import licenceInfo from './licenceDetails.json';

// const getCapId = async (licenceNo: any, props: IVariables) => {
//   try {
//     const relatedRecords = await getRelatedRecords(licenceNo);
//     if (relatedRecords.result) {
//       const filteredRecord: any = Object.values(
//         relatedRecords.result.relatedRecoreds,
//       ).filter((values: any) => values.type === 'License');
//       if (filteredRecord[0].capId) {
//         props.actions.capID.update(filteredRecord[0].capId);
//       }
//     }
//   } catch (e) {}
// };

const getApplicationStatus = async (licenceNo: any, props: IVariables) => {
  let applicationStatus = true;
  try {
    const applicationStatusRecords = await checkApplicationStatus(licenceNo);

    if (
      applicationStatusRecords.result &&
      applicationStatusRecords.result[0].applicationStatus
    ) {
      if (applicationStatusRecords.result[0].applicationStatus !== 'Issued') {
        applicationStatus = false;
        props.history.push('/amendments/no-information');
      } else {
        props.actions.capID.update(applicationStatusRecords.result[0].capId);
      }
    }
  } catch (exception) {
    applicationStatus = false;
  }

  return applicationStatus;
};

const resetReduxState = (props: IVariables) => {
  props.actions.instanceId.reset();
  props.actions.businessKey.reset();
  props.actions.licenseNo.reset();
  props.actions.capID.reset();
  props.actions.licenseType.reset();
  props.actions.prevLicenseType.reset();
  props.actions.legalForm.reset();
  props.actions.prevLegalForm.reset();
  props.actions.amendmentCategories.reset();
  props.actions.licenceDetails.reset();
  props.actions.initialValues.reset();
  props.actions.documents.reset();
  props.actions.applicationReturnDocuments.reset();
  props.actions.tradeName.reset();
  props.actions.tawtheeqDetails.reset();
  props.actions.activity.reset();
  props.actions.dedErrorMessage.reset();
};

const selectLicense = async (licenceNo: string, props: IVariables) => {
  resetReduxState(props);
  props.actions.pageLoading.update(true);

  try {
    const getLicenceSlice = props.tradeLicenceList.data.filter(
      (item: IVariables) => {
        return item.tradeLicenseNumber === licenceNo;
      },
    );
    const dbId = getLicenceSlice[0].dbAmendmentId;

    if (dbId === 0) {
      // const licenceData: IVariables = licenceInfo;
      // const licenceData = await getLicenceDetails('CN-1149575');
      const continueStep = await getApplicationStatus(licenceNo, props);

      if (continueStep === true) {
        props.actions.pageLoading.update(true);
        const licenceData = await getLicenceDetails(licenceNo);
        // await getCapId(licenceNo, props);
        const licenceDetails = licenceDetailMapper(licenceData.result);
        props.actions.licenceDetails.update({
          // / ...props.licenceDetails,
          ...licenceDetails,
          contactInfo: {
            //  ...props.licenceDetails.contactInfo,
            name: `${props.user['First Name EN']} ${props.user['Last Name EN']} `,
            phone: props.user.Mobile,
            email: props.user['User Email'],
          },
        });
        props.actions.initialValues.update(licenceDetails);
        props.actions.licenseNo.update(licenceDetails.licenseNo);

        const licenceType = getLicenceType(licenceDetails);
        props.actions.licenseType.update(licenceType);
        props.actions.prevLicenseType.update(licenceType);

        const legalForm = getLegalForm(licenceDetails, licenceType);
        props.actions.legalForm.update(legalForm);
        props.actions.prevLegalForm.update(legalForm);
        const data = await bpm.start(PROCESS_NAME, {
          serviceName: 'amendments',
          cnNumber: licenceNo,
          emiratesId: props.user.IDN,
          dbAmendmentId: dbId,
          pageName: 'categories',
        });
        if (
          data.success &&
          data.data &&
          data.data.businessKey &&
          data.data.id
        ) {
          props.actions.instanceId.update(data.data.id);
          props.actions.businessKey.update(data.data.businessKey);
          props.actions.pageLoading.update(false);
          props.history.push('/amendments/categories');
          return;
        }
      }
    } else {
      // continue process
      const { businessKey, processInstanceId } = getLicenceSlice[0].ioDetails;
      const propWithDbID = { ...props, dbAmendmentId: dbId };
      const state = await setReduxState(
        processInstanceId,
        businessKey,
        propWithDbID,
      );
      props.actions.pageLoading.update(false);
      if (state) {
        if (state === 'commundaError') {
          props.actions.commundaError.update(true);
          return;
        }
        props.history.push(state);
        return;
      }
    }
  } catch (exception) {
    props.actions.amendmentServerError.update(props.i18n(SOMETHING_WENT_WRONG));
  }
  props.actions.amendmentServerError.update(props.i18n(SOMETHING_WENT_WRONG));
  props.actions.pageLoading.update(false);
};

// .filter(commentReply => commentReply.replyTo === comment.id)
const filterSearchTradeLicenseList = (
  filter: string,
  search: string,
  props: IVariables,
) => {
  const locale = props.locale === 'en' ? 'Eng' : 'Arb';
  let filteredList = props.tradeLicenceList.data || [];
  if (filter && filter !== 'all') {
    filteredList = filteredList.filter(
      (item: IVariables) => item.status === filter,
    );
  }
  if (search) {
    filteredList = filteredList.filter((item: IVariables) => {
      return (
        item.tradeLicenseNumber.toLowerCase().search(search.toLowerCase()) >=
          0 ||
        item[`businessName${locale}`]
          .toString()
          .toLowerCase()
          .search(search.toLowerCase()) > -1
      );
    });
  }
  return filteredList;
};

const removeDuplicate = (listLicense: IVariables) => {
  const obj: IVariables = {};
  return Array.isArray(listLicense.data)
    ? Object.keys(
        listLicense.data.reduce((prev: IVariables, next: IVariables) => {
          if (!obj[next.tradeLicenseNumber])
            obj[next.tradeLicenseNumber] = next;
          return obj;
        }, obj),
      ).map(i => obj[i])
    : [listLicense.data];
};

const getAmendmentsByEmiratesId = async (props: IVariables) => {
  const parmArrayIO = {
    emiratesId: props.user.IDN,
    applicationStatus: 'Closed',
  };
  const result = await fetch(
    `/pub/proxy/io/amendmentByEmiratesId`,
    `POST`,
    parmArrayIO,
  );
  if (result.data.amendmentsByFilter) return result.data.amendmentsByFilter;
  return [];
};
const checkExistance = (resultIO: IVariables, tradeLicenseNumber: string) => {
  const found = resultIO
    .filter((item: IVariables) => {
      return resultIO && tradeLicenseNumber === item.cnNumber;
    })
    .map((item: IVariables) => {
      return item;
    });
  return found;
};

const listTradeLicenses = async (props: IVariables) => {
  props.actions.pageLoading.update(true);
  props.actions.tradeLicenceList.reset();
  if (!props.user || !props.user.IDN) {
    props.history.push('/amendments/no-active-licence');
    return;
  }
  try {
    const parmArray = {
      emiratesIdNumber: props.user.IDN,
    };

    const res = await fetch(`/pub/proxy/listTradeLicenses`, `POST`, parmArray);
    // if (!res.success || !res.data) {
    //   props.history.push('/amendments/not-found');
    //   return;
    // }
    if (!res.success || res.data.length === 0) {
      props.history.push('/amendments/no-active-licence');
      return;
    }
    // remove duplicates
    const uniqueRes = removeDuplicate(res);

    const resultIO = await getAmendmentsByEmiratesId(props);
    const finalList = uniqueRes.map((item: IVariables) => {
      const chkExist = checkExistance(resultIO, item.tradeLicenseNumber);
      //  console.log('myTest', item.tradeLicenseNumber, chkExist.length, chkExist)
      const newObj: IVariables = {
        tradeLicenseNumber: item.tradeLicenseNumber,
        businessNameEng: item.businessNameEng,
        businessNameArb: item.businessNameArb,
        status: chkExist.length !== 0 ? 'Continue' : 'Start',
        dbAmendmentId: chkExist.length > 0 ? chkExist[0].id : 0,
        ioDetails: chkExist.length !== 0 ? chkExist[0] : null,
      };
      return newObj;
    });
    props.actions.tradeLicenceList.update({
      ...props.tradeLicenceList,
      data: finalList,
    });
  } catch (e) {
    // props.actions.showErrorAlert.update(true);
    // props.actions.displaySpinner.update(false);
  }
  props.actions.pageLoading.update(false);
};

const init = (props: IVariables) => {
  props.actions.amendmentServerError.reset();
};
const onPageInit = (props: IVariables) => {
  props.actions.pageLoading.update(false);
  props.actions.pageLoading.update(false);
  listTradeLicenses(props);
};

export default {
  init,
  onPageInit,
  selectLicense,
  listTradeLicenses,
  filterSearchTradeLicenseList,
};
