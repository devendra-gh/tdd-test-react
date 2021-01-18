import fetch from 'client/services/fetch';
import bpm from 'client/services/bpm';
import { IVariables } from '@tamm/app-composer';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('services/bpm', () => {
  let mockFetch: any;

  beforeAll(() => {
    mockFetch = fetch;
  });

  it('should call state with correct params', async () => {
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

    await bpm.getVariables('licence', processState);
    await bpm.getVariables('licence', processState, true);

    expect(
      mockFetch,
    ).toHaveBeenCalledWith(
      `/api/proxy/bpm/some_process/licence/variables`,
      'POST',
      { variables: 'someVariable' },
    );
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should call state with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.state('licence', 'instance_id');
    await bpm.state('licence', 'instance_id', true);

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/licence/instance_id/state`,
    );
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should call start with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.start('licence', {
      key: 'value',
    });

    await bpm.start(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/licence/start`,
      'POST',
      {
        key: 'value',
      },
    );
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should call message with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.message('licence', {
      key: 'value',
    });
    await bpm.message(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/licence/message`,
      'POST',
      {
        key: 'value',
      },
    );
    expect(mockFetch).toBeCalledTimes(2);
  });

  it('should call redirectTo with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.redirectTo('licence', {
      key: 'value',
    });
    await bpm.redirectTo(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/licence/redirect`,
      'POST',
      {
        key: 'value',
      },
    );
    expect(mockFetch).toBeCalledTimes(2);
  });
});
