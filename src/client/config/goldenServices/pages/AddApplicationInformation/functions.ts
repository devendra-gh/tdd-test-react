import { IVariables } from '@tamm/app-composer';
import moment from 'moment';
import bpm from 'client/services/bpm';
import { isEmail, isMobile } from 'client/config/utils/validations';
import { TRA_EVENT_KEY } from '../../constants';
import { addAnalytics } from '../../utils';
import { isLicenceNo } from '../../validations';

const init = async (props: IVariables) => {
  const form = {
    time: '',
    telephone: '',
    transactionType: '',
    city: '',
    name: '',
    email: '',
    licenceNo: '',
    date: '',
    address: '',
    termAndCondition: false,
  };

  if (props.loggedIn && props.user) {
    form.telephone = `+ ${props.user.Mobile}`;
    form.email = props.user['User Email'];
    const local = props.locale === 'en' ? 'EN' : 'AR';
    form.name = `${props.user[`First Name ${local}`]} ${
      props.user[`Last Name ${local}`]
    }`;
  }

  props.actions.goldenService.update({
    ...props.goldenService,
    isLoading: false,
    form,
  });
};

const getSpecificCheckStatus = (
  props: IVariables,
  field: string,
  value: string,
) => {
  const { i18n } = props;

  const getNameStatus = () => {
    return value.length < 3
      ? i18n('goldenServices.validate.name.short') // 'Name must be at least three characters long'
      : '';
  };

  const getEmailStatus = () => {
    return isEmail(value) ? '' : i18n('goldenServices.validate.email.invalid'); // 'Please enter a valid email address';
  };

  const getTelephoneStatus = () => {
    return isMobile(value)
      ? ''
      : i18n('goldenServices.validate.telephone.invalid'); //  'Please enter a valid mobile number';
  };

  const getLicenceNoStatus = () => {
    return isLicenceNo(value)
      ? ''
      : i18n('goldenServices.validate.licenceNo.invalid'); //  'Please enter a valid licence number';
  };

  const getAddressStatus = () => {
    return value.length < 3
      ? i18n('goldenServices.validate.address.short') // 'Address must be at least three characters long'
      : '';
  };

  const getTimeStatus = () => {
    const time = moment(value).format('HH:mm');
    const valid = moment(time, 'HH:mm').isBetween(
      moment('08:30', 'HH:mm'),
      moment('17:30', 'HH:mm'),
    );
    return valid ? '' : i18n('goldenServices.validate.time.invalid'); // 'Time must be between 8:30 AM- 5:30 PM';
  };

  // Field specific check
  switch (field) {
    case 'name':
      return getNameStatus();

    case 'email':
      return getEmailStatus();

    case 'telephone':
      return getTelephoneStatus();

    case 'licenceNo':
      return getLicenceNoStatus();

    case 'address':
      return getAddressStatus();

    case 'time':
      return getTimeStatus();

    // no more checks for theses fields
    case 'transactionType':
    case 'date':
    case 'city':
      return '';

    default:
      return i18n('goldenServices.validate.other.invalid'); // 'Please check your input';
  }
};

const validateField = (props: IVariables, field: string, value: string) => {
  const { i18n } = props;

  const getTermAndConditionStatus = () => {
    return ((value as unknown) as boolean) === true
      ? ''
      : i18n('goldenServices.validate.termAndCondition.unchecked');
  };

  // Checkbox check
  if (field === 'termAndCondition') {
    return getTermAndConditionStatus();
  }

  // Not required fields
  if (['licenceNo'].includes(field) && !value) {
    return '';
  }

  if (!value) {
    return i18n('goldenServices.validate.required');
  }

  return getSpecificCheckStatus(props, field, value);
};

const onChange = (props: IVariables, value: any, key: any) => {
  const updatedForm = {
    ...props.goldenService.form,
    [key]: value,
  };
  props.actions.goldenService.update({
    ...props.goldenService,
    form: updatedForm,
  });
};

const getFields = (
  props: IVariables,
  err: any,
  setErr: React.Dispatch<React.SetStateAction<any>>,
) => {
  const newForm = props.form.map((group: any) => {
    return {
      name: props.i18n(group.name),
      twoColumns: true,
      fields: group.fields.map((element: any) => {
        switch (element.elementType) {
          case 'inputTelephone':
            return {
              'aria-label': element.ariaLabel,
              elementType: element.elementType,
              name: props.i18n(element.name),
              label: props.i18n(element.label),
              placeholder: props.i18n(element.placeholder),
              code: element.code,
              value: props.goldenService.form[element.key],
              countries: element.countries,
              onSelect: (value: any) => {
                onChange(props, value, element.key);
                setErr({
                  ...err,
                  [element.key]: validateField(props, element.key, value),
                });
              },
              validate: () => err[element.key],
            };
          case 'select':
            return {
              'aria-label': element.ariaLabel,
              elementType: element.elementType,
              name: props.i18n(element.name),
              label: props.i18n(element.label),
              items: element.items.map((item: IVariables) => ({
                ...item,
                label: props.i18n(item.label),
              })),
              value: props.goldenService.form[element.key],
              onChange: (value: any) => {
                onChange(props, value, element.key);
                setErr({
                  ...err,
                  [element.key]: validateField(props, element.key, value),
                });
              },
              validate: () => err[element.key],
            };
          case 'datePicker':
            return {
              'aria-label': element.ariaLabel,
              elementType: element.elementType,
              name: props.i18n(element.name),
              label: props.i18n(element.label),
              value: props.goldenService.form[element.key],
              help: element.help,
              onChange: (value: any) => {
                onChange(props, value, element.key);

                setErr({
                  ...err,
                  [element.key]: validateField(props, element.key, value),
                });
              },
              validate: () => err[element.key],
              disabledDate: (currentDate: Date) =>
                (Date.now() - currentDate.getTime()) / (1000 * 3600 * 24) > 1 ||
                (Date.now() - currentDate.getTime()) / (1000 * 3600 * 24) > 0 ||
                currentDate.getDay() >= 5,
            };
          case 'timePicker':
            return {
              'aria-label': element.ariaLabel,
              elementType: element.elementType,
              name: props.i18n(element.name),
              label: props.i18n(element.label),
              value: props.goldenService.form[element.key],
              help: element.help,
              onChange: (value: any) => {
                onChange(props, value, element.key);

                setErr({
                  ...err,
                  [element.key]: validateField(props, 'time', value),
                });
              },
              validate: () => err[element.key],
            };
          default:
            return {
              'aria-label': element.ariaLabel,
              elementType: element.elementType,
              name: props.i18n(element.name),
              label: props.i18n(element.label),
              placeholder: props.i18n(element.placeholder),
              onChange: (value: any) => {
                onChange(props, value, element.key);
              },
              onBlur: (input: any) => {
                setErr({
                  ...err,
                  [element.key]: validateField(
                    props,
                    element.key,
                    input.currentTarget.value,
                  ),
                });
              },
              validate: () => err[element.key],
              value: props.goldenService.form[element.key],
            };
        }
      }),
    };
  });
  return newForm;
};

const onSubmit = async (
  props: IVariables,
  err: any,
  setErr: React.Dispatch<React.SetStateAction<any>>,
) => {
  // 1- validate form
  let validForm = true;
  let newErr = { ...err };
  [
    'name',
    'email',
    'telephone',
    'transactionType',
    'licenceNo',
    'city',
    'address',
    'date',
    'time',
    'termAndCondition',
  ].forEach(field => {
    const error = validateField(props, field, props.goldenService.form[field]);
    newErr = {
      ...newErr,
      [field]: error,
    };
    if (error) validForm = false;
  });
  // update local state
  setErr(newErr);
  // check for checkbox
  if (validForm && !props.goldenService.form.termAndCondition) {
    validForm = false;
  }
  if (!validForm) return;
  props.actions.goldenService.update({
    ...props.goldenService,
    isLoading: true,
  });

  // 2 - start process
  const bpmUrl = 'goldenServices';
  const { instanceId } = props;
  let { businessKey } = props;

  if (!businessKey || !instanceId) {
    const startBPMHandler = async () => {
      try {
        const data = await bpm.start(bpmUrl, {}, true);
        if (
          data.success &&
          data.data &&
          data.data.businessKey &&
          data.data.id
        ) {
          props.actions.instanceId.update(data.data.id);
          props.actions.businessKey.update(data.data.businessKey);
          businessKey = data.data.businessKey;
        }
      } catch (e) {
        // console.log("comunda process didn't start e: ", e);
      }
    };

    await startBPMHandler();
  }

  const {
    name,
    email,
    telephone,
    transactionType,
    licenceNo,
    city,
    address,
    date,
    time,
  } = props.goldenService.form;

  const submitData = {
    name,
    email,
    mobileNumber: (telephone as string).replace(/[\s+]/g, ''),
    transactionType,
    licenseNumber: licenceNo,
    city,
    address,
    datePreference: moment(date).format('DD/MM/YYYY'),
    timePreference: moment(time).format('HH:mm'),
  };
  if (businessKey) {
    let response;
    try {
      response = await bpm.message(
        bpmUrl,
        {
          businessKey,
          messageName: 'submitDetails',
          variables: submitData,
        },
        true,
      );
      if (response.success) {
        props.actions.stepsStatus.update({
          ...props.stepsStatus,
          'goldenServices.steps.addApplicationInformation': 'finish',
        });
      }
    } catch (e) {
      response = { success: false };
    } finally {
      addAnalytics(TRA_EVENT_KEY, { submitStatus: response.success });
    }
  }
};

export default {
  init,
  onSubmit,
  getFields,
  onChange,
  validateField,
};
