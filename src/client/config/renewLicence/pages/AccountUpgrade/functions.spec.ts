import functions from './functions';
import { BASE_PATH } from '../../routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('renewlicense/pages/account-upgrade/functions', () => {
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

  it('init should redirect if loggedIn', () => {
    functions.init(props);
    expect(props.history).toContain(BASE_PATH);
  });

  it('init should do nothing if not loggedIn', () => {
    props.loggedIn = false;
    functions.init(props);
    expect(props.history).not.toContain('/');
  });
});
