import home from './Home';
import waitingPage from './WaitingPage';
import licenceSubmit from './LicenceSubmit';
import applicationReturned from './ApplicationReturned';
import paymentSummary from './PaymentSummary';
import licenceSummary from './LicenceSummary';
import enterLicenceNo from './EnterLicenceNo';
import notEligible from './NotEligible';
import error from './Error';
import notFound from './NotFound';
import accountUpgrade from './AccountUpgrade';
import login from './Login';
import continueProcess from './ContinueProcess';

const pages: any[] = [
  ...home,
  ...waitingPage,
  ...licenceSubmit,
  ...applicationReturned,
  ...paymentSummary,
  ...licenceSummary,
  ...enterLicenceNo,
  ...notEligible,
  ...error,
  ...notFound,
  ...accountUpgrade,
  ...login,
  ...continueProcess,
];

export default pages;
