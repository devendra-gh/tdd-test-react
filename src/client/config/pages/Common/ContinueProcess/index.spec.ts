import result from './index';
import { continueProcess } from './functions';

jest.mock('./functions.ts');
//  () => {
//   return {
//     continueProcess: () => {
//       return {
//         businessKey: 'businessKey',
//         instanceId: 'instanceId',
//         data: {
//           value: 'value',
//         },
//       };
//     },
//   };
// });

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/pages/common/continueProcess', () => {
  const mockContinueProcess: any = continueProcess;
  it('should export index result as array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  it('should properly call onPageInit', async () => {
    const props = {
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
    mockContinueProcess.mockImplementation(() => {
      return Promise.resolve({
        businessKey: 'businessKey',
        instanceId: 'instanceId',
        data: {
          value: 'value',
        },
      });
    });
    await result[0].onPageInit(props);
  });

  it('should properly call onPageInit', async () => {
    const props = {
      actions: {
        businessKey: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
    mockContinueProcess.mockImplementation(() => {
      return Promise.resolve('');
    });
    await result[0].onPageInit(props);
  });
});
