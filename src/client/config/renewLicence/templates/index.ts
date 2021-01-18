import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  home: () => import('./Home'),
  form: () => import('./Form'),
  summary: () => import('./Summary'),
  fileUploads: () => import('./FileUploads'),
  uploadDocuments: () => import('./UploadDocuments'),
  returnDocuments: () => import('./ReturnDocuments'),
  accountUpgrade: () => import('./AccountUpgrade'),
  notice: () => import('./Notice'),
  page404: () => import('./Page404'),
  header: Header,
  footer: Footer,
};

export default templates;
