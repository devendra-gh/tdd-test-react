import functions from './functions';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/pages/Questioner/functions', () => {
  let props: any;
  let state: any;

  beforeEach(() => {
    props = {
      userId: 1,
      userName: 'userName',
      questionnaireData: {
        isDigitalChannels: 'yes',
        applicantType: 'expandBusiness',
        timeSpan: 'moreThree',
        isOffice: 'yes',
        isTechBusiness: 'no',
        freeZoneToMain: 'yes',
        eCommerce: 'yes',
        ownerOrPartner: 'oneOwner',
      },
      actions: {
        questionnaireData: {
          update: jest.fn(),
          reset: jest.fn(),
        },
        economicLicense: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
      match: {
        params: {
          formIndex: '1',
        },
      },
    };
    state = {
      questionnaireData: {
        // isDigitalChannels: '',
        applicantType: false,
        timeSpan: false,
        isOffice: false,
        isTechBusiness: false,
        freeZoneToMain: false,
        eCommerce: false,
        ownerOrPartner: false,
      },
    };
  });

  it('should call getFormState', async () => {
    const result = functions.getFormState(state);
    // @ts-ignore
    result.steps[1].visible({ applicantType: 'expandBusiness' });
    // @ts-ignore
    result.steps[2].visible({ applicantType: 'expandBusiness' });
    // @ts-ignore
    result.steps[3].visible({ applicantType: 'expandBusiness' });
    // @ts-ignore
    result.steps[4].visible({
      applicantType: 'expandBusiness',
      freeZoneToMain: 'no',
      parentLocation: 'otherUae',
    });
    // @ts-ignore
    result.steps[5].visible({ applicantType: 'simpleBusiness' });
    // @ts-ignore
    result.steps[6].visible({ applicantType: 'newBusiness' });
    // @ts-ignore
    result.steps[7].visible({
      applicantType: 'newBusiness',
      timeSpan: 'moreThree',
    });
    // @ts-ignore
    result.steps[8].visible({
      applicantType: 'newBusiness',
      timeSpan: 'lessThree',
    });
    // @ts-ignore
    result.steps[9].visible({ applicantType: 'newBusiness' });
    // @ts-ignore
    result.steps[10].visible({
      applicantType: 'newBusiness',
      timeSpan: 'lessThree',
      oneOrMoreOwner: 'Other',
      ownerType: 'oneOwner',
    });
    // @ts-ignore
    result.steps[11].visible({
      applicantType: 'newBusiness',
      timeSpan: 'lessThree',
      oneOrMoreOwner: 'Other',
      ownerType: 'oneOwner',
      isGccOwner: 'yes',
    });
    // @ts-ignore
    result.steps[12].visible({
      applicantType: 'newBusiness',
      timeSpan: 'moreThree',
      ownerType: 'oneOwner',
    });
    // @ts-ignore
    result.steps[13].visible({
      applicantType: 'newBusiness',
      timeSpan: 'moreThree',
      ownerType: 'oneOwner',
      isOwnerCompany: 'no',
    });
    // @ts-ignore
    result.steps[14].visible({
      applicantType: 'newBusiness',
      timeSpan: 'moreThree',
      ownerType: 'oneOwner',
      isOwnerCompany: 'no',
      isGccOwner: 'yes',
    });
    // @ts-ignore
    result.steps[15].visible({
      applicantType: 'newBusiness',
      timeSpan: 'moreThree',
      ownerType: 'multipleOwners',
    });
    // @ts-ignore
    result.steps[16].visible({
      applicantType: 'newBusiness',
      isTechBusiness: 'yes',
    });

    expect(result).toBeInstanceOf(Object);
  });

  it('should properly call updateLegalForm', () => {
    functions.updateLegalForm([{ id: 'id' }], props);
  });

  it('should properly handel onSubmit', () => {
    const props1 = {
      history: {
        push: jest.fn(),
      },
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
      questionnaireData: {
        applicantType: 'expandBusiness',
        freeZoneToMain: 'yes',
      },
    };
    functions.onSubmit({}, props1);
  });

  it('should properly handel onSubmit', () => {
    const props2 = {
      history: {
        push: jest.fn(),
      },
      actions: {
        economicLicense: {
          update: jest.fn(),
        },
      },
      questionnaireData: {
        applicantType: 'simpleBusiness',
        freeZoneToMain: 'yes',
      },
    };
    functions.onSubmit({}, props2);
  });

  it('should properly handel onSubmit', () => {
    functions.onSubmit({}, props);
  });

  it('should handle getSummary and cover all branches', () => {
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'newBusiness',
        isTechBusiness: 'yes',
        timeSpan: 'moreThree',
        // legalType: "pjscPublic",
      },
    };

    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'newBusiness',
        timeSpan: 'lessThree',
        isOffice: 'yes',
        // limitedOrUnlimitedCompany: "limited"
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        timeSpan: 'moreThree',
        isTechBusiness: 'no',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        timeSpan: 'lessThree',
        isTechBusiness: 'no',
        isOffice: 'no',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        isOwnerCompany: 'yes',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'female',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'simpleBusiness',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'simpleBusiness',
        limitedOrUnlimitedCompany: 'limited',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'simpleBusiness',
        oneOrMoreOwner: 'moreOwners',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'simpleBusiness',
        limitedOrUnlimitedCompany: 'unLimited',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'expandBusiness',
        eCommerce: 'no',
        parentLocation: 'abuDhabi',
        ownerOrPartner: 'partners',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        parentLocation: 'otherUae',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        parentLocation: 'gcc',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        parentLocation: 'foreign',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        parentLocation: null,
        freeZoneToMain: 'yes',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      applicantType: null,
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'newBusiness',
        isTechBusiness: 'no',
        timeSpan: 'moreThree',
        legalType: 'pjscPrivate',
        //   limitedOrUnlimitedCompany: "limited"
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        legalType: 'pjscPublic',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        legalType: 'llc',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        limitedOrUnlimited: 'unLimited',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        isGcc: 'no',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        isOwnerCompany: 'yes',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        applicantType: 'newBusiness',
        isTechBusiness: 'yes',
        timeSpan: 'moreThree',
        legalType: 'pjscPrivate',
        isGcc: 'yes',
        isOwnerCompany: 'no',
        limitedOrUnlimited: null,
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        legalType: 'pjscPublic',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        legalType: 'llc',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        limitedOrUnlimited: 'limited',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        isOwnerCompany: 'yes',
      },
    };
    functions.getSummary(state);

    state.questionnaireData = {
      ...state.questionnaireData,
      ...{
        isGcc: 'no',
      },
    };
    functions.getSummary(state);
  });

  it('should handle getButtonLabel', () => {
    functions.init(props);
    const buttonLabel = functions.getButtonLabel(props);
    expect(buttonLabel).toBe('button.dashBoard');

    props.questionnaireData = {
      applicantType: 'newBusiness',
      isTechBusiness: 'yes',
      timeSpan: 'moreThree',
    };

    const buttonLabel1 = functions.getButtonLabel(props);
    expect(buttonLabel1).toBe('button.next');
  });

  it('should handle getSummaryText', () => {
    functions.init(props);
    const summaryText = functions.getSummaryText(props);
    expect(summaryText).toBe('wizardSummary.amendDescription');

    props.questionnaireData = {
      applicantType: 'newBusiness',
      isTechBusiness: 'yes',
      timeSpan: 'moreThree',
    };

    const summaryText1 = functions.getSummaryText(props);
    expect(summaryText1).toBe('wizardSummary.description');
  });

  it('getOnChangeHandler should return call update action', async () => {
    const state1 = {
      questionnaireData: {
        state: 'value',
      },
    };
    const onChange = functions.getOnChangeHandler(state1);
    const props2 = {
      actions: {
        questionnaireData: {
          update: jest.fn(),
        },
      },
    };
    const fieldValues = {
      field: 'value',
    };
    onChange(props2, fieldValues);
    expect(props2.actions.questionnaireData.update).toBeCalledWith({
      state: 'value',
      field: 'value',
    });
  });
});
