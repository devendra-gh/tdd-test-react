import bpm from 'client/services/bpm';
import { cleanup } from '@testing-library/react';
import functions from './functions';
// import { redirectToErrorPage } from '../../utils/redirect';

// jest.mock('../../utils/redirect', () => ({
//   redirectToErrorPage: jest.fn(),
// }));

jest.mock('client/services/bpm', () => ({
  start: jest
    .fn()
    .mockReturnValueOnce({
      success: true,
      data: {
        id: '1',
        businessKey: 'so',
      },
    })
    .mockResolvedValueOnce({
      success: false,
      data: {
        id: '1',
        businessKey: 'so',
      },
    })
    .mockRejectedValueOnce(new Error('some error')),
  message: jest.fn(),
}));

describe('/business-licence-fine/enter-licence/functions', () => {
  let mockBpm: any;

  beforeEach(() => {
    mockBpm = bpm;
  });

  afterEach(cleanup);

  describe('Init', () => {
    it('should be instance of function', () =>
      expect(functions.init).toBeInstanceOf(Function));

    it('should update init', async () => {
      const props = {
        actions: {
          formBusinessLicenceFine: {
            update: jest.fn(),
          },
        },
      };
      await functions.init(props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('should be instance of function', () =>
      expect(functions.onChange).toBeInstanceOf(Function));

    it('should update', async () => {
      const props = {
        actions: {
          formBusinessLicenceFine: {
            update: jest.fn(),
          },
        },
      };
      await functions.onChange('', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('should be instance of function', () =>
      expect(functions.onSubmit).toBeInstanceOf(Function));

    it('Should call default fallback', async () => {
      const props = {
        instanceId: 'test',
        businessKey: { test: 'test' },
        actions: {
          formBusinessLicenceFine: {
            update: jest.fn(),
          },
        },
      };
      await functions.onSubmit('licenceNumber', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    });

    it('should call else-if', async () => {
      const props = {
        instanceId: 'test',
        businessKey: 'test',
        actions: {
          formBusinessLicenceFine: {
            update: jest.fn(),
          },
        },
      };
      await functions.onSubmit('licenceNumber', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    });

    it('should call if => success == true', async () => {
      const props = {
        instanceId: null,
        businessKey: null,
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
        history: {
          push: jest.fn(),
        },
      };
      await functions.onSubmit('licenceNumber', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
      await mockBpm.start();
      // const data = await mockBpm.start();
      // if (data.success && data.data && data.data.businessKey && data.data.id) {
      //   expect(props.actions.instanceId.update).toHaveBeenCalled();
      //   expect(props.actions.businessKey.update).toHaveBeenCalled();
      //   await mockBpm.message();
      // }
    });

    it('should call if => success == false', async () => {
      const props = {
        instanceId: null,
        businessKey: null,
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
        history: {
          push: jest.fn(),
        },
      };
      await functions.onSubmit('licenceNumber', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
      // expect(redirectToErrorPage).toHaveBeenCalled();
    });

    it('should call if-else => success == true', async () => {
      const props = {
        instanceId: null,
        businessKey: null,
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
        history: {
          push: jest.fn(),
        },
      };
      await functions.onSubmit('licenceNumber', props);
      expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
      // const data = await mockBpm.start();
      // if (data.success && data.data && data.data.businessKey && data.data.id) {
      //   expect(props.actions.instanceId.update).toHaveBeenCalled();
      //   expect(props.actions.businessKey.update).toHaveBeenCalled();
      //   await mockBpm.message();
      // }
    });

    // it('should call if', async () => {
    //   const props = {
    //     instanceId: null,
    //     businessKey: null,
    //     actions: {
    //       instanceId: {
    //         update: jest.fn(),
    //       },
    //       businessKey: {
    //         update: jest.fn(),
    //       },
    //       formBusinessLicenceFine: {
    //         update: jest.fn(),
    //       },
    //     },
    //     history: {
    //       push: jest.fn()
    //     }
    //   };
    //   await functions.onSubmit('licenceNumber', props);
    //   expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    //   const data = await mockBpm.start();
    //   if (data.success && data.data && data.data.businessKey && data.data.id) {
    //     expect(props.actions.instanceId.update).toHaveBeenCalled();
    //     expect(props.actions.businessKey.update).toHaveBeenCalled();
    //     await mockBpm.message();
    //   }
    // });

    // it('should update if => if', async () => {
    //   const props = {
    //     instanceId: undefined,
    //     businessKey: undefined,
    //     actions: {
    //       formBusinessLicenceFine: {
    //         update: jest.fn(),
    //       },
    //       businessKey: {
    //         update: jest.fn(),
    //       },
    //       instanceId: {
    //         update: jest.fn(),
    //       },
    //     },
    //   };
    //   await functions.onSubmit('licenceNumber', props);
    //   expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
    //   expect(props.actions.businessKey.update).toHaveBeenCalled();
    //   const data = await mockBpm.start();
    //   if (data.success && data.data && data.data.businessKey && data.data.id) {
    //     expect(props.actions.instanceId.update).toHaveBeenCalled();
    //     expect(props.actions.businessKey.update).toHaveBeenCalled();
    //     await mockBpm.message();
    //   }
    // });
  });

  // describe('getOnChangeHandler', () => {
  //   // it('should be instance of function', () =>
  //   //   expect(functions.getOnChangeHandler).toBeInstanceOf(Function));
  //
  //   it('should update', async () => {
  //     // const state = {};
  //     const props = {
  //       actions: {
  //         formBusinessLicenceFine: {
  //           update: jest.fn(),
  //         },
  //       },
  //     };
  //     // const fieldValues = {};
  //     // await functions.getOnChangeHandler(state)(props, fieldValues);
  //     expect(props.actions.formBusinessLicenceFine.update).toHaveBeenCalled();
  //   });
  // });
});
