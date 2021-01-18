import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  landing: () => import('./Landing'),
  header: Header,
  footer: Footer,
};

export default templates;
