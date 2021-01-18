import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';
import { getVariables } from './bpm';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('BusinessLicenseFines/functions', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should call getVariables with correct params', async () => {
    const processState: IVariables = {
      processName: 'some_process',
      variables: 'someVariable',
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await getVariables('licence', processState);

    expect(
      mockFetch,
    ).toHaveBeenCalledWith(
      `/pub/proxy/bpm/some_process/licence/variables`,
      'POST',
      { variables: 'someVariable' },
    );
  });

  it('should call getVariables with correct params with pub is false', async () => {
    const processState: IVariables = {
      processName: 'some_process',
      variables: 'someVariable',
    };
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await getVariables('licence', processState, false);

    expect(
      mockFetch,
    ).toHaveBeenCalledWith(
      `/api/proxy/bpm/some_process/licence/variables`,
      'POST',
      { variables: 'someVariable' },
    );
  });
});
