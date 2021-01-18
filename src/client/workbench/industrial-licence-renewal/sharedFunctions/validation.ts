// TODO: validate the input elements, validate with regExp or check if valid
const validateInputElements = (
  props: any,
  elementList: {
    key: string;
    actionType: string;
    regxValue: RegExp;
    validationMessageKey: string;
  }[],
) => {
  if (!elementList || elementList.length === 0) {
    return false; // nothing to validate
  }
  let validationFlag = true; // default set as valid

  const defaultRegExpPattern: { [key: string]: RegExp } = {};
  elementList.map((element: any) => {
    let elementValidation = true; // default set as valid
    const pattern = element.regxValue
      ? element.regxValue
      : defaultRegExpPattern[element.actionType];
    const value = props.state[element.key];
    elementValidation = value && pattern.test(value) && value.length > 0;
    // update the `${element}Help` and `${element}ValidateStatus`
    props.actions[`${element.key}Help`].update(
      elementValidation ? '' : props.i18n(element.validationMessageKey),
    );
    props.actions[`${element.key}Help`].update(
      elementValidation ? 'success' : 'error',
    );
    validationFlag = elementValidation;
  });
  return validationFlag; // return the validation status
};

// TODO: validate the tawtheeq number
const validateTawtheeqNumber = (tawtheeqNumber: string) => {
  return tawtheeqNumber && tawtheeqNumber.length > 0;
};

// fields details
const regexRequired = /^(?!\s*$).+/;
const msgRequired = 'Companydetails_requiredField';
// TODO: list of the fields
const fields = () => [
  {
    field: 'tawtheeqNumber',
    validations: [{ regex: regexRequired, msg: msgRequired }],
    conditions: [{ field: 'companyDetailsType', value: '0' }],
  },
  {
    field: 'leaseAgreementNumber',
    validations: [{ regex: regexRequired, msg: msgRequired }],
    conditions: [{ field: 'companyDetailsType', value: '1' }],
  },
  {
    field: 'leaseAgreementAmount',
    validations: [
      { regex: regexRequired, msg: msgRequired },
      {
        regex: /^(?:\d*(?:\.\d{2})?|\d+(?:\.\d{3})*?)$/i,
        msg: 'Invalid email',
      },
    ],
    conditions: [{ field: 'companyDetailsType', value: '1' }],
  },
  {
    field: 'latitude',
    validations: [
      { regex: regexRequired, msg: 'CompanyDetails_SelectLocation' },
      { regex: /^\d+\.\d+$/, msg: 'CompanyDetails_SelectLocation' },
    ],
    conditions: [],
  },
  {
    field: 'longitude',
    validations: [
      { regex: regexRequired, msg: 'CompanyDetails_SelectLocation' },
      { regex: /^\d+\.\d+$/, msg: 'CompanyDetails_InvalidCoordinates' },
    ],
    conditions: [],
  },
  {
    field: 'contactInfoName',
    validations: [{ regex: regexRequired, msg: msgRequired }],
    conditions: [],
  },
  {
    field: 'contactInfoPhNo',
    validations: [
      { regex: regexRequired, msg: msgRequired },
      { regex: /^(\+|0+)?9715\d{8}$/, msg: 'CompanyDetails_InvalidPhNo' },
    ],
    conditions: [],
  },
  {
    field: 'contactInfoEmailAddress',
    validations: [
      { regex: regexRequired, msg: msgRequired },
      {
        regex: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        msg: 'CompanyDetails_InvalidEmail',
      },
    ],
    conditions: [],
    message: '',
  },
];
// TODO: validate the fields for onSubmit in Company details page
const onSubmitValidate = (props: any) => {
  let validatedStatus = true;
  fields().forEach((fieldElement: { [key: string]: any }) => {
    const { field, validations, conditions } = fieldElement;
    let notValidValue = false;
    let isRendered = true;
    isRendered = conditions?.every((ques: any) => {
      return props?.[ques.field] === ques.value;
    });
    notValidValue =
      isRendered &&
      validations?.some((pattern: any) => {
        const fieldValue = props?.[field];
        const regexPattern = pattern?.regex;
        const isValid = regexPattern.test(fieldValue);
        if (!isValid) {
          props.actions?.[`${field}Help`]?.update(props.i18n(pattern.msg));
          props.actions?.[`${field}ValidateStatus`]?.update('error');
        }
        return !isValid;
      });
    if (isRendered && !notValidValue) {
      // add the success  messages
      props.actions?.[`${field}Help`]?.update(
        (fieldElement?.message && props.i18n(fieldElement.message)) || '',
      );
      props.actions?.[`${field}ValidateStatus`]?.update('success');
    }
    validatedStatus = validatedStatus ? !notValidValue : validatedStatus;
  });
  return validatedStatus;
};

// TODO: validate individual fields
const onChangeValidate = (props: any, key: string) => {
  let notValidValue = false;
  const fieldElement = fields().find(
    (element: { [key: string]: any }) => element.field === key,
  );
  const validations = fieldElement?.validations || [];
  notValidValue = validations?.some((pattern: any) => {
    const fieldValue = props?.[key];
    const regexPattern = pattern?.regex;
    const isValid = regexPattern.test(fieldValue);
    if (!isValid) {
      console.log('not valid', pattern.msg);
      props.actions?.[`${key}Help`]?.update(props.i18n(pattern.msg));
      props.actions?.[`${key}ValidateStatus`]?.update('error');
    }
    return !isValid;
  });
  if (!notValidValue) {
    // add the success  messages
    props.actions?.[`${key}Help`]?.update(
      (fieldElement?.message && props.i18n(fieldElement.message)) || '',
    );
    props.actions?.[`${key}ValidateStatus`]?.update('success');
  }
  return !notValidValue;
};

// file upload fields
const fileUploadFields = () => [
  {
    field: 'newLeaseContract',
    conditions: [],
    message: '',
  },
  {
    field: 'civilDefenceCertificate',
    conditions: [],
    message: '',
  },
  {
    field: 'adEnvironmentPermit',
    conditions: [],
    message: '',
  },
];
const fileUploadFailed = 'UploadDocument_fileUploadFailed';
const validateFileUpload = (props: any) => {
  let validatedStatus = true;
  fileUploadFields().forEach((fieldElement: { [key: string]: any }) => {
    const { field, conditions } = fieldElement;
    const fileList = props?.[`${field}Files`];
    let notValidValue = false;
    let isRendered = true;
    isRendered = conditions?.every((ques: any) => {
      return props?.[ques.field] === ques.value;
    });
    notValidValue =
      isRendered &&
      fileList.length > 0 &&
      fileList?.some((fileDoc: any) => {
        const message = fileDoc.status === '' ? msgRequired : fileUploadFailed;
        const isValid = fileDoc.status === 'success';
        !isValid &&
          props.actions?.[`${field}ValidationMessage`]?.update(
            props.i18n(message),
          );
        !isValid && props.actions?.[`${field}ValidateStatus`]?.update('error');
        return !isValid;
      });
    if (isRendered && !notValidValue) {
      // add the success  messages
      props.actions?.[`${field}ValidationMessage`]?.update('');
      props.actions?.[`${field}ValidateStatus`]?.update('');
    }
    validatedStatus = validatedStatus ? !notValidValue : validatedStatus;
  });
  return validatedStatus;
};

export {
  validateTawtheeqNumber,
  validateInputElements,
  fields,
  onSubmitValidate,
  onChangeValidate,
  validateFileUpload,
};
