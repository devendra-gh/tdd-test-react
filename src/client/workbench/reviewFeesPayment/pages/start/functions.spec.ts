/* eslint-disable camelcase */
import { init } from './functions';

jest.mock('client/services/fetch');

describe('economicRecordCertificate/pages/start', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      actions: {
        showSideBar: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
  });
});
