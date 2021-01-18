/* eslint-disable camelcase */
import { init } from './functions';

jest.mock('client/services/fetch');

describe('economicRecordCertificate/pages/application-in-progress', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      actions: {
        showSideBar: {
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
        paymentTag: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        waitingApprovalDescription: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
  });
});
