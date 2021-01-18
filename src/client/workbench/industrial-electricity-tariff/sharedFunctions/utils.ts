

const getFilteredBySearchLicences = (
  licenceList: LicenceListSearchItem[],
  searchValue: string,
) => {
  let licenceListItems: any[] = licenceList;
  const _searchValue: string = searchValue.toLowerCase();
  if (searchValue) {
    licenceListItems = licenceList.filter(
      ({ businessName, tradeLicenseNumber }: LicenceListSearchItem) =>
        String(businessName).toLowerCase().indexOf(_searchValue) !== -1 ||
        String(tradeLicenseNumber).toLowerCase().indexOf(_searchValue) !== -1
    );
  }

  return licenceListItems;
};

const paginateLicenceListItems = (
  licenceListItems: LicenceListSearchItem[],
  currentPage: number
) => {
  const PAGESIZE = 10;
  const currentPageItem = (currentPage - 1) * PAGESIZE;
  const currentPageLicenceList = licenceListItems.slice(
    currentPageItem,
    currentPageItem + PAGESIZE
  );
  return currentPageLicenceList;
};

const getPaginatedFilteredLicenceListItems = (
  licenceList: any,
  searchValue: string,
  currentPage: number
) => {
  const paginatedLicenceListItems = paginateLicenceListItems(
    getFilteredBySearchLicences(licenceList, searchValue),
    currentPage
  );
  return paginatedLicenceListItems;
};

const getUserDataFromSmartpass = (user: any, locale: string) => {
  let name: string = '';
  let email: string = '';
  let phone: string = '';
  if (locale === 'ar') {
    name = user['First Name AR'];
  } else {
    name = user['First Name EN'];
  }

  phone = user['Mobile'];
  email = user['User Email'];
  return { name, email, phone };
};

const getContactDetails = (
  checked: boolean,
  user: any,
  contactState: any,
  locale: string
) => {
  let name: string = '';
  let email: string = '';
  let phone: string = '';
  if (checked) {
    const smartpassUserData = getUserDataFromSmartpass(user, locale);
    name = smartpassUserData.name;
    email = smartpassUserData.email;
    phone = smartpassUserData.phone;
  } else {
    name = contactState.contactName;
    email = contactState.contactEmail;
    phone = contactState.contactNumber;
  }
  return { name, email, phone };
};

const checkEntitySelected = (entities: any) => {
  const selectedEntities = Object.keys(entities).filter(
    (entity: string) => entities[entity]
  );
  return selectedEntities.length > 0;
};

interface LicenceListSearchItem {
  businessName: string;
  tradeLicenseNumber: string;
}

export {
  getFilteredBySearchLicences,
  paginateLicenceListItems,
  getPaginatedFilteredLicenceListItems,
  getContactDetails,
  checkEntitySelected,
};
