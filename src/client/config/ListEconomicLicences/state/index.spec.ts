import bpm from 'client/services/bpm';
import fetchState from './index';

jest.mock('client/services/fetch');
jest.mock('client/services/bpm');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('license-poc/state', () => {
  let mockBpm: any;
  let instanceId: string;

  beforeEach(() => {
    mockBpm = bpm;
    instanceId = 'example:instanceId';
  });

  it('should return value', async () => {
    const exampleValue = 'example:value';

    mockBpm.state.mockResolvedValue({
      data: {
        value: exampleValue,
      },
    });

    const response = await fetchState(instanceId);

    expect(response).toEqual(
      '/list-economic-licences-certificateexample:value',
    );
  });

  it('should return false if data is null', async () => {
    mockBpm.state.mockResolvedValue({
      data: null,
    });

    const response = await fetchState(instanceId);

    expect(response).toBeFalsy();
  });

  it('should return false if value is null', async () => {
    mockBpm.state.mockResolvedValue({
      data: {
        value: null,
      },
    });

    const response = await fetchState(instanceId);

    expect(response).toBeFalsy();
  });

  it('should fail', async () => {
    mockBpm.state.mockRejectedValue('Some Error');

    let response;
    try {
      response = await fetchState(instanceId);
    } catch (e) {
      expect(e).toMatch('Some error');
    }

    expect(response).toBeFalsy();
  });
});
