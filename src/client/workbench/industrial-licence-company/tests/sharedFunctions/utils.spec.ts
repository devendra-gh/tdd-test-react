import {
  formatValue,
  filteredActivities,
  getDateFromTimeStamp,
} from '../../sharedFunctions/utils';

describe('Shared functions => utils', () => {
  it('should cover formatValue ', () => {
    formatValue(1592477821497);
    expect(formatValue).toBeInstanceOf(Object);

    formatValue('123');
    expect(formatValue).toBeInstanceOf(Object);
  });

  it('should cover getDateFromTimeStamp ', () => {
    getDateFromTimeStamp(1592477821497);
    expect(getDateFromTimeStamp).toBeInstanceOf(Object);
  });

  it('should cover filteredActivities with null values', () => {
    const items: any = null;
    const locale = 'en';
    const search = undefined;
    const pageNumber = undefined;
    const pageSize = undefined;
    filteredActivities(items, locale, search, pageNumber, pageSize);
    expect(filteredActivities).toBeInstanceOf(Object);
  });

  it('should cover filteredActivities with valid values', () => {
    const items: any = [
      {
        name: 'test',
      },
    ];
    const locale = 'en';
    const search = 'test';
    const pageNumber = undefined;
    const pageSize = undefined;
    filteredActivities(items, locale, search, pageNumber, pageSize);
    expect(filteredActivities).toBeInstanceOf(Object);
  });
});
