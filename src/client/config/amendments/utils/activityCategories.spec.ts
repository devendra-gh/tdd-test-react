import { IVariables } from '@tamm/app-composer';
import {
  findFilterActivities,
  getSubcategories,
  getCategories,
} from './activityCategories';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Category', () => {
  // let props: any;
  it('should export all props', () => {
    const filterArray: IVariables = [
      { activityCode: '70041', activityNameEng: 'Restaurants' },
    ];
    const findArray: IVariables = [{ activityCode: '70041' }];
    const variable: string = 'activityCode';
    const flag: boolean = true;
    findFilterActivities(filterArray, findArray, flag, variable);

    const locale: string = 'En';
    const category: string = 'WORKSHOP AND PAINTING WORKS';
    getSubcategories(locale, category);
    expect(findFilterActivities).toBeInstanceOf(Object);

    const licenseType: string = 'mobdea';
    getCategories(locale, licenseType);
    expect(findFilterActivities).toBeInstanceOf(Object);
  });

  it('should export all props else statement', () => {
    const filterArray: IVariables = [
      { activityCode: '70041', activityNameEng: 'Restaurants' },
    ];
    const findArray: IVariables = [{ activityCode: '70041' }];

    const flag: boolean = false;
    findFilterActivities(filterArray, findArray, flag);

    const locale: string = 'En';
    const licenseType: string = 'instantLicense';
    getCategories(locale, licenseType);
    expect(findFilterActivities).toBeInstanceOf(Object);
  });
});
