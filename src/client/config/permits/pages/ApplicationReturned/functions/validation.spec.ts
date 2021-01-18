import validation from './validation';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Validation', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      serviceType: 'testServiceType',
      returnPage: {
        documents: [
          {
            file: 'dummy',
          },
        ],
      },
    };
  });

  it('should validate possitive flow', () => {
    expect(validation(props)).toBeTruthy();
  });
});
