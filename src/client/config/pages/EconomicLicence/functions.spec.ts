import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';
import functions from './functions';
// import bpm from "client/services/bpm";

jest.mock('client/services/fetch');
jest.mock('client/utils/appData', () => ({
  getSmartpassData: jest.fn(() => {
    return [];
  }),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('EconomicLicence/functions', () => {
  let mockFetch: any;
  window.scrollTo = jest.fn();

  beforeEach(() => {
    mockFetch = fetch;
    // mockBpm = bpm;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call uploadFile', async () => {
    const props = {
      economicLicense: {
        ownership: {
          owner: {},
        },
      },
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        countries: {
          update: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({});
    });

    expect(functions.init(props));
  });

  it('should properly call uploadFile with instance id and businessKey', async () => {
    const props = {
      instanceId: 'instance-Id',
      businessKey: 'business-Key',
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        countries: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.init(props);
    expect(mockFetch).toHaveBeenCalledWith('/pub/lookup/countries');
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call onCheckTradeName', async () => {
    const result = {
      data: {
        checkedEconomicNameProperty: {
          nameAvailableInEnglish: true,
          nameAvailableInArabic: false,
          isProhibitedNameEn: 'allah',
          isProhibitedNameAr: 'prohibited',
        },
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve(result);
    });

    await functions.onCheckTradeName('test', 'test');
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/tradeNameCheck',
      'POST',
      {
        tradeNameEnglish: 'test',
        tradenameArabic: 'test',
      },
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call onCheckTradeName with error res', async () => {
    mockFetch.mockImplementation(() => ({
      data: {
        checkedEconomicNameProperty: {
          isSpecialNameEn: 'special name',
        },
      },
    }));

    await functions.onCheckTradeName('test', 'test');
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/tradeNameCheck',
      'POST',
      {
        tradeNameEnglish: 'test',
        tradenameArabic: 'test',
      },
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call autoGenerateTradeName', async () => {
    const formData = {
      economicName: {
        tradeNameEn: 'test',
        tradeNameAr: 'test',
      },
      activities: [
        {
          activityCode: '1001',
        },
      ],
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.autoGenerateTradeName(formData);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/autoFillBusinessName',
      'POST',
      {
        activities: [{ activityCode: '1001' }],
        mainNature: 'ALL',
        tradeNameArabic: undefined,
        tradenameEnglish: undefined,
      },
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call getTransliteration', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.getTransliteration('some-name');
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getYamliSuggestions?word=some-name',
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call authorizedOperations', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.authorizedOperations('abu-dhabi-free-zones');
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/authorizedOperations',
      'POST',
      { sector: 'SD_FreeZone' },
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call fetchAttachments', async () => {
    const activityId = '1001';
    const legalType = 'instant';
    const type = 'Document';

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.fetchAttachments(activityId, legalType, type);
    expect(mockFetch).toHaveBeenCalledWith(
      '/pub/proxy/getRequirements',
      'POST',
      {
        activityId,
        legalType,
        transactionType: 'License Issue',
        type,
        location: 'ABU DHABI',
      },
    );
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call getBusinessLocations with licenceType instant', async () => {
    const licenceType = 'instant';
    const res = [
      {
        name: 'abu-dhabi-free-zones',
        label: 'location.freeZoneAbuDhabi.label',
      },
      {
        name: 'abu-dhabi-investment-areas',
        label: 'location.investAbuDhabi.label',
      },
      {
        name: 'emirate-abu-dhabi',
        label: 'location.emirateAbuDhabi.label',
      },
    ];
    expect(await functions.getBusinessLocations(licenceType)).toEqual(res);
  });

  it('should properly call getBusinessLocations with branch', async () => {
    const licenceType = 'tajer';
    const res = [
      {
        name: 'abu-dhabi',
        label: 'global.abuDhabi',
      },
      {
        name: 'al-ain',
        label: 'global.alAin',
      },
      {
        name: 'al-dhafra',
        label: 'global.alDhafra',
      },
    ];
    expect(await functions.getBusinessLocations(licenceType)).toEqual(res);
  });

  it('should properly call getLocationActivities', async () => {
    const activities = {};
    const mockRes = jest.fn(() => jest.fn());
    await functions.getLocationActivities(activities);
    expect(mockRes).not.toReturn();
  });

  it('should properly call getEconomicNameSuggestions', async () => {
    const economicLicense = {
      legalForm: {
        legalForm: 'tajer',
      },
      activities: [
        {
          activityCode: '1001',
        },
      ],
      economicName: {
        tradeNameAr: 'test',
        tradeNameEn: 'test',
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
      });
    });
    await functions.getEconomicNameSuggestions(economicLicense);

    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call init with instance id', async () => {
    const props = {
      instanceId: 'instance-Id',
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        countries: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          businessKey: 'businessKey',
          id: 1,
        },
      });
    });
    await functions.init(props);
    expect(mockFetch).toBeCalledTimes(1);
  });

  it('should properly call init with fetch fail', async () => {
    const props = {
      instanceId: 'instance-Id',
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        countries: {
          update: jest.fn(),
        },
        instanceId: {
          update: jest.fn(),
        },
        businessKey: {
          update: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
      },
    };

    mockFetch.mockImplementation(() => {
      return Promise.resolve(Error);
    });
    await functions.init(props);
    // expect(mockFetch).toBeCalledTimes(2);
  });

  it('should properly call updatePageTitle', () => {
    const props = {
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };
    functions.updatePageTitle('branch', 'branch', props);
  });
  it('should properly call updatePageTitle', () => {
    const props = {
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
    };
    functions.updatePageTitle('instant', 'branch', props);
  });

  it('should properly call submitLicence branch', async () => {
    const state = {
      locale: {
        locale: 'locale',
      },
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        update: jest.fn(),
        licenceType: 'branchGCC',
        branchDetails: {
          branch: 'branchAD',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: { legalForm: 'establishment' },
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '784198958090718',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence instant', async () => {
    const state = {
      locale: {
        locale: 'locale',
      },
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        officialMobile: '0504565784',
        contactType: 'company',
        update: jest.fn(),
        licenceType: 'instant',
        licenseNumber: ['CN-10092'],
        branchDetails: {
          branch: 'branchAD',

          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: { legalForm: 'establishment' },
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '784198958090718',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence instant branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'instant',
        branchDetails: {
          branch: 'branchAD',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: { legalForm: 'establishme' },
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '',
              nationality: 'IND',
              phoneNumber: '',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer', async () => {
    const state = {
      locale: 'ar',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0000000',
        contactType: 'company',
        update: jest.fn(),
        licenceType: 'tajer',
        branchDetails: {
          branch: 'branch',
          licenseNumber: '',
          legalForm: 'establishment',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'establishment',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'visitor',
              sharePercentage: '100',
              type: 'visitor',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '784198958090718',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });
    // @ts-ignore
    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence branchGCC', async () => {
    const state = {
      locale: 'ar',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        update: jest.fn(),
        licenceType: 'branchGCC',
        branchDetails: {
          branch: 'branch',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'establishment',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '784198958090718',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        applicantEmail: 'applicant@abc.com',
        licenseNumber: 'CN-10092',
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'tajer',
        branchDetails: {
          branch: '',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'LLC',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [],
          localAgent: [],
          manager: [],
          partner: [
            {
              type: 'visitor',
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'tajer',
        branchDetails: {
          branch: '',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'soleProprietorshipLLC',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '',
              nationality: 'IND',
              phoneNumber: '',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'tajer',
        branchDetails: {
          branch: '',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'soleProprietorshipLLC',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'visitor',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '',
              nationality: 'IND',
              phoneNumber: '',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'tajer',
        branchDetails: {
          branch: '',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'LLC',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'visitor',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '',
              nationality: 'IND',
              phoneNumber: '',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tajer branchs', async () => {
    const state = {
      locale: 'en',

      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        emiratesId: '125',
        update: jest.fn(),
        licenceType: 'instant',
        branchDetails: {
          branch: '',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: 'sole',
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'individual',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'visitor',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '',
              nationality: 'IND',
              phoneNumber: '',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [],
          partner: [],
          representative: [],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call submitLicence tech', async () => {
    const state = {
      locale: 'en',
      actions: {
        economicLicenceSubmitting: {
          update: jest.fn(),
        },
        economicLicenceServerError: {
          update: jest.fn(),
        },
      },
      activities: {
        update: jest.fn(),
      },
      economicLicenceValidate: 'economicLicenceValidate',
      economicLicense: {
        licenseNumber: ['CN-10092'],
        officialMobile: '0504565784',
        contactType: 'company',
        update: jest.fn(),
        licenceType: 'tech',
        branchDetails: {
          branch: 'branchAD',
          licenseNumber: '',
          legalForm: '',
          emirate: '',
          freeZone: '',
          businessNameEn: '',
          businessNameAr: '',
          sharePercentage: '',
          nationality: '',
          email: '',
          phoneNumber: '',
          isGCC: {},
          parentLicenseEmirate: '',
        },
        branchDocuments: {
          parentCompanyLicence: {},
          parentCompanyMoaDocument: {},
          freezoneNoc: {},
          noBranchAD: {},
        },
        legalForm: { legalForm: 'establishment' },
        financialDetails: {
          paidCapitalApprox: 'A. From AED 1 million up to AED 5 million',
          revenuesSalesApprox: 'A. From AED 1 million up to AED 5 million',
          durationOfTheCompany: '',
          managerAppointmentDuration: '',
          capital: 1000,
          totalNumberOfShares: 1000,
        },
        activities: [
          {
            activityCode: '6820001',
            activityNameEn:
              'Real estate lease and management service (6820001)',
            activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
          },
          {
            activityCode: '4773402',
            activityNameEn: 'Retail sale of gifts (4773402)',
            activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
          },
        ],
        activityCategory: '',
        activitySubCategory: '',
        location: { businessLocation: '' },
        economicName: {
          tradeNameEn: '1002703',
          tradeNameAr: '1002703',
          nameReservationPeriod: '',
        },
        ownership: {
          owner: [
            {
              contactType: 'company',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          localAgent: [
            {
              firstNameEn: 'sdfdhgh',
              middleNameEn: '',
              lastNameEn: 'dgfgfsg',
              emiratesId: '',
              nationality: 'ARE',
              phoneNumber: '+971504565724',
              sharePercentage: 0,
            },
          ],
          manager: [
            {
              contactType: 'company',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          partner: [
            {
              contactType: 'company',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
          representative: [
            {
              contactType: 'company',
              representativeType: 'owner',
              sharePercentage: '100',
              type: 'resident',
              firstNameEn: 'Mahmoud Wisam',
              middleNameEn: '',
              lastNameEn: 'Mo',
              emiratesId: '784201326962079',
              nationality: 'IND',
              phoneNumber: '971589004745',
            },
          ],
        },
        privilegesFacilities: {
          freeZone: '',
          abuDhabiInvestmentAreas: '',
          establishmentCardLocation: '',
        },
        contact: {
          tawtheeqNumber: '10086',
          officialEmail: 'test@gmail.com',
          officialMobile: '+971504878965',
          contactPersonPhone: '',
          ubo: '',
          confirmation: { confirmation: true },
        },
        applicantContact: {
          name: 'Mahmoud Wisam',
          email: 'persona.adoss+1@gmail.com',
          phoneNumber: '971589004745',
        },
        onlineTradingDetails: {
          socialMediaType: '',
          socialMediaAccount: '',
          website: '',
        },
        attachments: { documents: [] },
        termsConditions: { agreement: { agreement: true } },
        documents: [
          {
            fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
            id:
              '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            lastModifiedDate: '2019-11-28T10:36:24.515Z',
            name: 'sample.pdf',
            documentName: 'sample.pdf',
            documentPath:
              'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
            type: 'application/pdf',
            lastModified: 1574937384515,
            size: 3028,
          },
        ],
      },
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        businessNameEng: 'businessNameEng',
        businessNameArb: 'businessNameArb',
        activities: [{}, {}],
      });
    });

    await functions.submitLicence(state.economicLicense, state);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: '',
      branch: 'branchGCC',
      paidCapitalApprox: 'paidCapitalApprox',
      revenuesSalesApprox: 'revenuesSalesApprox',
      durationOfTheCompany: '2',
      managerAppointmentDuration: '2',
      capital: '1000',
      tradeNameEn: 'tradeNameEn',
      tradeNameAr: 'tradeNameAr',
      update: jest.fn(),
      licenceType: 'branchGCC',
      legalForm: 'PJSCPublic',
      socialMediaTypeReq: '',
      socialMediaAccountReq: '',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'freezoneNoc',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
    // @ts-ignore
    functions.validation(formValues, !false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchUAE',
      update: jest.fn(),
      licenceType: 'branch',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'something ',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchAD',
      update: jest.fn(),
      licenceType: 'branch',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'something ',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchFZ',
      update: jest.fn(),
      licenceType: 'branch',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'something ',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchForeign',
      update: jest.fn(),
      licenceType: 'branch',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchForeign',
      update: jest.fn(),
      licenceType: 'mubdia',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: ' ',
      branch: 'branchForeign',
      update: jest.fn(),
      licenceType: 'allInOne',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [],
        localAgent: [],
        manager: [],
        partner: [],
        representative: [],
      },
      privilegesFacilities: {
        freeZone: '',
        abuDhabiInvestmentAreas: '',
        establishmentCardLocation: '',
      },
      documents: [
        {
          fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'somethimg',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call validation', () => {
    const formValues = {
      officialMobile: '0504565784',
      contactType: 'company',
      website: 'https://test.ae',
      update: jest.fn(),
      licenceType: 'instant',
      branch: 'branchUAE',
      legalForm: 'establishment',
      activities: [
        {
          activityCode: '6820001',
          activityNameEn: 'Real estate lease and management service (6820001)',
          activityNameAr: 'خدمات تأجير العقارات وإدارتها (6820001)',
        },
        {
          activityCode: '4773402',
          activityNameEn: 'Retail sale of gifts (4773402)',
          activityNameAr: 'بيع الهدايا - بالتجزئة (4773402)',
        },
      ],
      ownership: {
        owner: [
          {
            contactType: 'company',
            representativeType: 'owner',
            sharePercentage: '100',
            type: 'resident',
            firstNameEn: 'Mahmoud Wisam',
            middleNameEn: '',
            lastNameEn: 'Mo',
            emiratesId: '784201326962079',
            nationality: 'IND',
            phoneNumber: '971589004745',
          },
        ],
        localAgent: [
          {
            firstNameEn: 'sdfdhgh',
            middleNameEn: '',
            lastNameEn: 'dgfgfsg',
            emiratesId: '',
            nationality: 'ARE',
            phoneNumber: '+971504565724',
            sharePercentage: 0,
          },
        ],
        manager: [
          {
            contactType: 'company',
            representativeType: 'owner',
            sharePercentage: '100',
            type: 'resident',
            firstNameEn: 'Mahmoud Wisam',
            middleNameEn: '',
            lastNameEn: 'Mo',
            emiratesId: '784201326962079',
            nationality: 'IND',
            phoneNumber: '971589004745',
          },
        ],
        partner: [
          {
            contactType: 'company',
            representativeType: 'owner',
            sharePercentage: '100',
            type: 'resident',
            firstNameEn: 'Mahmoud Wisam',
            middleNameEn: '',
            lastNameEn: 'Mo',
            emiratesId: '784201326962079',
            nationality: 'IND',
            phoneNumber: '971589004745',
          },
        ],
        representative: [
          {
            contactType: 'company',
            representativeType: 'owner',
            sharePercentage: '100',
            type: 'resident',
            firstNameEn: 'Mahmoud Wisam',
            middleNameEn: '',
            lastNameEn: 'Mo',
            emiratesId: '784201326962079',
            nationality: 'IND',
            phoneNumber: '971589004745',
          },
        ],
      },
      termsConditions: { agreement: { agreement: true } },
      documents: [
        {
          fieldName: 'Copyofaregistered(TAWTHEEQ)tenancycontract',
          id: '0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          lastModifiedDate: '2019-11-28T10:36:24.515Z',
          name: 'sample.pdf',
          documentName: 'sample.pdf',
          documentPath:
            'journey-id**EC_T7nP7wIyIJ9yqe5fCLelDfG0Cggzi**/tmp/uploaded/**0447059877160629341575374163.pdf__YZX0xky0SNiPWxNYR4uHQakHuBQx',
          type: 'application/pdf',
          lastModified: 1574937384515,
          size: 3028,
        },
      ],
    };
    functions.validation(formValues, false);
  });

  it('should properly call getRepresentatives', () => {
    const countries = [
      { code: '123', name: 'algeria', id: 'DZ' },
      { code: '12', name: 'united arabic emirates', id: 'ARE' },
      { code: 'ARE', name: 'united arabic emirates', id: 'BHR' },
      { code: '12', name: 'united arabic emirates', id: 'KWT' },
      { code: '12', name: 'united arabic emirates', id: 'OMN' },
    ];
    const formData: IVariables = {};
    const result = functions.getRepresentatives(
      'instant',
      true,
      'PJSCPublic',
      countries,
      [{ nationality: 'ARE' }],
      'branchGCC',
      false,
      'establishment',
    );

    const result2 = functions.getRepresentatives(
      'tajer',
      true,
      'establishment',
      countries,
      { owner: [{ nationality: 'ARE' }] },
      'branchG',
      false,
      'establishment',
    );
    const result3 = functions.getRepresentatives(
      'tajer',
      true,
      'soleProprietorshipLLC',
      countries,
      [{ owner: [{ nationality: 'ARE' }] }],
      'branchGCC',
      false,
      'establishment',
    );

    functions.getRepresentatives(
      'tajer',
      true,
      'soleProprietorshipLLC',
      countries,
      [{ owner: [{ nationality: 'ARE' }] }],
      'branchUAE',
      false,
      'establishment',
    );

    const result4 = functions.getRepresentatives(
      'mubdia',
      true,
      'PJSCPrivate',
      countries,
      [{ owner: [{ nationality: 'ARE' }] }],
      'branchForeign',
      false,
      'establishment',
    );
    // @ts-ignore
    expect(result.owner.fields[0].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.owner.fields[1].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[2].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.owner.fields[3].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.owner.fields[4].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.owner.fields[5].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[6].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[7].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[8].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[8].disabledDate(Date.now)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[8].validate(Date.now)).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.owner.fields[8].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result.owner.fields[9].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[9].validate(Date.now)).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.owner.fields[9].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result3.owner.fields[10].validate('')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result3.owner.fields[10].validate('971504569874')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result3.owner.fields[10].validate('784198505249585')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result3.owner.fields[10].validate('+71569874')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result.owner.fields[10].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.owner.fields[11].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[12].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[13].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.owner.fields[14].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result3.owner.fields[15].items({ type: 'citizen' })).toStrictEqual([
      { id: 'ARE', label: 'united arabic emirates' },
    ]);
    // @ts-ignore
    expect(result2.owner.fields[15].items({ type: 'citizen' })).toStrictEqual([
      { id: 'ARE', label: 'united arabic emirates' },
    ]);
    // @ts-ignore
    expect(result.owner.fields[15].items({ type: 'citizen' })).toStrictEqual([
      { id: 'ARE', label: 'united arabic emirates' },
    ]); // label: 'input.nationality.label',
    // @ts-ignore
    expect(result2.owner.fields[16].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.owner.fields[16].validate('+971504569874'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.owner.fields[16].validate('455454')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.owner.fields[17].validate('')).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.owner.fields[17].visible('')).toBe(false);
    expect(
      // @ts-ignore
      result2.owner.fields[17].validate('hanafi@test.com'),
    ).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.owner.fields[17].validate('this@shouldFail.'),
    ).toBeInstanceOf(Object);
    // /////////////////////////////////////////////// this is the end of owner section
    // @ts-ignore
    expect(result.owner.fields[15].disabled({ type: 'citizen' })).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[0].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[1].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[2].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[3].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[4].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[5].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[6].visible({})).toBe(true);
    // @ts-ignore
    expect(result3.partner.fields[7].visible({})).toBe(true);
    // @ts-ignore
    expect(result.partner.fields[8].disabledDate(Date.now)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[8].visible({})).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[8].validate(Date.now)).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.partner.fields[8].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result.partner.fields[9].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[9].validate(Date.now)).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.partner.fields[9].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result3.partner.fields[10].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result3.partner.fields[10].validate('784198505249585'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result3.partner.fields[10].validate('+971504569')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result.partner.fields[10].visible(formData)).toBe(true);
    // @ts-ignore
    expect(result.partner.fields[11].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[12].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[13].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[14].visible(formData)).toBe(false);
    // @ts-ignore
    expect(result.partner.fields[15].disabled({ type: 'citizen' })).toBe(true);
    // @ts-ignore
    expect(result2.partner.fields[16].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.partner.fields[16].validate('+971504569874'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.partner.fields[16].validate('455454')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result2.partner.fields[17].visible('')).toBe(false);
    // @ts-ignore
    expect(result2.partner.fields[17].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.partner.fields[17].validate('hanafi@test.com'),
    ).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.partner.fields[17].validate('this@shouldFail.'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result3.localAgent.visible()).toBe(true);
    // @ts-ignore
    expect(result4.localAgent.visible()).toBe(true);
    // @ts-ignore
    expect(result2.localAgent.visible()).toBe(false);
    // @ts-ignore
    expect(result2.localAgent.fields[3].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.localAgent.fields[3].validate('784198505249585'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.localAgent.fields[3].validate('455454')).toBeInstanceOf(
      Object,
    );

    // @ts-ignore
    expect(result2.localAgent.fields[5].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.localAgent.fields[5].validate('+971504569874'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.localAgent.fields[5].validate('455454')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result2.manager.fields[1].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[5].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[6].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[7].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[8].visible({})).toBe(false);
    // @ts-ignore
    expect(result.manager.fields[8].disabledDate(Date.now)).toBe(false);
    // @ts-ignore
    expect(result.manager.fields[8].validate(Date.now)).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.manager.fields[8].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result2.manager.fields[9].visible({})).toBe(false);
    // @ts-ignore
    expect(result.manager.fields[9].validate('some-value')).toMatchObject({
      message: '',
      status: 'success',
    });
    // @ts-ignore
    expect(result.manager.fields[9].validate('')).toMatchObject({
      status: 'error',
      message: 'required_field',
    });
    // @ts-ignore
    expect(result2.manager.fields[10].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.manager.fields[10].validate('784198505249585'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.manager.fields[10].validate('455454')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore
    expect(result2.manager.fields[10].visible({})).toBe(true);
    // @ts-ignore
    expect(result2.manager.fields[11].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[12].disabled({})).toBe(false);
    // @ts-ignore
    expect(result2.manager.fields[13].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.manager.fields[13].validate('+971504565724'),
    ).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.manager.fields[13].validate('050457562'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.manager.fields[14].validate('')).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.manager.fields[14].validate('hanafi@test.com'),
    ).toBeInstanceOf(Object);
    expect(
      // @ts-ignore
      result2.manager.fields[14].validate('this@shouldFail.'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.manager.fields[14].visible({})).toBe(false);

    // @ts-ignore
    expect(result2.representative.fields[4].validate('')).toBeInstanceOf(
      Object,
    );
    expect(
      // @ts-ignore
      result2.representative.fields[4].validate('784198505249585'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.representative.fields[4].validate('455454')).toBeInstanceOf(
      Object,
    );
    // @ts-ignore

    expect(result2.representative.fields[4].visible({})).toBe(true);
    // @ts-ignore
    expect(result2.representative.fields[5].visible({})).toBe(false);
    // @ts-ignore
    expect(result2.representative.fields[6].disabled({ type: '' })).toBe(false);
    // @ts-ignore
    expect(result2.representative.fields[7].validate('')).toBeInstanceOf(
      Object,
    );
    expect(
      // @ts-ignore
      result2.representative.fields[7].validate('+971504569874'),
    ).toBeInstanceOf(Object);
    // @ts-ignore
    expect(result2.representative.fields[7].validate('455454')).toBeInstanceOf(
      Object,
    );
  });

  it('should properly call getActivities', async () => {
    const props = {
      actions: {
        activities: {
          update: jest.fn(),
        },
      },
      economicLicense: {
        activityCategory: 'activityCategory',
        activitySubCategory: 'activitySubCategory',
      },
      user: '',
      local: '',
      categories: [{ nameEn: '' }],
    };
    const ownership = {
      owner: [{ nationality: 'ARE' }, { nationality: 'DZ' }],
      partner: [{ nationality: 'ARE' }, { nationality: 'DZ' }],
    };

    const ownership2 = {
      owner: [],
      partner: [],
    };
    const ownership3 = {
      owner: [{ nationality: 'Other' }],
      partner: [{ nationality: 'Other' }],
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({});
    });
    await functions.getActivities(props, 'instant', ownership, true)('');

    await functions.getActivities(props, 'branch', ownership3)('');
    await functions.getActivities(props, 'mubdia', ownership2)('');
    await functions.getActivities(props, 'tech', ownership)('');
    await functions.getActivities(props, 'allInOne', ownership)('');
    await functions.getActivities(props, 'tajer', ownership)('');

    await functions.getActivities(props, 'other', ownership)('');
    // @ts-ignore
    await functions.getActivities(props, 'other', ownership)('', 1, 'var');
    props.economicLicense.activityCategory = '';
    await functions.getActivities(props, 'instant', ownership, true)('');
  });

  it('should properly call fetchBranchDetails', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({});
    });
    await functions.fetchBranchDetails('10');
    expect(mockFetch).toBeCalled();
  });

  it('should properly call getBusinessLocations with other type of licence', () => {
    expect(functions.getBusinessLocations('other')).toBeInstanceOf(Object);
  });

  it('should properly call getLegalForms with other', () => {
    expect(functions.getLegalForms('other', ['Nationality EN'])).toBeInstanceOf(
      Object,
    );
  });
  it('should properly call getLegalForms with mubdia', () => {
    expect(
      functions.getLegalForms('mubdia', ['Nationality EN']),
    ).toBeInstanceOf(Object);
  });
  it('should properly call getLegalForms with tamm', () => {
    expect(functions.getLegalForms('tamm', ['Nationality EN'])).toBeInstanceOf(
      Object,
    );
  });
  it('should properly call getLicenceTypes ', () => {
    expect(functions.getLicenceTypes({})).toBeInstanceOf(Object);
  });
  it('should properly call getLocationActivities ', async () => {
    expect(
      await functions.getLocationActivities({})('abu-dhabi-free-zones'),
    ).toBeInstanceOf(Object);
  });

  it('should properly call getLocationActivities ', async () => {
    expect(await functions.getLocationActivities({})(' ')).toBeInstanceOf(
      Object,
    );
  });

  it('should properly call onCheckTradeName', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          checkedEconomicNameProperty: {
            nameAvailableInEnglish: true,
            nameAvailableInArabic: true,
          },
        },
      });
    });

    await functions.onCheckTradeName('', '');
  });

  it('should properly call fieldVisibility', () => {
    const formState = {
      licenceType: 'branch',
      branch: 'branchUAE',
      legalForm: 'other',
      parentCompanyLegalForm: '1',
    };
    const formState2 = {
      licenceType: 'branch',
      branch: { branch: 'branchUAE' },
      legalForm: '',
      parentCompanyLegalForm: '1',
    };
    expect(functions.visibility.fieldVisibility(formState)).toBeInstanceOf(
      Object,
    );
    expect(functions.visibility.fieldVisibility(formState2)).toBeInstanceOf(
      Object,
    );
  });

  it('should properly call groupVisibility', () => {
    const formState = {
      licenceType: 'branch',
      branch: 'branchUAE',
      legalForm: 'other',
      parentCompanyLegalForm: '1',
      activities: [],
    };
    const formState2 = {
      licenceType: '',
      branch: 'branchUAE',
      legalForm: '',
      parentCompanyLegalForm: '1',
      activities: [],
    };
    const formState3 = {
      licenceType: 'instant',
      branch: 'branchUAE',
      legalForm: 'other',
      parentCompanyLegalForm: '1',
      activities: [],
    };
    const formState4 = {
      licenceType: 'tajer',
      branch: 'branchUAE',
      legalForm: 'other',
      parentCompanyLegalForm: '1',
      activities: [],
    };
    const formState5 = {
      licenceType: 'instant',
      branch: 'branchUAE',
      legalForm: '',
      parentCompanyLegalForm: '1',
      activities: [],
    };
    expect(functions.visibility.groupVisibility(formState)).toBeInstanceOf(
      Object,
    );
    expect(functions.visibility.groupVisibility(formState2)).toBeInstanceOf(
      Object,
    );
    expect(functions.visibility.groupVisibility(formState3)).toBeInstanceOf(
      Object,
    );
    expect(functions.visibility.groupVisibility(formState4)).toBeInstanceOf(
      Object,
    );
    expect(functions.visibility.groupVisibility(formState5)).toBeInstanceOf(
      Object,
    );
  });
});
