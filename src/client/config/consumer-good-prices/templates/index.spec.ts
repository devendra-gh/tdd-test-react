import templates from './index';

jest.mock('client/templates/Footer', () => () => '');
jest.mock('client/templates/Header', () => () => '');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('templates', () => {
  it('instance check', () => {
    expect(templates).toBeInstanceOf(Object);
  });

  it('home', () => {
    expect(templates.home).toBeInstanceOf(Function);
    expect(templates.home()).toBeInstanceOf(Object);
  });

  it('search', () => {
    expect(templates.search).toBeInstanceOf(Function);
    expect(templates.search()).toBeInstanceOf(Object);
  });

  it('details', () => {
    expect(templates.details).toBeInstanceOf(Function);
    expect(templates.details()).toBeInstanceOf(Object);
  });
});
