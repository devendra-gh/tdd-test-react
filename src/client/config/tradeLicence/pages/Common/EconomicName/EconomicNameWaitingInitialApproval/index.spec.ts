import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EconomicNamePayment/index', () => {
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit', () => {
    const props = {
      actions: {
        economicNameCapId: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
      submitDate: 'submit-date',
      tnNumber: 'TN-NUMBER',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onClick button', () => {
    const props = {
      actions: {
        economicNameCapId: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
      capId: 'submit-date',
      tnNumber: 'TN-NUMBER',
    };

    window.open = jest.fn();
    index[0].props.buttons[0].onClick(props);
    expect(window.open).toBeCalled();
  });

  it('should properly call onClick button without capId and tnNumber', () => {
    const props = {
      actions: {
        economicNameCapId: {
          update: jest.fn(),
        },
        tnNumber: {
          update: jest.fn(),
        },
      },
    };

    window.open = jest.fn();
    index[0].props.buttons[0].onClick(props);
    expect(window.open).toBeCalled();
  });
});
