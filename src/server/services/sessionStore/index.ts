import { Request } from 'express';
import { Store } from 'express-session';

import { SessionStoreConfig } from 'config/sessionStoreConfig';
import { AuthConfig } from 'config/authConfig';
import ajaxClient from 'server/services/ajaxClient';
import tammLogger from 'server/utils/logger';
import { LoggerService } from '@tamm/logger';

const ONE_DAY = 86400;

interface SessionStoreOptions extends SessionStoreConfig {
  authHeaders: AuthConfig;
  req: Request;
  ttl: any;
}

type SessionStoreData = {
  sid: string;
  session: string;
  ttl?: any;
};

export default class SessionStore extends Store {
  /**
   * @param {Object} options
   * @param {string} options.host
   * @param {string} options.prefix
   * @param {number|string|Function} options.ttl
   * @param {boolean} options.disableTTL
   * @param {Object} options.endpoints
   * @param {string} options.endpoints.get
   * @param {string} options.endpoints.set
   * @param {string} options.endpoints.destroy
   * @param {string} options.endpoints.touch
   * @param {Request} options.req
   */

  public options: SessionStoreOptions;

  public req: Request;

  private logger: LoggerService;

  constructor(options: SessionStoreOptions) {
    super(options);

    const { req, ...opts } = options;
    this.req = req || { logUuid: 'N/A' };
    this.logger = req.log || tammLogger.getService();

    this.logger.info(`Create session-store instance with `, { opts });

    this.options = options;
  }

  getHeaders = () => {
    if (this.options.authHeaders) {
      const { apiGateway, esb } = this.options.authHeaders;

      return {
        [apiGateway.header]: apiGateway.key,
        [esb.header]: esb.key,
      };
    }
    return undefined;
  };

  /**
   * @param {string} sessionId
   * @param {Function} fn
   * @returns {Promise<Object|Error>}
   */
  get = async (sessionId: string, fn: any = () => {}) => {
    const { host, prefix, endpoints } = this.options;
    const sid = `${prefix}:${sessionId}`;
    const headers = this.getHeaders();
    const httpConfig = {
      url: `${host}${endpoints.get}`,
      method: 'get' as 'GET',
      headers,
      params: { sid },
    };

    try {
      const response = await ajaxClient(httpConfig, this.req);
      const session = JSON.parse(response.data.data.session);

      fn(null, session);

      return session;
    } catch (err) {
      this.logger.error('Failed to get session', { err });

      // The session argument should be a session if found, otherwise null or undefined if the session was not found (and there was no error).
      // A special case is made when error.code === 'ENOENT' to act like callback(null, null).
      // NB: in case of `fn(err)` we get blank page
      fn(err);

      return err;
    }
  };

  /**
   * @param {string} sessionId
   * @param {Object} session
   * @param {Function} fn
   * @returns {Promise<string|Error>}
   */
  set = async (sessionId: string, session: any, fn: any = () => {}) => {
    const { host, prefix, endpoints, disableTTL } = this.options;
    const sid = `${prefix}:${sessionId}`;
    const data: SessionStoreData = {
      sid,
      session: JSON.stringify(session),
    };
    const headers = this.getHeaders();

    if (!disableTTL) {
      data.ttl = this.getTTL(sessionId, session);
    }

    const httpConfig = {
      url: `${host}${endpoints.set}`,
      method: 'post' as 'POST',
      headers,
      data,
    };

    try {
      const response = await ajaxClient(httpConfig, this.req);
      const { message } = response.data.data;

      fn(null, message);

      return message;
    } catch (err) {
      this.logger.error('Failed to set session', { err });

      // The session argument should be a session if found, otherwise null or undefined if the session was not found (and there was no error).
      // A special case is made when error.code === 'ENOENT' to act like callback(null, null).
      // NB: in case of `fn(err)` we get blank page
      fn(null, null);
      return err;
    }
  };

  /**
   * @param {string} sessionId
   * @param {Function} fn
   * @returns {Promise<number|Error>}
   */
  destroy = async (sessionId: string, fn: any = () => {}) => {
    const { host, prefix, endpoints } = this.options;
    const sid = `${prefix}:${sessionId}`;
    const headers = this.getHeaders();
    const httpConfig = {
      url: `${host}${endpoints.destroy}`,
      method: 'delete' as 'DELETE',
      headers,
      data: { sid },
    };

    try {
      const response = await ajaxClient(httpConfig, this.req);
      const { amount } = response.data.data;

      fn(null, amount);

      return amount;
    } catch (err) {
      this.logger.error('Failed to destroy session', { err });

      // The session argument should be a session if found, otherwise null or undefined if the session was not found (and there was no error).
      // A special case is made when error.code === 'ENOENT' to act like callback(null, null).
      // NB: in case of `fn(err)` we get blank page
      fn(null, null);

      return err;
    }
  };

  /**
   * Refresh the time-to-live for the session with the given `sid`
   * @param {string} sessionId
   * @param {Object} session
   * @param {Function} fn
   * @returns {Promise<number|Error>} [0, 1] which means false or trues
   */
  touch = async (sessionId: string, session: any, fn: any = () => {}) => {
    const { host, prefix, endpoints, disableTTL } = this.options;
    const sid = `${prefix}:${sessionId}`;
    const headers = this.getHeaders();

    if (disableTTL) {
      return fn();
    }

    try {
      const ttl = this.getTTL(sessionId, session);
      const httpConfig = {
        url: `${host}${endpoints.touch}`,
        method: 'patch' as 'PATCH',
        headers,
        data: {
          sid,
          ttl,
        },
      };
      const response = await ajaxClient(httpConfig, this.req);
      const { touched } = response.data.data;

      fn(null, touched);

      return touched;
    } catch (err) {
      this.logger.error('Failed to touch session', { err });

      // The session argument should be a session if found, otherwise null or undefined if the session was not found (and there was no error).
      // A special case is made when error.code === 'ENOENT' to act like callback(null, null).
      // NB: in case of `fn(err)` we get blank page
      fn(err);

      return err;
    }
  };

  /**
   * Get the time-to-live for the session with the given `sid`.
   * @param {string} sessionId
   * @param {string} session
   * @returns {number}
   */
  getTTL(sessionId: string, session: any) {
    const { ttl } = this.options;

    if (typeof ttl === 'number' || typeof ttl === 'string') {
      return ttl;
    }

    if (typeof ttl === 'function') {
      return ttl(this, session, sessionId);
    }

    if (ttl) {
      throw new TypeError('`ttl` must be a number or function.');
    }

    const { maxAge } = session.cookie;

    return typeof maxAge === 'number' ? Math.floor(maxAge / 1000) : ONE_DAY;
  }
}
