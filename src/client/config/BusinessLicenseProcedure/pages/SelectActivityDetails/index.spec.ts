import index from './index';

jest.mock('./functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Result/index', () => {
  const props = {
    history: { push: jest.fn() },
    formCompanyDetails: {
      location: 'location',
      legalForm: 'legalForm',
    },
  };
  it('should export object', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        const steps = item.steps({
          businessLicenseProcedureSteps: 'businessLicenseProcedureSteps',
        });
        expect(steps).toBe('businessLicenseProcedureSteps');
      }
    });
  });

  it('not redirects if necessary data is present', () => {
    index[0].init(props);
    expect(props.history.push).not.toBeCalled();
  });

  it('redirect if necessary data not present', () => {
    props.formCompanyDetails = {
      location: '',
      legalForm: '',
    };
    index[0].init(props);
    expect(props.history.push).toBeCalled();
  });
});
