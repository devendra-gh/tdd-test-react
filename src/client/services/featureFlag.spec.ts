import { getData } from 'client/utils/appData';
import { initFeatureFlags, hasFeatureFlag } from './featureFlag';

jest.mock('client/utils/appData');

describe('featureFlag', () => {
  it('should return true when feature flag is present', () => {
    (getData as jest.Mock).mockReturnValue({
      featureFlags: 'bugReport',
    });
    initFeatureFlags();
    expect(hasFeatureFlag('bugReport')).toBe(true);
  });

  it('should return false when feature flag is missing', () => {
    (getData as jest.Mock).mockReturnValue({
      featureFlags: '',
    });
    initFeatureFlags();
    expect(hasFeatureFlag('bugReport')).toBe(false);
  });
});
