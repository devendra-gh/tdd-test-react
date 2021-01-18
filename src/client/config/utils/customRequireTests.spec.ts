import {
  REQUIRES_UPGRADE_SOP3,
  REQUIRES_CUSTOM_LOGIN,
} from './customRequireTests';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/constant/requires', () => {
  let props: any;
  beforeEach(() => {
    props = {
      loggedIn: true,
      user: { Type: 'SOP3' },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_SOP3', () => {
    it('should be instance of function REQUIRES_UPGRADE_SOP3', () =>
      expect(REQUIRES_UPGRADE_SOP3).toBeInstanceOf(Object));

    it('should properly function REQUIRES_SOP3 with props', () => {
      REQUIRES_UPGRADE_SOP3.test(props);
    });

    it('should properly function REQUIRES_SOP3 with fallback', () => {
      const props2 = {
        ...props,
        user: { Type: 'SOP1' },
      };
      REQUIRES_UPGRADE_SOP3.test(props2);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_CUSTOM_LOGIN', () => {
    it('should be instance of function REQUIRES_CUSTOM_LOGIN', () =>
      expect(REQUIRES_CUSTOM_LOGIN).toBeInstanceOf(Object));

    it('should properly function REQUIRES_CUSTOM_LOGIN with success response', async () => {
      await REQUIRES_CUSTOM_LOGIN.test(props);
    });

    it('should properly function REQUIRES_CUSTOM_LOGIN with success response', async () => {
      props.loggedIn = false;
      await REQUIRES_CUSTOM_LOGIN.test(props);
    });
  });
});
