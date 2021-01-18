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
const returnCamundaMessage = (response: any, props: any) => {
  let errorMessage: string = '';
  let redirectFlag: boolean = false;
  if (response.success && response.message === 'Success') {
    errorMessage = '';
  } else if (response.message && response.message === 'Unauthorized') {
    errorMessage = props.i18n('timeoutMessage');
    redirectFlag = true;
  } else {
    errorMessage = props.i18n('somethingWentWrong-title');
  }

  props.actions.camundaMessage.update(errorMessage);

  if (errorMessage && redirectFlag) {
    setTimeout(() => {
      localStorage.setItem('forceRedirect', window.location.href);
      window.location.href = '/login';
    }, 5000);
  }

  return errorMessage;
};
const getDashboardUrl = () => {
  let protocol = location.protocol;
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  return `${host}/en/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/EHSMSReviewingFeesPayment`;
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
  filteredLicenceList,
  getDateFromTimeStamp,
  formatValue,
  returnCamundaMessage,
  getDashboardUrl,
  getUrlParams,
};
