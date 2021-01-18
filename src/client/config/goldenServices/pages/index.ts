import landingPage from './Landing';
import addApplicationInformationPage from './AddApplicationInformation';
import makePayment from './MakePayment';
import paymentInProgress from './PaymentInProgress';
import paymentFail from './PaymentFail';
import submitted from './Submitted';
import appointmentSummary from './AppointmentSummary';
import continueProcess from './ContinueProcess';

const goldenServicesPages = [
  ...landingPage,
  ...addApplicationInformationPage,
  ...submitted,
  ...makePayment,
  ...paymentInProgress,
  ...paymentFail,
  ...appointmentSummary,
  ...continueProcess,
];

export default goldenServicesPages;
