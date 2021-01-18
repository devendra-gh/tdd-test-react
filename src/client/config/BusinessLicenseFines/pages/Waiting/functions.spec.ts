import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/waiting/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      formBusinessLicenceFine: {
        test: 'test',
      },
      actions: {
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
        ...props.formBusinessLicenceFine,
        isLoading: false,
      });
    });
  });
});
