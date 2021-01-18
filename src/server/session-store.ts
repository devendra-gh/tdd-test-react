import { Request } from 'express';

import sessionStoreConfig from 'config/sessionStoreConfig';
import authConfig from 'config/authConfig';
import SessionStore from 'server/services/sessionStore';

export default (req: Request) =>
  new SessionStore({
    ...sessionStoreConfig,
    authHeaders: authConfig,
    req,
  });
