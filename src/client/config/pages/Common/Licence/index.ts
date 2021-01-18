import approved from './EconomicLicenceApproved';
import dedReturned from './EconomicLicenceDedReturned';
import payment from './EconomicLicencePayment';
import pendingPayment from './EconomicLicencePendingPayment';
import waitingApproval from './EconomicLicenceWaitingApproval';
import waitingInitialApproval from './EconomicLicenceWaitingInitialApproval';
import icaPayment from './EconomicLicenceICApayment';
import pendingIcaPayment from './EconomicLicencePendingICApayment';
import economicLicenceIniitalApprovalReturned from './EconomicLicenceIniitalApprovalReturned';
import rejected from './EconomicLicenceRejected';

const pages = [
  ...pendingPayment,
  ...payment,
  ...approved,
  ...waitingApproval,
  ...waitingInitialApproval,
  ...dedReturned,
  ...icaPayment,
  ...pendingIcaPayment,
  ...economicLicenceIniitalApprovalReturned,
  ...rejected,
];

export default pages;
