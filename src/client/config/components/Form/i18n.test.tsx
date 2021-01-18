import { i18n } from './i18n';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('i18n', () => {
  it('i18n', () => {
    const wrapper = i18n('form.error.required');
    expect(wrapper).toEqual('form.alert.requiredField');
  });
});
