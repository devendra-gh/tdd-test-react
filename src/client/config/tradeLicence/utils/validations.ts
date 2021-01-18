import validator from 'validator';
import { includes } from 'lodash';

const isURL = (value: string) => {
  if (!value) {
    return false;
  }
  return validator.isURL(value) && includes(value, '.ae');
};

const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const isEmail = (value: string): boolean => {
  if (!value) {
    return false;
  }
  return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

const isMobile = (value: string): boolean => {
  if (!value) {
    return false;
  }

  const withOutSpace = value.split(' ').join('');
  const PHONE_REGEX = /^(\+|0+)?9715\d{8}$/;

  return !!withOutSpace.match(PHONE_REGEX);
};

const isEmiratesId = (value: string) => {
  // accept only digits or dashes with length [15,18], start with 784
  if (!/^(784)([0-9]{12})$/.test(value)) return false;
  // The Luhn Algorithm
  let nCheck = 0;
  let bEven = false;
  const newValue = value.replace(/\D/g, '');

  for (let n = newValue.length - 1; n >= 0; n -= 1) {
    const cDigit = newValue.charAt(n);
    let nDigit = parseInt(cDigit, 10);
    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 === 0;
};

export { isURL, isEmail, isMobile, isEmiratesId, capitalize };
