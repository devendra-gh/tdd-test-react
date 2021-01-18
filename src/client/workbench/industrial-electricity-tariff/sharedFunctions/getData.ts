const mockValues = {
  LicenceList: [
    {
      _id: 111,
      tradeLicenseNumber: 'IN - 1000001',
      businessNameEng: 'Sample Company 1',
      businessNameArb: 'Sample Company 1',
    },
    {
      _id: 112,
      tradeLicenseNumber: 'IN  1000002',
      businessNameEng: 'Sample Company 2',
      businessNameArb: 'Sample Company 2',
    },
    {
      _id: 113,
      tradeLicenseNumber: 'IN - 1000003',
      businessNameEng: 'Sample Company 3',
      businessNameArb: 'Sample Company 3',
    },
    {
      _id: 114,
      tradeLicenseNumber: 'IN - 1000004',
      businessNameEng: 'Sample Company 4',
      businessNameArb: 'Sample Company 4',
    },
    {
      _id: 116,
      tradeLicenseNumber: 'IN - 1000005',
      businessNameEng: 'Sample Company 5',
      businessNameArb: 'Sample Company 5',
    },
    {
      _id: 117,
      tradeLicenseNumber: 'IN - 1000006',
      businessNameEng: 'Sample Company 6',
      businessNameArb: 'Sample Company 6',
    },
    {
      _id: 118,
      tradeLicenseNumber: 'IN - 1000007',
      businessNameEng: 'Sample Company 7',
      businessNameArb: 'Sample Company 7',
    },
  ],
};

const getDEDToken = async (props: any) => {
  let token: any;
  try {
    const response = await props.fetch(
      '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
      'POST',
      {
        agency: 'adbc',
        password: 'XYZ-1234567',
        userId: 'OSS',
      },
    );
    token = response.data.result.token;
  } catch (error) {
    throw error;
  }
  return token;
};

const uploadDocumentToDed = async (
  transactionNumber: string,
  capId: string,
  fileId: string,
  props: any,
) => {
  try {
    const token = await getDEDToken(props);

    const uploadResponse = await props.fetch(
      `/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/uploadDocument?token=${token}`,
      'POST',
      {
        capId,
        documentCategory: 'Industrial Licence',
        documentName: fileId,
        documentPath: `workbench-generator**workbenchUserId**/tmp/workbench/upload/**${fileId}`,
        trackingNumber: transactionNumber,
      },
    );
    if (!uploadResponse.success) {
      throw new Error(uploadResponse.message);
    }
    return uploadResponse.data;
  } catch (error) {
    throw error;
  }
};

const fetchLicenceList = async (
  props: any,
  emiratesId: string,
  mock: boolean = false,
) => {
  if (mock) {
    return mockValues.LicenceList;
  }
  try {
    const licencesResponse = await props.fetch(
      '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/listTradeLicenses',
      'POST',
      {
        emiratesIdNumber: emiratesId,
      },
    );
    if (licencesResponse.status !== 'fail') {
      return licencesResponse.data;
    }
    throw Error(licencesResponse.message);
  } catch (error) {
    console.log('error fetching licences', error); //eslint-disable-line
  }

  return [];
};

const getAwards = async (props: any, apTransactionNumber: string) => {
  let awards: [] = [];
  try {
    const token = await getDEDToken(props);
    const response = await props.fetch(
      `/api/proxy/ms-call/gateway/TammJourneyDed/1.0/industrialLicense/industrialElectricityTariff/previewQuotations?token=${token}`,
      'post',
      {
        body: {
          IETR_Number: apTransactionNumber,
          withDocuments: true,
        },
        headers: {
          'x-Gateway-APIKey': `{{configVars.gateway.tammServiceApiGateway}}`,
        },
      },
    );
    if (response.success && response.data.awards) {
      awards = response.data.awards;
    }
  } catch (error) {
    console.log('error getting quotations', error);
  }
  return awards;
};

const getEntities = () => {
  const entities = {
    ardent: {
      name: 'Ardent Advisory & Accounting',
    },
    bakertilly: {
      name: 'Baker Tilly MKM Chartered Accountants',
    },
    deloitte: {
      name: 'Deloitte & Touche (Middle East)',
    },
    ey: {
      name: 'Ernst & Young (Middle East)',
    },
    protiviti: {
      name: 'Proviti Member Firm Middle East Consultancy',
    },
    mazars: {
      name: 'Mazars Chartered Accountants',
    },
    crowe: {
      name: 'Crowe Mask',
    },
    mbc: {
      name: 'MBC Auditing and Accounting - ADH',
    },
    pkf: {
      name: 'PKF Accountants and Business Advisors',
    },
    tag: {
      name: 'Tatal Abu Ghazzalah & Co. International Abu Dhabi',
    },
    kpmg: {
      name: 'KPMG',
    },
  };
  return entities;
};

interface LicenceListItem {
  _id: number;
  tradeLicenseNumber: string;
  businessNameEng: string;
  businessNameArb: string;
}

const sendEmailNotification = async (
  props: any,
  emailType: string,
  instanceId: string,
) => {
  try {
    const result = await props
      .fetch(
        '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/sendEmailNotification',
        'POST',
        {
          instanceId,
          emailType,
        },
      )
      .then((response: any) => response.data)
      .catch((err: any) => err);
    return result;
  } catch (error) {
    return `unable to send notification email${error}`;
  }
};

export {
  fetchLicenceList,
  uploadDocumentToDed,
  getEntities,
  sendEmailNotification,
  getAwards,
  getDEDToken,
};
