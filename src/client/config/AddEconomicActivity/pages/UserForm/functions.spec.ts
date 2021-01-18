import { cleanup } from '@testing-library/react';
import bpm from 'client/services/bpm';
import functions from './functions';

jest.mock('client/services/bpm');
jest.mock('client/services/fetch');
jest.mock('../../utils/redirect');
jest.mock('../../utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusForm/functions', () => {
  let props: any;
  const mockBpm: any = bpm.start;

  beforeEach(() => {
    props = {
      user: {
        'First Name EN': 'test',
        'Last Name EN': 'test',
        'User Email': 'test@test.com',
        Mobile: '+971521111111',
      },
      formData: {
        mobileNumber: '+971589004745',
      },
      actions: {
        formData: {
          update: jest.fn(),
        },
        helperData: {
          update: jest.fn(),
        },
        newActivityApiData: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    it('should properly called onPageInit', async () => {
      functions.onPageInit(props);
      expect(props.actions.formData.update).toHaveBeenCalled();
    });

    it('should properly called onPageInit with fallback', async () => {
      props.user = null;
      functions.onPageInit(props);
      expect(props.actions.formData.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onChange', () => {
    it('should properly called onChange', async () => {
      functions.onChange(props, 'test', 'name');
      expect(props.actions.formData.update).toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('validation', () => {
    it('should properly called validation', async () => {
      const formData = {
        arabicActivityName: 'عرض',
        englishActivityName: 'test',
        arabicActivityDescription: 'عرض',
        englishActivityDescription: 'test',
        name: 'Mahmoud Wisam Mo',
        email: 'persona.adoss1@gmail.com',
        mobileNumber: '971589004745',
      };

      functions.validation(formData);
    });

    it('should properly called validation fallback', async () => {
      const formData = {
        arabicActivityName: '',
        englishActivityName: '',
        arabicActivityDescription: '',
        englishActivityDescription: '',
        name: '',
        email: '',
        mobileNumber: '',
      };

      functions.validation(formData);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onSubmit', () => {
    it('should properly called onSubmit with success', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: '1',
            id: '1',
          },
        });
      });

      functions.onSubmit(props);
    });

    it('should properly called onSubmit with success no user data', async () => {
      const props2 = {
        ...props,
        user: null,
      };

      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          data: {
            businessKey: '1',
            id: '1',
          },
        });
      });
      functions.onSubmit(props2);
    });

    it('should properly called onSubmit with success is false', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          message: 'Error',
          data: null,
        });
      });

      functions.onSubmit(props);
    });

    it('should properly called onSubmit with reject', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.reject(new Error('something bad happened'));
      });
      functions.onSubmit(props);
    });
  });
});
