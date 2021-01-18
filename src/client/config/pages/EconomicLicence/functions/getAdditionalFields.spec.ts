import { getAdditionalFields } from './getAdditionalFields';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/pages/economicLicence/functions/getAdditionalFields', () => {
  it('should properly call getAdditionalFields with instant', () => {
    expect(getAdditionalFields('instant', 'establishment')).toMatchObject([]);
  });

  it('should properly call getAdditionalFields with tajer and soleProprietorshipLLC', () => {
    const result = getAdditionalFields('tajer', 'soleProprietorshipLLC');
    // @ts-ignore
    expect(result[1].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[1].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[2].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[2].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[3].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[3].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[4].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[4].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[5].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[5].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[6].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[6].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[7].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[7].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[8].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[8].validate('value')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[9].validate()).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result[9].validate('value')).toBeInstanceOf(Object);
    expect(result).toBeInstanceOf(Object);
  });
});
