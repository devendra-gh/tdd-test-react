import { getButtons } from './helpers';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getButtons', () => {
  const props = {
    i18n: jest.fn(),
    buttons: [
      {
        label: 'button.next',
        onClick: jest.fn(),
      },
    ],
  };
  it('instance check', () => {
    expect(getButtons).toBeInstanceOf(Function);
  });

  it('Should return array of buttons', () => {
    const result = getButtons(props);
    expect(result).toBeInstanceOf(Array);
  });

  it('onClick should call onClick', () => {
    const result = getButtons(props);
    result[0].onClick();
    expect(props.buttons[0].onClick).toHaveBeenCalled();
  });
});
