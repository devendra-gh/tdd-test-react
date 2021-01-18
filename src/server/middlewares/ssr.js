import tammLogger from 'server/utils/logger';
import puppeteerRenderer from 'js--puppeteer-renderer-middleware';

const logger = tammLogger.getService();

export default () => {
  const puppeteerRendererUrl = process.env.SSR_PUPPETEER_RENDERER;
  const ssrRenderer = puppeteerRendererUrl
    ? puppeteerRenderer({
        url: `${puppeteerRendererUrl}`,
        timeout: 60 * 1000,
        useCache: true,
        ignoreErrors: true,
        requestConfigModifier: requestConfig => ({
          ...requestConfig,
          headers: {
            'x-Gateway-APIKey':
              process.env.API_GATEWAY_KEY || 'PUT YOUR API KEY HERE',
          },
        }),
      })
    : (_req, _res, nestedNext) => nestedNext();

  logger.info(
    `[SSR]: ${
      puppeteerRendererUrl ? `enabled (${puppeteerRendererUrl})` : 'disabled'
    }`,
  );
  return ssrRenderer;
};
