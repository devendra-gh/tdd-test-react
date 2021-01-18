import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  const steps = getSteps(props.i18n, 0, 2);
  props.actions.steps.update(steps);
  props.actions.currentSubStepIndex.update(2);

  props.actions.companyDetailsForm.update({
    valueOfRawMaterialsPurchased: 0,
    valueOfRawMaterialsPurchasedFromAbuDhabi: 0,
    valueOfOtherExpensesExcludingManpowerCost: 0,
    totalNumberEmployeesInCompany: 0,
    totalRevenue: 0,
    netBookValueAssetsHeldByCompanyInAbuDhabi: 0,
    netBookValueAssetsHeldByCompany: 0,
    totalSalariesBenefitsExpatEmployees: 0,
    totalSalariesBenefitsEmiratiEmployees: 0,
    totalSalariesEmployeesWithinAbuDhabi: 0,
    valueSubcontractsInAbuDhabi: 0,
    valueSubcontracts: 0,
  });
}
export async function f1_isValidFunc(formValues: any, props: any) {
  return true;
}
export async function f2_isValidFunc(formValues: any, props: any) {
  return true;
}
export async function f3_onAddClick(props: any) {}
export async function f4_isValidFunc(formValues: any, props: any) {
  return true;
}
export async function f5_isValidFunc(formValues: any, props: any) {
  return true;
}
export async function f6_isValidFunc(formValues: any, props: any) {
  return true;
}
export async function f7_btnSubmitClick(props: any, formValues: any) {
  props.history.push('/upload-document');
}
export async function f8_btnSubmitDisabled(props: any, formValues: any) {
  return false;
}
export async function f9_btnBackClick(props: any, formValues: any) {
  props.history.push('/entity-details');
}
export async function f10_btnCancelClick(props: any, formValues: any) {
  props.history.push('/');
}
