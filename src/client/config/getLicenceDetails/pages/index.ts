import licenceNumber from './LicenceNumber';
import licenceLanding from './Landing';
import errorPage from './ErrorPage';
import notFound from './NotFound';

const getLicenceDetailsPages = [
  ...licenceNumber,
  ...licenceLanding,
  ...errorPage,
  ...notFound,
];

export default getLicenceDetailsPages;
