import {
  filteredLicenceList,
  returnCamundaMessage,
} from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { getLicenceList } from '../../sharedFunctions/services';

export async function init(props: any) {
  props.actions.showSideBar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.loading.update(false);
  props.actions.businessKey.update('');
  props.actions.licenceSearch.update('');
  props.actions.instanceId.update('');
  props.actions.camundaMessage.update('');
  props.actions.licenceNoError.update('');
  props.actions.licenceNumber.update('');
  props.actions.expandedStepIndexes.update([]);
  const cStep = { id: 'step_selectLicence', status: '' };
  const cSubStep = { id: '', status: '' };
  const steps = getSteps(props.i18n, cStep, cSubStep);
  props.actions.steps.update(steps);

  // props.actions.actualLicenceList.update('');
  // props.actions.currentPageSize.update('');
  // props.actions.licenceListRows.update('');
  // props.actions.currentIndexLicenceList.update('');
  // props.actions.totalLicenceList.update('');
  // props.actions.licenceListColumns.update('');
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
      props.licenceSearch || '',
      1,
      props.actions.totalLicenceList,
      props.licenceNumber,
      props.actions.currentPageSize,
    );
    props.actions.licenceListRows.update(filteredData);
    props.actions.currentIndexLicenceList.update(1);
    props.actions.totalLicenceList.update(data.length);
    props.actions.camundaMessage.update('');
    const tableHeaders = [
      {
        id: 'licenceNumber',
        title: props.i18n('selectLicenceLicenceColumn'),
        sortable: true,
      },
      {
        id: 'companyName',
        title: props.i18n('selectLicenceCompanyColumn'),
        sortable: true,
      },
    ];
    props.actions.licenceListColumns.update(tableHeaders);
  }
}
export function call_f1_onSelectionChange(props: any) {
  return (value: any) => {
    props.actions.licenceNumber.update(value[0] || '');
    props.actions.licenceNoError.update(false);

    const updated_items = props.licenceListRows.map((item: any) => ({
      ...item,
      selected: !!value.find((id: any) => item._id == id),
    }));
    props.actions.licenceListRows.update(updated_items);
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
      props.actions.totalLicenceList,
      props.licenceNumber,
      props.actions.currentPageSize,
    );
    props.actions.licenceListRows.update(pagedItems);
    props.actions.currentIndexLicenceList.update(1);
    // props.actions.licenceNo.update('');
  };
}
export async function f3_onPageResize(props: any) {}
export async function f4_onClick(props: any) {}
export function call_f5_onPageTurn(props: any) {
  return (pageNumber: any) => {
    const pagedItems = filteredLicenceList(
      props.actualLicenceList,
      props.locale,
      props.licenceSearch,
      pageNumber,
      props.actions.totalLicenceList,
      props.licenceNumber,
      props.actions.currentPageSize,
    );
    props.actions.licenceListRows.update(pagedItems);
    props.actions.currentIndexLicenceList.update(pageNumber);
    // props.actions.totalLicenceList.update(data.length);
    props.actions.licenceNumber.update('');
  };
}
export function f6_visible(props: any) {
  return !!props.licenceNoError && !props.licenceNumber;
}
export function f7_visible(props: any) {
  return props.camundaMessage ? true : false;
}
export async function f8_onClick(props: any) {
  props.actions.licenceNoError.update(false);
  // props.actions.pageLoader.update(true);
  if (props.licenceNumber) {
    // const data = await props.bpm.startProcess({
    //   informationFound: 'yes',
    //   successSubmission: 'yes',
    //   successPayment: 'yes',
    // });
    // if (data.success && data.data && data.data.businessKey && data.data.id) {
    //   props.actions.instanceId.update(data.data.id);
    //   props.actions.businessKey.update(data.data.businessKey);
    // }
    // props.actions.pageLoader.update(false);
    // returnCamundaMessage(data, props);
    props.actions.licenceSearch.update('');
    props.actions.currentPageSize.update(10);
    props.history.push('/application-submit');
  } else {
    // props.actions.pageLoader.update(false);
    props.actions.licenceNoError.update(true);
  }
}
export async function f9_onClick(props: any) {
  props.history.push('/');
}
