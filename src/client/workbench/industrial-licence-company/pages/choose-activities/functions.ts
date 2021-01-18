

import {getDivisions, getGroups, getClasses, getBranches, getCategories} from '../../sharedFunctions/constants';

import {getActivities} from '../../sharedFunctions/services';

import {filteredActivities} from '../../sharedFunctions/utils';

import {crumsList} from '../../sharedFunctions/breadCrumLinks';

import {stepsLists} from '../../sharedFunctions/serviceSteps';

import {getSteps} from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
    const { locale, i18n } = props;
  const breadCrums = crumsList(props);
  props.actions.breadCrumItems.update(breadCrums);
  // props.fetch();
  //table
  props.actions.loading.update(false);
  props.actions.tableSearch.update(''); //clear table search before fetch
  props.actions.basket.update([]); //clear basket before fetch
  props.actions.selectedActivities.update([]); //clear selected checked before fetch
  props.actions.activitiesCommonSelection.update('unchecked');

  const categories = getCategories();
  props.actions.categories.update(categories);
  const classes = getClasses('All');
  props.actions.classes.update(classes);
  const divisions = getDivisions('All');
  props.actions.divisions.update(divisions);
  const groups = getGroups('All');
  props.actions.groups.update(groups);
  const branches = getBranches('All');
  props.actions.branches.update(branches);

  const activities = await getActivities(props, []);
  props.actions.tableAllActivities.update(activities);
  props.actions.tablePageResizeOptions.update([10, 20, 50]);
  props.actions.tableCurrPage.update(1);
  props.actions.tableTotalRecords.update(activities.length);
  const filtered = filteredActivities(activities, props.locale);
  props.actions.tableActivities.update(filtered.activities);
  props.actions.currency.update(props.locale === 'ar' ? 'درهم' : 'AED');

  props.actions.tableColumns.update([
    {
      id: 'name',
      title: i18n('activity-table-column-name'),
      sortable: true,
      sort: `callShared('utils.call_sort')`,
    },
    {
      id: 'price',
      title: i18n('price'),
      sortable: true,
      sort: `callShared('utils.call_sort')`,
      align: 'end',
    },
  ]);
  //sidebar process
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(2);
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'fill_application', status: '' };
  const cSubStep = { id: 'choose_activities', status: '' };
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export async function f1_onBlur(props: any) {
}
export  function call_f2_onChange(props: any) {
	  return async (value: string) => {
    props.actions.categoryValue.update(value);
    if (value) {
      const categoryFilter = [
        {
          field: `IDB ACTIVITY CATEGORY ${props.locale.toUpperCase()}`,
          value: props.i18n(value),
        },
      ];
      props.actions.getActivitiesReqFilter.update(categoryFilter);

      const divisions = getDivisions(value);
      props.actions.divisions.update(divisions);

      props.actions.groupDisabled.update(true);
      props.actions.classDisabled.update(true);
      props.actions.branchDisabled.update(true);
      props.actions.divisionValue.update('All');
      props.actions.groupValue.update('All');
      props.actions.classValue.update('All');
      props.actions.branchValue.update('All');
      props.actions.tableActivities.update([]);
      props.actions.tableAllActivities.update([]);
      props.actions.tableTotalRecords.update(0);
      //props.fetch();
      props.actions.tableActivitiesStatus.update('loading');
      const activities = await getActivities(props, categoryFilter);
      activities && activities.length > 0
        ? props.actions.tableActivitiesStatus.update(null)
        : props.actions.tableActivitiesStatus.update('');
      props.actions.tableAllActivities.update(activities);
      props.actions.tableCurrPage.update(1);
      props.actions.tableTotalRecords.update(activities.length);
      const filtered = filteredActivities(activities, props.locale);
      props.actions.tableActivities.update(filtered.activities);
      props.actions.divisionDisabled.update(false);
    }
  };
}
export async function f3_onSearch(props: any) {
}
export  function call_f4_onChange(props: any) {
	  return async (value: string) => {
    props.actions.divisionValue.update(value);
    if (value) {
      let categoryFilter = [...props.getActivitiesReqFilter];
      categoryFilter[1] = {
        field: `IDB ACTIVITY DIVISION ${props.locale.toUpperCase()}`,
        value: props.i18n(value),
      };
      props.actions.getActivitiesReqFilter.update(categoryFilter);

      const groups = getGroups(value);
      props.actions.groups.update(groups);

      props.actions.groupDisabled.update(true);
      props.actions.classDisabled.update(true);
      props.actions.branchDisabled.update(true);
      props.actions.groupValue.update('All');
      props.actions.classValue.update('All');
      props.actions.branchValue.update('All');
      props.actions.tableActivities.update([]);
      props.actions.tableAllActivities.update([]);
      props.actions.tableTotalRecords.update(0);
      //props.fetch();
      props.actions.tableActivitiesStatus.update('loading');
      const activities = await getActivities(props, categoryFilter);
      activities && activities.length > 0
        ? props.actions.tableActivitiesStatus.update(null)
        : props.actions.tableActivitiesStatus.update('');
      props.actions.tableAllActivities.update(activities);
      props.actions.tableCurrPage.update(1);
      props.actions.tableTotalRecords.update(activities.length);
      const filtered = filteredActivities(activities, props.locale);
      props.actions.tableActivities.update(filtered.activities);
      props.actions.groupDisabled.update(false);
    }
  };
}
export async function f5_onOpenChange(props: any) {
}
export  function call_f6_onChange(props: any) {
	  return async (value: string) => {
    props.actions.groupValue.update(value);
    if (value) {
      let categoryFilter = [...props.getActivitiesReqFilter];
      categoryFilter[2] = {
        field: `IDB ACTIVITY GROUP ${props.locale.toUpperCase()}`,
        value: props.i18n(value),
      };
      props.actions.getActivitiesReqFilter.update(categoryFilter);

      const classes = getClasses(value);
      props.actions.classes.update(classes);

      props.actions.branchDisabled.update(true);
      props.actions.classValue.update('All');
      props.actions.branchValue.update('All');
      props.actions.tableActivities.update([]);
      props.actions.tableAllActivities.update([]);
      props.actions.tableTotalRecords.update(0);
      //props.fetch();
      props.actions.tableActivitiesStatus.update('loading');
      const activities = await getActivities(props, categoryFilter);
      activities && activities.length > 0
        ? props.actions.tableActivitiesStatus.update(null)
        : props.actions.tableActivitiesStatus.update('');
      props.actions.tableAllActivities.update(activities);
      props.actions.tableCurrPage.update(1);
      props.actions.tableTotalRecords.update(activities.length);
      const filtered = filteredActivities(activities, props.locale);
      props.actions.tableActivities.update(filtered.activities);
      props.actions.classDisabled.update(false);
    }
  };
}
export  function call_f7_onChange(props: any) {
	  return async (value: string) => {
    props.actions.classValue.update(value);
    if (value) {
      let categoryFilter = [...props.getActivitiesReqFilter];
      categoryFilter[3] = {
        field: `IDB ACTIVITY CLASS ${props.locale.toUpperCase()}`,
        value: props.i18n(value),
      };
      props.actions.getActivitiesReqFilter.update(categoryFilter);

      const branches = getBranches(value);
      props.actions.branches.update(branches);

      props.actions.branchValue.update('All');
      props.actions.tableActivities.update([]);
      props.actions.tableAllActivities.update([]);
      props.actions.tableTotalRecords.update(0);
      //props.fetch();
      props.actions.tableActivitiesStatus.update('loading');
      const activities = await getActivities(props, categoryFilter);
      activities && activities.length > 0
        ? props.actions.tableActivitiesStatus.update(null)
        : props.actions.tableActivitiesStatus.update('');
      props.actions.tableAllActivities.update(activities);
      props.actions.tableCurrPage.update(1);
      props.actions.tableTotalRecords.update(activities.length);
      const filtered = filteredActivities(activities, props.locale);
      props.actions.tableActivities.update(filtered.activities);
      props.actions.branchDisabled.update(false);
    }
  };
}
export  function call_f8_onChange(props: any) {
	  return async (value: string) => {
    props.actions.branchValue.update(value);
    if (value) {
      let categoryFilter = [...props.getActivitiesReqFilter];
      categoryFilter[4] = {
        field: `IDB ACTIVITY BRANCH ${props.locale.toUpperCase()}`,
        value: props.i18n(value),
      };
      props.actions.getActivitiesReqFilter.update(categoryFilter);
      if (value) {
        props.actions.tableActivities.update([]);
        props.actions.tableAllActivities.update([]);
        props.actions.tableTotalRecords.update(0);
        //props.fetch();
        props.actions.tableActivitiesStatus.update('loading');
        const activities = await getActivities(props, categoryFilter);
        activities && activities.length > 0
          ? props.actions.tableActivitiesStatus.update(null)
          : props.actions.tableActivitiesStatus.update('');
        props.actions.tableAllActivities.update(activities);
        props.actions.tableCurrPage.update(1);
        props.actions.tableTotalRecords.update(activities.length);
        const filtered = filteredActivities(activities, props.locale);
        props.actions.tableActivities.update(filtered.activities);
      }
    }
  };
}
export  function call_f9_onSelectionChange(props: any) {
	  const isSelected = (tableItems: any[], item: any) => {
    const foundItemFromItems = tableItems.find(
      (obj: any) => item._id == obj._id
    );
    if (foundItemFromItems) {
      return foundItemFromItems.selected;
    }
    return item.selected;
  };

  return (checkedIdArray: any) => {
    props.actions.selectedActivities.update(checkedIdArray);
    const updatedActivities = props.tableActivities.map((item: any) => ({
      ...item,
      selected: !!checkedIdArray.find((id: any) => item._id == id),
    }));
    props.actions.tableActivities.update(updatedActivities);

    const updatedAllActivities = props.tableAllActivities.map(
      (item: any) => ({
        ...item,
        selected: isSelected(updatedActivities, item),
      })
    );
    props.actions.tableAllActivities.update(updatedAllActivities);

    const updatedBasket = updatedAllActivities
      .filter((item: any) => item.selected)
      .map((obj: any) => ({
        activity: obj.name,
        price: Number(obj.dedFee).toFixed(2),
        id: obj._id,
        quantity: 1,
        isChecked: true,
        activityNameAr: obj.activityNameAr,
        activityNameEn: obj.activityNameEn,
        dedFee: Number(obj.dedFee).toFixed(2),
      }));
    props.actions.basket.update(updatedBasket);
    if (updatedBasket.length > 0) {
      props.actions.chooseActivitiesBtnDisabled.update(false);
    } else {
      props.actions.chooseActivitiesBtnDisabled.update(true);
    }

    if (
      checkedIdArray.length > 0 &&
      props.tableActivities.length === checkedIdArray.length
    ) {
      props.actions.activitiesCommonSelection.update('checked');
    } else {
      props.actions.activitiesCommonSelection.update('unchecked');
    }
  };
}
export  function call_f10_onSearch(props: any) {
	  return (searchStr: string) => {
    props.actions.tableSearch.update(searchStr);
    const filtered = filteredActivities(
      props.tableAllActivities,
      props.locale,
      searchStr,
      1,
      props.tablePageSize
    );

    props.actions.tableActivities.update(filtered.activities);
    props.actions.tableTotalRecords.update(filtered.totalItems);
    props.actions.tableCurrPage.update(1);
    const selectedActivities = filtered.activities
      .filter((item: any) => item.selected)
      .map((obj: any) => obj._id);
    props.actions.selectedActivities.update(selectedActivities);

    filtered.activities.length > 0
      ? props.actions.tableActivitiesStatus.update(null)
      : props.actions.tableActivitiesStatus.update('');

    if (
      selectedActivities.length > 0 &&
      filtered.activities.length === selectedActivities.length
    ) {
      props.actions.activitiesCommonSelection.update('checked');
    } else {
      props.actions.activitiesCommonSelection.update('unchecked');
    }
  };
}
export  function call_f11_onPageTurn(props: any) {
	  return (pageNumber: any) => {
    const filtered = filteredActivities(
      props.tableAllActivities,
      props.locale,
      props.tableSearch,
      pageNumber,
      props.tablePageSize
    );
    props.actions.tableActivities.update(filtered.activities);
    props.actions.tableCurrPage.update(pageNumber);
    const selectedActivities = filtered.activities
      .filter((item: any) => item.selected)
      .map((obj: any) => obj._id);
    props.actions.selectedActivities.update(selectedActivities);

    if (
      selectedActivities.length > 0 &&
      filtered.activities.length === selectedActivities.length
    ) {
      props.actions.activitiesCommonSelection.update('checked');
    } else {
      props.actions.activitiesCommonSelection.update('unchecked');
    }
  };
}
export  function call_f12_onPageResize(props: any) {
	  return (pageSize: number) => {
    props.actions.tablePageSize.update(pageSize);
    const filtered = filteredActivities(
      props.tableAllActivities,
      props.locale,
      props.tableSearch,
      1,
      pageSize
    );
    props.actions.tableCurrPage.update(1);
    props.actions.tableActivities.update(filtered.activities);
    const selectedActivities = filtered.activities
      .filter((item: any) => item.selected)
      .map((obj: any) => obj._id);
    props.actions.selectedActivities.update(selectedActivities);

    if (
      selectedActivities.length > 0 &&
      filtered.activities.length === selectedActivities.length
    ) {
      props.actions.activitiesCommonSelection.update('checked');
    } else {
      props.actions.activitiesCommonSelection.update('unchecked');
    }
  };
}
export async function f13_onChange(props: any) {
}
export async function f14_onSubmit(props: any) {
	props.history.push('/upload-document');
}
export  function call_f15_onRemove(props: any) {
	  return (deleteId: string) => {
    const updatedActivities = props.tableActivities.map((item: any) => ({
      ...item,
      selected: item._id == deleteId ? false : item.selected,
    }));
    // console.log(updated_items, 'updated items');
    props.actions.tableActivities.update(updatedActivities);

    const updatedAllActivities = props.tableAllActivities.map((item: any) => ({
      ...item,
      selected: item._id == deleteId ? false : item.selected,
    }));
    // console.log(updated_items, 'updated all items');
    props.actions.tableAllActivities.update(updatedAllActivities);

    const updatedBasket = props.basket.filter(
      (item : any) => item.id != deleteId
    );
    // console.log('updated basket', updatedBasket);
    props.actions.basket.update(updatedBasket);
    if (updatedBasket.length > 0) {
      props.actions.chooseActivitiesBtnDisabled.update(false);
    } else {
      props.actions.chooseActivitiesBtnDisabled.update(true);
    }
  };
}
export async function f16_onClick(props: any) {
	 props.actions.isModalOpen.update(true);
}
export async function f17_btnBackClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onBackToCompanyDetails',
    variables: {},
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f18_btnSubmitClick(props: any, formValues: any) {
	  //props.fetch();
  const { fetch, bpm } = props;
  let activityCodes: any[] = [];
  props.basket.map((item: any) => {
    activityCodes.push({ ActivityCode: item.id });
  });
  props.actions.loading.update(true);
  const res = await props.bpm.sendMessage({
    businessKey: props.businessKey,
    messageName: 'onNextToUploadDocument',
    variables: {
      selectedActivities: JSON.stringify(props.basket),
      activityCodes: JSON.stringify(activityCodes),
    },
  });
  if (!res.success || !res.data || !res.data.success) {
    props.actions.loading.update(false);
  }
}
export async function f19_btnCancelClick(props: any, formValues: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(true);
}
export async function f20_btnSubmitDisabled(props: any, formValues: any) {
	  return props.basket.length == 0;
}
export async function f21_primaryButton_onClick(props: any) {
	props.actions.isModalOpen.update(false);
}
export async function f22_onClose(props: any) {
	props.actions.isModalOpen.update(false);
}
export async function f23_primaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
  props.actions.resetState();
  const protocol = location.protocol;
  const lang = props.locale === 'ar' ? 'ar-AE' : 'en';
  const slashes = protocol.concat('//');
  const host = slashes.concat(window.location.hostname);
  window.location.href = `${host}/${lang}/aspects-of-life/Start-and-Manage-a-Business/Register-your-Business/IndustrialLicences/RequestforIssuingEconomicLicenceIndustrialLeaderCompany?recache=true`;
}
export async function f24_secondaryButton_onClick(props: any) {
	  // props.actions();
  props.actions.isCancelModalOpen.update(false);
}
export async function f25_onClose(props: any) {
	  props.actions.isCancelModalOpen.update(false);
}
