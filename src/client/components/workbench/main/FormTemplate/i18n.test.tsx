import { i18n } from './i18n';

describe('client/components/workbench/i18n', () => {
  it('i18n', () => {
    const wrapper = i18n('form.error.required');
    expect(wrapper).toEqual('This field is required');
  });
});
