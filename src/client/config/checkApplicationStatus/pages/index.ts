import form from './Form';
import applicationStatusInfo from './StatusInfo';
import landing from './Landing';
import error from './Error';
import notFound from './NotFound';

const pages = [
  ...form,
  ...applicationStatusInfo,
  ...landing,
  ...error,
  ...notFound,
];

export default pages;
