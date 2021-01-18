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

describe('/pages/Common/Home/functions', () => {
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

  describe('Init', () => {
    it('should initialize init call', async () => {
      await functions.onSubmit('licenceType', props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should be instance of function', () =>
      expect(functions.onSubmit).toBeInstanceOf(Function));

    it('should properly handle message failure', async () => {
      await functions.onSubmit('licenceType', props);
      await mockBpm.message();
    });
  });
});
