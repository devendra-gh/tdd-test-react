import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  businessLicenseProcedureHome: () => import('./Home'),
  businessLicenseProcedureSelectCompanyDetails: () =>
    import('./SelectCompanyDetails'),
  businessLicenseProcedureSelectActivityDetails: () =>
    import('./SelectActivityDetails'),
  businessLicenseProcedureResult: () => import('./Result'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
