import Header from 'client/templates/PermitsHeader';
import Footer from 'client/templates/Footer';

const templates = {
  notice: () => import('./Notice'),
  home: () => import('./Home'),
  login: () => import('./Login'),
  smartpassLogin: () => import('./SmartpassLogin'),
  profile: () => import('./Profile'),
  summary: () => import('./Summary'),
  undertaking: () => import('./Undertaking'),
  permitForm: () => import('./PermitForm'),
  welcome: () => import('./Welcome'),
  page404: () => import('./NotFound'),
  accountUpgrade: () => import('./AccountUpgrade'),
  entityApprovedDocs: () => import('./EntityApprovedDocs'),
  header: Header,
  footer: Footer,
};

export default templates;
