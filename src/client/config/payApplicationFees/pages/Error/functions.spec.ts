import { cleanup } from '@testing-library/react';
import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error/functions', () => {
  const props = {
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
    it('should call init', () => {
      const result = functions.init(props);
      expect(result).toBeInstanceOf(Object);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should call onClick', async () => {
      const result = functions.onClick(props);
      expect(result).toBeInstanceOf(Object);
    });
  });
});
