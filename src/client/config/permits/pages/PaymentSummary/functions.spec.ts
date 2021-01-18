import functions from './functions';

jest.mock('client/services/bpm', () => ({
  message: jest.fn().mockReturnValueOnce(
    Promise.resolve({
      success: true,
      data: {
        id: 1,
        businessKey: 'test key',
      },
    }),
  ),
}));

global.console = { ...global.console, log: jest.fn() };

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/PaymentSuccess', () => {
  let props: any;
  let bpmUrl: string;
  window.open = jest.fn();

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    props = {
      businessKey: 'test key',
      stepsStatus: {},
      actions: {
        resetState: jest.fn(),
        stepsStatus: {
          update: jest.fn(),
        },
      },
      paymentLink: 'test',
    };
  });

  it('should be instance of function', () => {
    expect(functions.onClick).toBeInstanceOf(Function);
  });

  it('should update step status on success', async () => {
    await functions.onClick(bpmUrl)(props);
    props.paymentLink = '';
    await functions.onClick(bpmUrl)(props);
  });

  it('should return formatValue', () => {
    const value = 2041;
    functions.formatValue(value);
  });
});
