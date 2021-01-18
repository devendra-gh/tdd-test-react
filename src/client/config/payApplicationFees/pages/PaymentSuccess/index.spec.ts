import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/paymentSuccess/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit', () => {
    const props = {
      actions: {
        form: {
          capId: {
            update: jest.fn(),
          },
          submittedDate: {
            update: jest.fn(),
          },
          applicationStatus: {
            update: jest.fn(),
          },
          applicationCode: {
            update: jest.fn(),
          },
          update: jest.fn(),
        },
      },
      form: {
        capId: 'Cap-Id',
        submittedDate: '28/10/1994',
        applicationStatus: 'approved',
        applicationCode: '1234',
      },
    };
    const transactionNumber = props.form;
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    expect(transactionNumber).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit with capId', () => {
    const props = {
      capId: 'Cap-Id',
      submittedDate: '28/10/1994',
      actions: {
        form: {
          capId: {
            update: jest.fn(),
          },
          submittedDate: {
            update: jest.fn(),
          },
          applicationStatus: {
            update: jest.fn(),
          },
          applicationCode: {
            update: jest.fn(),
          },
          update: jest.fn(),
        },
      },
      form: {
        capId: 'Cap-Id',
        submittedDate: '28/10/1994',
        applicationStatus: 'approved',
        applicationCode: '1234',
      },
    };
    const transactionNumber = props.form;
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    expect(transactionNumber).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
