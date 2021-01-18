import app from 'server/app';
import cms from 'server/cms';
import gsp from 'server/gsp';
import tammLogger from 'server/utils/logger';
import appUtils from '@tamm/application-utils/server';

import config from 'config';

// Hooks
import { onStartProd } from 'server/hooks';

const logger = tammLogger.getService();
const cmsHook = cms.hooks.start;
const gspHook = gsp.hooks.start;

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  Promise.resolve().then(() => {
    onStartProd(cmsHook, gspHook).then(() => {
      const server = app.listen(config.port, () =>
        logger.info(
          `The server is running at https://localhost:${config.port}/${process.env.APP_NESTED_PATH}`,
        ),
      );

      appUtils.services.gracefulShutdown(server);

      return server;
    });
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
}

export default app;
