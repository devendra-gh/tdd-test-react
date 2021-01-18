import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/AccountUpgrade', () => {
  let props: any;
  beforeEach(() => {
    props = {
      loggedIn: true,
      user: {
        Type: 'SOP3',
      },
      history: [],
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init functions', () => {
    it('init should redirect if loggedIn', () => {
      functions.init(props);
      expect(props.history).toContain('/');
    });

    it('init should do nothing if not loggedIn', () => {
      props.loggedIn = false;
      functions.init(props);
      expect(props.history).not.toContain('/');
    });
  });
});
