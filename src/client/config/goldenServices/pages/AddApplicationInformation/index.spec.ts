import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('goldenServices/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ goldenServicesSteps: 'goldenServicesSteps' });
      }
    });
  });

  it('should check form fields', () => {
    index[0].props.form.forEach((group: any) => {
      group.fields.forEach((field: any) => {
        expect(field).toBeInstanceOf(Object);
      });
    });
  });
});
