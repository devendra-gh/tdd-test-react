import functions from './functions';

jest.mock('client/services/bpm', () => ({
  message: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({
        success: true,
        data: {
          id: 1,
          businessKey: 'test key',
        },
      }),
    )
    .mockReturnValueOnce(
      Promise.resolve({
        success: false,
      }),
    ),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/makePayment/PaymentFailed', () => {
  let props: any;
  let bpmUrl: string;

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    props = {
      businessKey: 'test key',
      actions: {
        resetState: jest.fn(),
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick functions', () => {
    it('should be instance of function', () =>
      expect(functions.onClick).toBeInstanceOf(Function));

    it('should redirect on success', async () => {
      await functions.onClick(bpmUrl)(props);
      expect(props.history.push).toHaveBeenCalled();
    });

    it('should not redirect on failure', async () => {
      await functions.onClick(bpmUrl)(props);
      expect(props.history.push).not.toHaveBeenCalled();
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
