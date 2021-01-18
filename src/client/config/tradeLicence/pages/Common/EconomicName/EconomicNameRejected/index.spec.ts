import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNameRejected/index', () => {
  it('should export rejected', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit', () => {
    const props = {
      i18n: jest.fn(),
      actions: {
        economicNameCapId: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
      capId: 'Cap-Id',
      tnNumber: 'TN-NUMBER',
      returnedMessage: 'message',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit without tn and return message', () => {
    const props = {
      i18n: jest.fn(),
      actions: {
        economicNameCapId: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
      capId: 'Cap-Id',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
