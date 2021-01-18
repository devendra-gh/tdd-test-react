import index from './index';
import { PERMIT_AIR_AD } from '../../utils/constants/permits';
import getSteps from '../../utils/getSteps';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/EntityApproval/index', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(value => value),
      history: {
        push: jest.fn(),
      },
      serviceType: PERMIT_AIR_AD,
      otherEntitySubmitted: false,
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
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    beforeEach(() => {
      props.steps = getSteps(props);
    });
    it('should be instance of a function', () => {
      expect(index[0].onPageInit).toBeInstanceOf(Function);
    });
    it('should call onPageInit properly', () => {
      expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    });
    it('apTransactionNumber and submitDate empty', () => {
      props.apTransactionNumber = '';
      props.submitDate = '';
      expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    });
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
