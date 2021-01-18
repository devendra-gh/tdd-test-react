/* eslint-disable camelcase */
import {
  init,
  onPageInit,
} from '../../../pages/application-inprogress/functions';

jest.mock('client/services/bpm');

jest.mock('../../../sharedFunctions/stepUtils.ts', () => ({
  getSteps: jest.fn(),
}));

describe('pages/application-inprogress/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      locale: 'en',
      history: {
        push: jest.fn(),
      },
      actions: {
        loading: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        referenceTags: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  describe('init functions', () => {
    it('should call', async () => {
      await init(props);
    });
  });

  describe('onPageInit functions', () => {
    it('should call', () => {
      onPageInit(props);
    });
  });
});
