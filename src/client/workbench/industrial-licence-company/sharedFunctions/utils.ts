

const formatValue = (value: any) => {
  return typeof value === 'number'
    ? value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    : value;
};
const validateCompanyDetailsForm = (props: any) => {
  let validate = true;
  if (Number.isInteger(parseInt(props.totalCapitalvalue)) === false) {
    props.actions.validateStatusTotalCapitalValue.update('error');
    props.actions.helpValidateStatusTotalCapitalValue.update(
      props.i18n('number_validation')
    );
    validate = false;
  }
  if (props.totalCapitalvalue === '') {
    props.actions.validateStatusTotalCapitalValue.update('error');
    props.actions.helpValidateStatusTotalCapitalValue.update(
      props.i18n('required_field_validation')
    );
    validate = false;
  }
  if (parseInt(props.totalCapitalvalue) < 250000) {
    props.actions.validateStatusTotalCapitalValue.update('error');
    props.actions.helpValidateStatusTotalCapitalValue.update(
      props.i18n('individual_total_capital_content')
    );
    validate = false;
  }

  if (Number.isInteger(parseInt(props.totalInvestmentValue)) === false) {
    props.actions.validateStatusTotalInvestmentValue.update('error');
    props.actions.helpValidateStatusTotalInvestmentValue.update(
      props.i18n('number_validation')
    );
    validate = false;
  }

  if (props.totalInvestmentValue === '') {
    props.actions.validateStatusTotalInvestmentValue.update('error');
    props.actions.helpValidateStatusTotalInvestmentValue.update(
      props.i18n('required_field_validation')
    );
  }

  if (
    parseInt(props.totalInvestmentValue) <= parseInt(props.totalCapitalvalue)
  ) {
    props.actions.validateStatusTotalInvestmentValue.update('error');
    props.actions.helpValidateStatusTotalInvestmentValue.update(
      props.i18n('individual_total_investment_content')
    );

    validate = false;
  }
  if (props.companyDetailsExistingBranchTypeVal === '') {
    props.actions.validateStatus_existingLicense.update('error');
    props.actions.help_existingLicense.update(
      props.i18n('required_field_validation')
    );
    validate = false;
  }

  if (props.selectedIndustrialType === '') {
    props.actions.validateStatus_industryType.update('error');
    props.actions.help_industryType.update(
      props.i18n('required_field_validation')
    );
    validate = false;
  }

  if (
    props.companyDetailsExistingBranchTypeVal === true &&
    props.companyDetailsBranchTypeVal === ''
  ) {
    props.actions.validateStatus_branchType.update('error');
    props.actions.help_branchType.update(
      props.i18n('required_field_validation')
    );
    validate = false;
  }

  if (
    props.companyDetailsExistingBranchTypeVal === true &&
    props.parentCompanylicenceNumberVal === ''
  ) {
    props.actions.validateStatus_parentLicenceNumber.update('error');
    props.actions.help_parentLicenceNumber.update(
      props.i18n('required_field_validation')
    );
    validate = false;
  }
  return validate;
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
const filteredActivities = (
  items: any[],
  locale: string,
  search: string = '',
  pageNumber: number = 1,
  pageSize: number = 10
) => {
  const offset = (pageNumber - 1) * pageSize;
  let updatedList = items || [];
  // const localeKey = locale === 'en' ? 'Eng' : 'Arb';
  if (search) {
    updatedList = updatedList.filter((item: any) => {
      return item.name.toLowerCase().search(search.toLowerCase()) >= 0;
    });
  }
  const totalItems = updatedList.length;
  const activities = updatedList.length
    ? updatedList.slice(offset, pageNumber * pageSize)
    : [];
  return { activities, totalItems };
};

const getApplicationStatuses = () => {
  return [
    { id: '1', iconName: '', iconColor: 'indigo', label: 'status.in_progress' },
    {
      id: '2',
      iconColor: 'indigo',
      iconName: 'LoadingCircle2',
      label: 'status.pending_approval',
    },
    {
      id: '3',
      iconColor: 'yellow',
      iconName: 'AlertCircleFilled',
      label: 'status.action_required',
    },
    {
      id: '4',
      iconColor: 'green',
      label: 'status.completed',
      iconName: 'CheckCircle1Filled',
    },
    {
      id: '5',
      iconColor: 'red',
      label: 'status.declined',
      iconName: 'Delete2Filled',
    },
  ];
};

const call_sort = () => {
  return (a: any, b: any, dir: string) => {
    const newObj: { [key: string]: any } = { asc: 1, desc: -1 };
    return (
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }) *
      newObj[dir]
    );
  };
};

const urlSearch = (name: string) => {
  const results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
};

export {
  formatValue,
  validateCompanyDetailsForm,
  filteredActivities,
  getDateFromTimeStamp,
  getApplicationStatuses,
  call_sort,
  urlSearch,
};
