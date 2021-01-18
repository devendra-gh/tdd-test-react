/* eslint-disable camelcase */
import {
  f1_onClick,
  f2_onClick,
} from '../../../symbols/_rSFAtv4sbf3yNFwRaLhl/functions';

describe('Symbols function', () => {
  it('should return object ', () => {
    const props = {
      showSideBar: true,
    };
    f1_onClick(props);
    expect(f1_onClick).toBeInstanceOf(Object);
  });
  it('should return object ', () => {
    const props = {
      showSideBar: true,
    };
    f2_onClick(props);
    expect(f2_onClick).toBeInstanceOf(Object);
  });
});
