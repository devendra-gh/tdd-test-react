import { getCategories, getSubcategories } from './activityCategories';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('utils/activityCategories', () => {
  it('getCategories en', () => {
    getCategories('en');
  });

  it('getCategories ar', () => {
    getCategories('ar');
  });

  it('getSubcategories en', () => {
    getSubcategories('en', 'ADVOCATE OFFICES');
  });

  it('getSubcategories ar', () => {
    getSubcategories('ar', 'مكاتب المحاماة');
  });
});
