import licencePages from './Licence';
import tradeNamePages from './EconomicName';
import submitted from './Submitted';
import initialRegistration from './InitialRegistration';
import finalRegistration from './FinalRegistration';
import continueProcess from './ContinueProcess';

const pages = [
  ...licencePages,
  ...tradeNamePages,
  ...submitted,
  ...initialRegistration,
  ...finalRegistration,
  ...continueProcess,
];

export default pages;
