import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/index', () => {
  let props = {
    i18n: jest.fn(),
    returnedMessage: false,
    cnNumber: '',
    submitDate: 'test',
    actions: {
      licenceCapId: {
        update: jest.fn(),
      },
      cnNumber: {
        update: jest.fn(),
      },
    },
  };

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  // it('Check steps', () => {
  //   index[0].state.mapState.forEach((item: any) => {
  //     if (typeof item === 'object') {
  //       item.steps({ checkApplicationSteps: 'checkApplicationSteps' });
  //     }
  //   });
  // });

  it('should properly call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    props = {
      ...props,
      returnedMessage: true,
      cnNumber: '123',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
