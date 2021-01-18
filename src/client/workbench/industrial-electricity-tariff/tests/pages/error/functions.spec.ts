/* eslint-disable camelcase */
import { init, f1_onClick } from '../../../pages/error/functions';

jest.mock('client/services/bpm');

describe('pages/error/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      businessKey: '12345',
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
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

    it('should call', async () => {
      await f1_onClick(props);
    });

    it('should call', async () => {
      props.businessKey = '';
      await f1_onClick(props);
    });
  });
});
