import functions from './functions';
import { PATH_ACCOUNT_UPGRADE } from '../../utils/constants/pageRoutes';

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
      history: [],
    };
  });

  it('init should redirect if loggedIn', () => {
    functions.init(props);
    props.user.Type = 'SOP1';
    functions.init(props);
    expect(props.history).toContain(PATH_ACCOUNT_UPGRADE);
  });

  it('init should do nothing if not loggedIn', () => {
    props.loggedIn = false;
    functions.init(props);
    expect(props.history).not.toContain('/');
  });
});
