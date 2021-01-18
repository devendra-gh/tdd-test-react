import index from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/FinalRegistration', () => {
  window.open = jest.fn();

  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should call initPage', () => {
    const props = {
      cnNumber: 'cn-number',
      submitDate: 'submit-Date',
    };
    index[0].props.buttons[0].onClick(props);
    index[0].props.sectionButtons[0].onClick();
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
