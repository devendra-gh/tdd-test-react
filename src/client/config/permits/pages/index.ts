import Home from './Home';
import Login from './Login';
import ContinueProcess from './ContinueProcess';
import NotFound from './NotFound';
import ApplicationSubmitted from './ApplicationSubmitted';
import ApplicationWaiting from './ApplicationWaiting';
import ApplicationApproved from './ApplicationApproved';
import ApplicationReturned from './ApplicationReturned';
import ApplicationRejected from './ApplicationRejected';
import Summary from './PaymentSummary';
import WaitingPayment from './PaymentWaiting';
import PaymentFailed from './PaymentFailed';
import PaymentSuccess from './PaymentSuccess';
import Undertaking from './Undertaking';
import AccountUpgrade from './AccountUpgrade';
import LandingPage from './LandingPage';
import EntityApproval from './EntityApproval';
import EntityApprovalDocs from './EntityApprovalDocs';

const permitPages: any[] = [
  ...Home,
  ...Login,
  ...NotFound,
  ...ContinueProcess,
  ...ApplicationSubmitted,
  ...ApplicationWaiting,
  ...ApplicationRejected,
  ...ApplicationApproved,
  ...ApplicationReturned,
  ...Summary,
  ...WaitingPayment,
  ...PaymentFailed,
  ...PaymentSuccess,
  ...Undertaking,
  ...AccountUpgrade,
  ...LandingPage,
  ...EntityApproval,
  ...EntityApprovalDocs,
];

export default permitPages;
