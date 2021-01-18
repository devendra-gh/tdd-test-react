import { IVariables } from '@tamm/app-composer';
import InternalApi from 'client/services/InternalApi';
import moment from 'moment';
import fetchFees from '../../services/fees';
import fetchRequirements from '../../services/requirements';
import { initialState } from '../../config';
import { getAnalyticsData } from '../../utils';

const getInitialState = async (props: IVariables) => {
  const {
    actions,
    resultState,
    formCompanyDetails,
    formSelectActivity,
  } = props;

  const { location, legalForm } = formCompanyDetails;
  const { activity } = formSelectActivity;
  const payload = { location, legalForm, activityId: activity };
  actions.resultState.update(initialState.resultState);
  Promise.all([fetchFees(payload), fetchRequirements(payload)])
    .then(([fees, requirements]) => {
      actions.resultState.update({
        ...resultState,
        loading: false,
        showError: false,
        fees,
        requirements,
      });
      getAnalyticsData('sla', { serviceStatus: 'success' });
    })
    .catch(err => {
      props.history.push('/business-licence-procedure/error-page');
      actions.resultState.update({
        ...resultState,
        loading: false,
        showError: true,
      });
      getAnalyticsData('sla', { serviceStatus: 'fail' });
    });
};
const getRequirements = (props: IVariables) => {
  const {
    locale,
    resultState: { requirements },
  } = props;
  return (
    (requirements &&
      requirements.length &&
      requirements.map((requirement: any) => {
        return {
          requirement:
            locale === 'en'
              ? requirement.requirementDescEn
              : requirement.requirementDescAr,
        };
      })) ||
    []
  );
};

const getFees = (props: IVariables) => {
  const {
    locale,
    resultState: { fees },
  } = props;
  return (
    (fees &&
      fees.length &&
      fees.map((fee: any) => {
        return {
          desc: locale === 'en' ? fee.feeDescEn : fee.feeDescAr,
          status: fee.activityCode,
          fee: fee.feeAmount,
        };
      })) ||
    []
  );
};

const getDownloadLicenseProcedureDoc = async (props: IVariables) => {
  const {
    i18n,
    locale,
    resultState: { legalForm, legalFormAr, selectedActivity, fees },
  } = props;

  const payload = {
    printDate: moment(new Date()).format('DD/MM/YYYY'),
    printTime: moment(new Date()).format('hh:mm A'),
    transactionType: i18n('applicant_new_license'),
    legalType: locale === 'en' ? legalForm : legalFormAr,
    activities: [
      {
        activity:
          locale === 'en'
            ? selectedActivity.activity
            : selectedActivity.activityAr,
      },
    ],
    conditions: [
      {
        condition: i18n('applicant_age_constant'),
      },
    ],
    requirements: getRequirements(props),
    fees: getFees(props),
    total:
      fees && fees.length
        ? fees.reduce(
            (accumulator: number, currentValue: IVariables) =>
              accumulator + currentValue.feeAmount,
            0,
          )
        : '',
  };
  const docxData = { payload, locale };

  try {
    const response = await InternalApi.getDownloadLicenseProcedureDoc(docxData);
    if (response && response.data) {
      const filename = 'Certificate';
      const typedArr = new Uint8Array(response.data.data);
      const stringChar = typedArr.reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, '');
      const base64String = btoa(stringChar);
      const data = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement('a');
      link.href = data;
      link.download = `${filename}.pdf`;
      link.click();
    }
  } catch (err) {
    // console.error('Error while getting document:', err);
  }
};

export default {
  getInitialState,
  getDownloadLicenseProcedureDoc,
};
