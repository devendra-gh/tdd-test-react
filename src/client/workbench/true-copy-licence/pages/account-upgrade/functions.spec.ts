/* eslint-disable camelcase */
import { f1_onClick } from './functions';

jest.mock('client/services/fetch');

describe('economicRecordCertificate/pages/start', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
    };
  });

  describe('f1_onClick functions', () => {
    it('should properly call f1_onClick', async () => {
      await f1_onClick(props);
    });
  });
});
