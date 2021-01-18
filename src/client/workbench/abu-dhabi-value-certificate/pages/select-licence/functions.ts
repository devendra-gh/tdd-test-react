import {
  getPaginatedFilteredLicenceListItems,
  getFilteredBySearchLicences,
  paginateLicenceListItems,
} from '../../sharedFunctions/utils';

import { getSteps } from '../../sharedFunctions/stepUtils';

import { fetchLicenceList } from '../../sharedFunctions/getData';

export async function init(props: any) {
  interface IVariables {
    [name: string]: any;
  }

  props.actions.showSidebar.update(true);
  const steps = getSteps(props.i18n);

  props.actions.steps.update(steps);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(0);
  props.actions.expandedStepIndexes.update([0]);

  let licenceList = await fetchLicenceList(props, props.user.IDN, false);
  licenceList = licenceList
    .map(
      ({
        businessNameEng,
        businessNameAr,
        tradeLicenseNumber,
        ...rest
      }: IVariables) => ({
        ...rest,
        id: tradeLicenseNumber,
        tradeLicenseNumber,
        _id: tradeLicenseNumber,
        businessName: props.locale === 'en' ? businessNameEng : businessNameAr,
      }),
    )
    .reduce(
      (
        { seenLicences, uniqueLicences }: IVariables,
        { tradeLicenseNumber, ...rest }: IVariables,
      ) => {
        let licenceNumbers = seenLicences;
        let uniqueLicenceObjects = uniqueLicences;
        if (seenLicences.indexOf(tradeLicenseNumber) == -1) {
          licenceNumbers = [...seenLicences, tradeLicenseNumber];
          uniqueLicenceObjects = [
            ...uniqueLicenceObjects,
            { tradeLicenseNumber, ...rest },
          ];
        }
        return {
          seenLicences: licenceNumbers,
          uniqueLicences: uniqueLicenceObjects,
        };
      },
      {
        seenLicences: [],
        uniqueLicences: [],
      },
    ).uniqueLicences;

  const searchValue = props.licenceSearchValue;
  const currentPage = props.licenceListCurrentPage;

  const filteredLicenceList = getFilteredBySearchLicences(
    licenceList,
    searchValue,
  );

  const paginatedFilteredLicenceList = paginateLicenceListItems(
    filteredLicenceList,
    currentPage,
  );

  props.actions.fetchingLicencesStatus.update('');
  props.actions.licenceList.update(licenceList);
  props.actions.filteredLicenceList.update(filteredLicenceList);
  props.actions.filteredLicenceListLength.update(filteredLicenceList.length);
  props.actions.paginatedLicenceList.update(paginatedFilteredLicenceList);
}
export function call_f1_onSelectionChange(props: any) {
  return (values: any) => {
    console.log('onselectionChange', values);
    const searchValue = props.licenceSearchValue;
    const currentPage = props.licenceListCurrentPage;
    props.actions.selectedLicencesArr.update(values);
    props.actions.licenceNumber.update(values[0] || '');
    // props.actions.licenceNoError.update(false);

    const updatedItems = props.licenceList.map((item: any) => ({
      ...item,
      selected: item._id === values[0],
    }));

    const paginatedList = getPaginatedFilteredLicenceListItems(
      updatedItems,
      searchValue,
      currentPage,
    );
    props.actions.paginatedLicenceList.update(paginatedList);
    props.actions.isSelectLicenceNextButtonDisabled.update(false);
  };
}
export function call_f2_onSearch(props: any) {
  return (value: string) => {
    props.actions.licenceSearchValue.update(value);
    const { licenceList } = props;
    const filteredLicenceList = getFilteredBySearchLicences(licenceList, value);
    const paginatedFilteredLicences = getPaginatedFilteredLicenceListItems(
      licenceList,
      value,
      1,
    );
    console.log(
      'the provided paginated licence list',
      paginatedFilteredLicences,
    );

    props.actions.filteredLicenceListLength.update(filteredLicenceList.length);
    props.actions.paginatedLicenceList.update(paginatedFilteredLicences);
    props.actions.licenceListCurrentPage.update(1);
  };
}
export async function f3_onPageResize(props: any) {}
export async function f4_onClick(props: any) {}
export function call_f5_onPageTurn(props: any) {
  return (pageNumber: any) => {
    const { licenceList } = props;
    const searchValue = props.licenceSearchValue;
    const paginatedList = getPaginatedFilteredLicenceListItems(
      licenceList,
      searchValue,
      pageNumber,
    );
    console.log('page return list', paginatedList);
    props.actions.paginatedLicenceList.update(paginatedList);
    props.actions.licenceListCurrentPage.update(pageNumber);
  };
}
export function f6_visible(props: any) {
  const isLoading = props.fetchingLicencesStatus === 'loading';
  return !isLoading && props.licenceList.length > 0;
}
export function call_f7_onSelectionChange(props: any) {
  return (value: any) => {
    console.log('onselectionChange', value);
    props.actions.licenceNumber.update(value[0] || '');
    // props.actions.licenceNoError.update(false);

    const updated_items = props.licenceList.map((item: any) => ({
      ...item,
      selected: !!value.find((id: any) => item._id == id),
    }));
    props.actions.licenceList.update(updated_items);
    props.actions.isSelectLicenceNextButtonDisabled.update(false);
  };
}
export function call_f8_onSearch(props: any) {
  return (value: string) => {
    props.actions.licenceSearchValue.update(value);
    const { licenceList } = props;
    const filteredLicences = getFilteredBySearchLicences(licenceList, value);
    console.log('the filtered licence list', filteredLicences);
    props.actions.filteredLicenceList.update(filteredLicences);
  };
}
export async function f9_onPageResize(props: any) {}
export async function f10_onClick(props: any) {}
export async function f11_onPageTurn(props: any) {}
export function f12_visible(props: any) {
  const isLoading = props.fetchingLicencesStatus === 'loading';
  return !isLoading && props.licenceList?.length === 0;
}
export async function f13_onClick(props: any) {
  if (props.licenceNumber) {
    props.history.push('/entity-details');
  }
}
export async function f14_onClick(props: any) {
  props.history.push('/');
}
