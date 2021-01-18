/* eslint-disable camelcase */
import {
  init,
  // onPageInit,
} from '../../../pages/application-inprogress-2/functions';

jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(),
}));
jest.mock('../../../sharedFunctions/breadCrumLinks.ts', () => ({
  crumsList: jest.fn(() => []),
}));

describe('pages/application-inprogress-2/functions', () => {
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
        individualIssuedTags: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        breadCrumItems: {
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

  // describe('onPageInit functions', () => {
  //   it('should call', () => {
  //     onPageInit(props);
  //   });
  // });
});
