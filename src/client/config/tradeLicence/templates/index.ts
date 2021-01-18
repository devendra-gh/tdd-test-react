import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  notice: () => import('./Notice'),
  home: () => import('./Home'),
  login: () => import('./Login'),
  licenceForm: () => import('./LicenceForm'),
  summary: () => import('./Summary'),
  welcome: () => import('./welcome'),
  header: Header,
  footer: Footer,
};

export default templates;
