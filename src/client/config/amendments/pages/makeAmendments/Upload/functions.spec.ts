import bpm from 'client/services/bpm';
import * as utilsFunctions from 'client/config/amendments/utils/functions';
import { IVariables } from '@tamm/app-composer';
import functions, { validation } from './functions';

jest.mock('client/config/amendments/utils/functions');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('upload', () => {
  const mockBpmMessage: any = bpm.message;

  const mockCallgetPrevSubStepPage: any = utilsFunctions.getPrevSubStepPage;
  mockCallgetPrevSubStepPage.mockImplementation(() => {
    return 'prev';
  });
  const props = {
    currentPage: 'uploadDocuments',
    businessKey: 'businessKey',
    legalForm: 'establishment',
    amendmentCategories: {
      category: {
        ownership: true,
        location: true,
        activities: false,
        tradename: false,
        financialDetails: true,
      },
      ownership: {
        ownership: false,
        location: false,
        activities: false,
        tradename: true,
        financialDetails: true,
      },
    },
    history: {
      push: jest.fn(),
    },
    actions: {
      documents: {
        update: jest.fn(),
      },
      amendmentServerError: {
        reset: jest.fn(),
      },
    },
    documents: [],
  };

  it('should properly call onSubmitAmendment', async () => {
    mockBpmMessage.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
    functions.handleSubmitFiles(props);
  });

  it('should properly call handleBack', async () => {
    mockBpmMessage.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
    functions.handleBack(props);
  });

  it('should properly call handleBack else ', async () => {
    mockBpmMessage.mockImplementation(() => {
      return Promise.resolve({
        success: 'some-data',
        message: 'Success',
      });
    });
    mockCallgetPrevSubStepPage.mockImplementation(() => {
      return '';
    });
    functions.handleBack(props);
  });

  it('should properly call validation', async () => {
    const documentGroups = [
      {
        name: 'ownership',
        sections: [
          {
            name: 'general',
            referenceKey: 'common',
            action: 'update',
            fields: [
              {
                name: 'moa',
                description: 'uploadFieldLabel.moa',
                required: true,
                isGeneral: true,
                conditionalBehaviour: () => true,
              },
            ],
          },
        ],
      },
    ];
    const documentValues: IVariables[] = [
      {
        loading: false,
        fieldName: 'general.common.moa',
        documentPath: 's3Path',
      },
    ];
    validation(documentGroups, documentValues);
  });
  it('should properly call validation loading ', async () => {
    const documentGroups = [
      {
        name: 'ownership',
        sections: [
          {
            name: 'general',
            referenceKey: 'common',
            action: 'update',
            fields: [
              {
                name: 'moa',
                description: 'uploadFieldLabel.moa',
                required: true,
                isGeneral: true,
                conditionalBehaviour: () => true,
              },
            ],
          },
        ],
      },
    ];
    const documentValues: IVariables[] = [
      {
        loading: true,
        fieldName: 'general.common.moa',
        documentPath: 's3Path',
      },
    ];
    validation(documentGroups, documentValues);
  });

  it('should properly call validation else statement', async () => {
    const documentGroups = [
      {
        sections: [
          {
            name: 'general',
            referenceKey: 'common',
            action: 'update',
          },
        ],
      },
    ];
    const documentValues: IVariables[] = [
      {
        loading: false,
        fieldName: 'moa',
        documentPath: 's3Path',
      },
    ];
    validation(documentGroups, documentValues);
  });

  it('should properly call upload validation required false', () => {
    const documentGroups = [
      {
        sections: [
          {
            name: 'general',
            referenceKey: 'common',
            action: 'update',
            fields: [
              {
                name: 'moa',
                description: 'uploadFieldLabel.moa',
                required: false,
                isGeneral: true,
                conditionalBehaviour: () => true,
              },
            ],
          },
        ],
      },
    ];
    const documentValues: IVariables[] = [{}];
    validation(documentGroups, documentValues);
  });

  it('should properly call upload', () => {
    expect(functions.onPageInit(props)).toBeInstanceOf(Object);
  });
});
