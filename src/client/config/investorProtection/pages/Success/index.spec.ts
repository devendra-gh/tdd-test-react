import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/investorProtection/pages/Success/', () => {
  beforeAll((): void => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        writable: true,
      },
    });
  });

  const props = {
    submitRef: '',
    submitDate: '',
    actions: {
      currentStep: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
    history: {
      push: jest.fn(),
    },
  };

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should call update https://www.tamm.abudhabi/', () => {
    index[0].init(props);
    expect(props.actions.currentStep.update).toHaveBeenCalled();
  });

  it('should call update https://stage.tamm.abudhabi/', () => {
    const url = 'https://stage.tamm.abudhabi/';
    window.location.href = url;
    props.submitRef = '1234';
    props.submitDate = '1234';
    index[0].init(props);
    expect(props.actions.currentStep.update).toHaveBeenCalled();
  });

  it('should call push fn of history', () => {
    index[0].props.buttons[0].onClick();
  });
});
