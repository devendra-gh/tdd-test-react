/* eslint-disable camelcase */
import { init } from '../../../pages/login/functions';

jest.mock('client/services/bpm');

describe('pages/login/functions', () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      hostname: 'http://localhost:3000',
      protocol: 'http:',
      writable: true,
    },
  });

  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
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
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('functions', () => {
    it('should call', () => {
      init(props);
    });

    it('should call 2', () => {
      global.window = Object.create(window);
      Object.defineProperty(window, 'location', {
        value: {
          hostname: 'http://journeys-stg.tamm',
          protocol: 'http:',
          writable: true,
        },
      });
      props.loggedIn = true;
      init(props);
    });
  });
});
