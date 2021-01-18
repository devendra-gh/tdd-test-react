import functions from './functions';
import fetchLegalForms from '../../services/legalForms';

jest.mock('../../services/legalForms');
jest.mock('../../config', () => {
  return {
    __esModule: true,
    initialState: { formCompanyDetails: {} },
  };
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SelectCompanyDetails/functions', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    formCompanyDetails: {},
    actions: {
      stepsStatus: {
        update: jest.fn(),
      },
      formCompanyDetails: {
        update: jest.fn(),
      },
    },
  };
  let mockFetchLegalForms: any;

  beforeEach(() => {
    mockFetchLegalForms = fetchLegalForms;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should properly call onSubmit with success response', () => {
    functions.onSubmit(props);
    expect(props.history.push).toBeCalledWith(
      '/business-licence-procedure/search-activities',
    );
  });

  it('apis success - formCompanyDetails.update should be called with', async () => {
    mockFetchLegalForms.mockImplementation(() => {
      return [{}];
    });
    await functions.getInitialState(props);
    expect(props.actions.formCompanyDetails.update).toHaveBeenCalledWith({
      loading: false,
      showError: false,
      legalForms: [{}],
    });
  });

  it('any apis fail - formCompanyDetails.update should be called with', async () => {
    mockFetchLegalForms.mockImplementation(() => {
      return Promise.reject(Error());
    });
    await functions.getInitialState(props);
    expect(props.actions.formCompanyDetails.update).toHaveBeenCalledWith({
      loading: false,
      showError: true,
    });
  });

  it('getting from redux, no calls should be made', async () => {
    props.formCompanyDetails = {
      legalForms: 'legalForms',
      locations: 'locations',
    };
    mockFetchLegalForms.mockImplementation(() => {
      return [{}];
    });
    const data = await functions.getInitialState(props);
    expect(data).toBe(undefined);
    expect(props.actions.formCompanyDetails.update).not.toBeCalled();
  });
});
