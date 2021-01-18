import functions from './functions';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationStatusInfo/functions', () => {
  const props = {
    formApplicationNumber: {
      applicationNumber: '',
    },
    i18n: jest.fn(),
    actions: {
      formApplicationNumber: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },
      stepsStatus: {
        update: jest.fn(),
      },
    },
    history: {
      push: jest.fn(),
    },
    fields: [
      {
        'aria-label': 'test',
        elementType: 'test',
        name: 'test',
        key: 'test',
        label: 'test',
        placeholder: 'test',
      },
    ],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call init and redirect to error if no statusRecieved', () => {
    expect(functions.init()).toBeUndefined();
  });

  it('should properly call getStatus if applicationStatus is a success response', () => {
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'Open' },
        statusRecieved: true,
      },
    };
    const status = functions.getStatus(newProps);
    expect(status).toContain('success');
  });
  it('should properly call getStatus if applicationStatus is a inProgress response', () => {
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'Waiting Approval' },
        statusRecieved: true,
      },
    };
    const status = functions.getStatus(newProps);
    expect(status).toContain('inProgress');
  });
  it('should properly call getStatus if applicationStatus is a fail response', () => {
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'Declined' },
        statusRecieved: true,
      },
    };
    const status = functions.getStatus(newProps);
    expect(status).toContain('failure');
  });

  it('should properly call getStatus if applicationStatus is a default response', () => {
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: 'testDefault' },
        statusRecieved: true,
      },
    };
    const status = functions.getStatus(newProps);
    expect(status).toContain('inProgress');
  });

  it('should properly call getStatus if applicationStatus is a error response', () => {
    const newProps = {
      ...props,
      ...{
        applicationStatusResponse: { applicationStatus: '' },
        statusRecieved: false,
      },
    };
    functions.getStatus(newProps);
    expect(props.history.push).toHaveBeenCalled();
  });

  it('should the getTitleMessage if the transaction does not belong to TRANSACTION_REF', () => {
    const newProps = {
      ...props,
      formApplicationNumber: {
        applicationNumber: 'AP-0866148',
      },
    };
    const status = functions.getTitleMessage(newProps);
    expect(status).toContain(
      'checkApplicationStatus.infoPage.titlePrefix.default',
    );
  });
  it('should the getTitleMessage if the transaction starts with CN', () => {
    const newProps = {
      ...props,
      formApplicationNumber: {
        applicationNumber: 'CN-1023919',
      },
    };
    const status = functions.getTitleMessage(newProps);
    expect(status).toContain('checkApplicationStatus.infoPage.titlePrefix.CN');
  });
  it('should the getTitleMessage if the transaction starts with CR', () => {
    const newProps = {
      ...props,
      formApplicationNumber: {
        applicationNumber: 'CR-2968332',
      },
    };
    const status = functions.getTitleMessage(newProps);
    expect(status).toContain('checkApplicationStatus.infoPage.titlePrefix.CR');
  });
  it('should the getTitleMessage if the transaction starts with CA', () => {
    const newProps = {
      ...props,
      formApplicationNumber: {
        applicationNumber: 'CN-1023919',
      },
    };
    const status = functions.getTitleMessage(newProps);
    expect(status).toContain('checkApplicationStatus.infoPage.titlePrefix.CN');
  });
  it('should the getTitleMessage if the transaction starts with TN', () => {
    const newProps = {
      ...props,
      formApplicationNumber: {
        applicationNumber: 'CN-1023919',
      },
    };
    const status = functions.getTitleMessage(newProps);
    expect(status).toContain('checkApplicationStatus.infoPage.titlePrefix.CN');
  });
});
