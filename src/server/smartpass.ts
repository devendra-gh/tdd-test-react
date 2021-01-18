import getSmartpassParts from '@tamm/smartpass';
import getSessionStore from 'server/session-store';
import config from 'config';
import demoUsers from './demoUsers';

const smartpassParts = getSmartpassParts({
  sessionStore: getSessionStore({ no: 'request here' } as any),
  projectName: config.projectName,
  appNestedPath: config.basePath,
  apiGateway: {
    header: process.env.API_GATEWAY_HEADER || '',
    key: process.env.API_GATEWAY_KEY || '',
  },
  host: {
    public: config.smartpass.host.public,
    private: config.smartpass.host.private,
  },
  endpoints: {
    generateTammUuid: config.smartpass.endpoints.generateTammUuid,
  },
  demoUsers,
});

export default smartpassParts;
