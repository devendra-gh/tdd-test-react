import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const licensePayload: IVariables = {
  instant: {
    licenceType: 'instant',
    businessLegalFormCode: '3',
    businessNameENG: '1001218 for Craft L.L.C.',
    businessNameARB: '1001218 الحرفية ذ.م.م',
    tawtheeq: '',
    officialEmail: 'o@a.com',
    officialMobile: '971547646779',
    officialDisclaimer: 'Yes',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    partners: JSON.stringify([
      {
        type: '10',
        idType: 'EID',
        idNumber: '784195446502908',
        representativeType: '2',
        partnerSharePercentage: '51',
        moiUnifiedNumber: '',
        emailAddress: 'o@a.com',
        mobileNo: '971547646779',
        firstNameARB: 'جاسم',
        lastNameARB: ' ',
        firstNameENG: 'جاسم',
        lastNameENG: ' ',
        uuid: null,
        emirate: '1',
        manager: 'N',
        nationality: 'United Arab Emirates',
        fullNameARB: 'جاسم',
        fullNameENG: 'جاسم',
      },
      {
        type: '10',
        idType: 'UID',
        idNumber: '',
        representativeType: '2',
        partnerSharePercentage: '49',
        moiUnifiedNumber: '205912069',
        emailAddress: 'o@a.com',
        mobileNo: '971547646779',
        firstNameARB: 'خليل',
        lastNameARB: ' ',
        firstNameENG: 'خليل',
        lastNameENG: ' ',
        uuid: null,
        emirate: '1',
        manager: 'N',
        nationality: 'Jordan',
        fullNameARB: 'خليل',
        fullNameENG: 'خليل',
      },
    ]),
    activities: '[{"activityCode": "10009"},{"activityCode": "20008"}]',
    smartPassData: JSON.stringify([
      {
        uuid: '8c70310e-fbbf-4776-8c9c-945c3bbcea5e1',
        spuuid: '8c70310e-fbbf-4776-8c9c-945c3bbcea511',
        idType: 'EID',
        eid: '784195446502908',
        isApplicant: true,
      },
      {
        uuid: '8c70310e-fbbf-4776-8c9c-945c3bbcea5e2',
        spuuid: '8c70310e-fbbf-4776-8c9c-945c3bbcea512',
        idType: 'EID',
        eid: '784197502030204',
        isApplicant: false,
      },
    ]),
    issuePlaceCode: '1',
    emirate: 'أبوظبي',
    preferredLanguage: 'Arabic',
    socialMediaType: 'Facebook',
    socialMediaAccount: '232sdasd',
    webSiteURL: 'https://en-gb.facebook.com/r.php?locale=en_GB',
  },
  tajer: {
    licenceType: 'tajer',
    tradeNameNumber: null,
    autoCreateBusinessName: 'No',
    businessNameARB: 'يوفنتوس 2000',
    businessNameENG: 'Juventus 2000',
    businessLegalFormCode: '1',
    acceptExceptionTradeName: null,
    issuePlaceCode: '1',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    officialEmail: 'ahaothman@adeconomy.ae',
    officialMobile: '971544767803',
    quickLicense: 'Abu Dhabi Trader',
    tawtheeq: '',
    activities: '[{"ActivityCode": "4100002"},{"ActivityCode": "4100003"}]',
    partners:
      '[{"Type": "10","RepresentativeType": "1","PartnerSharePercentage": "100","IDNumber": "784-1984-6509093-8","NoOfOwnedShares": "","ProfitAndLossesDistributionPercentage": "","ShareHolding": "100","Emirate": "1","AreaARB": "","AreaENG": "","CityARB": "","CityENG": "","BuildingNameARB": "","BuildingNameENG": "","StreetARB": "","StreetENG": "","BuildingNumber": "","Manager": "1","FullNameARB": "","FullNameENG": "","FirstNameARB": "","FirstNameENG": "","LastNameARB": "","LastNameENG": "","EmailAddress": "","MobileNo": "","MOIUnifiedNumber": "","Nationality": ""}]',
    customData:
      '[{"TypeOfContract": "NonStandard","Journey": "EODB","Channel": "","TrackingNumber": ""}]',
    smartPassData:
      '[{"UUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","SPUUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","IdType": "EID","EID": "784-1984-6509093-8","IsApplicant": true,"PassportNumber": "","UserType": 0}]',
    durationOfTheCompanyInYears: '',
    managerAppointmentDurationInYears: '',
    totalNumberOfShares: '',
    capital: '',
  },
  allInOne: {
    licenceType: 'allInOne',
    tradeNameNumber: null,
    autoCreateBusinessName: 'No',
    businessNameARB: 'يوفنتوس 2000',
    businessNameENG: 'Juventus 2000',
    businessLegalFormCode: '1',
    acceptExceptionTradeName: null,
    issuePlaceCode: '1',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    officialEmail: 'ahaothman@adeconomy.ae',
    officialMobile: '971544767803',
    quickLicense: '',
    tawtheeq: '',
    activities: '[{"ActivityCode": "4100002"},{"ActivityCode": "4100003"}]',
    partners:
      '[{"Type": "10","RepresentativeType": "1","PartnerSharePercentage": "100","IDNumber": "784-1984-6509093-8","NoOfOwnedShares": "","ProfitAndLossesDistributionPercentage": "","ShareHolding": "100","Emirate": "1","AreaARB": "","AreaENG": "","CityARB": "","CityENG": "","BuildingNameARB": "","BuildingNameENG": "","StreetARB": "","StreetENG": "","BuildingNumber": "","Manager": "1","FullNameARB": "","FullNameENG": "","FirstNameARB": "","FirstNameENG": "","LastNameARB": "","LastNameENG": "","EmailAddress": "","MobileNo": "","MOIUnifiedNumber": "","Nationality": ""}]',
    smartPassData:
      '[{"SPUUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","IdType": "EID","EID": "784-1984-6509093-8","IsApplicant": true,"PassportNumber": "","UserType": 0}]',
    durationOfTheCompanyInYears: '',
    managerAppointmentDurationInYears: '',
    totalNumberOfShares: '',
    capital: '',
  },
  mubdia: {
    licenceType: 'mubdia',
    phoneNumber: '971501801882',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    proName: 'Qaddoumi',
    proNnameEmailIDSmatpassData: '333',
    tradeNameEn: 'Taam Test Establishment',
    tradeNameAr: 'مؤسسة تم التجريبية',
    reservationPeriod: '03',
    calculatedCost: '',
    city: 'Abu Dhabi',
    typeOfEntity: 'Establishment',
    activity:
      '["Designing systems and software of electronic equipment and appliances (6201003)"]',
    tradePartner:
      '[{"type": "10","arabicName": "محمد قدومي","englishName": "Mohammed Qaddoumi","licenseNo": "123456","city": "Abu Dhabi","shareHolding": "100","idType": "EID","idNumber": "784-1989-5809071-8","representativeType": "1"}]',
    smartPassData:
      '[{"SPUUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","IdType": "EID","EID": "784-1984-6509093-8","IsApplicant": true,"PassportNumber": "","UserType": 0}]',
  },
  tech: {
    licenceType: 'tech',
    phoneNumber: '971501801882',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    proName: 'Qaddoumi',
    proNameEmailIDSmatpassData: '333',
    tradeNameEn: 'Taam Test Establishment',
    tradeNameAr: 'مؤسسة تم التجريبية',
    reservationPeriod: '03',
    calculatedCost: '',
    city: 'Abu Dhabi',
    typeOfEntity: 'Establishment',
    activity:
      '["Designing systems and software of electronic equipment and appliances (6201003)"]',
    tradePartner:
      '[{"type": "10","arabicName": "محمد قدومي","englishName": "Mohammed Qaddoumi","licenseNo": "123456","city": "Abu Dhabi","shareHolding": "100","idType": "EID","idNumber": "784-1989-5809071-8","representativeType": "1"}]',
    smartPassData:
      '[{"SPUUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","IdType": "EID","EID": "784-1984-6509093-8","IsApplicant": true,"PassportNumber": "","UserType": 0}]',
  },
  tamm: {
    licenceType: 'tamm',
    phoneNumber: '971501801882',
    expectedRevenue: 'From AED 1 million up to AED 5 million',
    expectedPaidCapital: 'From AED 1 million up to AED 5 million',
    proName: 'Qaddoumi',
    proNameEmailIDSmatpassData: '333',
    tradeNameEn: 'Taam Test Establishment',
    tradeNameAr: 'مؤسسة تم التجريبية',
    reservationPeriod: '03',
    calculatedCost: '',
    city: 'Abu Dhabi',
    typeOfEntity: 'Establishment',
    activity:
      '["Designing systems and software of electronic equipment and appliances (6201003)"]',
    tradePartner:
      '[{"type": "10","arabicName": "محمد قدومي","englishName": "Mohammed Qaddoumi","licenseNo": "123456","city": "Abu Dhabi","shareHolding": "100","idType": "EID","idNumber": "784-1989-5809071-8","representativeType": "1"}]',
    smartPassData:
      '[{"SPUUID": "0c549bfd-83c0-4f53-ba6e-ce2dca7c3458","IdType": "EID","EID": "784-1984-6509093-8","IsApplicant": true,"PassportNumber": "","UserType": 0}]',
  },
};

const onSubmit = async (licenseType: string, props: IVariables) => {
  // saving to redux based on button click
  props.actions.economicLicense.update({
    ...props.economicLicense,
    licenceType: {
      licenceType: licenseType,
    },
  });

  // const data = await bpm.start('economicLicence', {});
  //
  // if (data.success && data.data && data.data.businessKey && data.data.id) {
  //   props.actions.instanceId.update(data.data.id);
  //   props.actions.businessKey.update(data.data.businessKey);
  // }

  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onSendLicenceDetails',
    variables: licensePayload[licenseType],
  });
  props.history.push('/economic-licence/submit');
};

export default {
  onSubmit,
};
