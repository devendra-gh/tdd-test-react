import { IVariables } from '@tamm/app-composer';
import { paymentSuccess, addAnalytics, SLA_EVENT_KEY } from '../../utils';
import { downloadBusinessCertificate } from '../../services';
import { DASHBOARD_PATH } from '../../routes';

export const handleDownload = (certificateName: string) => (
  props: IVariables,
) => {
  const { instanceId } = props;
  downloadBusinessCertificate({
    instanceId,
    certificateName,
    type: 'listEconomicLicences',
  });
  if (new Set(props.downloaded).size === 2) {
    props.actions.stepsStatus.update({
      ...props.stepsStatus,
      downloadCertificate: 'finish',
    });
  }
  props.actions.downloaded.update(props.downloaded.concat(certificateName));
};

export const handleEndProcess = async (props: IVariables) => {
  await paymentSuccess(props);
  addAnalytics(SLA_EVENT_KEY, { serviceStatus: 'success' });
  window.location.replace(DASHBOARD_PATH);
};

export const handleReceiptDownloadButton = handleDownload('receipt');
export const handleCertificateDownloadButton = handleDownload('listOfLicenses');
