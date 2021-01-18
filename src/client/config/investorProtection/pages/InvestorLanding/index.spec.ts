import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/investorProtection/pages/InvestorLanding/', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        expect(item.steps()).toBeInstanceOf(Array);
      }
    });
  });

  it('Check helpful block onchange', () => {
    index[0].props.helpfulBlock.onChange();
  });
  it('Check helpful call field onchange', () => {
    index[0].props.helpfulBlock.callField.onChange();
  });
  it('Check helpful comment field onchange', () => {
    index[0].props.helpfulBlock.commentField.onChange();
  });
  it('Check helpful email field on change', () => {
    index[0].props.helpfulBlock.emailField.onChange();
  });
  it('Check helpful submitButton on click', () => {
    index[0].props.helpfulBlock.submitButton.onClick();
  });
  it('Check helpful telephone field on change', () => {
    index[0].props.helpfulBlock.telephoneField.onChange();
  });
});
