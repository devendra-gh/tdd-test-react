import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  home: () => import('./Home'),
  search: () => import('./Search'),
  details: () => import('./Details'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
