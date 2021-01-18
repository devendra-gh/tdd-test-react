import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/summary', () => {
  beforeEach(() => {});
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should export onPageInit Function', () => {
    expect(index).toBeInstanceOf(Array);
  });

  it('should redirect to no-fine page when no feeItems on page init', () => {
    const configuration = index[0];
    const pageInit = configuration.props.onPageInit;
    const pageInitProps = {
      fees: '',
      history: {
        push: jest.fn(),
      },
      actions: {
        formBusinessLicenceFine: {
          update: jest.fn(),
        },
      },
    };
    pageInit(pageInitProps);
    pageInitProps.history.push('/');
    expect(pageInitProps.history.push).toBeCalled();
  });

  it('should redirect to no-fine page when feeItems on page init', () => {
    const configuration = index[0];
    const pageInit = configuration.props.onPageInit;
    const feeItems = JSON.stringify([{ FINE_AMT: 10 }]);
    const pageInitProps = {
      fees: '',
      feeItems,
      history: {
        push: jest.fn(),
      },
      actions: {
        formBusinessLicenceFine: {
          update: jest.fn(),
        },
      },
    };
    pageInit(pageInitProps);
    pageInitProps.history.push('/');
    expect(pageInitProps.history.push).toBeCalled();
  });
});
