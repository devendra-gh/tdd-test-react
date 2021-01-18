import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('goldenServices/index', () => {
  const props = {
    i18n: jest.fn(),
    stepsStatus: {},
    history: {
      push: jest.fn(),
    },
    actions: {
      goldenService: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
  };

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ goldenServicesSteps: 'goldenServicesSteps' });
      }
    });
  });

  it('get summary on page init', () => {
    index[0].onPageInit(props);
  });
});
