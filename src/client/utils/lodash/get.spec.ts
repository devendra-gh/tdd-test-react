import get from './get';

describe('client/utils/lodash/get', () => {
  it('is function', () => expect(get).toBeInstanceOf(Function));

  it('should find value by path', () => {
    const data = {
      a: {
        b: {
          c: {
            d: 'hello',
          },
        },
      },
    };
    const value = get(data, 'a.b.c.d');

    expect(value).toEqual('hello');
  });

  it('should return default value when path not resolved', () => {
    const defaultValue = "I'm the default value";
    const value = get({}, 'a.b.c.d', defaultValue);

    expect(value).toEqual(defaultValue);
  });

  it('should resolve on arrays with valid index pathString', () => {
    const expected = 6;
    const value = get([1, 2, [3, 4, [5, expected]]], '2.2.1', expected);

    expect(value).toEqual(expected);
  });
});
