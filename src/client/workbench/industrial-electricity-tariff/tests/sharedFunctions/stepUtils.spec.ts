import { getSteps } from '../../sharedFunctions/stepUtils';

describe('stepUtils', () => {
  it('should correctly get steps given the index and sub step index', () => {
    const i18n = (item: string) => item;
    const steps = getSteps(i18n, 0, 1);
    expect(steps[0].substeps[0].status).toBe('finish');
  });
});
