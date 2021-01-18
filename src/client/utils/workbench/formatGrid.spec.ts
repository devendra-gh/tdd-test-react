import formatGrid from './formatGrid';

describe('client/utils/workbench/formatGrid', () => {
  beforeEach(() => {});

  it('is function', () => expect(formatGrid).toBeInstanceOf(Function));

  it('should format', () => {
    const config = formatGrid({
      columns: 2,
      flexColumns: {
        xl: 4,
      },
    });

    expect(config).toEqual(expect.any(Object));
  });

  it('should format without flexColumns', () => {
    const config = formatGrid({
      columns: 2,
    });

    expect(config).toEqual(expect.any(Object));
  });
});
