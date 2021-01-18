import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  home: () => import('./Home'),
  category: () => import('./Category'),
  login: () => import('../../templates/Login'),
  header: Header,
  footer: Footer,
};

export default templates;
