import {
  isURL,
  isEmail,
  isMobile,
  isEmiratesId,
  isCnNumber,
  isTnNumber,
  validation,
} from './validations';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isURL', () => {
  it('should properly call isURL and return false', () => {
    expect(isURL('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isURL('https://test.ae')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isEmail', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmail('test@email.com')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isMobile', () => {
  it('should properly call isURL and return false', () => {
    expect(isMobile('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isMobile('+971504578796')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isEmiratesId', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmiratesId('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmiratesId('784198505249585')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isCnNumber', () => {
  it('should properly call CN and return false', () => {
    expect(isCnNumber('')).toBe(false);
  });

  it('should properly call CN and return true', () => {
    expect(isCnNumber('CN-123456')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/isTnNumber', () => {
  it('should properly call TN and return false', () => {
    expect(isTnNumber('')).toBe(false);
  });

  it('should properly call TN and return true', () => {
    expect(isTnNumber('TN-1234567')).toBe(true);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/validations/validation ', () => {
  it('should properly call isURL and return true', () => {
    const pageName = 'proInfo';
    const props = {
      i18n: jest.fn(),
    };
    const currentValue = {
      name: 'Mahmoud Wisam Mo ',
      phone: '971555555552',
      email: 'persona.adoss+1@gmail.com',
    };
    validation(props, currentValue, pageName);
  });

  it('should properly call isURL and return true', () => {
    const pageName = 'proInfo2';
    const props = {
      i18n: jest.fn(),
      profile: {
        representativeType: 'localAgents',
        profileType: '',
      },
    };
    const currentValue = {
      name: 'Mahmoud Wisam Mo ',
      phone: '971555555552',
      email: 'persona.adoss+1@gmail.com',
    };
    validation(props, currentValue, pageName);
  });
});
