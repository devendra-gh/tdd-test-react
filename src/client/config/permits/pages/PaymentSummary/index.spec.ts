import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import index from './index';
import {
  PERMIT_ADDITIONAL_SIGNBOARD,
  PERMIT_FOOD_TRUCK,
} from '../../utils/constants/permits';
import { STEP_3 } from '../../steps';
import { STEP_TRACKER_STATUS_FINISH } from '../../utils/constants/stepTrackerStatus';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/PaymentSummary', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      currentStep: STEP_3,
      apTransactionNumber: 'submit-date',
      submitDate: '13-10-2019',
      serviceType: PERMIT_ADDITIONAL_SIGNBOARD,
      permitInfo: {
        [PERMIT_ADDITIONAL_SIGNBOARD]: { permitDetails: {} },
        [PERMIT_FOOD_TRUCK]: { permitDetails: { permitInfo: 'test' } },
      },
      stepsStatus: {
        STEP_1: STEP_TRACKER_STATUS_FINISH,
        STEP_2: STEP_TRACKER_STATUS_FINISH,
      },
      type: noticeTypes.INFO,
      title: 'global.payment',
      subTitle: 'global.payment',
      content: 'applicationPaymentSummary.content',
      buttons: [
        {
          label: 'button.pay',
          onClick: jest.fn(),
          withArrow: true,
        },
      ],
      permitsFees: JSON.stringify([
        { feeDescEn: 'test-case-1', FeeAmount: 2041 },
        { feeDescEn: 'test-case-2', FeeAmount: 2002 },
        { feeDescEn: 'test-case-3', FeeAmount: 2003 },
      ]),
      locale: 'en',
    };
  });

  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });
  it('should properly call onPageInit', () => {
    props.steps = getSteps(props);
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

    props.permitsFees = '';
    props.serviceType = PERMIT_FOOD_TRUCK;
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
