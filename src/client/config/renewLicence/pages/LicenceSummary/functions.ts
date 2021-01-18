import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import baseUrl from 'client/utils/baseUrl';
import { reset } from 'client/config/renewLicence/utils/common';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { DASHBOARD_PATH } from '../../routes';

const onClick = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgViewLicenceDetails',
  });
  reset(props);
};

const onDropdownChange = (certificateName: string, props: IVariables) => {
  const { instanceId } = props;
  if (props.instanceId) {
    window.open(
      `${baseUrl}/api/download/businessCertificateGenericAuthADU?instanceId=${instanceId}&type=renewEconomicLicence&certificateName=${certificateName}&mobileDownloadable=pdf&mobileFileName=Certificate`,
      '_blank',
    );
  }
};

const dropDownConfig = (props: IVariables) => {
  const { i18n } = props;
  return {
    disabled: false,
    items: [
      {
        id: 'receipt',
        label: i18n('dropdown.receipt'),
      },
      {
        id: 'commercial',
        label: i18n('dropdown.commercial'),
      },
      {
        id: 'hasALicense',
        label: i18n('dropdown.hasALicense'),
      },
    ],
    label: i18n('button.moreDownloads'),
    name: 'download-certificate-dropdown',
    onChange: (item: string) => {
      onDropdownChange(item, props);
    },
    uiType: 'secondary',
  };
};

const downloadLicenceBtnConfig = (props: IVariables) => {
  const { i18n } = props;
  return {
    'aria-label': 'button-downloadLicence',
    size: 'default',
    type: 'button',
    uiType: 'primary',
    label: i18n('button.downloadLicence'),
    onClick: () => {
      onDropdownChange('license', props);
    },
  };
};

const finish = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgDownloadLicence',
  });
  reset(props);
  window.location.replace(DASHBOARD_PATH);
};

const finishDownloadBtnConfig = (props: IVariables) => {
  const { i18n } = props;
  return {
    'aria-label': 'button-finish',
    size: 'default',
    type: 'button',
    uiType: 'secondary',
    label: i18n('button.dashboard'),
    onClick: () => {
      finish(props);
    },
  };
};

export default {
  onClick,
  dropDownConfig,
  downloadLicenceBtnConfig,
  finish,
  finishDownloadBtnConfig,
};
