// import config from './index';

// describe('Payment Waiting page', () => {
//   it('should successfully return process information', () => {
//     const state = {
//       steps: [{ name: 'makePayment' }],
//     };
//     const page = config[0];
//     const {
//       state: { mapState },
//     } = page;
//     const process: any = mapState[1];
//     process.process(state);
//     expect(process.process).toBeInstanceOf(Function);
//   });
// });

import { cleanup } from '@testing-library/react';
import PaymentWaiting from './index';

jest.mock('../../utils');

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
});
