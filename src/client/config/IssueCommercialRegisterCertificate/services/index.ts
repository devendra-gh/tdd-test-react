import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import baseUrl from 'client/utils/baseUrl';
import { PATH_ERROR } from '../routes';

export const fetchLicences = async () => {
  return fetch('/pub/proxy/listTradeLicensesV3', 'POST', {}).then(
    (response: IVariables) => {
      let licences = [];
      const {
        responseStatus: { statusCode },
      } = response.data;
      if (statusCode === 200) {
        licences = response.data.TradeLicensesList.contents;
      }
      return licences;
    },
  );
};

export const issueCertificate = async ({ cnNumber }: IVariables) => {
  return fetch('/pub/proxy/issueLetter', 'POST', {
    cnNumber,
    letterType: 'license',
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
  // console.log('error fetching user licenses', error); // eslint-disable-line
  props.history.push(PATH_ERROR);
};
