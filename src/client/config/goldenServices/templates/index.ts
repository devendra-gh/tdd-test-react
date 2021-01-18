import Header from 'client/templates/Header';
import Footer from 'client/templates/Footer';

const templates = {
  login: () => import('./Login'),
  landing: () => import('./Landing'),
  serviceForm: () => import('./ServiceForm'),
  submitted: () => import('./Submitted'),
  payment: () => import('./Payment'),
  paymentInProgress: () => import('./PaymentInProgress'),
  paymentFail: () => import('./PaymentFail'),
  summary: () => import('./Summary'),
  notice: () => import('./Notice'),
  header: Header,
  footer: Footer,
};

export default templates;
