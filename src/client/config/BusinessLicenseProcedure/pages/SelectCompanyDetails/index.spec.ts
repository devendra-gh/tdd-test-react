import index from './index';

jest.mock('./functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SelectCompanyDetails/index', () => {
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
});
