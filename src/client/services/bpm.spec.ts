import fetch from 'client/services/fetch';
import bpm, { BpmClient } from 'client/services/bpm';

jest.mock('client/services/fetch');

describe('services/bpm', () => {
  let mockFetch: any;
  let mockHistory: any;

  beforeAll(() => {
    mockFetch = fetch;
    mockHistory = {
      location: {
        pathname: '/pathname',
      },
    };
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

  it('should call state pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.state('licence', 'instance_id', true);

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/instance_id/state`,
    );
  });

  it('should call state pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.state('licence', 'instance_id', true);

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/instance_id/state`,
    );
  });

  it('should call state pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.state('licence', 'instance_id', true);

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/instance_id/state`,
    );
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

  it('should call start pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.start(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/start`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call startProcess pub with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess(
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        key: 'value',
        state: '/pathname',
      },
    );
  });

  it('should call startProcess api with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: '/pathname',
      },
    );
  });

  it('should call startProcess with correct params when history is missing', async () => {
    const bpmClient = new BpmClient({
      processDefinitionId: 'processDefinitionId',
    });

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: undefined,
      },
    );
  });

  it('should throw error startProcess when processDefinitionId is missing', async () => {
    expect.assertions(1);

    try {
      const bpmClient = new BpmClient();

      await bpmClient.startProcess();
    } catch (e) {
      expect(e.message).toBe('Missing process definition id');
    }
  });

  it('should call start pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.start(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/start`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call startProcess pub with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess(
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        key: 'value',
        state: '/pathname',
      },
    );
  });

  it('should call startProcess api with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: '/pathname',
      },
    );
  });

  it('should call startProcess with correct params when history is missing', async () => {
    const bpmClient = new BpmClient({
      processDefinitionId: 'processDefinitionId',
    });

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: undefined,
      },
    );
  });

  it('should throw error startProcess when processDefinitionId is missing', async () => {
    expect.assertions(1);

    try {
      const bpmClient = new BpmClient();

      await bpmClient.startProcess();
    } catch (e) {
      expect(e.message).toBe('Missing process definition id');
    }
  });

  it('should call start pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.start(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/start`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call startProcess pub with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess(
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        key: 'value',
        state: '/pathname',
      },
    );
  });

  it('should call startProcess api with correct params', async () => {
    const bpmClient = new BpmClient(
      {
        processDefinitionId: 'processDefinitionId',
      },
      mockHistory,
    );

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: '/pathname',
      },
    );
  });

  it('should call startProcess with correct params when history is missing', async () => {
    const bpmClient = new BpmClient({
      processDefinitionId: 'processDefinitionId',
    });

    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpmClient.startProcess();

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/workbench/start/processDefinitionId`,
      'POST',
      {
        state: undefined,
      },
    );
  });

  it('should throw error startProcess when processDefinitionId is missing', async () => {
    expect.assertions(1);

    try {
      const bpmClient = new BpmClient();

      await bpmClient.startProcess();
    } catch (e) {
      expect(e.message).toBe('Missing process definition id');
    }
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

  it('should call message pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.message(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/message`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call message pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.message(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/message`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call message pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.message(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/message`,
      'POST',
      {
        key: 'value',
      },
    );
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

  it('should call redirectTo pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.redirectTo(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/redirect`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call redirectTo pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.redirectTo(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/redirect`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call redirectTo pub with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.redirectTo(
      'licence',
      {
        key: 'value',
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/redirect`,
      'POST',
      {
        key: 'value',
      },
    );
  });

  it('should call getVariables with correct params', async () => {
    mockFetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            message: 'ok',
          });
        },
      });
    });

    await bpm.getVariables('1111', {
      processName: 'licence',
      variables: {
        key: 'value',
      },
    });

    expect(mockFetch).toHaveBeenCalledWith(
      `/api/proxy/bpm/licence/1111/variables`,
      'POST',
      {
        variables: {
          key: 'value',
        },
      },
    );

    await bpm.getVariables(
      '1111',
      {
        processName: 'licence',
        variables: {
          key: 'value',
        },
      },
      true,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      `/pub/proxy/bpm/licence/1111/variables`,
      'POST',
      {
        variables: {
          key: 'value',
        },
      },
    );

    bpm.getVariables(
      '1111',
      {
        variables: {
          key: 'value',
        },
      },
      true,
    );
  });
});
