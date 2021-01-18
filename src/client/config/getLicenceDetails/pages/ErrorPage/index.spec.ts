import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error/index', () => {
  const props = {
    tradeLicence: {
      licenceNo: 'CN-2344343',
      isLoading: false,
      data: null,
      errorCode: 204,
    },
    actions: {
      stepsStatus: {
        update: jest.fn(),
      },
    },
  };

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({
          getLicenceDetailsSteps: 'getLicenceDetailsSteps',
          tradeLicence: {
            licenceNo: 'CN-2344343',
            isLoading: false,
            data: null,
            errorCode: 500,
          },
        });
      }
    });
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({
          getLicenceDetailsSteps: 'getLicenceDetailsSteps',
          tradeLicence: {
            licenceNo: 'CN-2344343',
            isLoading: false,
            data: null,
            errorCode: 204,
          },
        });
      }
    });
  });
  it('should properly call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    props.tradeLicence.errorCode = 500;
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
  it('should properly call init', () => {
    index[0].init(props);
    expect(props.actions.stepsStatus.update).toHaveBeenCalled();
  });
});
