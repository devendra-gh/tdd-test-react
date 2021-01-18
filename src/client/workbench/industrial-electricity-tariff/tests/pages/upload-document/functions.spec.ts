/* eslint-disable camelcase */
import {
  init,
  call_f1_onChange,
  f2_onRemove,
  call_f3_onChange,
  f4_onRemove,
  call_f5_onChange,
  f6_onRemove,
  call_f7_onChange,
  f8_onRemove,
  call_f9_onChange,
  f10_onRemove,
  call_f11_onChange,
  f12_onRemove,
  call_f13_onChange,
  f14_onRemove,
  call_f15_onChange,
  f16_onRemove,
  f17_onClick,
  call_f18_onClick,
  f19_onClick,
} from '../../../pages/upload-document/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

describe('pages/upload-document/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      isPrivacyWaiverChecked: 'test',
      fileUploads: 'gesrt',
      user: {
        'User Email': 'test',
        Mobile: 'test',
        IDN: 'test',
      },
      actions: {
        steps: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        document0: {
          update: jest.fn(),
        },
        document1: {
          update: jest.fn(),
        },
        document2: {
          update: jest.fn(),
        },
        document3: {
          update: jest.fn(),
        },
        document4: {
          update: jest.fn(),
        },
        document5: {
          update: jest.fn(),
        },
        document6: {
          update: jest.fn(),
        },
        document7: {
          update: jest.fn(),
        },
        fileUploads: {
          update: jest.fn(),
        },
        isSubmitButtonDisabled: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
        startProcess: jest
          .fn()
          .mockResolvedValueOnce({
            data: {
              success: true,
              data: {
                businessKey: '12345',
                id: '12345',
              },
            },
          })
          .mockResolvedValueOnce({ data: { success: false } }),
      },
    };
  });

  describe('functions', () => {
    it('should call', () => {
      init(props);
    });

    it('should call', () => {
      call_f1_onChange(props)([{ status: 'success' }]);
      call_f1_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      f2_onRemove(props);
    });

    it('should call', () => {
      call_f3_onChange(props)([{ status: 'success' }]);
      call_f3_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      f4_onRemove(props);
    });

    it('should call', () => {
      call_f5_onChange(props)([{ status: 'success' }]);
      call_f5_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      f6_onRemove(props);
    });

    it('should call', () => {
      call_f7_onChange(props)([{ status: 'success' }]);
      call_f7_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      f8_onRemove(props);
    });

    it('should call', () => {
      call_f9_onChange(props)([{ status: 'success' }]);
      call_f9_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      f10_onRemove(props);
    });

    it('should call', () => {
      call_f11_onChange(props)([{ status: 'success' }]);
      call_f11_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      call_f13_onChange(props)([{ status: 'success' }]);
      call_f13_onChange(props)([{ status: 'false' }]);
    });

    it('should call', () => {
      call_f15_onChange(props)([{ status: 'success' }]);
      call_f15_onChange(props)([{ status: 'false' }]);
    });

    it('should call', async () => {
      await call_f18_onClick(props)();
      await call_f18_onClick(props)();
    });

    it('should call', () => {
      f12_onRemove(props);
    });

    it('should call', () => {
      f14_onRemove(props);
    });

    it('should call', () => {
      f16_onRemove(props);
    });

    it('should call', () => {
      f17_onClick(props);
    });

    it('should call', () => {
      f19_onClick(props);
    });
  });
});
