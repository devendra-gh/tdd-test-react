import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/account-upgrade/functions', () => {
  let props: any;
  beforeEach(() => {
    window.location.href = '';
    props = {
      loggedIn: true,
      user: {
        Type: 'SOP3',
      },
      history: [],
    };
  });

  it('init should redirect if loggedIn', () => {
    functions.init(props);
  });

  it('init should do nothing if not loggedIn', () => {
    props.loggedIn = false;
    functions.init(props);
    expect(props.history).not.toContain('/');
  });
});
