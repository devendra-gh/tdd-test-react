import baseName, { getPosition, Init } from 'client/utils/baseName';
import baseUrl from 'client/utils/baseUrl';

describe('baseName', () => {
  beforeAll(() => {
    delete global.window.location;
    global.window = Object.create(window);
    const dummyObject: any = {};
    global.window.location = dummyObject;
  });
  it('is empty string', () => {
    expect(baseName).toBe('');
  });

  it('should return position', () => {
    global.window.location.pathname = `${baseUrl}/v2/0xoXX67UV5JO1Faf7YATKWA9Z9sx/home`;
    Init();
    expect(getPosition('/v2/0xoXX67UV5JO1Faf7YATKWA9Z9sx/home', '/', 9)).toBe(
      37,
    );
    global.window.location.pathname = `${baseUrl}/v3/0xoXX67UV5JO1Faf7YATKWA9Z9sx/home`;
    Init();
    expect(getPosition('/v3/0xoXX67UV5JO1Faf7YATKWA9Z9sx/home', '/', 9)).toBe(
      37,
    );
  });
});
