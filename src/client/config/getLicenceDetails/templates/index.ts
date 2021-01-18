import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'), // Default required component
  page404: () => import('./Page404'),
  licenceFormTemplate: () => import('./LicenceForm'),
  licenceSummaryTemplate: () => import('./LicenceSummary'),
  landingTemplate: () => import('./Landing'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
