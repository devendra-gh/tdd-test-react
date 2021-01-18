/**
 * function to check emirates ID
 * @param {string} value
 * @returns {boolean}
 */
export default function emiratesIdChecker(value: string) {
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
}
