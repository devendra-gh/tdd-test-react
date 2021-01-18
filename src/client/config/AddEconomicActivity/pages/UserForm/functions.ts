import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { isEmail, isMobile } from 'client/config/utils/validations';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';
import { redirectToErrorPage } from '../../utils/redirect';
import { getAnalyticsData } from '../../utils/common';

const onPageInit = async (props: IVariables) => {
  const { user } = props;
  const fieldValue = {
    name: user ? `${user['First Name EN']} ${user['Last Name EN']}` : '',
    email: user ? user['User Email'] : '',
    mobileNumber: user ? `+${user.Mobile}` : '',
  };
  props.actions.formData.update({
    ...props.formData,
    ...fieldValue,
  });
};

const onChange = (props: IVariables, value: any, key: string) => {
  const fieldValue = { [key]: value };
  props.actions.formData.update({
    ...props.formData,
    ...fieldValue,
  });
};

const onSubmit = async (props: IVariables) => {
  const {
    arabicActivityName,
    englishActivityName,
    arabicActivityDescription,
    englishActivityDescription,
    name,
    email,
    mobileNumber,
  } = props.formData;
  try {
    props.actions.helperData.update({
      ...props.helperData,
      isSubmitted: true,
    });
    const { user } = props;
    const emiratesId = user ? user.IDN : '';
    const data = await bpm.start(
      PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      {
        emiratesId,
      },
      true,
    );
    if (data.success && data.data && data.data.businessKey && data.data.id) {
      props.actions.instanceId.update(data.data.id);
      props.actions.businessKey.update(data.data.businessKey);
      await bpm.message(
        PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
        {
          businessKey: data.data.businessKey,
          messageName: 'msgSubmitActivity',
          variables: {
            arabicActivityName,
            englishActivityName,
            arabicActivityDescription,
            englishActivityDescription,
            name,
            email,
            mobileNumber: mobileNumber.substr(1),
          },
        },
        true,
      );
    } else {
      props.actions.formData.update({
        ...props.formData,
        isLoading: false,
      });
      redirectToErrorPage(props);
    }
  } catch (e) {
    props.actions.formData.update({
      ...props.formData,
      isLoading: false,
    });
    redirectToErrorPage(props);
  } finally {
    getAnalyticsData('tra');
  }
};

const validation = (formData: IVariables) => {
  let valid = true;

  const arActivityNameReq =
    formData.arabicActivityName === '' ||
    /[a-zA-Z]/.test(formData.arabicActivityName);
  const enActivityNameReq = formData.englishActivityName === '';
  const arActivityDescriptionReq =
    formData.arabicActivityDescription === '' ||
    /[a-zA-Z]/.test(formData.arabicActivityDescription);
  const enActivityDescriptionReq = formData.englishActivityDescription === '';
  const nameReq = formData.name === '';
  const emailReq = !isEmail(formData.email);
  const mobileNumberReq = !isMobile(formData.mobileNumber);

  if (
    arActivityNameReq ||
    enActivityNameReq ||
    arActivityDescriptionReq ||
    enActivityDescriptionReq ||
    nameReq ||
    emailReq ||
    mobileNumberReq
  ) {
    valid = false;
  }

  return valid;
};

export default {
  onPageInit,
  onChange,
  onSubmit,
  validation,
};
