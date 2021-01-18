import bpm from 'client/services/bpm';
import fetch from 'client/services/fetch';
import functions from './functions';

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
  const bpmMessageMock: any = bpm.message;
  const mockGetVariables: any = bpm.getVariables;

  let props: any;
  beforeEach(() => {
    props = {
      smartPassData: ['1', '2'],
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
      location: {
        search: 'something',
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
          eid: '1993',
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
      history: {
        push: jest.fn(),
      },
      businessLegalFormCode: '1',
      economicLicense: {
        licenceType: {
          licenceType: 'tajer',
        },
      },
    };
  });

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
      });
    });
    await functions.init(props);
    expect(props.actions.moa.update).toBeCalled();
  });
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
      });
    });
    await functions.init(props);
    expect(props.actions.moa.update).toBeCalled();
  });

  it('should properly call init with rejection', async () => {
    fetchMock.mockImplementation(() => {
      return Promise.resolve({ error: true });
    });
    await functions.init(props);
    expect(props.actions.moa.update).not.toBeCalled();
  });

  it('should properly call ownerMoaAgree', async () => {
    await functions.ownerMoaAgree(props);
    expect(bpmMessageMock).toBeCalledTimes(1);
  });

  it('should properly call ownerMoaAgree', async () => {
    props.user = { 'User Unique Identifier': '123' };
    props.partners = JSON.stringify([
      {
        idNumber: '19-93',
        representativeType: '1',
        moaAgreed: 'Agree',
        emailAddress: '',
      },
    ]);

    await functions.ownerMoaAgree(props);
    expect(bpmMessageMock).toBeCalledTimes(1);
  });

  it('should properly call ownerMoaAgree', async () => {
    props.user = { 'User Unique Identifier': '123' };
    props.smartPassData = JSON.stringify(props.smartPassData);

    await functions.ownerMoaAgree(props);
    expect(bpmMessageMock).toBeCalledTimes(1);
  });

  it('should properly call ownerMoaAgree', async () => {
    props.user = { 'User Unique Identifier': '123', IDN: '1993' };
    props.smartPassData = JSON.stringify(props.smartPassData);

    await functions.ownerMoaAgree(props);
    expect(bpmMessageMock).toBeCalledTimes(1);
  });

  it('should properly call ownerMoaDisAgree with string partners', async () => {
    props.partners = [
      { idNumber: '19-93', representativeType: '1' },
      { idNumber: '19-43' },
    ];

    await functions.ownerMoaDisAgree(props);
    expect(bpmMessageMock).toBeCalledTimes(1);
  });

  it('should properly call getTitle if allInOne licence', async () => {
    expect(await functions.getTitle(props)).toBe('global.title.tajer');
  });

  it('should properly call getTitle if tajer licence', async () => {
    props.economicLicense.licenceType.licenceType = 'allInOne';
    expect(await functions.getTitle(props)).toBe('global.title.allInOne');
  });

  it('should prpperly call getMoaSteps', () => {
    expect(functions.getMoaSteps({})).toMatchObject({});
  });
});
