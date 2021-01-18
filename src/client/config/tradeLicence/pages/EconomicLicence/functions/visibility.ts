import { IVariables } from '@tamm/app-composer';
import { includes } from 'lodash';

function getGroupVisibilityDataOne(
  formState: IVariables,
  defaultVisible: any,
  isBranch: any,
  branchOf: any,
) {
  return {
    defaultVisible,
    branchDetails: isBranch,
    legalForm: formState.licenceType !== '' && !isBranch,
    financialDetails:
      defaultVisible && !includes(['instant'], formState.licenceType),
    branchDocuments:
      isBranch &&
      branchOf(['branchUAE', 'branchFZ', 'branchGCC', 'branchForeign']),
    location:
      defaultVisible &&
      !includes(['allInOne', 'mubdia'], formState.licenceType),
    activities: defaultVisible,
  };
}

function getGroupVisibilityDataTwo(
  formState: IVariables,
  defaultVisible: any,
  isEcommerceActivitySelected: any,
) {
  return {
    privilegesFacilities:
      defaultVisible &&
      includes(['instant'], formState.licenceType) &&
      formState.businessLocation !== '',
    ownership: defaultVisible,
    economicName: defaultVisible,
    contact: defaultVisible,
    applicantContact:
      defaultVisible && !includes(['instant'], formState.licenceType),
    onlineTradingDetails:
      defaultVisible &&
      (includes(['instant'], formState.licenceType) ||
        isEcommerceActivitySelected),
    attachments:
      defaultVisible &&
      includes(['tajer', 'allInOne'], formState.licenceType) &&
      formState.activities.length > 0,
    termsConditions: defaultVisible,
  };
}

function groupVisibility(
  formState: IVariables,
  isEcommerceActivitySelected = false,
) {
  const isBranch = formState.licenceType === 'branch';

  const branchOf = (branches: string[]) => {
    return isBranch && includes(branches, formState.branch);
  };

  const defaultVisible =
    formState.licenceType === ''
      ? false
      : !(formState.legalForm === '' && !isBranch);

  return {
    ...getGroupVisibilityDataOne(formState, defaultVisible, isBranch, branchOf),
    ...getGroupVisibilityDataTwo(
      formState,
      defaultVisible,
      isEcommerceActivitySelected,
    ),
  };
}

function getFieldVisibilityDataOne(
  formState: IVariables,
  isBranch: any,
  branchOf: any,
) {
  return {
    parentCompanyLegalForm: branchOf(['branchUAE']),
    emirate: branchOf(['branchUAE']),
    parentCompanyFreeZone: branchOf(['branchFZ']),
    businessNameEn: !branchOf(['', 'branchAD']),
    businessNameAr: !branchOf(['', 'branchAD']),
    sharePercentage: !branchOf(['', 'branchAD']),
    nationality: !branchOf(['', 'branchAD']),
    email: !branchOf(['', 'branchAD']),
    phoneNumber: !branchOf(['', 'branchAD']),
    isGCC: branchOf(['branchGCC']),
    streetName: branchOf(['branchFZ']),
    paidCapitalApprox: formState.legalForm !== '' || isBranch,
  };
}

function getFieldVisibilityDataTwo(formState: IVariables, isBranch: any) {
  return {
    revenuesSalesApprox: formState.legalForm !== '' || isBranch,
    durationOfTheCompany:
      (formState.legalForm !== '' && formState.legalForm !== 'establishment') ||
      isBranch,
    managerAppointmentDuration:
      (formState.legalForm !== '' && formState.legalForm !== 'establishment') ||
      isBranch,
    capital:
      (formState.legalForm !== '' && formState.legalForm !== 'establishment') ||
      isBranch,
    totalNumberOfShares:
      (formState.legalForm !== '' && formState.legalForm !== 'establishment') ||
      isBranch,
  };
}

function getFieldVisibilityDataThree(formState: IVariables, branchOf: any) {
  return {
    parentCompanyLicence: branchOf([
      'branchUAE',
      'branchFZ',
      'branchGCC',
      'branchForeign',
    ]),
    parentCompanyMoaDocument:
      (formState.branch !== 'branchAD' && formState.branch !== 'branchUAE') ||
      (formState.branch === 'branchUAE' &&
        formState.parentCompanyLegalForm !== '1'),
    freezoneNoc: branchOf(['branchFZ']),
    noBranchAD: branchOf(['branchFZ']),
    tawtheeqNumber: includes(['instant', 'allInOne'], formState.licenceType),
    contactPersonPhone: includes(['instant'], formState.licenceType),
    ubo: includes(['instant'], formState.licenceType),
  };
}

function fieldVisibility(formState: IVariables) {
  const isBranch = formState.licenceType === 'branch';

  const branchOf = (branches: string[]) => {
    return isBranch && includes(branches, formState.branch);
  };

  return {
    ...getFieldVisibilityDataOne(formState, isBranch, branchOf),
    ...getFieldVisibilityDataTwo(formState, isBranch),
    ...getFieldVisibilityDataThree(formState, branchOf),
  };
}

export default {
  fieldVisibility,
  groupVisibility,
};
