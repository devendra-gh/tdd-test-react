import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusLanding/functions', () => {
  const props = {
    submitLicence: {
      data: {
        owner: {},
      },
    },
    actions: {
      formCheckApplicationStatus: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
    },
    history: [],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call init with no response', () => {
    expect(functions.init()).toBeUndefined();
  });

  it('should properly call onClick with success response', async () => {
    functions.onClick(props);
    expect(props.history).toContain('/application-status/enter-number');
  });
});
