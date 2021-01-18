import index from './index';

jest.mock('./functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusLanding/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        const steps = item.steps({
          addEconomicActivitySteps: 'addEconomicActivitySteps',
        });
        expect(steps).toBeDefined();
        // expect(steps).toContain('addEconomicActivitySteps');
      }
    });
  });
  it('Check helpfulBlock onChange', () => {
    const res = index[0].props.helpfulBlock.onChange();
    expect(res).toBeUndefined();
  });
  it('Check callField onChange', () => {
    const res = index[0].props.helpfulBlock.callField.onChange();
    expect(res).toBeUndefined();
  });
  it('Check commentField onChange', () => {
    const res = index[0].props.helpfulBlock.commentField.onChange();
    expect(res).toBeUndefined();
  });
  it('Check emailFeild onChange', () => {
    const res = index[0].props.helpfulBlock.emailField.onChange();
    expect(res).toBeUndefined();
  });
  it('Check submitButton onClick', () => {
    const res = index[0].props.helpfulBlock.submitButton.onClick();
    expect(res).toBeUndefined();
  });
  it('Check telephoneFeild onChange', () => {
    const res = index[0].props.helpfulBlock.telephoneField.onChange();
    expect(res).toBeUndefined();
  });
});
