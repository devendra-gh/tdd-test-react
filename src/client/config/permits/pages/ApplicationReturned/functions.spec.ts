import bpm from 'client/services/bpm';
import functions from './functions';
import { STEP_4_1, STEP_2_1 } from '../../steps';
import { PERMIT_FOOD_TRUCK } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/ApplicationReturned/functions', () => {
  let props: any;
  const mockBpm: any = bpm.message;
  let bpmUrl: string;
  window.scrollTo = jest.fn();

  beforeEach(() => {
    bpmUrl = 'http://test-bpm-url';
    props = {
      businessKey: 'test key',
      serviceType: 'testService',
      returnPage: {
        documents: [
          {
            file: 'dummy',
          },
        ],
      },
      permitInfo: {
        testService: {
          permitDetails: {},
          documents: [
            {
              file: 'dummy',
            },
            false,
          ],
        },
        [PERMIT_FOOD_TRUCK]: {
          permitDetails: { permitInfo: 'test' },
        },
      },
      actions: {
        permitSubmitting: {
          update: jest.fn(),
        },
        permitServerError: {
          update: jest.fn(),
        },
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should be instance of function', () =>
      expect(functions.onClick).toBeInstanceOf(Function));
    it('should call onClick with bpm success', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          message: 'Success',
        });
      });

      await functions.onClick(bpmUrl)(props);
      expect(props.actions.permitServerError.update).toBeCalled();
      expect(props.actions.permitSubmitting.update).toBeCalled();
    });
    it('should call onClick with bpm msg success true with Error Mapped Message ', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          message: 'Incorrect emirates ID',
        });
      });
      await functions.onClick(bpmUrl)(props);
      expect(props.actions.permitServerError.update).toBeCalled();
      expect(props.actions.permitSubmitting.update).toBeCalled();
    });
    it('should call onClick with bpm msg success true without Success Message', async () => {
      props.returnPage.documents = undefined;
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: true,
          message: 'something',
        });
      });

      await functions.onClick(bpmUrl)(props);
      expect(props.actions.permitServerError.update).toBeCalledWith(
        'something_went_wrong',
      );
      expect(props.actions.permitSubmitting.update).toBeCalled();
    });
    it('should call onClick with bpm msg success false', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.resolve({
          success: false,
          message: 'something',
        });
      });

      await functions.onClick(bpmUrl)(props);
      expect(props.actions.permitServerError.update).toBeCalledWith(
        'something_went_wrong',
      );
      expect(props.actions.permitSubmitting.update).toBeCalled();
    });
    it('should call onClick with bpm exception', async () => {
      mockBpm.mockImplementation(() => {
        return Promise.reject(new Error('test error'));
      });

      await functions.onClick(bpmUrl)(props);
      expect(props.actions.permitServerError.update).toBeCalled();
      expect(props.actions.permitSubmitting.update).toBeCalled();
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
        serviceType: PERMIT_FOOD_TRUCK,
      };
    });
    it('for multi step permit with otherEntitySubmitted = false', () => {
      props.steps = getSteps(props);
      expect(functions.getCurrentStep(props)).toEqual(STEP_2_1);
    });
    it('for multi step permit with otherEntitySubmitted = true', () => {
      props.otherEntitySubmitted = true;
      props.steps = getSteps(props);
      expect(functions.getCurrentStep(props)).toEqual(STEP_4_1);
    });
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
        serviceType: PERMIT_FOOD_TRUCK,
      };
    });
    it('for multi step permit with otherEntitySubmitted = false', () => {
      props.steps = getSteps(props);
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
    });
    it('for multi step permit with otherEntitySubmitted = true', () => {
      props.otherEntitySubmitted = true;
      props.steps = getSteps(props);
      expect(functions.getStepStatus(props)).toBeInstanceOf(Object);
    });
  });
});
