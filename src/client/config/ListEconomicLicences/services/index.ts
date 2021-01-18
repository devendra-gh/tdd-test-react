import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import baseUrl from 'client/utils/baseUrl';
import { PATH_ERROR } from '../routes';

export const issueCertificate = async ({ cnNumber }: IVariables) => {
  return fetch('/pub/proxy/issueLetter', 'POST', {
    cnNumber,
    letterType: 'haslicense',
  }).then(({ success, data }) => {
    if (success) {
      return data;
    }
    return null;
  });
};

export const downloadBusinessCertificate = async ({
  instanceId,
  certificateName,
  type,
}: IVariables) => {
  window.open(
    `${baseUrl}/api/download/businessCertificateGenericAuthADU?instanceId=${instanceId}&type=${type}&certificateName=${certificateName}&mobileDownloadable=pdf&mobileFileName=Certificate`,
  );
};

export const errorBoundary = (props: IVariables, error: any) => {
  props.history.push(PATH_ERROR);
};
