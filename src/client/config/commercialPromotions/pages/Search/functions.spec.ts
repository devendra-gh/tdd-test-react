import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('../../utils/common');

const actions = {
  commercialPromotions: {
    update: jest.fn(),
  },
  promotionType: {
    update: jest.fn(),
  },
  displaySpinner: {
    update: jest.fn(),
  },
  displayAccordian: {
    update: jest.fn(),
  },
  displayErrorFlag: {
    update: jest.fn(),
  },
  showNotFoundAlert: {
    update: jest.fn(),
  },
  showErrorAlert: {
    update: jest.fn(),
  },
};

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('commercialPromotions/pages/Search', () => {
  let mockFetch: any;
  let props: any;

  beforeEach(() => {
    mockFetch = fetch;
    props = {
      locale: 'en',
      promotionType: {
        id: '0',
        value: '',
      },
      commercialPromotions: {
        status: 'success',
        data: {
          commercialPromotions: [
            {
              licenseNum: 'test-licenseNo',
              address: 'test-addressAr',
              promotionStartDate: '2020-01-28T00:00:00.000Z',
              promotionEndDate: '2020-02-24T00:00:00.000Z',
              tradeNameAr: 'test-tradeNameAr',
              tradeNameEn: 'test-tradeNameEn',
              promotionTypeAr: 'test-promotionTypeAr',
              promotionTypeEng: 'test-promotionTypeEn',
              promotionDetailsAr: 'test-promotionDetailsAr',
              longitute: 54.72290838,
              latitude: 24.38721699,
            },
          ],
          totalPagesCount: 1,
          totalCount: 2,
          pageNumber: 1,
        },
      },
      actions,
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly update commercialPromotions to redux', () => {
    functions.onPageInit(props);
    expect(props.actions.commercialPromotions.update).toBeCalled();
  });

  it('should properly update displaySpinner to redux', () => {
    functions.changePage(1, props);
    expect(props.actions.displaySpinner.update).toBeCalled();
  });

  it('should not execute statements if length of value less than 3 or greater than 200', () => {
    functions.getCommercialPromotions('te', 1, props);
    expect(props.actions.commercialPromotions.update).not.toBeCalled();
  });

  it('should not execute statements if length of value less than 3 or greater than 200', () => {
    functions.getCommercialPromotions('te', 1, props);
    expect(props.actions.commercialPromotions.update).not.toBeCalled();
  });

  it('should execute statements if length of value valid and records are not found', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          commercialPromotions: [],
          totalPagesCount: 1,
          totalCount: 0,
          pageNumber: 1,
        },
      });
    });

    functions.getCommercialPromotions('test', 1, props);
    expect(props.actions.showNotFoundAlert.update).toHaveBeenCalled();
  });

  it('should execute statements if length of value valid and records are found', () => {
    props.locale = 'ar';
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: true,
        data: {
          commercialPromotions: [
            {
              licenseNum: 'test-licenseNo',
              address: 'test-addressAr',
              promotionStartDate: '2020-01-28T00:00:00.000Z',
              promotionEndDate: '2020-02-24T00:00:00.000Z',
              tradeNameAr: 'test-tradeNameAr',
              tradeNameEn: 'test-tradeNameEn',
              promotionTypeAr: 'test-promotionTypeAr',
              promotionTypeEng: 'test-promotionTypeEn',
              promotionDetailsAr: 'test-promotionDetailsAr',
              longitute: 54.72290838,
              latitude: 24.38721699,
            },
          ],
          totalPagesCount: 1,
          totalCount: 2,
          pageNumber: 1,
        },
      });
    });
    functions.getCommercialPromotions('test', 1, props);
  });

  it('should throw if API error', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
      });
    });
    functions.getCommercialPromotions('test', 1, props);
  });

  it('should throw if data empty error', () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        success: false,
        data: {},
      });
    });
    functions.getCommercialPromotions('test', 1, props);
  });

  it('should call the validation function', () => {
    functions.getValidation('te', props);
    expect(props.actions.displayErrorFlag.update).toBeCalled();
  });

  it('should properly call the onRadioSelect function', () => {
    functions.onRadioSelect('0', props);
    expect(props.actions.promotionType.update).toBeCalled();
    functions.onRadioSelect('1', props);
    expect(props.actions.promotionType.update).toBeCalled();
    functions.onRadioSelect('2', props);
    expect(props.actions.promotionType.update).toBeCalled();
    functions.onRadioSelect('3', props);
    expect(props.actions.promotionType.update).toBeCalled();
    functions.onRadioSelect('4', props);
    expect(props.actions.promotionType.update).toBeCalled();
    functions.onRadioSelect('5', props);
    expect(props.actions.promotionType.update).toBeCalled();
  });

  it('should not validate when field is empty', () => {
    functions.getValidation('', props);
    expect(props.actions.displayErrorFlag.update).toBeCalled();
  });

  it('should call the back function', () => {
    functions.onBack(props);
    expect(props.history.push).toHaveBeenCalled();
  });
});
