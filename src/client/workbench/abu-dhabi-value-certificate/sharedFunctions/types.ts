interface LicenceListItem {
  tradeLicenceNumber: string;
  businessNameEng: string;
  businessNameArb: string;
}

interface LicenceListSearchItem extends LicenceListItem {
  name: string;
  number: string;
}

export { LicenceListItem, LicenceListSearchItem };
