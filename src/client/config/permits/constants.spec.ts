import { IVariables } from '@tamm/app-composer';
import { REQUIRES_SOP3, REQUIRES_CUSTOM_LOGIN } from './constants';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/permits/constants', () => {
  let props: IVariables;
  beforeEach(() => {
    props = {
      user: { Type: 'test' },
      loggedIn: false,
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_SOP3', () => {
    it('check if REQUIRES_SOP3.test exhists', () => {
      expect(REQUIRES_SOP3.test).toBeInstanceOf(Function);
    });
    it('check if REQUIRES_SOP3.test returns false', () => {
      expect(REQUIRES_SOP3.test(props)).toBeFalsy();
    });
    it('check if REQUIRES_SOP3.test returns true', () => {
      props.user.Type = 'SOP3';
      expect(REQUIRES_SOP3.test(props)).toBeTruthy();
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('REQUIRES_CUSTOM_LOGIN', () => {
    it('check if exhists', () => {
      expect(REQUIRES_CUSTOM_LOGIN.test).toBeInstanceOf(Function);
    });
    it('check if REQUIRES_SOP3.test returns false', () => {
      expect(REQUIRES_CUSTOM_LOGIN.test(props)).toBeFalsy();
    });
    it('check if REQUIRES_SOP3.test returns false', () => {
      props.loggedIn = true;
      expect(REQUIRES_CUSTOM_LOGIN.test(props)).toBeTruthy();
    });
  });
});
