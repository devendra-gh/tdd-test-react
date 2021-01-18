const getDateFromTimeStamp = (timestamp: number, locale: string) => {
  const date = new Date(timestamp);
  const monthsArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthsArabic = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  const year = date.getFullYear(); // Year
  const month = monthsArr[date.getMonth()]; // Month
  const monthArabic = monthsArabic[date.getMonth()]; // Month
  const day = date.getDate(); // Day

  return locale === 'ar'
    ? `${day} ${monthArabic}, ${year}`
    : `${day} ${month}, ${year}`;
};
const formatValue = (value: any) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
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
const filteredLicenceList = (
  data: any[],
  locale: string,
  search: string = '',
  pageNumber: number = 1,
  totalRec: any,
  selectedLicenceNumber: string,
  currentPagesize: any,
) => {
  let updatedList = data || [];
  const localeKey = locale === 'en' ? 'Eng' : 'Arb';
  if (search) {
    updatedList = updatedList.filter((item: any) => {
      return (
        item.tradeLicenseNumber.toLowerCase().search(search.toLowerCase()) >=
          0 ||
        (item[`businessName${localeKey}`] || '')
          .toString()
          .toLowerCase()
          .search(search.toLowerCase()) > -1
      );
    });
  }
  const PAGESIZE = updatedList.length < 10 ? updatedList.length : 10;
  const offset = (pageNumber - 1) * PAGESIZE;
  currentPagesize.update(PAGESIZE);
  totalRec.update(updatedList.length);
  const licenceList = updatedList.map((licence: any) => ({
    _id: licence.tradeLicenseNumber,
    licenceNumber: licence.tradeLicenseNumber,
    companyName:
      locale === 'en' ? licence.businessNameEng : licence.businessNameArb,
    selected:
      licence.tradeLicenseNumber === selectedLicenceNumber ? true : false,
  }));
  return licenceList.length
    ? licenceList.slice(offset, pageNumber * PAGESIZE)
    : [];
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
          emailType,
        },
      )
      .then((response: any) => response.data)
      .catch((err: any) => err);
    return result;
  } catch (error) {
    return `unable to send notification email ${error}`;
  }
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
          body: { data: { ApplicationID } },
        },
      },
    )
    .then((response: any) => response.data)
    .catch((err: any) => err);
  let { businessKey, instanceId } = response.Metadata;
  return { businessKey, instanceId };
};
const returnCamundaMessage = (response: any, props: any) => {
  let errorMessage: string = '';
  let redirectFlag: boolean = false;
  if (response.success && response.message === 'Success') {
    errorMessage = '';
  } else if (response.message && response.message === 'Unauthorized') {
    errorMessage = props.i18n('timeoutMessage');
    redirectFlag = true;
  } else {
    errorMessage = props.i18n('somethingWentWrongTitle');
  }
  props.actions.camundaMessage.update(errorMessage);

  // if (errorMessage && redirectFlag) {
  //   setTimeout(() => {
  //     localStorage.setItem('forceRedirect', window.location.href);
  //     window.location.href = '/login';
  //   }, 5000);
  // }

  return errorMessage;
};
const getDashboardUrl = () => {
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  return `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/EconomicLicences/requestforatruecopyofeconomiclicence`;
};
const getUrlParams = function () {
  let params: any = {};
  let parser = document.createElement('a');
  parser.href = window.location.href;
  let query = parser.search.substring(1);
  let vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};
export {
  getUrlParams,
  getLicenceList,
  downloadFile,
  sendEmailNotification,
  getMetaDataFromAdlocker,
  getDashboardUrl,
  getDateFromTimeStamp,
  returnCamundaMessage,
  formatValue,
  filteredLicenceList,
};
