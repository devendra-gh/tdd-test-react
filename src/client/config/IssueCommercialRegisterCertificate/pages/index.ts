import home from './Home';
import selectLicence from './SelectLicence';
import error from './Error';
import paymentSummary from './PaymentSummary';
import paymentSuccess from './PaymentSuccess';
import paymentError from './PaymentError';
import paymentWaiting from './PaymentWaiting';
import notFound from './NotFound';
import login from './Login';
import accountUpgrade from './AccountUpgrade';
import continueProcess from './ContinueProcess';

const pages: any[] = [
  ...home,
  ...selectLicence,
  ...error,
  ...paymentSuccess,
  ...paymentSummary,
  ...paymentError,
  ...paymentWaiting,
  ...notFound,
  ...login,
  ...accountUpgrade,
  ...continueProcess,
];

export default pages;
