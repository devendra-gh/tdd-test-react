import { IVariables } from '@tamm/app-composer';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicLicencePendingPayment/functions', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      businessKey: 'businessKey',
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should call getCapId', () => {
    const state = {
      licenceCapId: '1234567',
    };
    functions.getCapId(state);
  });

  it('should call with correct params redirect', async () => {
    await functions.redirect(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});
