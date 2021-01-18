/* eslint-disable camelcase */
import {
  init,
  // f1_visible,
  // f2_onClick,
} from '../../../pages/service-status/functions';

jest.mock('client/services/fetch');

describe('pages/service-status/functions', () => {
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
      },
    };
  });

  describe('init functions', () => {
    it('should properly call', async () => {
      await init(props);
    });
  });

  // describe('f1_visible functions', () => {
  //   it('should properly call', () => {
  //     f1_visible(props);
  //   });
  // });

  // describe('f2_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_onClick(props);
  //   });
  // });
});
