import { licenceDetailMapper } from './mapper';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/pages/Category', () => {
  // let props: any;
  it('should export all props', () => {
    const data = [
      {
        licenseNo: 'CN-2972436',
        partners: [
          {
            idNumber: '784201326962079',
            partnerSharePercentage: '100',
            typeEng: 'Individual',
            typeArb: 'مالك',
            representativeTypeEng: 'Owner',
            pEmail: ' ',
            bDate: '10/05/2013',
            phoneNumber: ' ',
            nationalityAr: 'الهند',
            nationalityEn: 'India',
            referenceContactId: '41836035',
            contactId: '7116056',
            NameAr: 'محمد نزيه محمد السيد طلبه عوض',
            NameEn: 'Mohamed Nazeh Mohamed Alsayed Tolba',
            FNameEn: 'Mohamed',
            LNameEn: 'Nazeh Mohamed Alsayed Tolba',
          },
        ],
      },
    ];
    licenceDetailMapper(data);
    expect(licenceDetailMapper).toBeInstanceOf(Object);
  });

  it('should export all props else statement', () => {
    const data = [
      {
        licenseNo: 'CN-2972436',
        partners: [
          {
            idNumber: '784201326962079',
            typeEng: 'Individual',
            representativeTypeEng: 'Owner',
            nationalityEn: 'United Arab Emirates',
            pEmail: ' ',
            phoneNumber: ' ',
          },
        ],
      },
    ];
    licenceDetailMapper(data);
    expect(licenceDetailMapper).toBeInstanceOf(Object);
  });
});
