import result from './index';

jest.mock('./functions.ts', () => {
  return {
    continueProcess: () => {
      return {
        businessKey: 'businessKey',
        instanceId: 'instanceId',
        data: {
          value: 'value',
        },
      };
    },
  };
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/pages/common/continueProcess', () => {
  it('should export index result as array', () => {
    expect(result).toBeInstanceOf(Array);
  });
});
