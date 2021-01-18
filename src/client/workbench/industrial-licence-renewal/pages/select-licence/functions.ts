import {
  filteredLicenceList,
  setNotificationTableMessage,
} from '../../sharedFunctions/utils';

import { licenseDetails, listLicenses } from '../../sharedFunctions/services';

import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  // props.history.push()
  // props.notificationTableStatus
  // props.actions.notificationTableStatus
  // props.notificationTableItem
  // props.actions.notificationTableItem
  // props.actions.notificationTableStatus.update('');
  // props.actions.notificationTableItem.update([{_id:'1',message:'not working'}])
  props.actions.disabled_eligible.update(true);
  setNotificationTableMessage(
    props,
    props.i18n('SelectLicence_RenewalCheckEligibilityDesc'),
    'none',
  );
  // add i18n for the table header
  let tableColoum: any[] = [];
  props.licenceListColumns.map((item: any) => {
    tableColoum = [...tableColoum, { ...item, title: props.i18n(item.title) }];
  });
  props.actions.licenceListColumns.update(tableColoum);
  // steps functions
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(0);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'Global_FillApplicationStep', status: '' };
  const cSubStep = { id: 'Global_SelectLicenceStep', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
  //props.fetch
  const { fetch, bpm } = props;
  //upadate table details
  const response = await listLicenses(props);
  console.log('response for licences', response);
  if (response?.length > 0) {
    // remove the licence number without IN
    const licenses = response.filter((item: any) => {
      return item.tradeLicenseNumber.slice(0, 2) === 'IN';
    });
    props.actions.actualLicenceList.update(licenses);
    // updating
    props.actions.tablePageSize.update(10);
    const filteredData = filteredLicenceList(
      licenses,
      props.locale,
      props.licenceSearch || '',
      1,
      props.actions.tableTotalRecords,
      props.licenceNumber, // licence number is the search item
      props.actions.tablePageSize,
    );
    props.actions.licenceListRows.update(filteredData);
    props.actions.tableCurrPage.update(1);
    props.actions.tableTotalRecords.update(licenses.length);
  } else {
    // disable the my licence header
    console.log('current table colum', props.licenceListColumns);
    console.log('current table items', props.licenceListRows);
    props.actions.myLicenceHeaderHidden.update(true);
    props.actions.myLicenceSearchable.update(false);
    props.actions.myLicenceSelectable.update(false);
    props.actions.licenceListColumns.update([
      { id: 'errorMsg', title: 'errorMsg' },
    ]);
    props.actions.licenceListRows.update([
      { _id: '1', errorMsg: props.i18n('SelectLicence_NoLicences') },
    ]);
  }
}
export function call_f1_onSelectionChange(props: any) {
  return (value: any) => {
    console.log('onselectionChange', value);
    props.actions.licenceNumber.update(value[0] || '');
    props.actions.disabled_eligibility.update(false);
    props.actions.disabled_eligible.update(true);
    // props.actions.licenceNoError.update(false);

    const updated_items = props.licenceListRows.map((item: any) => ({
      ...item,
      selected: !!value.find((id: any) => item._id == id),
    }));
    props.actions.licenceListRows.update(updated_items);
    props.actions.myLicenceSelectedItems.update(value);
  };
}
export function call_f2_onSearch(props: any) {
  return (value: string) => {
    props.actions.licenceSearch.update(value);
    const pagedItems = filteredLicenceList(
      props.actualLicenceList,
      props.locale,
      value,
      1,
      props.actions.tableTotalRecords,
      props.licenceNumber,
      props.actions.tablePageSize,
    );
    props.actions.licenceListRows.update(pagedItems);
    props.actions.tableCurrPage.update(1);
    // props.actions.licenceNo.update('');
  };
}
export async function f3_onPageResize(props: any) {}
export async function f4_onClick(props: any) {}
export function call_f5_onPageTurn(props: any) {
  return (pageNumber: any) => {
    console.log('pageNumber', pageNumber);
    const pagedItems = filteredLicenceList(
      props.actualLicenceList,
      props.locale,
      props.licenceSearch,
      pageNumber,
      props.actions.tableTotalRecords,
      props.licenceNumber,
      props.actions.tablePageSize,
    );
    console.log('pagedItems', pagedItems);
    props.actions.licenceListRows.update(pagedItems);
    props.actions.tableCurrPage.update(pageNumber);
    // props.actions.totalLicenceList.update(data.length);
    props.actions.licenceNumber.update('');
  };
}
export function call_f6_onClick(props: any) {
  // props.fetch();
  return async (e: any) => {
    //props.actions.notificationTableItem
    //props.actions.notificationTableStatus

    // props.actions.loading.update(true);
    setNotificationTableMessage(props, '', 'loading');
    const licenseNumber = props.licenceNumber;
    const details = await licenseDetails(licenseNumber, props);
    const expiryDate = new Date(details.expiryDate);
    const now = new Date();
    const diffTime = expiryDate.valueOf() - now.valueOf();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(Number(diffDays), 'Number(diffDays)');
    let eligible = Number(diffDays) <= 60;
    props.actions.eligible.update(eligible);
    props.actions.disabled_eligible.update(!eligible);
    setNotificationTableMessage(
      props,
      eligible
        ? props.i18n('SelectLicence_RenewalEligibilityDesc', { days: diffDays })
        : props.i18n('SelectLicence_RenewalNotEligibilityDesc'),
      'none',
    );
    // props.actions.loading.update(false);
  };
}
export async function f7_onClick(props: any) {
  props.history.push('/enter-company-details');
}
export async function f8_onClick(props: any) {
  window.location.href = `${window.location.origin}/${
    props.locale === 'en' ? 'en' : 'ar-AE'
  }/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforRenewalofEconomicLicenceIndustrialLicence?recache=true`;
}
