import { f1_visible } from '../../../symbols/V-yVgnSPmczj86P4we-0G/functions';

describe('Symbol function', () => {
  it('should return true if symbol should be visible 1', () => {
    const props = {
      camundaMessage: true,
    };
    expect(f1_visible(props)).toBeTruthy();
  });

  it('should return false if symbol should be visible 2', () => {
    const props = {
      camundaMessage: false,
    };
    expect(f1_visible(props)).toBeFalsy();
  });
});
