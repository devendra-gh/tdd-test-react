/* eslint-disable camelcase */
import { init } from '../../../pages/application-inprogress/functions';

jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(),
}));

describe('pages/application-inprogress/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      history: {
        push: jest.fn(),
      },
      actions: {
        showSidebar: {
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
        steps: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should call', async () => {
      await init(props);
    });
  });
});
