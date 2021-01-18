import {
  PERMIT_ADDITIONAL_SIGNBOARD,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';

import functions from './functions';
import getSteps from '../../utils/getSteps';
import { STEP_2, STEP_4_1 } from '../../steps';
import { PERMIT_TYPE_ANNUAL } from '../../utils/getPermitTypes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/ApplicationWaiting/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      businessKey: 'test key',
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      otherEntitySubmitted: false,
      permitInfo: {
        [PERMIT_ADDITIONAL_SIGNBOARD]: { entityApproval: { documents: {} } },
        [PERMIT_FOOD_TRUCK]: {
          permitDetails: {
            permitType: 'test',
            entityApproval: {
              isApproved: true,
              documents: {
                file: [{ name: 'dummy-file.pdf' }],
              },
            },
          },
        },
      },
      steps: [],
    };
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getStepStatus', () => {
    beforeEach(() => {
      props = {
        ...props,
        steps: getSteps(props),
      };
    });
    it('for single step permits', () => {
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
    });
    it('for multi step permits', () => {
      props.serviceType = PERMIT_FOOD_TRUCK;
      props.steps = getSteps(props);
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
      props.permitInfo = {
        ...props.permitInfo,
        [PERMIT_FOOD_TRUCK]: {
          ...props.permitInfo[PERMIT_FOOD_TRUCK],
          permitDetails: {
            ...props.permitInfo[PERMIT_FOOD_TRUCK].permitDetails,
            permitType: PERMIT_TYPE_ANNUAL,
          },
        },
      };
      props.otherEntitySubmitted = true;
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
    });
    it('for dummy or invalid permits', () => {
      props.serviceType = 'test';
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('getCurrentStep', () => {
    beforeEach(() => {
      props = {
        ...props,
        steps: getSteps(props),
      };
    });
    it('for single step permits', () => {
      expect(functions.getCurrentStep(props)).toEqual(STEP_2);
    });
    it('for multi step permits', () => {
      props.serviceType = PERMIT_FOOD_TRUCK;
      props.steps = getSteps(props);
      props.permitInfo = {
        ...props.permitInfo,
        [props.serviceType]: {
          ...props.permitInfo[props.serviceType],
          permitType: PERMIT_TYPE_ANNUAL,
        },
      };
      props.otherEntitySubmitted = true;
      expect(functions.getCurrentStep(props)).toEqual(STEP_4_1);
    });
    it('for dummy or invalid permits', () => {
      props.serviceType = 'test';
      expect(functions.getCurrentStep(props)).toEqual(STEP_2);
    });
  });
  // it('should have getStepStatus function', () => {
  //   expect(functions.getStepStatus).toBeInstanceOf(Function);
  // });

  // it('should have properly called getStepStatus function multistep', () => {
  //   props.serviceType = PERMIT_FOOD_TRUCK;
  //   props.steps = getSteps(props);
  //   expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
  // });
  // it('should have getCurrentStep function', () => {
  //   expect(functions.getCurrentStep).toBeInstanceOf(Function);
  // });
  // it('should have properly called getCurrentStep function', () => {
  //   props.steps = getSteps(props);
  //   expect(functions.getCurrentStep(props)).toBeTruthy();
  // });
  // it('should have properly called getCurrentStep function multistep', () => {
  //   props.serviceType = PERMIT_FOOD_TRUCK;
  //   props.steps = getSteps(props);
  //   expect(functions.getCurrentStep(props)).toBeTruthy();
  // });
});
