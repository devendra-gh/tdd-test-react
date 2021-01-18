import { IVariables } from '@tamm/app-composer';
import moment from 'moment';
import fetchLicenceDetails from '../../services/licence';
import { getAnalyticsData } from '../../utils';

/* istanbul ignore file */

const init = async (props: IVariables) => {
  props.actions.tradeLicence.update({
    licenceNo: '',
    data: null,
    isLoading: false,
    errorCode: null,
  });
};

const getActivityList = (data: any, props: IVariables) => {
  const { locale, i18n } = props;
  let { activities: tradeLicenseActivities } = data;
  if (!(tradeLicenseActivities instanceof Array)) {
    tradeLicenseActivities = [tradeLicenseActivities];
  }

  const licenceActivity = {
    columns: [
      {
        id: 'description',
        title: i18n('getLicenceDetails.label.description'),
      },
    ],
    headerHidden: false,
    items: tradeLicenseActivities.map((li: IVariables, index: IVariables) => ({
      id: `activity${index}`,
      description: `${
        locale === 'en' ? li && li.activityNameEng : li && li.activityNameArb
      }(${li && li.activityCode})`,
    })),
    title: i18n('getLicenceDetails.title.activities'),
    uiType: 'small',
  };
  return [licenceActivity];
};

// convert the date to DD/MM/YYYY
const convertDateToLocalString = (value: any) => {
  return value ? moment(value).format('L') : '';
};

const getSummaryList = (data: any, props: IVariables) => {
  const { locale, i18n } = props;

  const {
    licenseNo: tradeLicenseNumber, // trade licence number
    adcciNo: adcciUnifiedId, // ADCCI number
    businessNameEng, // trade name
    businessNameArb,
    legalFormEng, // legal form
    legalFormArb,
    clasification_en: licenceTypeEn, // licence type
    clasification_ar: licenceTypeAr,
    isbranch: branch, // branch
    issuePlaceEng, // issuance Place
    IssuePlaceAR,
    establishment_Date: establishmentDate,
    issueDate, // registration Date
    expiryDate, // expiry Date
    LicenseStatusENG, // license status
    LicenseStatusARB,
    BusinessAddressEN, // address
    businessAddress,
  } = data;

  const licenceSummary = {
    columns: [
      {
        id: 'section',
        title: i18n('getLicenceDetails.label.section'),
      },
      {
        align: 'left',
        id: 'details',
        title: i18n('getLicenceDetails.label.details'),
      },
    ],
    headerHidden: false,
    items: [
      {
        section: i18n('getLicenceDetails.label.tradeLicenceNumber'),
        details: tradeLicenseNumber,
        id: '1',
      },
      {
        section: i18n('getLicenceDetails.label.unifiedId'),
        details: adcciUnifiedId,
        id: '2',
      },
      {
        section: i18n('getLicenceDetails.label.tradeName'),
        details: locale === 'en' ? businessNameEng : businessNameArb,
        id: '3',
      },
      {
        section: i18n('getLicenceDetails.label.legalForm'),
        details: locale === 'en' ? legalFormEng : legalFormArb,
        id: '4',
      },
      {
        section: i18n('getLicenceDetails.label.licenceType'),
        details: locale === 'en' ? licenceTypeEn : licenceTypeAr,
        id: '5',
      },
      {
        section: i18n('getLicenceDetails.label.branch'),
        details:
          branch && branch.toLowerCase() === 'n'
            ? i18n('global.yes')
            : i18n('global.no'),
        id: '6',
      },
      {
        section: i18n('getLicenceDetails.label.issuancePlace'),
        details: locale === 'en' ? issuePlaceEng : IssuePlaceAR,
        id: '7',
      },
      {
        section: i18n('getLicenceDetails.label.establishmentDate'),
        details: convertDateToLocalString(establishmentDate),
        id: '8',
      },
      {
        section: i18n('getLicenceDetails.label.registrationDate'),
        details: convertDateToLocalString(issueDate),
        id: '9',
      },
      {
        section: i18n('getLicenceDetails.label.expiryDate'),
        details: convertDateToLocalString(expiryDate),
        id: '10',
      },
      {
        section: i18n('getLicenceDetails.label.licenceStatus'),
        details: locale === 'en' ? LicenseStatusENG : LicenseStatusARB,
        id: '11',
      },
      {
        section: i18n('getLicenceDetails.label.address'),
        details: locale === 'en' ? BusinessAddressEN : businessAddress,
        id: '12',
      },
    ],
    title: i18n('getLicenceDetails.title.licenceSummary'),
    uiType: 'small',
  };
  return [licenceSummary];
};

const onSubmit = async (licenceNumber: string, props: IVariables) => {
  const updateStore = props.actions.tradeLicence.update;
  getAnalyticsData('tra');
  updateStore({
    ...props.tradeLicence,
    licenceNo: licenceNumber,
    activitiesList: null,
    summaryList: null,
    isLoading: true,
    errorCode: null,
  });
  fetchLicenceDetails(licenceNumber)
    .then((response: any) => {
      getAnalyticsData('sla', { serviceStatus: 'success' });
      const licenceDetails =
        response.constructor === Array ? { ...response[0] } : {};

      updateStore({
        ...props.tradeLicence,
        data: licenceDetails,
        activitiesList: getActivityList(licenceDetails, props),
        summaryList: getSummaryList(licenceDetails, props),
        isLoading: false,
      });
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'getLicenceDetails.steps.enterLicenceNumber': 'finish',
      });
    })
    .catch((error: any) => {
      const errorCode = error && error.code && error.code === 204 ? 204 : 500;
      getAnalyticsData('sla', { serviceStatus: 'fail' });
      updateStore({
        licenceNo: '',
        data: null,
        isLoading: false,
        errorCode,
      });
      props.history.push('/get-licence-details/error');
    });
};

const onChange = (licenceNumber: string, props: IVariables) => {
  props.actions.tradeLicence.update({
    ...props.tradeLicence,
    licenceNo: licenceNumber,
  });
};

const goBack = (props: IVariables) => {
  props.history.push('/get-licence-details/');
};

export default {
  init,
  onSubmit,
  onChange,
  getActivityList,
  convertDateToLocalString,
  getSummaryList,
  goBack,
};
