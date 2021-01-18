import bpm from 'client/services/bpm';
import functions from './functions';
import { redirectToErrorPage } from '../../utils/redirect';

jest.mock('client/services/bpm', () => ({
  message: jest
    .fn()
    .mockResolvedValueOnce({})
    .mockRejectedValueOnce(new Error('some error')),
}));

jest.mock('../../utils/redirect', () => ({
  redirectToErrorPage: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/no-fine/functions', () => {
  let props: any;
  let mockBpm: any;

  beforeEach(() => {
    mockBpm = bpm;

    props = {
      history: {
        push: jest.fn(),
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
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    });

    it('should properly handle message failure', async () => {
      await functions.onClick(props);
      await mockBpm.message();
      expect(redirectToErrorPage).toHaveBeenCalled();
    });
  });
});
