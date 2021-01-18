import { FORM_STEP_1 } from 'client/config/renewLicence/steps';
import index from './index';

jest.mock('client/config/renewLicence/utils/common.ts');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('WaitingPage/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });

  it('Check onPageInit', () => {
    index[0].onPageInit({
      currentStep: FORM_STEP_1,
    });
  });

  it('Check onPageInit 2', () => {
    const props = {
      reachedPayment: true,
      submittedDate: '10-10-2020',
      steps: [{ test: 'test' }],
    };
    index[0].onPageInit(props);
    expect(index[0].onPageInit).toBeInstanceOf(Object);
  });

  it('Check onPageInit 3', () => {
    const props = {
      renewalNumber: true,
      reachedPayment: true,
      submittedDate: '10-10-2020',
      steps: [{ test: 'test' }],
    };
    index[0].onPageInit(props);
    expect(index[0].onPageInit).toBeInstanceOf(Object);
  });
});
