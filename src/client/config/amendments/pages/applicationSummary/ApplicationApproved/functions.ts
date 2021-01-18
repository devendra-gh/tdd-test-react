import { IVariables } from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import bpm from 'client/services/bpm';
import { getDateFromTimeStamp } from 'client/config/utils/datetime';
import { PROCESS_NAME } from 'client/config/amendments/constants';

const onPageInit = async (props: IVariables) => {
  return {
    tags: [
      {
        label: 'global.referenceNumber',
        value: props.apTransactionNumber || '',
      },
      {
        label: 'global.submittedOn',
        value: props.submitDate ? getDateFromTimeStamp(props.submitDate) : '',
      },
    ],
    cnNumber: props.cnNumber || '',
  };
};

const downloadLicences = (value: any, props: IVariables) => {
  window.open(
    `${baseUrl}/api/download/businessCertificateGenericADU?type=amendment&instanceId=${props.instanceId}&certificateName=${value}`,
    '_blank',
  );
};

const startOver = async (props: IVariables) => {
  await bpm.message(PROCESS_NAME, {
    businessKey: props.businessKey,
    messageName: 'endProcess',
  });
  // console.log('props,,,,,,,,,', props);
  window.location.replace(
    `${
      window.location.href.indexOf('stage.tamm') !== -1
        ? 'https://stage.tamm.abudhabi/'
        : 'https://www.tamm.abudhabi/'
    }journeys/manage-your-business`,
  );
};

export default { onPageInit, downloadLicences, startOver };
