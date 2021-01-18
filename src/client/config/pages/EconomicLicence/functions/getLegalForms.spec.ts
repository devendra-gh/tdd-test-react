import getLigalForms from './getLegalForms';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('getLegalForms', () => {
  it('should call getLegalForms with tajer', () => {
    getLigalForms('tajer', { 'Nationality EN': true });
  });
});
