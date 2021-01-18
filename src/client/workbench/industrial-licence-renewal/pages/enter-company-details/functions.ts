import {
  validateTawtheeqNumber,
  onSubmitValidate,
} from '../../sharedFunctions/validation';

import { tawtheeqDetails } from '../../sharedFunctions/services';

import { stepsLists } from '../../sharedFunctions/serviceSteps';

import { getSteps } from '../../sharedFunctions/stepUtils';

export async function init(props: any) {
  // add null value to props so it can be accessable in other functions
  props.actions.tawtheeqNumberValidateStatus.update(null);
  props.actions.contactInfoEmailAddressValidateStatus.update(null);
  props.actions.contactInfoPhNoValidateStatus.update(null);
  props.actions.contactInfoNameValidateStatus.update(null);
  props.actions.contactInfoEmailAddressHelp.update('');
  props.actions.contactInfoPhNoHelp.update('');
  props.actions.contactInfoNameHelp.update('');
  props.actions.tawtheeqNumberHelp.update('');
  props.actions.leaseAgreementDateHelp.update('');
  props.actions.leaseAgreementNumberHelp.update('');
  props.actions.leaseAgreementAmountHelp.update('');
  props.actions.leaseAgreementDateValidateStatus.update('');
  props.actions.leaseAgreementNumberValidateStatus.update('');
  props.actions.leaseAgreementAmountValidateStatus.update('');
  props.actions.latitudeHelp.update('');
  props.actions.latitudeValidateStatus.update('');
  props.actions.longitudeValidateStatus.update('');
  // props.tawtheeqNumber
  // props.tawtheeqNumberValidateStatus
  // props.leaseAgreementDate
  // props.leaseAgreementNumber
  // props.leaseAgreementAmount
  // props.latitude
  // props.longitude
  // props.contactInfoName
  // props.contactInfoPhNo
  // props.contactInfoEmailAddress
  // props.companyDetailsType
  // props.contactInfoNameHelp
  // props.contactInfoNameValidateStatus
  // props.actions.contactInfoNameValidateStatus
  // props.contactInfoPhNoHelp
  // props.contactInfoPhNoValidateStatus
  // props.actions.contactInfoPhNoValidateStatus
  // props.contactInfoEmailAddressHelp
  // props.contactInfoEmailAddressValidateStatus

  // setup the radio group
  const defaultCompanyType = '0';
  let radioList: any[] = [];
  props.typesOfCompanyDetails.map((item: any) => {
    radioList = [
      ...radioList,
      {
        ...item,
        label: props.i18n(item.label),
        checked: item.id === defaultCompanyType,
      },
    ];
  });
  props.actions.typesOfCompanyDetails.update(radioList);
  props.actions.companyDetailsType.update(defaultCompanyType); // default value for thec checkbox
  // steps functions
  props.actions.showSidebar.update(true);
  props.actions.currentStepIndex.update(0);
  props.actions.currentSubStepIndex.update(1);
  // which substep to open up
  props.actions.expandedStepIndexes.update([0]);
  const cStep = { id: 'Global_FillApplicationStep', status: '' };
  const cSubStep = { id: 'Global_EnterCompanyDetailsStep', status: '' };
  // the steps of the current service
  const stepsList = stepsLists();
  const steps = getSteps(props.i18n, cStep, cSubStep, stepsList);
  props.actions.steps.update(steps);
}
export function call_f1_onChange(props: any) {
  return (event: any) => {
    const { id } = event.target;
    if (id) {
      props.actions.companyDetailsType.update(id);
      let radioList: any[] = [];
      props.typesOfCompanyDetails.map((item: any) => {
        radioList = [
          ...radioList,
          {
            ...item,
            checked: item.id === id,
          },
        ];
      });
      props.actions.typesOfCompanyDetails.update(radioList);
    }
  };
}
export function f2_visible(props: any) {
  console.log('state value', props.companyDetailsType);
}
export function call_f3_onChange(props: any) {
  return (value: string = '') => {
    const finalValue = value && value.trim();
    props.actions.tawtheeqNumber.update(finalValue);
    props.actions.tawtheeqNumberIsValid.update(false);
    if (finalValue.length > 0)
      props.actions.checkTawtheeqNumberdisabled.update(false);
    if (finalValue.length == 0) {
      props.actions.tawtheeqNumberValidateStatus.update(null);
      props.actions.tawtheeqNumberHelp.update('');
      props.actions.checkTawtheeqNumberdisabled.update(true);
    }
  };
}
export function f4_visible(props: any) {
  return props.companyDetailsType === '0';
}
export function call_f5_onClick(props: any) {
  // props.fetch();
  return async (value: string) => {
    props.actions.loading.update(true);
    const tawtheeqNumber = props.tawtheeqNumber;
    if (tawtheeqNumber) {
      const validateStatus = validateTawtheeqNumber(tawtheeqNumber);
      // update status
      props.actions.tawtheeqNumberHelp.update(
        validateStatus ? '' : props.i18n('CompanyDetails_InvalidTawtheeq'),
      );
      if (validateStatus) {
        const details = await tawtheeqDetails(tawtheeqNumber, props);
        if (Object.keys(details).length > 0) {
          props.actions.tawtheeqNumberIsValid.update(true);
          props.actions.leaseAgreementAmount.update(
            details.rentAndPaymentsDetails.rentalValue,
          );
          props.actions.leaseAgreementNumber.update(
            details.contractDetails.contractNo,
          );
          props.actions.leaseAgreementDate.update([
            details.rentAndPaymentsDetails.contractStartDate,
            details.rentAndPaymentsDetails.contractExpiryDate,
          ]);
          props.actions.tawtheeqNumberValidateStatus.update('success');
          props.actions.loading.update(false);
        } else {
          props.actions.tawtheeqNumberIsValid.update(false);
          props.actions.tawtheeqNumberValidateStatus.update('error');
          props.actions.tawtheeqNumberHelp.update(
            props.i18n('CompanyDetails_InvalidTawtheeq'),
          );
          props.actions.loading.update(false);
        }
      }
    }
  };
}
export function f6_visible(props: any) {
  return props.companyDetailsType === '0';
}
export function f7_visible(props: any) {
  console.log('state value', props.companyDetailsType);
}
export function call_f8_onChange(props: any) {
  return (value: string = '') => {
    props.actions.leaseAgreementNumber.update(value);
  };
}
export function f9_visible(props: any) {
  return props.companyDetailsType === '1';
}
export function call_f10_onChange(props: any) {
  return (value: string = '') => {
    props.actions.leaseAgreementAmount.update(value);
  };
}
export function f11_visible(props: any) {
  return props.companyDetailsType === '1';
}
export function f12_visible(props: any) {
  return props.companyDetailsType === '1';
}
export function call_f13_onChange(props: any) {
  return (value: any) => {
    props.actions.leaseAgreementDate.update(value);
    props.actions.leaseAgreementDateHelp.update('');
    props.actions.leaseAgreementDateValidateStatus.update(null);
  };
}
export function f14_visible(props: any) {
  return true;
}
export function f15_visible(props: any) {
  return true;
}
export function call_f16_onMapClick(props: any) {
  return (event: any) => {
    const {
      mapPoint: { latitude, longitude },
    } = event;
    // props.actions.locationDetails.update(details);
    props.actions.latitude.update(latitude);
    props.actions.longitude.update(longitude);
  };
}
export function f17_visible(props: any) {
  const isInvalid =
    props.longitudeValidateStatus === 'error' ||
    props.latitudeValidateStatus === 'error';
  return isInvalid;
}
export function call_f18_onChange(props: any) {
  // props.fetch();
  return (value: any) => {
    const { locale } = props;
    props.actions.checkedTakeContactInfo.update(value.target.checked);
    props.actions.contactInfoNameValidateStatus.update(null);
    props.actions.contactInfoPhNoValidateStatus.update(null);
    props.actions.contactInfoEmailAddressValidateStatus.update(null);
    props.actions.contactInfoNameHelp.update('');
    props.actions.contactInfoPhNoHelp.update('');
    props.actions.contactInfoEmailAddressHelp.update('');
    let obj = {
      phoneNumber: '',
      email: '',
      name: '',
    };
    if (value.target.checked) {
      obj.phoneNumber = props.user['Mobile'];
      obj.name = props.user[`Full Name ${locale === 'en' ? 'EN' : 'AR'}`];
      obj.email = props.user['User Email'];
    }
    console.log('information data', obj);
    props.actions.contactInfoName.update(obj.name);
    props.actions.contactInfoPhNo.update(obj.phoneNumber);
    props.actions.contactInfoEmailAddress.update(obj.email);
  };
}
export function call_f19_onChange(props: any) {
  return (value: string = '') => {
    props.actions.contactInfoName.update(value);
  };
}
export function f20_visible(props: any) {
  return true;
}
export function call_f21_onSelect(props: any) {
  return (value: string) => {
    props.actions.contactInfoPhNo.update(value);
  };
}
export function call_f22_onChange(props: any) {
  return (value: string = '') => {
    props.actions.contactInfoEmailAddress.update(value);
  };
}
export function f23_visible(props: any) {
  return true;
}
export async function f24_onClick(props: any) {
  props.history.push('/select-licence');
}
export function call_f25_onClick(props: any) {
  return async (value: string) => {
    // props.tawtheeqNumber
    // props.tawtheeqNumberValidateStatus
    // props.leaseAgreementDate
    // props.leaseAgreementNumber
    // props.leaseAgreementAmount
    // props.latitude
    // props.longitude
    // props.contactInfoName
    // props.contactInfoPhNo
    // props.contactInfoEmailAddress
    // props.companyDetailsType

    const { locale } = props;
    // returns the valid status
    // check if the tawtheeqNumber valid and daterange
    const validateStatus = onSubmitValidate(props);
    console.log('validation message', validateStatus);
    let checkValidation = true;
    switch (props.companyDetailsType) {
      case '0': {
        checkValidation = props.tawtheeqNumberIsValid;
        !checkValidation &&
          props.actions.tawtheeqNumberHelp.update(
            props.i18n('CompanyDetails_ValidateTawtheeq'),
          );
        !checkValidation &&
          props.actions.tawtheeqNumberValidateStatus.update('error');
        break;
      }
      case '1': {
        const dateRange = props.leaseAgreementDate;
        checkValidation = dateRange?.length === 2;
        !checkValidation &&
          props.actions.leaseAgreementDateHelp.update(
            props.i18n('Companydetails_requiredField'),
          );
        !checkValidation &&
          props.actions.leaseAgreementDateValidateStatus.update('error');
        break;
      }
    }

    if (validateStatus && checkValidation) {
      props.history.push('/upload-document');
    }
  };
}
export async function f26_onClick(props: any) {
  props.history.push('/');
}
