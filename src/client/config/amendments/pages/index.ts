import Welcome from './Welcome';
import Landing from './Landing';
import Login from './Login';
import AccountUpgrade from './AccountUpgrade';
import SelectLicence from './SelectLicence';
import Category from './Category';
import makeAmendments from './makeAmendments';
import dedApproval from './dedApproval';
import makePayment from './makePayment';
import applicationSummary from './applicationSummary';

import WentWrong from './WentWrong';
import NotFound from './NotFound';
import NoInformation from './NoInformation';
import ContinueProcess from './ContinueProcess';
import PageNotFound from './404';
import NoActiveLicence from './NoActiveLicence';

const amendmentsPages = [
  ...Welcome,
  ...Landing,
  ...Login,
  ...AccountUpgrade,
  ...SelectLicence,
  ...Category,
  ...makeAmendments,
  ...dedApproval,
  ...makePayment,
  ...applicationSummary,
  ...WentWrong,
  ...NotFound,
  ...NoInformation,
  ...ContinueProcess,
  ...PageNotFound,
  ...NoActiveLicence,
];

export default amendmentsPages;
