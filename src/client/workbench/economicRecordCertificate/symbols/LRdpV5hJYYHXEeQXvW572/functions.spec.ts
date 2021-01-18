import { f1_visible, f2_visible } from './functions';

describe('Symbols function', () => {
  it('should return object ', () => {
    const props = {
      showSideBar: true,
    };
    f1_visible(props);
    expect(f1_visible).toBeInstanceOf(Object);
  });
  it('should return object ', () => {
    const props = {
      showSideBar: true,
    };
    f2_visible(props);
    expect(f2_visible).toBeInstanceOf(Object);
  });
});
