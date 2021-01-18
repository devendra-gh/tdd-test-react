/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  f1_smartPassProps_onClick,
  f2_uaePassProps_onClick,
} from '../../../pages/login/functions';

jest.mock('client/services/fetch');

describe('pages/login/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      loggedIn: false,
      actions: {
        showSidebar: {
          update: jest.fn(),
        },
        smartPassURL: {
          update: jest.fn(),
        },
        uaePassURL: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
    it('should properly call', async () => {
      await init({ ...props, loggedIn: true });
    });
  });

  describe('onPageInit functions', () => {
    it('should properly call', async () => {
      await onPageInit(props);
    });

    it('should properly call', async () => {
      props.loggedIn = true;
      await onPageInit(props);
    });
  });

  describe('f1_smartPassProps_onClick functions', () => {
    it('should properly call', async () => {
      await f1_smartPassProps_onClick(props);
    });
  });

  describe('f2_uaePassProps_onClick functions', () => {
    it('should properly call', async () => {
      await f2_uaePassProps_onClick(props);
    });
  });
});
