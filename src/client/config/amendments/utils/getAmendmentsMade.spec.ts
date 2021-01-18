import getAmendmentsMade from './getAmendmentsMade';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('amendments/utils/getApplicationPayload', () => {
  const props = {
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
    },
  };

  it('should properly call getAmendmentsMade for legal form amendment ', () => {
    const updatedProps = {
      ...props,
      legalForm: 'soleProprietorshipLLC',
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for license type amendment ', () => {
    const updatedProps = {
      ...props,
      licenseType: 'allInOne',
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade without amendmentCategories ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {},
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for incorrect category ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          test: true,
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for activities amendment ', () => {
    const updatedProps = {
      ...props,
      licenseType: 'allInOne',
      legalForm: 'soleProprietorshipLLC',
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          activities: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        activityPayload: [
          {
            ActivityCode: '123',
            Action: 'Add',
          },
        ],
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for trade name amendment ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          tradename: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        tradeName: {
          amendment: {
            value: 'TN-2342343',
          },
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for trade name amendment without value in licenceDetails ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          tradename: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        tradeName: {},
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for location amendment ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          location: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        location: {
          tawtheeqCurrentNumber: '234234',
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for country amendment ', () => {
    const updatedProps = {
      ...props,
      licenseType: 'branch',
      legalForm: 'freezoneBranch',
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          location: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        country: {
          location: {
            countryOfOrigin: 'Kuwait',
            amendedCountryOfOrigin: 'Bahrain',
          },
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for country amendment with same values in licenceDetails ', () => {
    const updatedProps = {
      ...props,
      licenseType: 'branch',
      legalForm: 'freezoneBranch',
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          location: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        country: {
          location: {
            countryOfOrigin: 'Bahrain',
            amendedCountryOfOrigin: 'Bahrain',
          },
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for paid up capital amendment ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          financialDetails: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        paidUpCapital: {
          amendedCapital: '3400',
        },
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for paid up capital amendment without value in licenseDetails', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: {
        ...props.amendmentCategories,
        category: {
          ...props.amendmentCategories.category,
          financialDetails: true,
        },
      },
      licenceDetails: {
        ...props.licenceDetails,
        paidUpCapital: {},
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  const ownershipCategory = {
    ...props.amendmentCategories,
    category: {
      ...props.amendmentCategories.category,
      ownership: true,
    },
  };

  it('should properly call getAmendmentsMade for ownership amendment ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: ownershipCategory,
      licenceDetails: {
        ...props.licenceDetails,
        partners: [
          {
            status: 'add',
          },
          {
            status: 'add',
          },
          {
            status: 'delete',
          },
          {
            status: 'delete',
          },
          {
            status: 'update',
            sharePercentage: '30',
            sharePercentageLog: '30',
          },
          {
            status: 'update',
            sharePercentage: '30',
            sharePercentageLog: '60',
          },
          {
            status: 'update',
            nationality: 'India',
            nationalityLog: 'India',
          },
          {
            status: 'update',
            nationality: 'United Arab Emirates',
            nationalityLog: 'India',
          },
        ],
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });

  it('should properly call getAmendmentsMade for ownership amendment - without nationality and share ', () => {
    const updatedProps = {
      ...props,
      amendmentCategories: ownershipCategory,
      licenceDetails: {
        ...props.licenceDetails,
        partners: [
          {
            status: 'undefined',
          },
        ],
        localAgents: [
          {
            status: 'update',
          },
          {
            status: 'update',
          },
        ],
        managers: null, // to cover undefined redux state case
      },
    };
    const applicationPayload = getAmendmentsMade(updatedProps);
    expect(applicationPayload).toBeInstanceOf(Object);
  });
});
