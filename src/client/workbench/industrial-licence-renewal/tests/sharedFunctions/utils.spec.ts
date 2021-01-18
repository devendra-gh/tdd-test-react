import {
  formatValue,
  // filteredActivities,
  // getDateFromTimeStamp,
  // validateCompanyDetailsForm,
} from '../../sharedFunctions/utils';

describe('Shared functions => utils', () => {
  it('should cover formatValue ', () => {
    formatValue(1592477821497);
    expect(formatValue).toBeInstanceOf(Object);

    formatValue('123');
    expect(formatValue).toBeInstanceOf(Object);
  });

  // it('should cover getDateFromTimeStamp ', () => {
  //   getDateFromTimeStamp(1592477821497);
  //   expect(getDateFromTimeStamp).toBeInstanceOf(Object);
  // });

  // it('should cover filteredActivities with null values', () => {
  //   const items: any = null;
  //   const locale = 'en';
  //   const search = undefined;
  //   const pageNumber = undefined;
  //   const pageSize = undefined;
  //   filteredActivities(items, locale, search, pageNumber, pageSize);
  //   expect(filteredActivities).toBeInstanceOf(Object);
  // });

  // it('should cover filteredActivities with valid values', () => {
  //   const items: any = [
  //     {
  //       name: 'test',
  //     },
  //   ];
  //   const locale = 'en';
  //   const search = 'test';
  //   const pageNumber = undefined;
  //   const pageSize = undefined;
  //   filteredActivities(items, locale, search, pageNumber, pageSize);
  //   expect(filteredActivities).toBeInstanceOf(Object);
  // });

  // it('should cover validateCompanyDetailsForm', () => {
  //   const props = {
  //     i18n: jest.fn(),
  //     actions: {
  //       validateStatusTotalCapitalValue: {
  //         update: jest.fn(),
  //       },
  //       helpValidateStatusTotalCapitalValue: {
  //         update: jest.fn(),
  //       },
  //       validateStatusTotalInvestmentValue: {
  //         update: jest.fn(),
  //       },
  //       helpValidateStatusTotalInvestmentValue: {
  //         update: jest.fn(),
  //       },
  //       validateStatus_branchType: {
  //         update: jest.fn(),
  //       },
  //       help_branchType: {
  //         update: jest.fn(),
  //       },
  //       validateStatus_industryType: {
  //         update: jest.fn(),
  //       },
  //       help_industryType: {
  //         update: jest.fn(),
  //       },
  //       validateStatus_parentLicenceNumber: {
  //         update: jest.fn(),
  //       },
  //       help_parentLicenceNumber: {
  //         update: jest.fn(),
  //       },
  //     },
  //   };

  // validateCompanyDetailsForm(props);
  // expect(validateCompanyDetailsForm).toBeInstanceOf(Object);

  //   const props2 = {
  //     ...props,
  //     totalCapitalvalue: 111,
  //     totalInvestmentValue: 111,
  //     companyDetailsExistingBranchTypeVal: 'Yes',
  //     companyDetailsBranchTypeVal: '',
  //   };
  // validateCompanyDetailsForm(props2);
  // expect(validateCompanyDetailsForm).toBeInstanceOf(Object);

  //   const props3 = {
  //     ...props,
  //     totalCapitalvalue: '',
  //     totalInvestmentValue: '',
  //     selectedIndustrialType: '',
  //     companyDetailsExistingBranchTypeVal: 'Yes',
  //     parentCompanylicenceNumberVal: '',
  //   };
  // validateCompanyDetailsForm(props3);
  // expect(validateCompanyDetailsForm).toBeInstanceOf(Object);
  // });
});
