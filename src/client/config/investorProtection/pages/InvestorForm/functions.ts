import { IVariables } from '@tamm/app-composer';
import { isEmail, isMobile } from 'client/config/utils/validations';
import fetch from 'client/services/fetch';
import moment from 'moment';
import {
  PATH_SUCCESS,
  PATH_ERROR,
  PATH_SERVICE_TYPE,
} from 'client/config/investorProtection/routes';
import { getAnalyticsData } from '../../utils/common';

/* istanbul ignore file */

const init = (props: IVariables) => {
  if (props.user) {
    if (props.locale === 'en') {
      props.actions.form.update({
        ...props.form,
        name: props.user['First Name EN'],
        lastName: props.user['Last Name EN'],
        email: props.user['User Email'],
        mobilePhone: props.user.Mobile,
      });
    }
    if (props.locale === 'ar') {
      props.actions.form.update({
        ...props.form,
        name: props.user['First Name AR'],
        lastName: props.user['Last Name AR'],
        email: props.user['User Email'],
        mobilePhone: props.user.Mobile,
      });
    }
  }

  props.actions.currentStep.update('step.servieDetails.label');
  props.actions.stepsStatus.update({ 'step.selectServie.label': 'finish' });
};

const onPageInit = (props: IVariables) => {};

const onBack = (props: IVariables) => {
  props.actions.form.update({ documents: {}, userType: '1' });
  props.history.push(PATH_SERVICE_TYPE);
};

const onChange = (type: string, value: string, props: IVariables) => {
  props.actions.form.update({ ...props.form, [type]: value });
};

const formatMobileNum = (mobileNum: string = '') => {
  return mobileNum.replace(/([+ ])/g, '');
};

const validateFiles = (props: IVariables) => {
  if (props.form.caseType === 1) {
    if (!props.documents) return false;
    if (props.documents) {
      if (
        !props.documents.userIdentityDocument ||
        !props.documents.supportingDocuments
      )
        return false;

      if (props.documents.userIdentityDocument) {
        if (props.documents.userIdentityDocument.length === 0) return false;
      }
      if (props.documents.supportingDocuments) {
        if (props.documents.supportingDocuments.length === 0) return false;
      }
    }
  }
  return true;
};

const validateContactDetails = (form: IVariables) => {
  let contactDetailsValid = true;
  if (
    !form.name ||
    !form.mobilePhone ||
    !isMobile(form.mobilePhone.replace(/ /g, '')) ||
    !form.email ||
    !isEmail(form.email)
  ) {
    contactDetailsValid = false;
  }
  if (form.phoneNumber) {
    if (!isMobile(form.phoneNumber.replace(/ /g, '')))
      contactDetailsValid = false;
  }
  return contactDetailsValid;
};

const validateEstablishmentDetails = (form: IVariables) => {
  let establishmentDetailsValid = true;
  if (
    form.userType === '2' &&
    (!form['establishment.name'] ||
      !form['establishment.phoneNumber'] ||
      !isMobile(form['establishment.phoneNumber'].replace(/ /g, '')))
  ) {
    establishmentDetailsValid = false;
  }
  return establishmentDetailsValid;
};

const validateCaseDetails = (form: IVariables) => {
  let caseDetailsValid = true;
  if (!form.caseType || (form.caseType === 1 && !form.location)) {
    caseDetailsValid = false;
  }
  return caseDetailsValid;
};

const validateDefendantDetails = (form: IVariables) => {
  let defendantDetailsValid = true;
  if (
    !form['defendant.caseDescription'] ||
    (form.caseType === 1 &&
      (!form['defendant.name'] || !form['defendant.location']))
  ) {
    defendantDetailsValid = false;
  }
  if (form['defendant.phoneNumber']) {
    if (!isMobile(form['defendant.phoneNumber'].replace(/ /g, '')))
      defendantDetailsValid = false;
  }

  return defendantDetailsValid;
};

const validate = (props: IVariables) => {
  const contactDetailsValid = validateContactDetails(props.form);
  const caseDetailsValid = validateCaseDetails(props.form);
  const establishmentDetailsValid = validateEstablishmentDetails(props.form);
  const defendantDetailsValid = validateDefendantDetails(props.form);
  const validateTnc = props.form.tnc;
  const filesValid = validateFiles(props);

  return (
    contactDetailsValid &&
    caseDetailsValid &&
    establishmentDetailsValid &&
    defendantDetailsValid &&
    validateTnc &&
    filesValid
  );
};

const onSubmit = async (
  props: IVariables,
  setShowLoader: (val: boolean) => void,
) => {
  const { form, i18n } = props;
  try {
    setShowLoader(true);

    const payload = {
      presentedCaseType: form.userType || 1,
      firstName: form.name,
      secondName: form.secondName,
      middleName: form.middleName,
      lastName: form.lastName,
      phoneNumber: formatMobileNum(form.phoneNumber),
      mobilePhone: formatMobileNum(form.mobilePhone),
      email: form.email,
      caseType: form.caseType,
      inRelationToEstablishment: form.inRelationToEstablishment,
      location: form.location,
      establishmentName: form['establishment.name'] || form.name,
      licenseNumber: form['establishment.licenceNumber'],
      establishmentLocation: form['establishment.location'],
      establishmentPhoneNumber:
        formatMobileNum(form['establishment.phoneNumber']) ||
        formatMobileNum(form.mobilePhone),
      defendantName: form['defendant.name'] || form.name,
      defendantLocation: form['defendant.location'] || form.location,
      defendantPhoneNumber: formatMobileNum(form['defendant.phoneNumber']),
      caseDescription: form['defendant.caseDescription'],
    };

    const response = await fetch(
      '/pub/proxy/consumerAndBusinessProtection',
      'POST',
      payload,
    );
    if (response) {
      if (response.success && response.data.code === '200') {
        props.actions.submitRef.update(response.data.result.altId);
        const requests = Object.keys(props.documents).map((item: any) => {
          return fetch('/pub/proxy/uploadDocument', 'POST', {
            documentPath: props.documents[item][0].documentPath,
            capId: response.data.result.capId,
            documentCategory: 'protection service',
            documentName: props.documents[item][0].documentName,
            trackingNumber: response.data.result.altId,
          });
        });

        await Promise.all(requests).then(res => {});

        // fetch('/pub/proxy/sendResponseEmail', 'POST', {
        //   subject:
        //     'Abu Dhabi Business Customer Protection Service - مركز خدمة حماية العملاء',
        //   recipient: form.email,
        //   tammNotificationTextEn: `We have successfully received your application <strong>${response.data.result.altId}</strong> on a Customer Complaint. `,
        //   tammNotificationTextAr: `<span dir='rtl'> استلمنا طلبك رقم</span>
        //   <span dir='rtl'><strong>${response.data.result.altId}</strong></span>
        //   <span dir='rtl'> لتقديم شكوى مستهلك/مستثمر. </span>`,
        // });
        // fetch('/pub/proxy/sendResponseSms', 'POST', {
        //   recipient: form.mobilePhone,
        //   tokens: `Dear customer, \nWe have successfully received your application ${response.data.result.altId} on a Customer Complaint.\n\nعزيزنا العميل،\nاستلمنا طلبك رقم ${response.data.result.altId} لتقديم شكوى مستهلك/مستثمر.`,
        // });
        props.actions.documents.reset();
        props.actions.form.reset();
        props.actions.submitDate.update(
          moment(String(new Date())).format('DD MMM, YYYY'),
        );

        props.history.push(PATH_SUCCESS);
      }
    } else {
      setShowLoader(false);
      props.history.push(PATH_ERROR);
    }
    setShowLoader(false);
  } catch (e) {
    setShowLoader(false);
    fetch('/pub/proxy/sendResponseEmails', 'POST', {
      serviceName: i18n('investorProtection.title'),
      statusLink: PATH_ERROR,
    });
    props.history.push(PATH_ERROR);
  } finally {
    getAnalyticsData('tra');
  }
};

const getFileGroups = (props: IVariables) => {
  const fileGroups = [
    {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      fields: [
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'userIdentityDocument',
          accept: ['application/pdf'],
          label: 'field.emiratesIdCopy.mandatory',
          help: 'file.help',
          validationConfig: 'required',
        },
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'supportingDocuments',
          accept: ['application/pdf'],
          label: 'field.supportingDocuments.mandatory',
          help: 'file.help',
          validationConfig: 'required',
        },
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'otherDocuments',
          accept: ['application/pdf'],
          label: 'field.otherDocuments',
          help: 'file.help',
          validationConfig: '',
          multiple: true,
        },
      ],
    },
  ];

  return fileGroups;
};

const getOthersFileGroups = (props: IVariables) => {
  const fileGroups = [
    {
      name: 'title.addAttachments',
      twoColumns: true,
      stateKey: 'documents',
      fields: [
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'userIdentityDocument',
          accept: ['application/pdf'],
          label: 'field.emiratesIdCopy.optional',
          help: 'file.help',
          validationConfig: '',
        },
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'supportingDocuments',
          accept: ['application/pdf'],
          label: 'field.supportingDocuments.optional',
          help: 'file.help',
          validationConfig: '',
        },
        {
          'aria-label': 'file upload',
          elementType: 'fileUpload',
          name: 'otherDocuments',
          accept: ['application/pdf'],
          label: 'field.otherDocuments',
          help: 'file.help',
          validationConfig: '',
          multiple: true,
        },
      ],
    },
  ];

  return fileGroups;
};

export default {
  init,
  onPageInit,
  onBack,
  onChange,
  validateFiles,
  onSubmit,
  validate,
  getFileGroups,
  getOthersFileGroups,
  validateContactDetails,
  validateEstablishmentDetails,
  validateCaseDetails,
  validateDefendantDetails,
};
