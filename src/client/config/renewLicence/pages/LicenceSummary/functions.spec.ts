import fetch from 'client/services/fetch';
import functions from './functions';

jest.mock('client/services/fetch');
jest.mock('client/config/renewLicence/utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceSummary/functions', () => {
  let mockFetch: any;
  window.open = jest.fn();
  const props = {
    instanceId: 'instanceId',
    onDropdownChange: jest.fn(),
    history: {
      push: jest.fn(),
    },
    i18n: jest.fn(),
    submitLicence: {
      data: {
        thawtheeq: {},
        noc: {},
      },
    },
    form: {
      licenceNo: '',
      licenceExpiryDate: '',
      daysPendingForLicenceExpiry: null,
    },
    actions: {
      instanceId: {
        update: jest.fn(),
      },
      form: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
  };
  beforeEach(() => {
    mockFetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should properly call onClick', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      functions.onClick(props);
    });

    it('should properly call onClick case 2', async () => {
      const newProps = { ...props, isRenewalEligible: true };
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      functions.onClick(newProps);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('dropDownConfig', () => {
    it('should properly call dropDownConfig', async () => {
      const data = functions.dropDownConfig(props);
      data.onChange('test');
    });

    it('should properly call dropDownConfig fallback', async () => {
      props.instanceId = '';
      const data = functions.dropDownConfig(props);
      data.onChange('test');
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('downloadLicenceBtnConfig', () => {
    it('should properly call downloadLicenceBtnConfig', async () => {
      const data = functions.downloadLicenceBtnConfig(props);
      data.onClick();
    });

    it('should properly call downloadLicenceBtnConfig fallback', async () => {
      props.instanceId = '';
      const data = functions.downloadLicenceBtnConfig(props);
      data.onClick();
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('finish', () => {
    it('should properly call finish', async () => {
      mockFetch.mockImplementation(() => {
        return Promise.resolve({});
      });
      functions.finish(props);
    });
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('finishDownloadBtnConfig', () => {
    it('should properly call finishDownloadBtnConfig', async () => {
      const data = functions.finishDownloadBtnConfig(props);
      data.onClick();
    });
  });
});
