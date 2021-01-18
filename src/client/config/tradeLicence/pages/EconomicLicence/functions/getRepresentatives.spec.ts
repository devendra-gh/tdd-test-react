import { ownerValidation } from './getRepresentatives';

jest.mock('client/utils/appData', () => {
  return {
    getSmartpassData: () => {
      return {
        IDN: '1993',
      };
    },
  };
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/pages/economicLicence/getRepresentatives', () => {
  it('should properly call ownerValidation', async () => {
    const result = ownerValidation(
      [{ emiratesId: '19' }],
      'soleProprietorshipLLC',
      'tajer',
    );
    expect(result).toMatchObject({
      requiredPass: true,
      fieldsPass: false,
      moaPass: false,
      isValid: false,
    });
  });
});
