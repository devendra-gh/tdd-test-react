import { cleanup } from '@testing-library/react';
import applicationReturned from './index';

jest.mock('client/config/AddEconomicActivity/config');
jest.mock('client/config/AddEconomicActivity', () => ({
  initialState: {
    fileUploadData: {
      documents: {
        activitySupportingDoc: null,
      },
    },
  },
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('ApplicationReturned/index', () => {
  let props: any;

  beforeEach(() => {
    props = {
      i18n: () => '',
      newActivityApiData: {
        altId: 'altId',
      },
      comments: '{}',
      cnNumber: 'cnNumber',
      capId: 'capId',
      actions: {
        fileUploadData: {
          update: jest.fn(),
        },
        licenceCapId: {
          update: jest.fn(),
        },
        cnNumber: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  it('Check instance', () => {
    expect(applicationReturned).toBeInstanceOf(Object);
  });

  it('Check onPageInit', () => {
    applicationReturned[0].onPageInit(props);
    expect(props.actions.fileUploadData.update).toBeCalled();

    props.feedback = 'test';
    applicationReturned[0].onPageInit(props);
  });

  it('Check steps', () => {
    applicationReturned[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ addEconomicActivitySteps: 'addEconomicActivitySteps' });
      }
    });
  });
});
