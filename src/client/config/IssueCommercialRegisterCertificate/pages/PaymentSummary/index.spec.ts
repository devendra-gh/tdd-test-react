import config from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Error page', () => {
  it('should successfully return process information', () => {
    const state = {
      steps: [{ name: 'applicationSummary' }],
    };
    const page = config[0];
    const {
      state: { mapState },
    } = page;
    const process: any = mapState[0];
    process.process(state);
    expect(process.process).toBeInstanceOf(Object);
  });

  it('should export routes', () => {
    expect(config).toBeInstanceOf(Object);
  });
});
