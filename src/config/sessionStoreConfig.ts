if (process.env.BROWSER) {
  throw new Error(
    'Do not import `sessionStoreConfig.js` from inside the client-side code.',
  );
}

const DEFAULT_TTL = 119 * 60; // 119 minutes

type SessionStoreEndpoints = {
  get: string;
  set: string;
  destroy: string;
  touch: string;
};

export interface SessionStoreConfig {
  host: string;
  prefix: string;
  ttl: number;
  disableTTL: boolean;
  endpoints: SessionStoreEndpoints;
}

export default {
  host: process.env.SESSION_STORE_HOST,
  prefix: process.env.SESSION_STORE_PREFIX || 'sess',
  ttl: process.env.SESSION_STORE_TTL || DEFAULT_TTL,
  disableTTL: process.env.SESSION_STORE_DISABLE_TTL === 'true',
  endpoints: {
    get: process.env.SESSION_STORE_GET_ENDPOINT || '/',
    set: process.env.SESSION_STORE_SET_ENDPOINT || '/',
    destroy: process.env.SESSION_STORE_DESTROY_ENDPOINT || '/',
    touch: process.env.SESSION_STORE_TOUCH_ENDPOINT || '/',
  },
} as SessionStoreConfig;
