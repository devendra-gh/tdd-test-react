import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/dedApproval/ApplicationRejected', () => {
  let props: any;
  const mockBpm: any = bpm.message;
  // const bpmUrl: string = 'http://test-bpm-url';

  beforeEach(() => {
    props = {
      businessKey: 'test key',
      history: {
        push: jest.fn(),
      },
      actions: {
        amendmentServerError: {
          update: jest.fn(),
          reset: jest.fn(),
        },
      },
    };

    mockBpm.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick functions', () => {
    it('should be instance of function onClick', () =>
      expect(functions.onClick).toBeInstanceOf(Function));

    it('should call function onClick with bpm success', async () => {
      await functions.onClick(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
        actions: {
          amendmentServerError: {
            reset: jest.fn(),
          },
        },
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);

      props = {
        apTransactionNumber: '',
        submitDate: '',
        actions: {
          amendmentServerError: {
            reset: jest.fn(),
          },
        },
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });
});
