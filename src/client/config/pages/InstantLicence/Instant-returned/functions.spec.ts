import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm', () => ({
  message: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/pages/InstantLicence/Instant-returned/index', () => {
  let props: any;
  let mockBpm: any;

  beforeEach(() => {
    mockBpm = bpm;

    props = {
      history: {
        push: jest.fn(),
      },
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('redirect', () => {
    it('should initialize redirect call', async () => {
      await functions.redirect(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('redirect', () => {
    it('should be instance of function', () =>
      expect(functions.redirect).toBeInstanceOf(Function));

    it('should properly handle message failure', async () => {
      await functions.redirect(props);
      await mockBpm.message();
    });
  });
});
