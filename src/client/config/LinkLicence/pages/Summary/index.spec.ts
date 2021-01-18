import summary from './index';

const props = {
  history: {
    push: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Summary page', () => {
  it('page initialization ', () => {
    summary[0].onPageInit(props);
    expect(summary).toBeInstanceOf(Object);
  });
});
