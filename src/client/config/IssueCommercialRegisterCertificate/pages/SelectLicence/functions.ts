import { IVariables } from '@tamm/app-composer';
import { startPaymentService, addAnalytics, TRA_EVENT_KEY } from '../../utils';
import { fetchLicences, errorBoundary, issueCertificate } from '../../services';
import { PATH_HOME } from '../../routes';

const init = async (props: IVariables) => {
  // fetch list of licences
  // set state of the loading prop
  const {
    actions: { loadingLicences, licenceList, selectedLicence, submitting },
    selectedLicence: defaultSelectedLicence,
    loggedIn,
  } = props;

  if (loggedIn) {
    submitting.update(false);
    try {
      loadingLicences.update(true);
      let licences = await fetchLicences();
      if (!Array.isArray(licences)) {
        licences = [licences];
      }
      licenceList.update(licences);
      let defaultValue = defaultSelectedLicence;
      if (!defaultValue) {
        defaultValue =
          licences.length > 0 ? licences[0].tradeLicenseNumber : null;
      }
      selectedLicence.update(defaultValue);
    } catch (error) {
      errorBoundary(props, error);
    } finally {
      loadingLicences.update(false);
    }
  }
};

const handleCancelLink = (props: IVariables) => {
  const {
    history: { push: redirectTo },
  } = props;
  redirectTo(PATH_HOME);
};

const handleBackButton = handleCancelLink;

const handleSelectLicence = (value: any, props: IVariables) => {
  props.actions.selectedLicence.update(value);
};

const getLetterNumber = (response: IVariables) => {
  let letterNumber = '';
  const lnRegex = /LN-\d{7}/i;
  switch (response.code) {
    case '200':
      letterNumber = response.Result.recordNumber;
      break;
    case '500':
      letterNumber = response.message.match(lnRegex)[0];
      break;
    default:
      break;
  }
  return letterNumber;
};

const handleStartService = async (props: IVariables) => {
  const {
    selectedLicence,
    actions: { submitting },
  } = props;

  submitting.update(true);
  try {
    const issueResponse = await issueCertificate({ cnNumber: selectedLicence });
    const letterNumber = getLetterNumber(issueResponse);

    if (letterNumber) {
      // start payment service
      await startPaymentService(props, {
        transactionNumber: letterNumber,
      });
      addAnalytics(TRA_EVENT_KEY);
    } else {
      errorBoundary(props, new Error('Certificate could not be issued'));
    }
  } catch (error) {
    errorBoundary(props, error);
  }
};

export {
  init,
  handleCancelLink,
  handleBackButton,
  handleStartService,
  handleSelectLicence,
};
