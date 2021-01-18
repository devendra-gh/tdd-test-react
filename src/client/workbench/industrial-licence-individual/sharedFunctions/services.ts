

const getDEDToken = async (props: any) => {
  const token = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
      'POST',
      {
        agency: '{{configVars.ded.agency}}',
        password: '{{configVars.ded.password}}',
        userId: '{{configVars.ded.userId}}',
      }
    )
    .then((response: any) => response.data.result.token)
    .catch((err: any) => err);
  return token;
};

const downloadFile = async (
  instanceId: string,
  certificateName: string,
  props: any
) => {
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.open(
    `${host}/services/business/ded/api/download/businessCertificateGenericAuthADU?type=industrialLicence&instanceId=${instanceId}&certificateName=${certificateName}&mobileDownloadable=pdf&mobileFileName=Certificate`,
    '_blank'
  );
};

const saveFile = async (
  applicationNumber: string,
  capId: string,
  instanceId: string,
  certificateName: string,
  props: any
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
    }
  );
  const file = response.data.result.Certificate;
  var newBlob = new Blob([file], {
    type: 'application/pdf',
  });
  return file;
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
  const searchByFiltered = searchBy.filter((obj: any) => obj.value !== 'All');
  const licenceList = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/getActivities',
      'POST',
      {
        searchType: 'By Field',
        searchBy: searchByFiltered,
        // nationalityCode: 'ARE',
        // legalType: 'Establishment',
        // gender: 'Male',
        configurationList: [
          {
            pageNumber: '1',
            pageSize: '1500',
          },
        ],
      }
    )
    .then((response: any) => response.success && response.data)
    .catch((err: any) => err);
  const updatedList =
    (licenceList &&
      licenceList.result &&
      licenceList.result.activityinfoData &&
      licenceList.result.activityinfoData &&
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
      })) ||
    [];
  return updatedList;
};

const tradeNameCheck = async (
  props: any,
  tradeNameEnglish: string,
  tradenameArabic: string
) => {
  const tradeNameValidity = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/tradeNameCheck',
      'POST',
      {
        tradeNameEnglish,
        tradenameArabic,
      }
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
  legalForm: string = 'Establishment'
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
      }
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

const autoFillBusinessNames = async (props: any) => {
  const tradeNameResult = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/autoFillBusinessName',
      'POST',
      {}
    )
    .then((response: any) => response.data.result)
    .catch((err: any) => err);

  return tradeNameResult;
};

const getYamliSuggestions = async (props: any, word: string) => {
  const yamliResult = await props
    .fetch(
      `/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/getYamliSuggestions?word=${word}`,
      'GET'
    )
    .then((response: any) => response.data && response.data.suggestions)
    .catch((err: any) => err);

  return yamliResult;
};

const getMetaDataFromAdlocker = async (props: any, ApplicationID: any) => {
  const response = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdl-services-in-progress/1.0/retrieve/getid',
      'POST',
      {
        body: {
          header: {
            UUID: props.user['User Unique Identifier'],
            language: props.locale.toUpperCase(),
          },
          body: { data: { ApplicationID } },
        },
      }
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);
  let { businessKey, instanceId } = response.Metadata;
  return { businessKey, instanceId };
};

const getListFromAdlocker = async (props: any) => {
  const response = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdl-services-in-progress/1.0/retrieve/getlist',
      'POST',
      {
        body: {
          header: {
            UUID: props.user['User Unique Identifier'],
            language: props.locale.toUpperCase(),
          },
          body: {
            data: {
              PageOffset: '0',
              PageSize: '8',
              Sortings: [
                {
                  Column: 'RefCode',
                  Type: 'DESC',
                },
                {
                  Column: 'StatusDate',
                  Type: 'ASC',
                },
              ],
              Filters: [
                {
                  RefCode: '2944',
                },
              ],
              SearchCriteria: '',
              DataViewTemplate: 'default',
              ToDisplayOnly: 0,
              NeedLookup: 0,
            },
          },
        },
      }
    )
    .then((response: any) => response.data && response.data.List)
    .catch((err: any) => err);
  return response || [];
};

const businessLicenseDetailsV3 = async (props: any, tnNumber: string) => {
  const token = await getDEDToken(props);
  const result = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/businessLicenseDetailsV3?token=' +
        token +
        '&licenseNo=' +
        tnNumber,
      'POST',
      {}
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);
  return result;
};

const sendEmailNotification = async (
  props: any,
  emailType: string,
  instanceId: string
) => {
  try {
    const result = await props
      .fetch(
        '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/sendEmailNotification',
        'POST',
        {
          instanceId,
          emailType: emailType,
        }
      )
      .then((response: any) => response.data)
      .catch((err: any) => err);
    return result;
  } catch (error) {
    return 'unable to send notification email' + error;
  }
};

export {
  getActivities,
  saveFile,
  downloadFile,
  tradeNameCheck,
  tradeNameSuggestion,
  autoFillBusinessNames,
  getYamliSuggestions,
  getMetaDataFromAdlocker,
  getListFromAdlocker,
  businessLicenseDetailsV3,
  sendEmailNotification,
};
