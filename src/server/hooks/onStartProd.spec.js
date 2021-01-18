import onStartProd from './onStartProd';
// eslint-disable-next-line
const originalLog = console.info;

describe('server hooks', () => {
  const hook = jest.fn().mockResolvedValue();
  beforeEach(() => {
    // eslint-disable-next-line
    console.info = attr => {
      originalLog(attr);
      return attr;
    };
  });
  afterEach(() => {
    // eslint-disable-next-line
    console.info = originalLog;
  });
  it('onStartProd should log a message', async () => {
    const result = await onStartProd(hook);
    expect(result).toEqual('Log ::: "On Start Prod" Hook');
  });
});
