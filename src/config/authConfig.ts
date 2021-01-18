if (process.env.BROWSER) {
  throw new Error(
    'Do not import `apiGateway.js` from inside the client-side code.',
  );
}

type AuthParamsConfig = {
  header: string;
  key: string;
};

export interface AuthConfig {
  esb: AuthParamsConfig;
  apiGateway: AuthParamsConfig;
}

export default {
  esb: {
    header: process.env.API_HEADER || '',
    key: process.env.API_KEY || '',
  },
  apiGateway: {
    header: process.env.API_GATEWAY_HEADER || '',
    key: process.env.API_GATEWAY_KEY || '',
  },
} as AuthConfig;
