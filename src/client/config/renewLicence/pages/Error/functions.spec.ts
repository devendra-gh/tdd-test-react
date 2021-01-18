import { cleanup } from '@testing-library/react';
import functions from './functions';

jest.mock('../../config');
jest.mock('client/services/bpm', () => ({
  message: jest.fn().mockReturnValueOnce({
    success: true,
    data: {},
  }),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error/functions', () => {
  const props = {
    businessKey: '123',
    form: {},
    instanceId: '234',
    history: {
      push: jest.fn(),
    },
    actions: {
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

  afterEach(() => {
    cleanup();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('init', () => {
    it('should call init', async () => {
      await functions.init(props);
      expect(props.actions.form.update).nthCalledWith(1, {
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
