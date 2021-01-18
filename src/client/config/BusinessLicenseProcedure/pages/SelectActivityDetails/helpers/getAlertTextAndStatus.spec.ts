import { getAlertTextAndStatus } from './getAlertTextAndStatus';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getAlertTextAndStatus', () => {
  beforeEach(() => {});
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getAlertTextAndStatus, network error should be thrown in default case', async () => {
    const errorStates = getAlertTextAndStatus(new Error(''));
    expect(errorStates).toStrictEqual({
      alertText: 'errorMessage.network',
      alertStatus: 'error',
    });
  });

  it('getAlertTextAndStatus, noData error should be thrown in noData case', async () => {
    const errorStates = getAlertTextAndStatus(new Error('errorMessage.noData'));
    expect(errorStates).toStrictEqual({
      alertText: 'errorMessage.noData',
      alertStatus: 'info',
    });
  });
});
