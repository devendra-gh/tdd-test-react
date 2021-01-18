import onStartDev from './onStartDev';

// eslint-disable-next-line
const originalLog = console.log;

describe('server hooks', () => {
  beforeEach(() => {
    // eslint-disable-next-line
    console.log = attr => {
      originalLog(attr);
      return attr;
    };
  });
  afterEach(() => {
    // eslint-disable-next-line
    console.log = originalLog;
  });
  it('onStartDev should log a message', async () => {
    const result = await onStartDev();
    expect(result).toEqual('Log ::: "On Start Dev" Hook');
  });
});
