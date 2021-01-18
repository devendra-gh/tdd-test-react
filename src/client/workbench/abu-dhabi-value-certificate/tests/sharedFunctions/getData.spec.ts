import {
  getDEDToken,
  uploadDocumentToDed,
  fetchLicenceList,
  getEntities,
  getAwards,
  sendEmailNotification,
} from '../../sharedFunctions/getData';

describe('getData - getDEDToken shared function', () => {
  let props: any;
  const testToken = 'test-token';
  beforeEach(() => {
    props = {
      fetch: jest.fn().mockResolvedValue({
        data: {
          result: {
            token: testToken,
          },
        },
      }),
    };
  });

  it('should successfully return token when fetch is successful', async () => {
    const token = await getDEDToken(props);
    expect(token).toBe(testToken);
  });

  it('should throw an error when the request for a token is unsuccessful', async () => {
    const errorMessage = 'error fetching token';
    props.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));

    try {
      await getDEDToken(props);
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });
});

describe('getData - uploadDocumentToDed shared function', () => {
  let props: any;
  const testToken: string = 'test-token';
  const badTransactionNumber = 'IN-5005S';
  const uploadFailedMessage = 'forbidden transaction Number';
  const testResponseData: any = {
    fileName: 'test-fileName',
  };

  const fetchMockImplementationSuccess = (path: string, ...rest: any) => {
    const tokenResponse = {
      data: {
        result: {
          token: testToken,
        },
      },
    };

    let uploadResponse: any = {
      success: true,
      data: testResponseData,
    };

    const transactionNumber = rest[2]?.trackingNumber;
    if (transactionNumber === badTransactionNumber) {
      uploadResponse = {
        success: false,
        message: uploadFailedMessage,
      };
    }

    const responseMapping: any = {
      token: tokenResponse,
      upload: uploadResponse,
    };

    return path.indexOf('authenticateUser') !== -1
      ? responseMapping.token
      : responseMapping.upload;
  };

  beforeEach(() => {
    props = {
      fetch: jest.fn(fetchMockImplementationSuccess),
    };
  });

  it('should send back the response of successfully uploading a file to ded', async () => {
    const uploadResponse = await uploadDocumentToDed('', '', '', props);
    expect(uploadResponse).toBe(testResponseData);
  });

  it('should throw an error when the request to upload fails', async () => {
    try {
      await uploadDocumentToDed(badTransactionNumber, '', '', props);
    } catch (error) {
      expect(error.message).toBe(uploadFailedMessage);
    }
  });

  it('should throw an error in the case that something else goes wrong', async () => {
    const somethingWentWrongMessage = 'something went wrong';

    props.fetch = jest
      .fn()
      .mockRejectedValue(new Error(somethingWentWrongMessage));

    try {
      await uploadDocumentToDed(badTransactionNumber, '', '', props);
    } catch (error) {
      expect(error.message).toBe(somethingWentWrongMessage);
    }
  });
});

describe('getData - fetchLicenceList shared function', () => {
  let props: any;
  const successResponse = {
    status: 'success',
    data: [{ licenseNumber: 'CN-SJAKU' }],
  };

  beforeEach(() => {
    props = {
      fetch: jest.fn().mockResolvedValue(successResponse),
    };
  });

  it('should successfully return the list of licenses on successful fetch', async () => {
    const licences = await fetchLicenceList(props, '', false);
    expect(licences).toBe(successResponse.data);
  });

  it('should successfully return mock values when mock is true', async () => {
    const licences = await fetchLicenceList(props, '', true);
    expect(licences.length).toBe(7);
  });

  it('should throw an error when the licence list fetch has a fail status', async () => {
    const failedFetchMessage = 'failed to fetch licences';
    props.fetch = jest
      .fn()
      .mockResolvedValue({ status: 'fail', message: failedFetchMessage });

    try {
      await fetchLicenceList(props, '', false);
    } catch (error) {
      expect(error.message).toBe(failedFetchMessage);
    }
  });
});

describe('getData - getAwards shared function', () => {
  let props: any;
  const testToken = 'test-token';
  const badTransactionNumber = 'IN-5005S';
  const successResponse = {
    success: true,
    data: {
      awards: [{ companyName: 'Arsenal' }],
    },
  };
  const fetchMockImplementationSuccess = (path: string, ...rest: any) => {
    const tokenResponse = {
      data: {
        result: {
          token: testToken,
        },
      },
    };

    let awardsResponse: any = {
      success: true,
      data: {
        awards: [{ companyName: 'Arsenal' }],
      },
    };

    const transactionNumber = rest[2]?.IETR_Number;
    if (transactionNumber === badTransactionNumber) {
      awardsResponse = {
        success: false,
      };
    }

    const responseMapping: any = {
      token: tokenResponse,
      upload: awardsResponse,
    };

    return path.indexOf('authenticateUser') !== -1
      ? responseMapping.token
      : responseMapping.upload;
  };

  beforeEach(() => {
    props = {
      fetch: jest.fn(fetchMockImplementationSuccess),
    };
  });

  it('should successfully return the list of awards on successful fetch', async () => {
    const awards = await getAwards(props, '');
    expect(awards).toEqual(successResponse.data.awards);
  });

  it('should return an empty list when the licence list fetch has a fail status', async () => {
    const failedFetchMessage = 'failed to fetch licences';
    props.fetch = jest
      .fn()
      .mockResolvedValue({ success: false, message: failedFetchMessage });
    const awards = await getAwards(props, '');
    expect(awards.length).toBe(0);
  });
});

describe('getData - getEntities', () => {
  it('should successfully get entities', () => {
    const entities = getEntities();
    expect(entities).toBeDefined();
  });
});

describe('getData - sendEmailNotification shared function', () => {
  let props: any;
  beforeEach(() => {
    props = {
      fetch: jest.fn().mockResolvedValue({
        data: 'Dummy response',
      }),
    };
  });

  it('should send email notification successfully', async () => {
    const response = await sendEmailNotification(props, 'email', '');
    expect(response).toBe('Dummy response');
  });

  it('should handle errors when sending emails fails', async () => {
    props.fetch = jest.fn().mockRejectedValue(new Error('error sending email'));
    const response = await sendEmailNotification(props, 'email', '');
    expect(response.message).toBe('error sending email');
  });
});
