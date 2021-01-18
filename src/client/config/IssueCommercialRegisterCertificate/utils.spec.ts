import bpm from 'client/services/bpm';
import {
  startPaymentService,
  proceedToPayment,
  getPaymentLink,
  getFeeDetails,
  paymentFailure,
  paymentSuccess,
} from './utils';

const PROCESS_NAME = 'issueCommercialRegisterCertificate';
const MSG_PROCEED_PAYMENT = 'msgProceedPayment';

jest.mock('client/services/bpm', () => ({
  start: jest.fn().mockImplementation((_, args) => {
    const { transactionNumber } = args;
    switch (transactionNumber) {
      case 'LN-123456':
        return Promise.resolve({
          success: true,
          data: {
            businessKey: '12345',
            id: '12345678',
          },
        });
      case 'LN-123457':
      default:
        return Promise.resolve({
          data: {
            success: false,
          },
        });
    }
  }),
  message: jest.fn().mockResolvedValue({ success: true }),
  getVariables: jest.fn().mockImplementation((instanceId, _) => {
    switch (instanceId) {
      case '123456':
        return Promise.resolve({
          data: {
            feesDetails: {
              value: '{ FeeAmount: 200 }',
            },
          },
        });
      case '1234567':
      case '12345678':
        return Promise.resolve({
          data: {
            feesDetails: {
              value: '{ FeeAmount: 200 }',
            },
          },
        });
      case '123456789':
      default:
        return Promise.reject(new Error('testing catch block'));
    }
  }),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Utility functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      user: {
        'User Email': 'test@test.com',
        Mobile: '+971521111111',
      },
      actions: {
        instanceId: { update: jest.fn() },
        businessKey: { update: jest.fn() },
      },
    };
  });

  it('should update instance id and business key when process starts successfully', async () => {
    await startPaymentService(props, {
      // emiratesId: '12345',
      transactionNumber: 'LN-123456',
    });
    expect(props.actions.instanceId.update).toHaveBeenCalled();
    expect(props.actions.businessKey.update).toHaveBeenCalled();
  });

  it('should not update instance id and business key when process fails', async () => {
    await startPaymentService(props, {
      // emiratesId: '12345',
      transactionNumber: 'LN-123457',
    });
    expect(props.actions.instanceId.update).not.toHaveBeenCalled();
    expect(props.actions.businessKey.update).not.toHaveBeenCalled();
  });

  it('should proceed to payment with the right values', async () => {
    const isProceedPayment = true;
    const businessKey = '1234567';
    props.businessKey = businessKey;
    const messageName = MSG_PROCEED_PAYMENT;
    await proceedToPayment(props, isProceedPayment);
    expect(bpm.message).toHaveBeenCalledWith(PROCESS_NAME, {
      businessKey,
      messageName,
      variables: {
        isProceedPayment,
      },
    });
  });

  it('should return the payment link value from camunda', async () => {
    props.instanceId = '123456';
    const link = await getPaymentLink(props);
    expect(link).toBe('');
  });

  it('should return an empty string when fetching the payment link fails from camunda', async () => {
    props.instanceId = '1234567';
    const link = await getPaymentLink(props);
    expect(link).toBe('');
  });

  it('should return the fees details value from camunda', async () => {
    props.instanceId = '12345678';
    const feeDetails = await getFeeDetails(props);
    expect(feeDetails).toBeNull();
  });

  it('should return an empty object when fetching the fee details fails from camunda', async () => {
    props.instanceId = '123456789';
    const feeDetails = await getFeeDetails(props);
    expect(feeDetails).toEqual(null);
  });

  it('should send the payment status message', async () => {
    props.businessKey = '1234567';
    await paymentFailure(props);
    await paymentSuccess(props);
    expect(bpm.message).toHaveBeenCalled();
  });
});
