import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import moment from 'moment';
import scrollToElement from 'client/config/utils/scrollToElement';
import { isEmail, isMobile } from 'client/config/utils/validations';
import { has, get } from 'lodash';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { FORM_STEP_2, FORM_STEP_3, FORM_STEP_1 } from '../../steps';
import { initialState } from '../../config';
import { getAnalyticsData } from '../../utils/common';

const init = (props: IVariables) => {
  const { actions, nocForm, user, locale } = props;
  actions.nocForm.update({
    ...nocForm,
    ...{
      proMobileNumber: `+${user.Mobile}`,
      proEmail: user['User Email'],
      proName:
        locale === 'en'
          ? `${user['First Name EN']} ${user['Last Name EN']}`
          : user['Full Name AR'],
    },
  });
};

const onPageInit = (props: IVariables) => {
  const {
    actions,
    licenceExpiryDate = null,
    contractExpiryDate = null,
  } = props;
  if (licenceExpiryDate && contractExpiryDate) {
    if (contractExpiryDate >= licenceExpiryDate) {
      actions.isTawtheeqRequired.update(false);
    } else {
      actions.isTawtheeqRequired.update(true);
    }
  }
  let subTitle = 'licenceExpiry';
  if (licenceExpiryDate && licenceExpiryDate < new Date().toISOString()) {
    subTitle = 'licenceExpired';
  }
  getAnalyticsData('sla', {
    applicationStatus: 'eligible',
    licenceExpiryDate,
    contractExpiryDate,
    serviceStatus: 'success',
  });
  return {
    subTitle: `${subTitle}.subTitle`,
  };
};

const onSubmit = async (props: IVariables) => {
  const { fileUploadData, isTawtheeqRequired, currentStep } = props;
  const docArray = [];
  if (isTawtheeqRequired) {
    const twatheeq = get(fileUploadData, 'documents.thawtheeq[0]');
    docArray.push(twatheeq);
  }
  const submitRenewLicenceForm = {
    cnNumber: props.form.licenceNo,
    officialEmail: props.nocForm.officialEmail,
    officialMobile: props.nocForm.officialMobile,
    proName: props.nocForm.proName,
    proEmail: props.nocForm.proEmail,
    proPhoneNumber: props.nocForm.proMobileNumber,
  };
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgSubmitRenewLicence',
    variables: {
      proceedToSubmitLicence: true,
      submittedDate: moment().format('DD-MMM-YYYY'),
      documentsLicence: JSON.stringify(docArray),
      ...submitRenewLicenceForm,
    },
  });
  getAnalyticsData('tra');
  props.actions.stepsStatus.update({
    ...props.stepsStatus,
    [`${currentStep}`]: 'finish',
  });
};

const onNocFormChange = (values: IVariables, props: IVariables) => {
  const { actions, nocForm } = props;
  actions.nocForm.update({ ...nocForm, ...values });
};

const validate = (props: IVariables) => {
  const { nocForm, isTawtheeqRequired, fileUploadData } = props;
  const {
    officialEmail,
    officialMobile,
    proEmail,
    proMobileNumber,
    acceptAll,
  } = nocForm;
  const formValidated =
    isEmail(officialEmail) &&
    isEmail(proEmail) &&
    isMobile((proMobileNumber || '').replace(/\s/g, '')) &&
    isMobile((officialMobile || '').replace(/\s/g, '')) &&
    acceptAll;

  if (!formValidated) {
    // @ts-ignore
    scrollToElement('noc-form', -150);
    return formValidated;
  }
  const documentsValidated = has(
    fileUploadData,
    `documents.thawtheeq[0].documentPath`,
  );
  if (isTawtheeqRequired && !documentsValidated) {
    return documentsValidated;
  }
  return true;
};

const onBack = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgSubmitRenewLicence',
    variables: {
      proceedToSubmitLicence: false,
    },
  });
  props.actions.stepsStatus.update({
    [FORM_STEP_1]: 'process',
  });
};

const onNext = (props: IVariables) => {
  props.actions.stepsStatus.update({
    ...props.stepsStatus,
    [FORM_STEP_2]: 'finish',
  });
  props.actions.licenceSubmitPage.update(FORM_STEP_3);
};

const onPrevious = (props: IVariables) => {
  props.actions.licenceSubmitPage.update(FORM_STEP_2);
  props.actions.fileUploadData.update({ ...initialState.fileUploadData });
  props.actions.nocForm.update({ ...initialState.nocForm });
};

export default {
  onNocFormChange,
  onSubmit,
  validate,
  init,
  onPageInit,
  onBack,
  onNext,
  onPrevious,
};
