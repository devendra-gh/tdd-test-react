import {
  getFilteredBySearchLicences,
  getPaginatedFilteredLicenceListItems,
  getContactDetails,
  checkEntitySelected,
} from '../../sharedFunctions/utils';

describe('utils ', () => {
  let testLicenceList: any[];
  beforeEach(() => {
    testLicenceList = [
      {
        businessName: 'First test business',
        tradeLicenseNumber: 'First test business number',
      },
      {
        businessName: 'Second test business',
        tradeLicenseNumber: 'Second test business number',
      },
      {
        businessName: 'Third test business',
        tradeLicenseNumber: 'Third test business number',
      },
    ];
  });

  it('should successfully filter licences by search input', () => {
    const filteredLicenceList = getFilteredBySearchLicences(
      testLicenceList,
      'first',
    );
    expect(filteredLicenceList).toEqual([
      {
        businessName: 'First test business',
        tradeLicenseNumber: 'First test business number',
      },
    ]);
  });

  it('should return all licences when no search value is provided', () => {
    const filteredLicenceList = getFilteredBySearchLicences(
      testLicenceList,
      '',
    );
    expect(filteredLicenceList).toEqual(testLicenceList);
  });

  it('should seach and paginate licence list', () => {
    const searchValue = 'd test';
    const paginatedFilteredLicenceList = getPaginatedFilteredLicenceListItems(
      testLicenceList,
      searchValue,
      1,
    );
    expect(paginatedFilteredLicenceList.length).toBe(2);
  });

  it('should get contact details from smartpass when contact checkbox is checked', () => {
    const locale = 'ar';
    const user = {
      'First Name AR': 'Abdul Zakaria',
      Mobile: '+971 498 8987',
      'User Email': 'abdul.zakaria@aue.co',
    };

    const userData = getContactDetails(true, user, {}, locale);
    expect(userData).toEqual({
      name: 'Abdul Zakaria',
      phone: '+971 498 8987',
      email: 'abdul.zakaria@aue.co',
    });
  });

  it('should get contact details from state when contact checkbox is checked', () => {
    const locale = 'ar';
    const contactDetails = {
      contactName: 'Zakaria Abdul',
      contactEmail: 'zakari.abdul@aue.co',
      contactNumber: '+741 344 343443',
    };
    const user = {
      'First Name AR': 'Abdul Zakaria',
      Mobile: '+971 498 8987',
      'User Email': 'abdul.zakaria@aue.co',
    };

    const userData = getContactDetails(false, user, contactDetails, locale);
    expect(userData).toEqual({
      name: 'Zakaria Abdul',
      phone: '+741 344 343443',
      email: 'zakari.abdul@aue.co',
    });
  });

  it('should return true if an entity is selected', () => {
    const entities = {
      ardent: true,
      bakertilly: false,
    };
    expect(checkEntitySelected(entities)).toBeTruthy();
  });
});
