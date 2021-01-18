import fetch from 'client/services/fetch';
import bpm from 'client/services/bpm';
import functions, { isPartnerReminderOpen } from './functions';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');
jest.mock('querystring', () => {
  return {
    parse: () => {
      return { id: 'id' };
    },
  };
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/pages/moaConfirm/functions', () => {
  const fetchMock: any = fetch;
  const bpmMock: any = bpm.message;
  const mockGetVariables: any = bpm.getVariables;
  const props: any = {
    smartPassData: ['1', '2'],
    emailAddress: '',
    location: {},
    history: {
      push: jest.fn(),
    },
    actions: {
      moa: {
        update: jest.fn(),
      },
      partners: {
        update: jest.fn(),
      },
      instanceId: {
        update: jest.fn(),
      },
      businessKey: {
        update: jest.fn(),
      },

      smartPassData: {
        update: jest.fn(),
      },
      economicLicense: {
        update: jest.fn(),
      },
    },
    user: {
      IDN: '1993',
    },
    partners: JSON.stringify([
      {
        idNumber: '19-93',
        representativeType: '1',
        moaAgreed: 'Agree',
        emailAddress: '',
      },
      {
        idNumber: '19-93',
        representativeType: '1',
        emailAddress: 'test.con',
      },

      { idNumber: '19-43' },
    ]),
    moa: {
      moaModalShow: 'moaModalShow',
    },
    steps: [{ subSteps: [] }],
  };

  it('should properly call init and update moa', async () => {
    mockGetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          partners: {
            value: JSON.stringify([{ name: 'partner1' }, { name: 'partner2' }]),
          },
          smartPassData: {
            value: JSON.stringify([{ someKey: 'value' }]),
          },
          allPartnersMoaApproved: {
            value: 'yes',
          },
          licenceType: {
            value: 'tadjer',
          },
        },
      });
    });
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        success: 'true',
        data: {},
      });
    });
    await functions.init(props);
    expect(props.actions.moa.update).toBeCalled();
  });
  it('should properly call init without user', async () => {
    mockGetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          partners: {
            value: JSON.stringify([{ name: 'partner1' }, { name: 'partner2' }]),
          },
          smartPassData: {
            value: JSON.stringify([{ someKey: 'value' }]),
          },
          allPartnersMoaApproved: {
            value: 'yes',
          },
          licenceType: {
            value: 'tadjer',
          },
        },
      });
    });
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        success: 'true',
        data: {},
      });
    });
    await functions.init({ ...props, user: { IDN: undefined } });
    expect(props.actions.moa.update).not.toBeCalled();
  });

  it('should properly call init and update moa not all partners agreed', async () => {
    mockGetVariables.mockImplementation(() => {
      return Promise.resolve({
        data: {
          partners: {
            value: JSON.stringify([{ name: 'partner1' }, { name: 'partner2' }]),
          },
          smartPassData: {
            value: JSON.stringify([{ someKey: 'value' }]),
          },
          allPartnersMoaApproved: {
            value: 'No',
          },
          licenceType: {
            value: 'tadjer',
          },
        },
      });
    });
    fetchMock.mockImplementation(() => {
      return Promise.resolve({
        success: 'true',
        data: {},
      });
    });
    await functions.init({
      ...props,
      partners: [
        {
          idNumber: '19-93',
          representativeType: '1',
          moaAgreed: 'Agree',
          emailAddress: '',
        },
      ],
    });
    expect(props.actions.moa.update).toBeCalled();
  });
  it('should properly call init with rejection', async () => {
    fetchMock.mockImplementation(() => {
      return Promise.resolve({ error: true, data: {} });
    });
    await functions.init(props);
    expect(props.actions.moa.update).not.toBeCalled();
  });

  it('should properly call doesAgree with true agree ', async () => {
    await functions.doesAgree(props, true);
    expect(props.actions.moa.update).toBeCalledTimes(1);
  });

  it('should properly call doesAgree with false agree ', async () => {
    await functions.doesAgree(props, false);
    expect(props.actions.moa.update).toBeCalledTimes(2);
  });

  it('should properly call showMoa and update moa', async () => {
    await functions.showMoa(props);
    expect(props.actions.moa.update).toBeCalledTimes(1);
  });

  it('should properly call isPartnerReminderOpen after 2 minutes', () => {
    expect(isPartnerReminderOpen(Date.now() - 1210000000)).toBe(true);
  });
  it('should properly call isPartnerReminderOpen before 2 minutes', () => {
    expect(isPartnerReminderOpen(Date.now())).toBe(false);
  });

  it('should properly call isPartnerReminderOpen with undefined', () => {
    expect(isPartnerReminderOpen(undefined)).toBe(true);
  });

  it('should properly call reInvite', () => {
    bpmMock.mockImplementation(() => {
      return Promise.resolve({});
    });
    functions.reInvite(props);
    expect(fetchMock).toBeCalled();
  });
});
