import { validateRule, isFieldHasValue } from './validation';

jest.mock('./i18n', () => ({
  i18n: jest.fn(data => data),
}));

describe('isFieldHasValue', () => {
  it('it return true when array not empty', () => {
    const result = isFieldHasValue(['value']);
    expect(result).toEqual(true);
  });
  it('it return true when has  a value', () => {
    const result = isFieldHasValue('value');
    expect(result).toEqual(true);
  });

  it('it return false when when empty value', () => {
    const result = isFieldHasValue(null);
    expect(result).toEqual(false);
  });
});

describe('validateRule', () => {
  it('it return error message when rule function return error', () => {
    const result = validateRule(() => ({ message: 'error' }), null);
    expect(result).toEqual({ message: 'error' });
  });
  it('it return error message when input empty if requried', () => {
    const result = validateRule('required', null);
    expect(result).toEqual({ message: 'form.error.required' });
  });
  it('it return error message when zero if requiredNotZero', () => {
    const result = validateRule('requiredNotZero', 0);
    expect(result).toEqual({ message: 'form.error.required' });
  });
  it('it return false  when has value if requiredNotZero', () => {
    const result = validateRule('requiredNotZero', 1);
    expect(result).toEqual(false);
  });
  it('it return false  when rule is not exist', () => {
    const result = validateRule('worngRule', 1);
    expect(result).toEqual(false);
  });
  it('it return error message when not valid email if email', () => {
    const result = validateRule('email', 'asadf');
    expect(result).toEqual({ message: 'form.error.email' });
  });
  it('it return error message when not number if number', () => {
    const result = validateRule('number', 'asadf');
    expect(result).toEqual({ message: 'form.error.number' });
  });
  it('it return error message when invalid emiratesID if emiratesID', () => {
    const result = validateRule('emiratesID', 'asadf');
    expect(result).toEqual({ message: 'form.error.emiratesId' });
  });

  it('it return error message when invalid phone if phone', () => {
    const result = validateRule('any_phone', 'asadf');
    expect(result).toEqual({ message: 'form.error.phone' });
  });

  it('it return error message when invalid phone if phone', () => {
    const result = validateRule('phone', 'asadf');
    expect(result).toEqual({ message: 'form.error.phone' });
  });

  it('it return error message when invalid short phone if phone', () => {
    const result = validateRule('shortPhone', 'asadf');
    expect(result).toEqual({ message: 'form.error.phone' });
  });

  it('it return error message when invalid alpha if alpha', () => {
    const result = validateRule('alpha', 1123);
    expect(result).toEqual({ message: 'form.error.alpha' });
  });

  it('it return error message when invalid digits if digits', () => {
    const result = validateRule('digits', 'sasdf');
    expect(result).toEqual({ message: 'form.error.digits' });
  });

  it('it return error message when invalid file if file', () => {
    const result = validateRule('file', 1123);
    expect(result).toEqual({ message: 'form.error.file' });
  });

  it('it return error message when invalid file if file', () => {
    const result = validateRule('file', 1123);
    expect(result).toEqual({ message: 'form.error.file' });
  });

  it('it return error message when invalid size if file', () => {
    const result = validateRule(
      { rule: 'file', maxSize: 1 },
      { uid: 1, size: 0 },
    );
    expect(result).toEqual({ message: 'form.error.file' });
  });

  it('it return error message when big size if file maxSize', () => {
    const result = validateRule(
      { rule: 'file', maxSize: 1 },
      { uid: 1, size: 10000000 },
    );
    expect(result).toEqual({ message: 'form.error.fileMaxSize' });
  });

  it('validate fileType', () => {
    const result = validateRule(
      { rule: 'fileType', accept: 'application/pdf' },
      [{ name: 'file', size: 10000000, type: 'application/pdf' }],
    );
    expect(result).toEqual(false);
  });

  it('validate fileType for invalidFileType', () => {
    const result = validateRule(
      { rule: 'fileType', accept: 'application/pdf' },
      [{ name: 'file', size: 10000000, type: 'image/jpeg' }],
    );
    expect(result).toEqual({ message: 'form.error.invalidFileType' });
  });
});
