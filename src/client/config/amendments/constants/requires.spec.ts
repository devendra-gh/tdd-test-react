import * as functions from './requires';

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
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_CUSTOM_LOGIN', () => {
    it('should be instance of function REQUIRES_CUSTOM_LOGIN', () =>
      expect(functions.REQUIRES_CUSTOM_LOGIN).toBeInstanceOf(Object));

    it('should properly function REQUIRES_CUSTOM_LOGIN with success response', async () => {
      await functions.REQUIRES_CUSTOM_LOGIN.test(props);
    });

    it('should properly function REQUIRES_CUSTOM_LOGIN with success response', async () => {
      props.loggedIn = false;
      await functions.REQUIRES_CUSTOM_LOGIN.test(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_BUSINESS_KEY', () => {
    it('should be instance of function REQUIRES_BUSINESS_KEY', () =>
      expect(functions.REQUIRES_BUSINESS_KEY).toBeInstanceOf(Object));

    it('should properly function REQUIRES_BUSINESS_KEY with success response', async () => {
      await functions.REQUIRES_BUSINESS_KEY.test(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_SOP3', () => {
    it('should be instance of function REQUIRES_SOP3', () =>
      expect(functions.REQUIRES_SOP3).toBeInstanceOf(Object));

    it('should properly function REQUIRES_SOP3 with success response', async () => {
      await functions.REQUIRES_SOP3.test(props);
    });
  });
});
