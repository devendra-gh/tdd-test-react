import PaymentWaiting from './PaymentWaiting';
import NewspaperPublishing from './NewspaperPublishing';
import ApplicationProgress from './ApplicationProgress';
import ApplicationApproved from './ApplicationApproved';

const applicationSummaryPages = [
  ...PaymentWaiting,
  ...NewspaperPublishing,
  ...ApplicationProgress,
  ...ApplicationApproved,
];

export default applicationSummaryPages;
