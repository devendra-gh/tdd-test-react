import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('payApplicationFees/PaymentSummary/index', () => {
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
          feesDetails: {
            update: jest.fn(),
          },
          totalFees: {
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
      history: {
        push: jest.fn(),
      },
      feesDetails: '{}',
      totalFees: 0.0,
      i18n: jest.fn(),
      locale: 'en',
      applicationFeesResult: '',
    };
    const feesDetails = props;
    const totalFees = props;
    const listItems = {
      TraceID: 'rest-12245',
      Result: [
        {
          FeeDescEn: 'Service Fee',
          FeeAmount: '0.16',
        },
        {
          FeeDescEn: 'Request Initial Approval GDRFA',
          FeeAmount: '15.0',
        },
      ],
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    props.applicationFeesResult = 'FEE_API_ERROR';
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

    expect(feesDetails).toBeInstanceOf(Object);
    expect(totalFees).toBeInstanceOf(Object);
    expect(listItems).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit when props.locale not en', () => {
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
          feesDetails: {
            update: jest.fn(),
          },
          totalFees: {
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
      feesDetails: '{}',
      totalFees: 0.0,
      i18n: jest.fn(),
      locale: '',
    };
    const feesDetails = props;
    const totalFees = props;
    const listItems = {
      TraceID: 'rest-12245',
      Result: [
        {
          FeeDescEn: 'Service Fee',
          FeeAmount: '0.16',
        },
        {
          FeeDescEn: 'Request Initial Approval GDRFA',
          FeeAmount: '15.0',
        },
      ],
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    expect(feesDetails).toBeInstanceOf(Object);
    expect(totalFees).toBeInstanceOf(Object);
    expect(listItems).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
