/* eslint-disable camelcase */
// import bpm from 'client/services/bpm';
import { init } from '../../../pages/continue-process/functions';
import { getMetaDataFromAdlocker } from '../../../sharedFunctions/services';

jest.mock('client/services/fetch');
jest.mock('../../../sharedFunctions/services');

describe('Contact Details', () => {
  let props: any;
  // const mockBpm: any = bpm.message;

  beforeEach(() => {
    props = {
      locale: 'en',
      i18n: jest.fn(i => i),
      businessKey: 'businessKey',
      camundaMessage: true,
      // contactDetailsName: '',
      // contactDetailsMobile: '',
      // contactDetailsEmail: '',
      actions: {
        instanceId: {
          update: jest.fn(),
        },
        resetState: jest.fn(),
        businessKey: {
          update: jest.fn(),
        },
        showSidebar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
      user: {
        'First Name EN': 'firstname',
        'Last Name EN': 'lastname',
        'Full Name AR': 'name',
        IDN: '23456',
      },
      history: {
        location: {
          search: '?instanceId=123456&businessKey=123456&adlAppId=12345',
        },
        push: jest.fn(),
      },
      bpm: {
        state: jest.fn(() => ({ data: { value: '' } })),
        sendMessage: jest.fn(),
        getVariables: jest.fn(() => ({
          data: { emiratesId: { value: '23456' }, value: '' },
        })),
      },
    };
  });

  it('should properly call init', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({
      businessKey: '23456',
      instanceId: '123456',
    }));
    await init(props);
  });
  it('should properly call init with invalid IDN', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({
      businessKey: '23456',
      instanceId: '123456',
    }));
    await init({
      ...props,
      user: { IDN: '3232' },
    });
  });
  it('should properly call init with invalid IDN', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({
      businessKey: '23456',
      instanceId: '123456',
    }));
    await init({
      ...props,
      user: { IDN: '3232' },
      bpm: {
        ...props.bpm,
        getVariables: jest.fn(() => ({
          data: { value: '' },
        })),
      },
    });
  });
  it('should properly call init without search parameters', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({
      businessKey: '23456',
      instanceId: '123456',
    }));
    await init({
      ...props,
      user: { IDN: '3232' },
      history: {
        ...props.history,
        location: {
          search: '?Id=123456',
        },
      },
    });
  });
  it('should properly call init with no data form Adlocker', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({}));
    await init({
      ...props,
      user: { IDN: '3232' },
      bpm: { ...props.bpm, state: jest.fn() },
    });
  });
  it('should properly call init with invalid IDN', async () => {
    const mockGetMetaDataFromAdlocker: any = getMetaDataFromAdlocker;
    mockGetMetaDataFromAdlocker.mockImplementation(() => ({
      businessKey: '23456',
      instanceId: '123456',
    }));
    await init({
      ...props,
      bpm: {
        ...props.bpm,
        getVariables: jest.fn(),
      },
    });
  });
});
