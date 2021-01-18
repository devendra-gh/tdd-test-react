import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  form: () => import('./Form'),
  serviceType: () => import('./ServiceType'),
  landing: () => import('./Landing'),
  login: () => import('./Login'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
