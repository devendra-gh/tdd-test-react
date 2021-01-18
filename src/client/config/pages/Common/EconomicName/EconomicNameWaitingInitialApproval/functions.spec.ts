import { IVariables } from '@tamm/app-composer';
import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('EconomicNameWaitingInitialApproval', () => {
  const state: IVariables = {
    economicLicense: {
      licenceType: {
        licenceType: '',
      },
    },
  };

  it('should call getStep', () => {
    functions.getStep(state);

    state.economicLicense.licenceType.licenceType = 'branchForeign';
    functions.getStep(state);

    state.economicLicense.licenceType.licenceType = 'branchGCC';
    functions.getStep(state);
  });
});
