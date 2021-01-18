import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceNumber/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
      actions: {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        formBusinessLicenceFine: {
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
      await functions.init(props);
      expect(props.actions.formBusinessLicenceFine.update).nthCalledWith(1, {
        licenceNo: '',
        isLoading: false,
      });
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should be instance of function', () =>
      expect(functions.onClick).toBeInstanceOf(Function));

    it('should call with correct params', async () => {
      await functions.onClick(props);
    });
  });
});
