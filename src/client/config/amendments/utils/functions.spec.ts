import * as functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/utils/functions', () => {
  let props: any;
  window.scrollTo = jest.fn();

  props = {
    prevLegalForm: 'establishment',
    legalForm: 'establishment',
    prevLicenseType: 'economicLicense',
    licenseType: 'economicLicense',
    licenseNo: 'CN-11111',
    capID: 'T23-1111-2222-34H',
    amendmentCategories: {
      category: {
        ownership: false,
        location: false,
        activities: false,
        tradename: false,
        financialDetails: false,
      },
      ownership: {
        ownership: false,
        location: false,
        activities: false,
        tradename: false,
        financialDetails: false,
      },
    },
    licenceDetails: {
      partners: [],
      managers: [],
      representatives: [],
      localAgents: [],
      heirs: [],
      location: {},
      tradeName: {},
      country: {},
      paidUpCapital: {},
      activities: [],
      contactInfo: {
        name: 'test',
        phone: 'test',
        email: 'test',
      },
      licenceType: { eng: 'TAMM License' },
      legalForm: { eng: 'Establishment' },
      branchTypeEn: '',
      branchTypeAr: '',
      isbranch: 'N',
    },
    actions: {
      amendmentServerError: {
        update: jest.fn(),
      },
    },
    history: {
      push: jest.fn(),
    },
    i18n: jest.fn(),
  };

  it('should properly call getReduxState function', () => {
    functions.getReduxState(props);
    // expect(applicationPayload).toBe('allInOne');
  });

  it('should properly call getLicenceType function', () => {
    const licenceDetails = {
      ...props.licenceDetails,
    };
    const applicationPayload = functions.getLicenceType(licenceDetails);
    expect(applicationPayload).toBe('allInOne');
  });

  it('should properly call getLicenceType function for branch', () => {
    const licenceDetails = {
      ...props.licenceDetails,
      licenceType: { eng: 'Normal' },
      isbranch: 'Y',
    };
    const applicationPayload = functions.getLicenceType(licenceDetails);
    expect(applicationPayload).toBe('branch');
  });

  it('should properly call getLegalForm function for economicLicense', () => {
    const licenceDetails = {
      ...props.licenceDetails,
    };
    const applicationPayload = functions.getLegalForm(
      licenceDetails,
      'economicLicense',
    );
    expect(applicationPayload).toBe('establishment');
  });

  it('should properly call getLegalForm function for branch', () => {
    const licenceDetails = {
      ...props.licenceDetails,
      branchTypeEn: 'Branch of a Local Establshment',
      branchTypeAr: '',
      isbranch: 'Y',
    };
    const applicationPayload = functions.getLegalForm(licenceDetails, 'branch');
    expect(applicationPayload).toBe('adBranch');
  });

  it('should properly call getLegalForm function for foreign branch', () => {
    const licenceDetails = {
      ...props.licenceDetails,
      branchTypeEn: 'Branch of a Foriegn Establshment',
      branchTypeAr: '',
      isbranch: 'Y',
    };
    const applicationPayload = functions.getLegalForm(licenceDetails, 'branch');
    expect(applicationPayload).toBe('adBranch');
  });

  it('should properly call returnCamundaMessage', () => {
    let licenceDetails = {
      success: true,
      message: 'Success',
    };
    functions.returnCamundaMessage(licenceDetails, props, 'next');
    licenceDetails = {
      success: true,
      message: 'message',
    };
    functions.returnCamundaMessage(licenceDetails, props, '');
    licenceDetails = {
      success: false,
      message: 'message',
    };
    functions.returnCamundaMessage(licenceDetails, props, '');
  });

  it('should remder getCategoryTypes', () => {
    functions.getCategoryTypes(props.legalForm, props.licenseType);
  });
  it('should remder getNextSubStepPage', () => {
    functions.getNextSubStepPage('', props);
  });
  it('should remder getNextSubStepPage', () => {
    props = {
      ...props,
      amendmentCategories: {
        category: {
          ownership: false,
          location: false,
          activities: false,
          tradename: false,
          financialDetails: false,
        },
        ownership: {
          ownership: false,
          location: false,
          activities: false,
          tradename: false,
          financialDetails: false,
        },
        isUploadStep: true,
      },
    };
    functions.getNextSubStepPage('contactInfo', props);
  });

  it('should remder getPrevSubStepPage', () => {
    functions.getPrevSubStepPage('ownership', props);
  });
  it('should remder getSteps', () => {
    functions.getSteps(props);
  });
  it('should remder getFirstSubStepPage', () => {
    functions.getFirstSubStepPage(props);
  });
  it('should remder truncate', () => {
    functions.truncate('testname', 20);
  });
  it('should remder documentsToBeSavedInCamunda', () => {
    const applicationReturnDocuments = [
      {
        fieldName: 'dummy.pdf',
        id: 'x',
        name: 'dummy.pdf',
        documentPath: '',
        type: 'application/pdf',
        size: 440744,
      },
    ];
    functions.documentsToBeSavedInCamunda(applicationReturnDocuments);
  });
});
