import { IVariables } from '@tamm/app-composer';
import { PATH_FIND_LICENCE } from '../../routes';
import { functions } from '../../helper';

// TODO: initially operations
const startService = (props: IVariables) => {
  const {
    actions: {
      loadingLicense: { update: Loading },
      linkLicenseStatus: { update: linkLicenceStatusUpdate },
      licenceDetails: { update: getLicenceDetails },
      selectedLicenceNumber: { update: licenceNumber },
    },
  } = props;
  linkLicenceStatusUpdate({ status: '' });
  licenceNumber('');
  getLicenceDetails({ status: '' });
  Loading(false);
  functions.handleRedirectLink(props, PATH_FIND_LICENCE);
};

export { startService };
