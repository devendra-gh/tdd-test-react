import functions from './functions';

jest.mock('../../services', () => ({
  issueCertificate: jest
    .fn()
    .mockReturnValueOnce({
      code: '200',
      Result: { recordNumber: '123', message: '' },
    })
    .mockReturnValueOnce({
      code: '500',
      Result: { recordNumber: '123', message: 'LN-1234567' },
    })
    .mockReturnValueOnce({
      code: '400',
    }),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home page functions', () => {
  it('should redirect to select licence page on start', () => {
    const props = {
      actions: {
        submitting: {
          update: jest.fn(),
        },
      },
      user: { IDN: '' },
    };
    functions.onStart(props);
    functions.onStart(props);
    functions.onStart(props);
  });
});
