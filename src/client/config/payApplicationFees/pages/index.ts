import home from './Home';
import checkApplication from './CheckApplication';
import paymentSuccess from './PaymentSuccess';
import paymentSummary from './PaymentSummary';
import waitingPage from './WaitingPage';
import noFeesPage from './NoFees';
import error from './Error';
import notFound from './NotFound';
import continueProcess from './ContinueProcess';

const pages = [
  ...home,
  ...checkApplication,
  ...paymentSuccess,
  ...paymentSummary,
  ...waitingPage,
  ...noFeesPage,
  ...error,
  ...notFound,
  ...continueProcess,
];

export default pages;
