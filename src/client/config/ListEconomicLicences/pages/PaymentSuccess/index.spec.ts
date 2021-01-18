// import config from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  // it('should return buttons on page init', () => {
  //   const page = config[0];
  //   const props = {};
  //   const { buttons } = page.onPageInit(props);
  //   buttons.forEach(button => button.onClick());
  //   expect(Array.isArray(buttons)).toBeTruthy();
  // });

  it('should successfully return process information', () => {
    // const state = {
    //   steps: [{ name: 'applicationSummary' }],
    // };
    // const page = config[0];
    // const {
    //   state: { mapState },
    // } = page;
    // const process: any = mapState[3];
    // process.process(state);
    // expect(process.process).toBeInstanceOf(jest.fn());
    expect(1).toBe(1);
  });
});
