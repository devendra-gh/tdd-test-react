import businessLicenseProcedureHomePage from './Home';
import businessLicenseProcedureSelectCompanyDetails from './SelectCompanyDetails';
import businessLicenseProcedureSelectActivityDetails from './SelectActivityDetails';
import businessLicenseProcedureResult from './Result';
import businessLicenseProcedureError from './Error';
import notFound from './ NotFound';

const pages = [
  ...businessLicenseProcedureHomePage,
  ...businessLicenseProcedureSelectCompanyDetails,
  ...businessLicenseProcedureSelectActivityDetails,
  ...businessLicenseProcedureResult,
  ...businessLicenseProcedureError,
  ...notFound,
];

export default pages;
