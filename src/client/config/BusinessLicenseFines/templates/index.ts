import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  landing: () => import('./Landing'),
  payFineForm: () => import('./PayFineForm'),
  finesSummary: () => import('./FinesSummary'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
