import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/investorProtection/pages/InvestorLanding/onClick', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
  });

  it('onClick should push to history', () => {
    functions.onClick(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});
