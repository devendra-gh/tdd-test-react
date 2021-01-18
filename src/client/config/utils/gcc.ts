export const GCC_COUNTRIES = {
  gcc: ['BHR', 'KWT', 'OMN', 'QAT', 'SAU'],
  emirati: ['ARE'],
};

export const GCC = 'GCC';
export const UAE = 'ARE';
export const OTHER = 'Expat';

const getCountryType = (country: string) => {
  if (String(country) === '') return '';
  let type = OTHER;
  if (GCC_COUNTRIES.emirati.indexOf(String(country).toUpperCase()) !== -1) {
    type = UAE;
  }
  if (GCC_COUNTRIES.gcc.indexOf(String(country).toUpperCase()) !== -1) {
    type = GCC;
  }
  return type;
};

export const isGCC = (country: string, strict = false) => {
  const type = getCountryType(country);

  if (strict) {
    return type === GCC;
  }

  return type === GCC || type === UAE;
};

export const getParentLicenseSource = (nationality: string) => {
  if (!nationality) {
    return 'UAE';
  }

  if (nationality === UAE) {
    return 'UAE';
  }

  if (isGCC(nationality)) {
    return GCC;
  }

  return 'Other';
};

export const MOA_PARTNER_STATUS = {
  AGREE: 'Agree',
  PENDING: 'Pending',
  DISAGREE: 'Disagree',
};

export default getCountryType;
