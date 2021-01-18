import index from './index';
import {
  PERMIT_ADDITIONAL_SIGNBOARD,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationSubmitted', () => {
  let props: any;
  beforeEach(() => {
    props = {
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      permitInfo: {
        [PERMIT_ADDITIONAL_SIGNBOARD]: {},
        [PERMIT_FOOD_TRUCK]: {},
      },
      steps: {},
    };
  });
  it('should export applicationSubmitted', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should export onPageInit as function', () => {
    expect(index[0].onPageInit).toBeInstanceOf(Function);
  });
  it('should call onPageInit properly', () => {
    props.steps = getSteps(props);
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
