import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  home: () => import('./Home'),
  notice: () => import('./Notice'),
  paymentSummary: () => import('./Payment'),
  accountUpgrade: () => import('./AccountUpgrade'),
  page404: () => import('./Page404'),
  header: Header,
  footer: Footer,
};

export default templates;
