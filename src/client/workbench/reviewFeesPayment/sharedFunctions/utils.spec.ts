import {
  getDateFromTimeStamp,
  formatValue,
  returnCamundaMessage,
  filteredLicenceList,
} from './util';

describe('Shared functions', () => {
  it('should cover getDateFromTimeStamp ', () => {
    getDateFromTimeStamp(1592477821497, 'en');
    expect(getDateFromTimeStamp).toBeInstanceOf(Object);
  });

  it('should cover formatValue ', () => {
    formatValue(123);
    expect(formatValue).toBeInstanceOf(Object);
    formatValue('123');
    expect(formatValue).toBeInstanceOf(Object);
  });
  it('should cover filteredLicenceList ', () => {
    let data: any = [];
    let locale = 'en';
    let search = '';
    let pageNumber = 1;
    let totalRec = {
      update: jest.fn(),
    };
    let licenceNumber = '';
    let currentPageSize = {
      update: jest.fn(),
    };
    filteredLicenceList(
      data,
      locale,
      search,
      pageNumber,
      totalRec,
      licenceNumber,
      currentPageSize,
    );

    data = [
      {
        tradeLicenseNumber: 'CN-2971217',
        businessNameArb: '1003893',
        businessNameEng: '1003893',
      },
    ];
    locale = 'ar';
    search = '2971217';
    pageNumber = 1;
    totalRec = {
      update: jest.fn(),
    };
    licenceNumber = 'CN-2971217';
    currentPageSize = {
      update: jest.fn(),
    };
    filteredLicenceList(
      data,
      locale,
      search,
      pageNumber,
      totalRec,
      licenceNumber,
      currentPageSize,
    );

    data = [
      {
        tradeLicenseNumber: 'CN-2971217',
        businessNameArb: '1003893',
        businessNameEng: '1003893',
      },
    ];
    locale = 'en';
    search = '2971217';
    pageNumber = 1;
    totalRec = {
      update: jest.fn(),
    };
    licenceNumber = '';
    currentPageSize = {
      update: jest.fn(),
    };
    filteredLicenceList(
      data,
      locale,
      search,
      pageNumber,
      totalRec,
      licenceNumber,
      currentPageSize,
    );
    data = [
      {
        tradeLicenseNumber: 'CN-2971217',
        businessNameArb: '1003893',
        businessNameEng: '1003893',
      },
    ];
    locale = 'en';
    search = '29712178';
    pageNumber = 1;
    totalRec = {
      update: jest.fn(),
    };
    licenceNumber = 'CN-2971217';
    currentPageSize = {
      update: jest.fn(),
    };
    filteredLicenceList(
      data,
      locale,
      search,
      pageNumber,
      totalRec,
      licenceNumber,
      currentPageSize,
    );

    expect(filteredLicenceList).toBeInstanceOf(Object);
  });

  it('should properly call returnCamundaMessage', () => {
    let licenceDetails = {
      success: true,
      message: 'Success',
    };
    const props = {
      actions: {
        camundaMessage: {
          update: jest.fn(),
        },
      },
      i18n: jest.fn(i => i),
    };
    returnCamundaMessage(licenceDetails, props);

    licenceDetails = {
      success: true,
      message: 'Success',
    };
    returnCamundaMessage(licenceDetails, props);

    licenceDetails = {
      success: true,
      message: 'message',
    };
    returnCamundaMessage(licenceDetails, props);

    licenceDetails = {
      success: false,
      message: 'Unauthorized',
    };
    returnCamundaMessage(licenceDetails, props);
  });
});
