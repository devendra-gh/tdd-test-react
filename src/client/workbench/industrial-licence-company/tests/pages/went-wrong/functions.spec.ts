/* eslint-disable camelcase */
import { init, f1_onClick } from '../../../pages/went-wrong/functions';

jest.mock('client/services/bpm');

describe('pages/went-wrong/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      actions: {
        showSidebar: {
          update: jest.fn(),
        },
        somethingWentWrongContent: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        resetState: jest.fn(),
      },
      bpm: {
        message: jest.fn(),
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
  });

  describe('f1_onClick functions', () => {
    it('should properly call', async () => {
      await f1_onClick(props);
    });
  });
});
