import functions from './functions';
import getSteps from '../../utils/getSteps';
import {
  PERMIT_FOOD_TRUCK,
  PERMIT_ADDITIONAL_SIGNBOARD,
} from '../../utils/constants/permits';
import { PERMIT_TYPE_ANNUAL } from '../../utils/getPermitTypes';
import { STEP_2, STEP_4_1 } from '../../steps';

jest.mock('client/services/bpm', () => ({
  message: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({
        success: true,
        data: {
          id: 1,
          businessKey: 'test key',
        },
      }),
    )
    .mockReturnValueOnce(
      Promise.resolve({
        success: false,
      }),
    ),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/ApplicationRejected/functions', () => {
  let props: any;
  let bpmUrl: string;

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    props = {
      businessKey: 'test key',
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      otherEntitySubmitted: false,
      actions: {
        businessKey: {
          reset: jest.fn(),
        },
        instanceId: {
          reset: jest.fn(),
        },
        permitType: {
          reset: jest.fn(),
        },
        serviceType: {
          reset: jest.fn(),
        },
        companyType: {
          reset: jest.fn(),
        },
        companyDetails: {
          reset: jest.fn(),
        },
        stepsStatus: {
          reset: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should be instance of function', () =>
    expect(functions.onClick).toBeInstanceOf(Function));

  it('should redirect on success', async () => {
    await functions.onClick(bpmUrl)(props);
    expect(props.actions.businessKey.reset).toHaveBeenCalled();
    expect(props.actions.permitType.reset).toHaveBeenCalled();
  });

  it('should not redirect on failure', async () => {
    await functions.onClick(bpmUrl)(props);
    expect(props.history.push).not.toHaveBeenCalled();
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
      props.otherEntitySubmitted = true;
      props.permitInfo = {
        [PERMIT_FOOD_TRUCK]: {
          permitDetails: {
            permitType: PERMIT_TYPE_ANNUAL,
          },
        },
      };
      props.steps = getSteps(props);
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
      props.otherEntitySubmitted = true;
      props.permitInfo = {
        [PERMIT_FOOD_TRUCK]: {
          permitDetails: {
            permitType: PERMIT_TYPE_ANNUAL,
          },
        },
      };
      props.steps = getSteps(props);
      expect(functions.getCurrentStep(props)).toEqual(STEP_4_1);
    });
  });
});
