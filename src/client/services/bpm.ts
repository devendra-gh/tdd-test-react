import { updateFetchStateInterval, IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import { PROCESS_NAME_WORKBENCH } from 'client/_examples/v5/constants';
import { History } from 'history';

const FETCH_STATE_SHORT_INTERVAL = 1000;

class Bpm {
  processDefinitionId: string;

  history?: History;

  constructor(config?: IVariables, history?: History) {
    const options = config || {};

    this.processDefinitionId = options.processDefinitionId;

    this.history = history;
  }

  /**
   * Start bpm process
   * @param {string} name
   * @param {string} instanceId
   * @param {boolean} pub
   * @returns {Promise}
   */
  state(name: string, instanceId: string, pub: boolean = false) {
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${name}/${instanceId}/state`,
    );
  }

  /**
   * get process vars
   * @param {string} instanceId
   * @param {Object} processState
   * @param {boolean} pub
   * @returns {Promise}
   */
  getVariables(
    instanceId: string,
    processState: IVariables,
    pub: boolean = false,
  ) {
    if (!processState.processName) {
      return console.error(
        `Please provide processName in your fromProcessState object instanceId: ${instanceId} processState: ${JSON.stringify(
          processState,
        )} `,
      );
    }
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${
        processState.processName
      }/${instanceId}/variables`,
      'POST',
      {
        variables: processState.variables,
      },
    );
  }

  /**
   * Start bpm process
   * @param {string} name
   * @param {Object} data
   * @param {boolean} pub
   * @returns {Promise}
   */
  start(name: string, data: object, pub: boolean = false) {
    updateFetchStateInterval(FETCH_STATE_SHORT_INTERVAL);
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${name}/start`,
      'POST',
      data,
    );
  }

  /**
   * Start bpm process with processDefinitionId
   * @param {Object} data
   * @param {boolean} pub
   * @returns {Promise}
   */
  startProcess(data = {}, pub: boolean = false) {
    if (!this.processDefinitionId) {
      throw new Error('Missing process definition id');
    }

    updateFetchStateInterval(FETCH_STATE_SHORT_INTERVAL);

    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${PROCESS_NAME_WORKBENCH}/start/${
        this.processDefinitionId
      }`,
      'POST',
      {
        ...data,
        state: this.history?.location.pathname,
      },
    );
  }

  /**
   * Message
   * @param {string} name
   * @param {Object} data
   * @param {boolean} pub
   * @returns {Promise}
   */
  message(name: string, data: object, pub: boolean = false) {
    updateFetchStateInterval(FETCH_STATE_SHORT_INTERVAL);
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${name}/message`,
      'POST',
      data,
    );
  }

  /**
   * Message
   * @param {Object} data
   * @param {boolean} pub
   * @returns {Promise}
   */
  sendMessage(data: object, pub: boolean = false) {
    updateFetchStateInterval(FETCH_STATE_SHORT_INTERVAL);
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${PROCESS_NAME_WORKBENCH}/message/${
        this.processDefinitionId
      }`,
      'POST',
      data,
    );
  }

  /**
   * Redirect
   * @param {string} name
   * @param {Object} data
   * @param {boolean} pub
   * @returns {Promise}
   */
  redirectTo(name: string, data: object, pub: boolean = false) {
    updateFetchStateInterval(FETCH_STATE_SHORT_INTERVAL);
    return fetch(
      `/${pub ? 'pub' : 'api'}/proxy/bpm/${name}/redirect`,
      'POST',
      data,
    );
  }
}

export { Bpm as BpmClient };

export default new Bpm({});
