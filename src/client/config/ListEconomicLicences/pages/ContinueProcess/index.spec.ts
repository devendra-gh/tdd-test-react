import { cleanup } from '@testing-library/react';
import PaymentWaiting from './index';

jest.mock('../../utils');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PaymentWaiting/Index', () => {
  afterEach(cleanup);

  it('Check instance', () => {
    expect(PaymentWaiting).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', async () => {
    await expect(PaymentWaiting[0].onPageInit(PaymentWaiting)).toBeInstanceOf(
      Object,
    );
  });

  // it('should map current step to make payment', () => {
  //   const { process }: any = PaymentWaiting[0].state.mapState[2];
  //   const dummyState = {
  //     steps: [{ name: 'makePayment' }],
  //   };
  //   expect(process(dummyState)).toEqual({
  //     currentStepIndex: 0,
  //     title: 'service.process.title',
  //     steps: dummyState.steps,
  //   });
  // });
});
