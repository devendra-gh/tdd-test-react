import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  page404: () => import('./Page404'),
  home: () => import('./Home'),
  userForm: () => import('./UserForm'),
  successInfo: () => import('./SuccessInfo'),
  notice: () => import('./Notice'),
  returnDocuments: () => import('./ReturnDocuments'),
  header: Header,
  footer: Footer,
};

export default templates;
