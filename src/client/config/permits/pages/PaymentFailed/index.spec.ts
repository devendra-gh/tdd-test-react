import index from './index';
import { PERMIT_ADDITIONAL_SIGNBOARD } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/PaymentFailed', () => {
  let props: any;
  beforeEach(() => {
    props = {
      apTransactionNumber: 'submit-date',
      submitDate: '13-10-2019',
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      permitInfo: {
        [PERMIT_ADDITIONAL_SIGNBOARD]: { permitDetails: {} },
      },
      steps: [],
    };
  });
  it('should export PaymentFailed', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    props.steps = getSteps(props);
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    props.apTransactionNumber = '';
    props.submitDate = '';
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('state steps', () => {
    it('mapState should be an array', () => {
      expect(index[0].state.mapState).toBeInstanceOf(Array);
    });
    it('should have steps in state', () => {
      const stepsIndex = index[0].state.mapState.findIndex(
        state => typeof state === 'object',
      );
      expect(stepsIndex).toBeGreaterThanOrEqual(0);
    });
    it('should properly call steps', () => {
      const stepsIndex = index[0].state.mapState.findIndex(
        state => typeof state === 'object',
      );
      const objSteps: Record<string, any> = index[0].state.mapState[
        stepsIndex
      ] as Record<string, any>;
      const result = objSteps.steps(props);
      expect(result).toBeInstanceOf(Object);
    });
  });
});
