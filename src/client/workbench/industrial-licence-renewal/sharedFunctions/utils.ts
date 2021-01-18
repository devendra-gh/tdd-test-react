const formatValue = (value: any) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
};

// TODO: function to filter the items in the table
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
    companyName: licence[`businessName${localeKey}`],
    selected:
      licence.tradeLicenseNumber === selectedLicenceNumber ? true : false,
  }));
  return licenceList.length
    ? licenceList.slice(offset, pageNumber * PAGESIZE)
    : [];
};

const setNotificationTableMessage = (
  props: any,
  message: string,
  status: string,
) => {
  switch (status) {
    case 'none': {
      props.actions.notificationTableItem.update([
        { _id: '1', message: message },
      ]);
      props.actions.notificationTableStatus.update('');
      break;
    }
    case 'loading': {
      props.actions.notificationTableStatus.update('loading');
      break;
    }
    default: {
      props.actions.notificationTableStatus.update('error');
    }
  }
};

const getDateFromTimeStamp = (timestamp: number) => {
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
  const year = date.getFullYear(); // Year
  const month = monthsArr[date.getMonth()]; // Month
  const day = date.getDate(); // Day
  return `${month} ${day}, ${year}`;
};

export {
  formatValue,
  filteredLicenceList,
  setNotificationTableMessage,
  getDateFromTimeStamp,
};
