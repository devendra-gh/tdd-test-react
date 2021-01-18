import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  custom: () => import('./Custom'),
  header: Header,
  footer: Footer,
};

export default templates;
