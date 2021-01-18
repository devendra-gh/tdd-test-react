/* eslint-disable camelcase */
import {
  init,
  onPageInit,
  call_f1_onChange,
  call_f2_onRemove,
  f3_onClick,
  f4_onClick,
} from '../../../pages/application-returned/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/getData.ts', () => ({
  uploadDocumentToDed: jest
    .fn()
    .mockResolvedValueOnce({
      code: '200',
    })
    .mockRejectedValueOnce(false),
}));

describe('pages/application-returned/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      licenseNumber: '123',
      capId: '123',
      files: [{ fileId: '123' }],
      applicationStatusComments: 'test',
      actions: {
        loading: {
          update: jest.fn(),
        },
        feedbackStatements: {
          update: jest.fn(),
        },
        files: {
          update: jest.fn(),
        },
        returnedSubmitDisabled: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should call', () => {
      init(props);
    });
  });

  describe('onPageInit functions', () => {
    it('should call', () => {
      onPageInit(props);
    });
  });

  describe('call_f1_onChange functions', () => {
    it('should call', () => {
      call_f1_onChange(props)(['test']);
    });
  });

  describe('call_f2_onRemove functions', () => {
    it('should call', () => {
      call_f2_onRemove(props)(['test']);
    });
  });

  describe('f3_onClick functions', () => {
    it('should call', async () => {
      await f3_onClick(props);
    });
  });

  describe('f4_onClick functions', () => {
    it('should call', async () => {
      await f4_onClick(props);
    });

    it('should call 2', async () => {
      await f4_onClick(props);
    });
  });
});
