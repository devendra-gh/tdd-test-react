import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('WaitingPage/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });

  it('should properly call onPageInit', () => {
    window.open = jest.fn();
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
        stepsStatus: {
          update: jest.fn(),
        },
      },
      form: {
        capId: 'Cap-Id',
        submittedDate: '28/10/1994',
        applicationStatus: 'approved',
        applicationCode: '1234',
        transactionNumber: '1234556',
      },
      paymentLink: '/test',
    };
    const transactionNumber = props.form;
    const submittedDate = props.form;
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    expect(transactionNumber).toBeInstanceOf(Object);
    expect(submittedDate).toBeInstanceOf(Object);
  });
});
