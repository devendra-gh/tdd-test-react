// import { IVariables } from '@tamm/app-composer';
import index from './index';
import { PERMIT_AIR_AD } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationWaiting', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(value => value),
      serviceType: PERMIT_AIR_AD,
      apTransactionNumber: 'submit-date',
      submitDate: '13-10-2019',
      permitInfo: {
        [`${PERMIT_AIR_AD}`]: {
          documents: {
            testdocs: { name: 'test-doc.pdf', label: 'test' },
          },
        },
      },
      actions: {
        permitInfo: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    props.steps = getSteps(props);
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    props.apTransactionNumber = '';
    props.submitDate = '';
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
  it('should properly call Init', () => {
    index[0].init(props);
    const dummy = {
      [props.serviceType]: {
        documents: {
          testdocs: null,
        },
      },
    };
    expect(props.actions.permitInfo.update).toHaveBeenCalledWith(dummy);
    props.serviceType = '';
    index[0].init(props);
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
    // it('should properly call currentStep', () => {
    //   const stepsIndex = index[0].state.mapState.findIndex(
    //     state =>
    //       typeof state === 'object' &&
    //       Object.keys(state).includes('currentStep'),
    //   );
    //   const objCurrentStep: Record<string, any> = index[0].state.mapState[
    //     stepsIndex
    //   ] as Record<string, any>;
    //   const result = objCurrentStep.currentStep(props);
    //   expect(result).toEqual(STEP_2);
    // });
    // it('should properly call stepsStatus', () => {
    //   const stepsIndex = index[0].state.mapState.findIndex(
    //     state =>
    //       typeof state === 'object' &&
    //       Object.keys(state).includes('stepsStatus'),
    //   );
    //   const objStepsStatus: Record<string, any> = index[0].state.mapState[
    //     stepsIndex
    //   ] as Record<string, any>;
    //   const result = objStepsStatus.stepsStatus(props);
    //   expect(result).toBeInstanceOf(Object);
    // });
  });
});
