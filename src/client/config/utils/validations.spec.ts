// import fetch from 'client/services/fetch';
import {
  isURL,
  isEmail,
  isMobile,
  isEmiratesId,
  isCnNumber,
  capitalize,
  isChassisNumber,
  isTransactionNumber,
  // checkSOP3,
} from './validations';

jest.mock('client/services/fetch');

describe('utils/validations/isURL', () => {
  it('should properly call isURL and return false', () => {
    expect(isURL('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isURL('https://test.ae')).toBe(true);
  });
});

describe('utils/validations/isEmail', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmail('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmail('test@email.com')).toBe(true);
  });
});

describe('utils/validations/isMobile', () => {
  it('should properly call isURL and return false', () => {
    expect(isMobile('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isMobile('+971504578796')).toBe(true);
  });
});

describe('utils/validations/isEmiratesId', () => {
  it('should properly call isURL and return false', () => {
    expect(isEmiratesId('')).toBe(false);
  });

  it('should properly call isURL and return true', () => {
    expect(isEmiratesId('784198505249585')).toBe(true);
  });
});

describe('utils/validations/isCnNumber', () => {
  it('should properly call isCnNumber', () => {
    expect(isCnNumber('')).toBe(false);
    expect(isCnNumber('CN-1234567')).toBe(true);
  });
});

describe('utils/validations/capitalize', () => {
  it('should properly call capitalize', () => {
    // @ts-ignore
    expect(capitalize(12345)).toBe('');
    expect(capitalize('test')).toBe('Test');
  });
});

describe('utils/validations/isChassisNumber', () => {
  it('should properly call isChassisNumber', () => {
    expect(isChassisNumber('')).toBe(false);
    expect(isChassisNumber('test1234567')).toBe(true);
  });
});

describe('utils/validations/isTransactionNumber', () => {
  it('should properly call isTransactionNumber', () => {
    expect(isTransactionNumber('TN-1234567')).toBe(true);
  });
});

// describe('utils/validations/checkSOP3', () => {
//   let fetchMock: any;
//   beforeEach(() => {
//     fetchMock = fetch;
//   });
//   it('should properly call checkSOP3', async () => {
//     fetchMock.mockImplementation(() => ({
//       data: {
//         isSOP3: true,
//       },
//     }));
//     expect(await checkSOP3('784-1985-0524958-5')).toBe(true);
//   });
// });
