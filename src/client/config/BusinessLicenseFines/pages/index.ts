import enterLicence from './EnterLicence';
import summary from './Summary';
import waitingPage from './Waiting';
import noFine from './NoFine';
import success from './Success';
import landing from './Landing';
import error from './Error';
import notFound from './NotFound';
import continueProcess from './ContinueProcess';

const businessLicenseFinesPages = [
  ...landing,
  ...summary,
  ...enterLicence,
  ...waitingPage,
  ...noFine,
  ...success,
  ...error,
  ...notFound,
  ...continueProcess,
];

export default businessLicenseFinesPages;
