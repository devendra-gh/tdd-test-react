const getLicenceList = async (props: any) => {
  let licenceList = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/listTradeLicensesV3',
      'POST',
      // {
      //   emiratesIdNumber: props.user.IDN, // '784198958090718', //props.user.IDN // '784198958090718', //props.user.IDN, //'784198505249585', // || ,
      // }
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);

  let filteredList: any = [];
  if (
    licenceList &&
    licenceList.TradeLicensesList &&
    Object.values(licenceList.TradeLicensesList.contents).length
  ) {
    licenceList = Array.isArray(licenceList.TradeLicensesList.contents)
      ? licenceList.TradeLicensesList.contents
      : [licenceList.TradeLicensesList.contents];
    const newLicenceList = removeDuplicate(licenceList);
    filteredList = newLicenceList.filter(
      (item: any) => item.tradeLicenseNumber.toLowerCase().search('in') >= 0,
    );
  }

  return filteredList;
  //return dummylicenceList;
};
const removeDuplicate = (listLicense: any) => {
  const obj: any = {};
  return Array.isArray(listLicense)
    ? Object.keys(
        listLicense.reduce((prev: any, next: any) => {
          if (!obj[next.tradeLicenseNumber])
            obj[next.tradeLicenseNumber] = next;
          return obj;
        }, obj),
      ).map(i => obj[i])
    : [];
};
const getDEDToken = async (props: any) => {
  const token = await props
    .fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
      'POST',
      {
        agency: '{{configVars.ded.agency}}',
        password: '{{configVars.ded.password}}',
        userId: '{{configVars.ded.userId}}',
      },
    )
    .then((response: any) => response.data.result.token)
    .catch((err: any) => err);
  return token;
};

const downloadFile = async (
  instanceId: string,
  certificateName: string,
  props: any,
) => {
  let response: any = {};
  const certificatetype = 'industrialLicence';
  response = await props.fetch(
    `/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/businessCertificate?instanceId=${instanceId}&type=${certificatetype}&certificateName=${certificateName}`,
    'POST',
    {
      emiratesId: '{{user.IDN}}',
    },
  );
  if (response && response.data && response.data.fileContent) {
    const file = response.data.fileContent;
    const newBlob = new Blob([file], {
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
    let link = document.createElement('a');
    link.href = data;
    link.target = '_blank';
    link.download = certificateName + '.pdf';
    link.click();
    setTimeout(function () {
      // For Firefox it is necessary to delay revoking the ObjectURL
      window.URL.revokeObjectURL(data);
    }, 100);
    return response.data;
  }
  return response;
};

const sendEmailNotification = async (emailType: string, props: any) => {
  try {
    const result = await props
      .fetch(
        '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/sendEmailNotification',
        'POST',
        {
          instanceId: props.instanceId,
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

const getGspContent = async (props: any) => {
  const serviceCardList = await props
    .fetch(
      '/pub/proxy/ms-call/gateway/TammJourneyGsp/1.0/getServiceByCode',
      'POST',
      {
        lang: 'en',
        serviceCode: 'DED/0071',
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);

  return serviceCardList;
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
export {
  getGspContent,
  getLicenceList,
  downloadFile,
  sendEmailNotification,
  getMetaDataFromAdlocker,
};
