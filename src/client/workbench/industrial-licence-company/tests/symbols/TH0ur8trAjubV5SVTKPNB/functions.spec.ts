/* eslint-disable camelcase */
import { f1_visible } from '../../../symbols/TH0ur8trAjubV5SVTKPNB/functions';

describe('Symbols function', () => {
  it('should return object ', () => {
    const props = {
      showSideBar: true,
    };
    f1_visible(props);
    expect(f1_visible).toBeInstanceOf(Object);
  });
});
