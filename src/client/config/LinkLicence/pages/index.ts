import home from './Home';
import findLicence from './FindLicence';
import login from './Login';
import summary from './Summary';
import error from './Error';
import notFound from './NotFound';
// import accountUpgrade from './AccountUpgrade';

const pages: any[] = [
  ...home,
  ...login,
  ...findLicence,
  ...summary,
  ...error,
  ...notFound,
];

export default pages;
