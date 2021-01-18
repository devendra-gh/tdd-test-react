import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  // page404: () => import('./Page404'),
  home: () => import('./Home'),
  notice: () => import('./Notice'),
  findLicence: () => import('./FindLicence'),
  errorTemplate: () => import('./ErrorPage'),
  page404: () => import('./Page404'),
  header: Header,
  footer: Footer,
};

export default templates;
