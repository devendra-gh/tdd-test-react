import bpm from 'client/services/bpm';
import { cleanup } from '@testing-library/react';
import functions from './functions';

jest.mock('client/services/bpm', () => ({
  message: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/business-licence-fine/success/functions', () => {
  let props: any;
  let mockBpm: any;
  window.open = jest.fn();

  beforeEach(() => {
    mockBpm = bpm;
    props = {
      instanceId: '',
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(cleanup);

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('Init', () => {
    it('should initialize init call', async () => {
      props = {
        ...props,
        actions: {
          formBusinessLicenceFine: {
            update: jest.fn(),
          },
        },
      };
      await functions.init(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should be instance of function', () => {
      expect(functions.onClick).toBeInstanceOf(Function);
    });
    it('should update with instanceId', async () => {
      props.instanceId = 'CN-1234567';
      props.actions = {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      };

      await functions.onClick(props);
    });

    it('should update without instanceId', async () => {
      props.instanceId = '';
      props.actions = {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      };

      await functions.onClick(props);
      await mockBpm.message();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onFinish', () => {
    it('should be instance of function', () => {
      expect(functions.onFinish).toBeInstanceOf(Function);
    });
    it('should update with instanceId', async () => {
      props.instanceId = 'CN-1234567';
      props.actions = {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      };

      await functions.onFinish(props);
    });

    it('should update without instanceId', async () => {
      props.instanceId = '';
      props.actions = {
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      };

      await functions.onFinish(props);
      await mockBpm.message();
    });
  });
});
