import { cleanup } from '@testing-library/react';
import PaymentSuccess from './index';

jest.mock('../../utils');
jest.mock('./functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('PaymentSuccess/Index', () => {
  afterEach(cleanup);

  it('Check instance', () => {
    expect(PaymentSuccess).toBeInstanceOf(Object);
  });

  it('should map current step to make payment', () => {
    const { process }: any = PaymentSuccess[0].state.mapState[6];
    const dummyState = {
      steps: [{ name: 'applicationSummary' }],
    };
    expect(process(dummyState)).toEqual({
      currentStepIndex: 0,
      title: 'service.process.title',
      steps: dummyState.steps,
    });
  });
});
