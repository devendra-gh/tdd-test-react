import { IVariables } from '@tamm/app-composer';
import { AMENDMENT_TYPES } from './amendmentObjects';

export const OWNER = 'Owner';

const REPRESENTATIVE_TYPE: IVariables = {
  [AMENDMENT_TYPES.LOCAL_AGENT]: 'Sponsor',
  [AMENDMENT_TYPES.PARTNERS]: 'Partner',
  [AMENDMENT_TYPES.MANAGERS]: 'Manager',
  [AMENDMENT_TYPES.HEIRS]: 'Heirs Representative',
  [AMENDMENT_TYPES.REPRESENTATIVES]: 'Commissioner to Sign',
};

export default REPRESENTATIVE_TYPE;
