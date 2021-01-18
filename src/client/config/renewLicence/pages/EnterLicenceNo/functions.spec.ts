// import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/fetch');

jest.mock('client/services/bpm', () => ({
  start: jest
    .fn()
    .mockReturnValueOnce({
      success: true,
      data: {
        id: '1',
        businessKey: 'so',
      },
    })
    .mockRejectedValueOnce(new Error('error'))
    .mockRejectedValueOnce(undefined),
  message: jest
    .fn()
    .mockReturnValueOnce({
      success: true,
      data: {},
    })
    .mockReturnValueOnce({
      success: false,
      data: {},
    })
    .mockRejectedValueOnce(new Error('error'))
    .mockRejectedValueOnce(undefined),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('EnterLicence/functions', () => {
  const props = {
    stepsStatus: {
      abc: 'abc',
    },
    submitLicence: {
      data: {
        owner: {},
      },
    },
    user: {
      IDN: '123',
    },
    history: {
      push: jest.fn(),
    },
    actions: {
      stepsStatus: {
        update: jest.fn(),
      },
      form: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
    },
  };

  // let mockBpm: any;
  beforeEach(() => {
    // mockBpm = bpm;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit case 1', async () => {
    jest.fn().mockReturnValueOnce({
      success: false,
      data: {
        id: '1',
        businessKey: 'so',
      },
    });
    await functions.onSubmit(
      '1234',
      { setLoading: jest.fn(), setNetworkError: jest.fn() },
      props,
    );
    // await mockBpm.start();
    expect(props.actions.instanceId.update).toHaveBeenCalled();
  });

  it('should properly call onSubmit case 2', async () => {
    const newProps = { ...props, instanceId: 1, businessKey: 2 };
    await functions.onSubmit(
      '1234',
      { setLoading: jest.fn(), setNetworkError: jest.fn() },
      newProps,
    );
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
  });

  it('should properly call onSubmit case 3', async () => {
    const newProps = { ...props, instanceId: 1, businessKey: undefined };
    await functions.onSubmit(
      '1234',
      { setLoading: jest.fn(), setNetworkError: jest.fn() },
      newProps,
    );
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
  });
});
