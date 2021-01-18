import * as permits from 'client/config/permits/utils/constants/permits';
import fetchPermitFees from './fetchPermitFees';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/Home/functions/fetchPermitFees', () => {
  it('should be called', async () => {
    const PERMITS: Record<string, any> = permits;

    const result = Object.keys(PERMITS).every(async permit =>
      expect(await fetchPermitFees(PERMITS[permit])).toBeInstanceOf(Object),
    );
    expect(result).toBeTruthy();
  });
  it('should be called', async () => {
    const response = await fetchPermitFees('');
    expect(response).toBe(undefined);
  });
});
