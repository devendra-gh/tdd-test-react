import home from './Home';
import error from './Error';
import paymentSummary from './PaymentSummary';
import paymentSuccess from './PaymentSuccess';
import paymentError from './PaymentError';
import paymentWaiting from './PaymentWaiting';
import login from './Login';
import accountUpgrade from './AccountUpgrade';
import notFound from './NotFound';
import continuePage from './ContinueProcess';

const pages: any[] = [
  ...home,
  ...error,
  ...paymentSuccess,
  ...paymentSummary,
  ...paymentError,
  ...paymentWaiting,
  ...login,
  ...accountUpgrade,
  ...notFound,
  ...continuePage,
];

export default pages;
