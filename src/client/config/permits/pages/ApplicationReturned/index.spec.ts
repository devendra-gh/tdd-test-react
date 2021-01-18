import index from './index';
import { PERMIT_AIR_AD } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/ApplicationReturned', () => {
  let props: any;
  beforeEach(() => {
    props = {
      serviceType: PERMIT_AIR_AD,
      apTransactionNumber: 'submit-date',
      submitDate: '13-10-2019',
      permitInfo: {
        [PERMIT_AIR_AD]: { permitDetails: { permitType: 'test' } },
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
  it('should export dedReturned', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    props.steps = getSteps(props.serviceType);
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    props = {
      ...props,
      apTransactionNumber: '',
      submitDate: '',
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
  it('should properly call Init', () => {
    index[0].init(props);

    expect(props.actions.permitSubmitting.update).toHaveBeenCalledWith(false);
    expect(props.actions.permitServerError.update).toHaveBeenCalledWith('');
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
