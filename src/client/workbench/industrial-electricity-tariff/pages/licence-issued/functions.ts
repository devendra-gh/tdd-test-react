import { getSteps } from '../../sharedFunctions/stepUtils';

import { sendEmailNotification } from '../../sharedFunctions/getData';

export async function init(props: any) {
  const steps = getSteps(props.i18n, 1, 3);
  props.actions.steps.update(steps);
  props.actions.currentStepIndex.update(1);
  props.actions.currentSubStepIndex.update(3);
  props.actions.loading.update(false);

  if (props.emailSent === false) {
    await sendEmailNotification(props, 'application-success', props.instanceId);
    props.actions.emailSent.update(true);
  }
}
export function call_f1_buttons_onClick(props: any) {
  return async () => {
    props.actions.loading.update(true);
    const { instanceId } = props;

    const downloadFile = async (
      instanceId: string,
      certificateName: string,
    ) => {
      const { protocol } = location;
      const slashes = protocol.concat('//');
      const host = slashes.concat(window.location.hostname);
      window.open(
        `${host}/services/business/ded/api/download/businessCertificateGenericAuthADU?type=industrialLicence&instanceId=${instanceId}&certificateName=${certificateName}&mobileDownloadable=pdf&mobileFileName=Certificate`,
        '_blank',
      );
    };

    await downloadFile(instanceId, '');
    props.actions.loading.update(false);
  };
}
export async function f2_buttons_onClick(props: any) {
  const { businessKey } = props;
  try {
    await props.bpm.sendMessage({
      businessKey,
      messageName: 'onFinish',
    });
  } catch (error) {
    console.log('error sending message', error);
  }
}
