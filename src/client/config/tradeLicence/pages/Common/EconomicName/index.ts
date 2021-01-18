import approved from './EconomicNameApproved';
import dedReturned from './EconomicNameDedReturned';
import initialApprovalReturned from './EconomicNameInitialApprovalReturned';
import payment from './EconomicNamePayment';
import pendingPayment from './EconomicNamePendingPayment';
import waitingApproval from './EconomicNameWaitingApproval';
import waitingInitialApproval from './EconomicNameWaitingInitialApproval';
import rejected from './EconomicNameRejected';

const pages = [
  ...pendingPayment,
  ...payment,
  ...approved,
  ...waitingApproval,
  ...waitingInitialApproval,
  ...initialApprovalReturned,
  ...dedReturned,
  ...rejected,
];

export default pages;
