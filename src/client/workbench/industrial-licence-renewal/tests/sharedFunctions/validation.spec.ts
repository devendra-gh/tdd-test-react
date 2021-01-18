import { validateInputElements } from '../../sharedFunctions/validation';

describe('Shared functions => getMapConfig', () => {
  const props = {
    i18n: jest.fn(),
    state: {
      id: '1233',
    },
    actions: {
      idHelp: {
        update: jest.fn(),
      },
      locationDetails: {
        update: jest.fn(),
      },
      latitude: {
        update: jest.fn(),
      },
      longitude: {
        update: jest.fn(),
      },
    },
  };
  it('validate fn without any element', () => {
    validateInputElements(props, []);
  });
  it('validate fn with element', () => {
    validateInputElements(props, [
      {
        key: 'id',
        actionType: 'string',
        regxValue: /.*./,
        validationMessageKey: '',
      },
    ]);
  });
  it('validate fn with element', () => {
    validateInputElements(props, [
      {
        key: 'id',
        actionType: 'string',
        regxValue: /(TN)-\d{7}\b/,
        validationMessageKey: '',
      },
    ]);
  });
});
