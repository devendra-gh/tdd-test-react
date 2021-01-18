import Header from 'client/templates/AmendmentsHeader';
import Footer from 'client/templates/Footer';

const templates = {
  start: () => import('./Start'),
  welcome: () => import('./Welcome'),
  login: () => import('./Login'),
  accountUpgrade: () => import('./AccountUpgrade'),
  smartpassLogin: () => import('./SmartpassLogin'),
  selectlicence: () => import('./SelectLicence'),
  category: () => import('./Category'),
  ownership: () => import('./Ownership'),
  switchLegalForm: () => import('./SwitchLegalForm'),
  activities: () => import('./Activities'),
  profile: () => import('./Profile'),
  notice: () => import('./Notice'),
  summary: () => import('./Summary'),
  upload: () => import('./Upload'),
  contactInfo: () => import('./ContactInfo'),
  financial: () => import('./Financial'),
  location: () => import('./Location'),
  economicName: () => import('./EconomicName'),
  page404: () => import('./404'),
  header: Header,
  footer: Footer,
};

export default templates;
