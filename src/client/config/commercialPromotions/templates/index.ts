import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  search: () => import('./Search'),
  service: () => import('./Home'),
  header: Header,
  footer: Footer,
};

export default templates;
