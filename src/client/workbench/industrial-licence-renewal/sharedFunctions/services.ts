const getDEDToken = async (props: any) => {
  const token = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
      'POST',
      {
        agency: 'adbc',
        password: 'XYZ-1234567',
        userId: 'OSS',
      },
    )
    .then((response: any) => response.data.result.token)
    .catch((err: any) => err);
  return token;
};
const listLicenses = async (props: any) => {
  const res = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/listTradeLicenses',
      'POST',
      {
        emiratesIdNumber: props.user.IDN,
      },
    )
    .then((response: any) => {
      return response.data;
    })
    .catch((err: any) => err);
  return res;
};
const licenseDetails = async (licenseNo: string, props: any) => {
  const token = await getDEDToken(props);
  const response = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/businessLicenseDetailsV3?token=' +
        token +
        '&licenseNo=' +
        licenseNo,
      'POST',
      {},
    )
    .then((response: any) => response.data.result[0])
    .catch((err: any) => err);
  return response;
};
const tawtheeqDetails = async (tawtheeqNo: any, props: any) => {
  const response = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/getTawtheeqDetailsV4',
      'POST',
      {
        contractNo: tawtheeqNo,
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);
  return response;
};
const getMetaDataFromAdlocker = async (props: any, ApplicationID: any) => {
  const response = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdl-services-in-progress/1.0/retrieve/getid',
      'POST',
      {
        body: {
          header: {
            UUID: props.user.IDN,
            language: props.locale.toUpperCase(),
          },
          body: {
            data: {
              ApplicationID,
            },
          },
        },
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);

  let { businessKey, instanceId } = response.Metadata;

  return { businessKey, instanceId };
};
const sendEmailNotification = async (
  props: any,
  emailType: string,
  instanceId: string,
) => {
  try {
    const result = await props
      .fetch(
        '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/sendEmailNotification',
        'POST',
        {
          instanceId,
          emailType: emailType,
        },
      )
      .then((response: any) => response.data)
      .catch((err: any) => err);
    return result;
  } catch (error) {
    return 'unable to send notification email' + error;
  }
};
const uploadS3File = async (
  props: any,
  capId: any,
  trackingNumber: any,
  documentNames: any,
) => {
  const token = await getDEDToken(props);
  let file: any = await props
    .fetch(
      `/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/uploadDocument?token=` +
        token,
      'POST',
      {
        capId,
        documentCategory: 'Industrial',
        // documentName: 'certificate (9).pdf__woBmoDGFIDb1y2nL8l7ILLSa8qkx',
        documentName: documentNames,
        documentPath:
          'workbench-generator**workbenchUserId**/tmp/workbench/upload/**' +
          documentNames,
        trackingNumber,
      },
    )
    .then((response: any) => response)
    .catch((err: any) => console.log('Error', err));
  return file;
};

const downloadFile = async (
  applicationNumber: string,
  capId: string,
  instanceId: string,
  certificateName: string,
  props: any,
) => {
  let response: any = {};
  //const bK = props.state.businessKey;
  //const ss = props.fetch;
  const token = await getDEDToken(props);
  response = await props.fetch(
    '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/businessCertificate?token=' +
      token,
    'POST',
    {
      applicationNumber: applicationNumber,
      capId: capId,
      certificateName: certificateName,
      instanceId: instanceId,
    },
  );
  const file = response.data.result.Certificate;
  var newBlob = new Blob([file], {
    type: 'application/pdf',
  });
  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }
  // For other browsers:
  // Create a link pointing to the ObjectURL containing the blob.
  const data = window.URL.createObjectURL(newBlob);
  var link = document.createElement('a');
  link.href = data;
  link.target = '_blank';
  link.download = certificateName + '.pdf';
  link.click();
  setTimeout(function () {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
  }, 100);
  return true;
};

const tradeNameCheck = async (
  props: any,
  tradeNameEnglish: string,
  tradenameArabic: string,
) => {
  const tradeNameValidity = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/tradeNameCheck',
      'POST',
      {
        tradeNameEnglish,
        tradenameArabic,
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);

  return tradeNameValidity;
};

const tradeNameSuggestion = async (
  props: any,
  arabicName: string,
  englishName: string,
  activitCode: string,
  legalForm: string = 'Local Establishment',
) => {
  const suggestions = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/businessNameSuggestion',
      'POST',
      {
        arabicName,
        englishName,
        legalForm,
        activitCode, //string containing activity codes separated by ids
      },
    )
    .then((response: any) => response.data.result.res)
    .catch((err: any) => err);

  const updatedSuggestions =
    suggestions.map((item: any) => {
      return {
        ...item,
        ...{
          _id: item.serial,
        },
      };
    }) || [];
  return updatedSuggestions;
};
const getActivities = async (props: any, otherFilters: any[] = []) => {
  const searchBy = [
    ...[
      {
        field: 'activity type',
        value: 'INDUSTRIAL ACTIVITY',
      },
    ],
    ...otherFilters,
  ];
  const licenceList = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/getActivities',
      'POST',
      {
        searchType: 'By Field',
        searchBy: searchBy,
        // nationalityCode: 'ARE',
        // legalType: 'Establishment',
        // gender: 'Male',
        configurationList: [
          {
            pageNumber: '1',
            pageSize: '1500',
          },
        ],
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);
  const updatedList =
    licenceList.result.activityinfoData.map((activity: any) => {
      return {
        ...activity,
        ...{
          _id: activity.activityCode,
          name:
            props.locale == 'ar'
              ? activity.activityNameAr
              : activity.activityNameEn,
          price:
            props.locale === 'ar'
              ? `${Number(activity.dedFee).toFixed(2)} درهم`
              : `AED ${Number(activity.dedFee).toFixed(2)}`,
          selected: false,
        },
      };
    }) || [];
  return updatedList;
};

export {
  getMetaDataFromAdlocker,
  tawtheeqDetails,
  getActivities,
  listLicenses,
  licenseDetails,
  uploadS3File,
  downloadFile,
  tradeNameCheck,
  tradeNameSuggestion,
  sendEmailNotification,
};
