import config from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should properly call onClick', () => {
    const btnLen = config[0].props.buttons.length;
    for (let i = 0; i < btnLen; i += 1) {
      config[0].props.buttons[i].onClick(props);
      expect(props.history.push).toBeCalled();
    }
  });
});
