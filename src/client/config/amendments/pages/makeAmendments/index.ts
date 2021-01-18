import Ownership from './Ownership';
import SwitchLegalForm from './Ownership/SwitchLegalForm';
import Profile from './Profile';
import Activities from './Activities';
import FinancialDetails from './FinancialDetails';
import Location from './Location';
import TradeName from './TradeName';
import ContactInfo from './ContactInfo';
import Upload from './Upload';

const makeAmendmentsPages = [
  ...Ownership,
  ...SwitchLegalForm,
  ...Profile,
  ...ContactInfo,
  ...Upload,
  ...Activities,
  ...FinancialDetails,
  ...Location,
  ...TradeName,
];

export default makeAmendmentsPages;
