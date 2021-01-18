import home from './index';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/home', () => {
  let props: any;

  beforeEach(() => {
    props = {
      actions: {
        resetState: jest.fn(),
        applications: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should export routes', () => {
    expect(home).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    expect(home[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
