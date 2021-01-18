/* eslint-disable camelcase */
import { init, onPageInit } from './functions';

jest.mock('client/services/fetch');

describe('economicRecordCertificate/pages/login', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      loggedIn: true,
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
        smartPassURL: {
          update: jest.fn(),
        },
        uaePassURL: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });

    it('should properly call init', async () => {
      props = {
        ...props,
        loggedIn: false,
      };
      await init(props);
    });
  });

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', async () => {
      await onPageInit(props);
    });

    it('should properly call onPageInit', async () => {
      props = {
        ...props,
        loggedIn: false,
      };
      await onPageInit(props);
    });
  });
});
