import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/dedApproval/ApplicationWaiting', () => {
  let props: any;
  const mockBpm: any = bpm.message;
  // const bpmUrl: string = 'http://test-bpm-url';

  beforeEach(() => {
    props = {
      businessKey: 'test key',
      history: {
        push: jest.fn(),
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

  describe('onPageInit functions', () => {
    it('should properly call onPageInit', () => {
      props = {
        apTransactionNumber: 'submit-date',
        submitDate: '13-10-2019',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);

      props = {
        apTransactionNumber: '',
        submitDate: '',
      };
      expect(functions.onPageInit(props)).toBeInstanceOf(Object);
    });
  });
});
