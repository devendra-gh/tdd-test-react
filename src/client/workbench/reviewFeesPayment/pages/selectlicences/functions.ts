import {
  filteredLicenceList,
  returnCamundaMessage,
} from '../../sharedFunctions/util';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getLicenceList } from '../../sharedFunctions/services';

export async function init(props: any) {
  props.actions.businessKey.update('');
  props.actions.instanceId.update('');
  props.actions.licenceNo.update('');
  props.actions.licenceFilter.update('');
  props.actions.showSideBar.update(true);
  props.actions.camundaMessage.update('');
  props.actions.loading.update(false);
  props.actions.alertFlag.update('');
  props.actions.currentStepIndex.update(0);
  props.actions.expandedStepIndexes.update([]);
  const cStep = { id: 'step_selectLicence', status: '' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);
  //  props.actions.table_row.update('');
  // props.actions.currentIndex.update('');
  // props.actions.totalRecords.update('');
  // props.actions.camundaMessage.update('');
  // props.actions.currentPageSize.update('');
  // props.actions.actualLicenceList.update('');
  //props.actions.table_column.update('');
}
export async function onPageInit(props: any) {
  if (
    props.user &&
    (props.user.Type === 'SOP3' ||
      (props.user.provider === 'uaepass' && props.user.Type === 'SOP2'))
  ) {
    const data = await getLicenceList(props);
    if (data.length === 0) {
      props.history.push('/no-active-licence');
    }
    props.actions.actualLicenceList.update(data);
    props.actions.currentPageSize.update(10);
    const filteredData = filteredLicenceList(
      data,
      props.locale,
      props.licenceFilter || '',
      1,
      props.actions.totalRecords,
      props.licenceNo,
      props.actions.currentPageSize,
    );

    props.actions.table_row.update(filteredData);
    props.actions.currentIndex.update(1);
    props.actions.totalRecords.update(data.length);
    props.actions.camundaMessage.update('');
    const tableHeaders = [
      {
        id: 'licenceNumber',
        title: props.i18n('selectLicence-licenceColumn'),
        sortable: true,
      },
      {
        id: 'companyName',
        title: props.i18n('selectLicence-companyColumn'),
        sortable: true,
      },
    ];
    props.actions.table_column.update(tableHeaders);
  }
}
export function call_f1_onSelectionChange(props: any) {
  return (value: any) => {
    props.actions.licenceNo.update(value[0] || '');
    props.actions.alertFlag.update(false);
    const updatedItems = props.table_row.map((item: any) => ({
      ...item,
      selected: !!value.find((id: any) => item._id == id),
    }));
    props.actions.table_row.update(updatedItems);
  };
}
export function call_f2_onSearch(props: any) {
  return (value: string) => {
    props.actions.licenceFilter.update(value);
    const pagedItems = filteredLicenceList(
      props.actualLicenceList,
      props.locale,
      value,
      1,
      props.actions.totalRecords,
      props.licenceNo,
      props.actions.currentPageSize,
    );
    props.actions.table_row.update(pagedItems);
    props.actions.currentIndex.update(1);
    // props.actions.licenceNo.update('');
  };
}
export function call_f3_onPageTurn(props: any) {
  return (pageNumber: any) => {
    props.actions.table_row.reset();
    const pagedItems = filteredLicenceList(
      props.actualLicenceList,
      props.locale,
      props.licenceFilter,
      pageNumber,
      props.actions.totalRecords,
      props.licenceNo,
      props.actions.currentPageSize,
    );
    props.actions.table_row.update(pagedItems);
    props.actions.currentIndex.update(pageNumber);
    // props.actions.totalLicenceList.update(data.length);
    props.actions.licenceNo.update('');
  };
}
export function f4_visible(props: any) {
  return !!props.alertFlag;
}
export function f5_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f6_onClick(props: any) {
  props.actions.alertFlag.update(false);
  if (props.licenceNo) {
    // const data = await props.bpm.startProcess({
    //   informationFound: 'yes',
    //   successSubmission: 'yes',
    //   paymentSuccess: 'yes',
    //   successPayment: 'yes',
    // });
    // if (data.success && data.data && data.data.businessKey && data.data.id) {
    //   props.actions.instanceId.update(data.data.id);
    //   props.actions.businessKey.update(data.data.businessKey);
    // }
    // returnCamundaMessage(data, props);
    props.actions.licenceFilter.update('');
    props.actions.currentPageSize.update(10);
    props.history.push('/application-submit');
  } else {
    props.actions.alertFlag.update(true);
  }
}
export async function f7_onClick(props: any) {
  props.history.push('/');
}
