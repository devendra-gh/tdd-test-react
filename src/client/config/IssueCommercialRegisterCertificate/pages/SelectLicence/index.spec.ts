import config from './index';

jest.mock('./functions', () => ({
  handleBackButton: jest.fn(),
  handleSelectLicence: jest.fn(),
  handleStartService: jest.fn(),
  handleCancelLink: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select licence', () => {
  it('should successfully return process information', () => {
    const state = {
      steps: [{ name: 'selectLicence' }],
    };
    const page = config[0];
    const {
      state: { mapState },
    } = page;
    const process: any = mapState[8];
    process.process(state);
    expect(process.process).toBeInstanceOf(Function);
  });

  it('should return buttons on page init', () => {
    const page = config[0];
    const props = {};
    const handlers = page.onPageInit(props);
    Object.values(handlers).map(handler => handler(props));
    expect(Object.values(handlers)[0]).toBeInstanceOf(Function);
  });
});
