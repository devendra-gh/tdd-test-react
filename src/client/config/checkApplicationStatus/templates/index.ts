import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  notice: () => import('./Notice'),
  statusForm: () => import('./Form'),
  statusInfo: () => import('./Info'),
  statusLanding: () => import('./Landing'),
  header: Header,
  footer: Footer,
};

export default templates;
