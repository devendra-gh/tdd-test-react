import { IVariables } from '@tamm/app-composer';
import { findIndex, includes } from 'lodash';
import { getLicenseType, partnersValidation } from 'client/config/utils/lookup';
import scrollToElement from 'client/config/utils/scrollToElement';
import { isGCC } from 'client/config/utils/gcc';
import { isURL, isEmail } from 'client/config/utils/validations';
import { ownerValidation } from './getRepresentatives';

const validation = (
  formValues: IVariables,
  isEcommerceActivitySelected: false,
  tradeNameCheckStatus: string,
) => {
  let valid = true;
  let scrolled = false;

  const licenceType = getLicenseType(formValues.licenceType, formValues.branch);
  const isBranch = formValues.licenceType === 'branch';

  const branchOf = (branches: string[]) => {
    return isBranch && includes(branches, formValues.branch);
  };

  const isUploaded = (name: string) => {
    const index = findIndex(formValues.documents, (item: IVariables) => {
      return item.fieldName === name;
    });
    return index !== -1;
  };

  // validate branch details
  const getBranchDetails = () => {
    if (isBranch && !formValues.licenseNumber) {
      valid = false;
      if (!scrolled) scrollToElement('branchDetails');
      scrolled = true;
    }
  };
  getBranchDetails();

  // validate branch documents
  const getBranchDocuments = () => {
    if (isBranch) {
      const invalidParentCompanyLicence =
        branchOf(['branchUAE', 'branchFZ', 'branchGCC', 'branchForeign']) &&
        !isUploaded('parentCompanyLicence');

      const invalidParentCompanyMoaDocument = (() => {
        return (
          !isUploaded('parentCompanyMoaDocument') &&
          ((formValues.branch !== 'branchAD' &&
            formValues.branch !== 'branchUAE') ||
            (formValues.branch === 'branchUAE' &&
              formValues.parentCompanyLegalForm !== '1'))
        );
      })();

      const invalidFreezoneNoc =
        branchOf(['branchFZ']) && !isUploaded('freezoneNoc');
      const invalidNoBranchAD =
        branchOf(['branchFZ']) && !isUploaded('noBranchAD');

      if (
        invalidParentCompanyLicence ||
        invalidParentCompanyMoaDocument ||
        invalidFreezoneNoc ||
        invalidNoBranchAD
      ) {
        valid = false;
        if (!scrolled) scrollToElement('branchDocuments');
        scrolled = true;
      }
    }
  };

  getBranchDocuments();

  // validate legal form capital
  const getLegalCapital = () => {
    if (
      !includes(
        ['instant', 'tajer', 'allInOne', 'branch'],
        formValues.licenceType,
      )
    ) {
      valid =
        valid && formValues.paidCapitalApprox && formValues.revenuesSalesApprox;

      if (formValues.legalForm !== 'establishment')
        valid =
          valid &&
          formValues.durationOfTheCompany &&
          formValues.managerAppointmentDuration &&
          formValues.capital;
      if (!valid && !scrolled) {
        scrollToElement('legalForm');
        scrolled = true;
      }
    }
  };
  getLegalCapital();

  const getLicenceTypemubdia = () => {
    if (
      formValues.activities.length === 0 ||
      (formValues.licenceType === 'mubdia' && formValues.activities.length > 1)
    ) {
      valid = false;
      if (!scrolled) scrollToElement('activity');
      scrolled = true;
    }
  };
  getLicenceTypemubdia();

  // Ownership
  const ownerVisible = () => {
    if (branchOf(['branchUAE'])) {
      return includes(['1', '34', '20'], formValues.parentCompanyLegalForm);
    }

    return (
      isBranch ||
      includes(
        ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
        formValues.legalForm,
      )
    );
  };

  const ownerValid = ownerValidation(
    formValues.ownership.owner,
    formValues.legalForm,
    formValues.licenceType,
  );

  if (ownerVisible() && !ownerValid.isValid) {
    valid = false;
    if (!scrolled) scrollToElement('ownership');
    scrolled = true;
  }

  const localAgentRequired = () => {
    if (includes(['branchGCC'], licenceType)) {
      return !formValues.isGCC;
    }
    if (includes(['branchForeign'], licenceType)) {
      return true;
    }

    return (
      formValues.legalForm === 'establishment' &&
      formValues.ownership.owner &&
      formValues.ownership.owner.length > 0 &&
      formValues.ownership.owner[0].nationality &&
      !isGCC(formValues.ownership.owner[0].nationality)
    );
  };

  const checkLocalAgentRequired = () => {
    if (localAgentRequired() && formValues.ownership.localAgent.length === 0) {
      valid = false;
      if (!scrolled) scrollToElement('ownership');
      scrolled = true;
    }
  };
  checkLocalAgentRequired();

  const managerReq =
    !includes(['establishment'], formValues.legalForm) &&
    formValues.ownership.manager.length === 0;

  const checkManagerReq = () => {
    if (managerReq) {
      valid = false;
      if (!scrolled) scrollToElement('ownership');
      scrolled = true;
    }
  };
  checkManagerReq();

  const minPartners = (() => (formValues.legalForm === 'PJSCPublic' ? 5 : 2))();

  const partnersVisible = () => {
    if (branchOf(['branchUAE'])) {
      return !includes(['1', '34', '20'], formValues.parentCompanyLegalForm);
    }

    if (isBranch) {
      return false;
    }

    return !includes(
      ['establishment', 'soleProprietorshipLLC', 'PJSCSoleProp'],
      formValues.legalForm,
    );
  };

  const partnersValid = partnersValidation(
    formValues.ownership.partner,
    minPartners,
    formValues.legalForm,
    formValues.licenceType,
  );

  const checkPartnersVisible = () => {
    if (partnersVisible() && !partnersValid.isValid) {
      valid = false;
      if (!scrolled) scrollToElement('ownership');
      scrolled = true;
    }
  };
  checkPartnersVisible();

  // economic name
  const nameReservationPeriodReq = (() =>
    !includes(['tajer', 'allInOne', 'instant'], formValues.licenceType) &&
    formValues.nameReservationPeriod === '')();
  if (
    !formValues.tradeNameEn ||
    !formValues.tradeNameAr ||
    nameReservationPeriodReq ||
    tradeNameCheckStatus === 'error'
  ) {
    valid = false;
    if (!scrolled) scrollToElement('economicName');
    scrolled = true;
  }

  // contact
  const tawtheeqReq = (() =>
    includes(['allInOne'], licenceType) && formValues.tawtheeqNumber === '')();

  const emailReq = (() =>
    formValues.officialEmail === '' || !isEmail(formValues.officialEmail))();
  const phoneReq = formValues.officialMobile === '';
  const uboReq = (() =>
    includes(['instant'], licenceType) && formValues.ubo === '')();
  const confReq = !formValues.confirmation;

  const checkContact = () => {
    if (tawtheeqReq || emailReq || phoneReq || uboReq || confReq) {
      valid = false;
      if (!scrolled) scrollToElement('contact');
      scrolled = true;
    }
  };
  checkContact();

  const checkEcommerceActivitySelected = () => {
    if (isEcommerceActivitySelected) {
      const socialMediaTypeReq = formValues.socialMediaType === '';
      const socialMediaAccountReq = formValues.socialMediaAccount === '';
      const websiteReq = formValues.website === '';
      if (socialMediaTypeReq || socialMediaAccountReq || websiteReq) {
        valid = false;
        if (!scrolled) scrollToElement('onlineTradingDetails');
        scrolled = true;
      }
    }
  };
  checkEcommerceActivitySelected();

  // online trading details
  const websiteInvalid = (() =>
    formValues.website && !isURL(formValues.website))();

  const checkWebsiteInvalid = () => {
    if (websiteInvalid) {
      valid = false;
      if (!scrolled) scrollToElement('onlineTradingDetails');
      scrolled = true;
    }
  };
  checkWebsiteInvalid();

  // applicant contact
  const agreementReq = !formValues.termsConditions;

  const checkAgreementReq = () => {
    if (agreementReq) {
      valid = false;
      if (!scrolled) scrollToElement('termsConditions');
      scrolled = true;
    }
  };
  checkAgreementReq();

  return valid;
};

export default validation;
