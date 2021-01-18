import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  home: () => import('./Home'),
  selectLicence: () => import('./SelectLicence'),
  notice: () => import('./Notice'),
  paymentSummary: () => import('./Payment'),
  accountUpgrade: () => import('./AccountUpgrade'),
  header: Header,
  footer: Footer,
};

export default templates;
