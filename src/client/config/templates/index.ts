import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  notice: () => import('./Notice'),
  home: () => import('./Home'),
  login: () => import('./Login'),
  licenceForm: () => import('./LicenceForm'),
  moa: () => import('./Moa'),
  summary: () => import('./Summary'),
  // fakeLicenseSubmit: () => import('./FakeSubmit'),
  welcome: () => import('./welcome'),
  smartpassLogin: () => import('./SmartpassLogin'),
  questioner: () => import('./Questioner'),
  test: () => import('./TestTemplate'),
  page404: () => import('./Page404'),
  header: Header,
  footer: Footer,
};

export default templates;
