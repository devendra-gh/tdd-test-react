import PaymentSummary from './PaymentSummary';
import PaymentFailed from './PaymentFailed';

const makePaymentPages = [...PaymentSummary, ...PaymentFailed];

export default makePaymentPages;
