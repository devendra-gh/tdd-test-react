import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/Login/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      loggedIn: true,
      user: {
        Type: 'SOP3',
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('init should redirect if loggedIn', () => {
    functions.init(props);
    expect(props.history.push).toHaveBeenCalled();

    props.user.Type = 'SOP1';
    functions.init(props);
    expect(props.history.push).toHaveBeenCalled();
  });

  it('init should do nothing if not loggedIn', () => {
    props.loggedIn = false;
    functions.init(props);
    expect(props.history).not.toContain('/');
  });
});
