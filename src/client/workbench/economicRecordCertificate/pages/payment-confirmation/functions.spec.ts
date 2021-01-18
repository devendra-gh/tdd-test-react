/* eslint-disable camelcase */
import { init, onPageInit } from './functions';

jest.mock('client/services/fetch');

describe('economicRecordCertificate/pages/application-in-progress', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      paymentLink: 'test',
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
        paymentLinkString: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
      },
    };
  });

  describe('init functions', () => {
    it('should properly call init', async () => {
      await init(props);
    });
    describe('onPageInit functions', () => {
      it('should properly call onPageInit', () => {
        onPageInit(props);

        props.paymentLink = '';
        onPageInit(props);
      });
    });
  });
});
