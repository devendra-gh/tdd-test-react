import deepMap from './deepMap';

describe('server/utils/deepMap', () => {
  beforeEach(() => {});

  it('is function', () => expect(deepMap).toBeInstanceOf(Function));

  it('should format', () => {
    const obj = {
      stringField: 'String Field',
      arrayField: [
        {
          stringArrayItem: 'String in obj',
        },
      ],
    };

    const formatted = deepMap(obj, (value: any) => {
      return `Updated ${value}`;
    });

    expect(formatted).toEqual({
      stringField: 'Updated String Field',
      arrayField: [
        {
          stringArrayItem: 'Updated String in obj',
        },
      ],
    });
  });
});
