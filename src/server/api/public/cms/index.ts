import express, { Request } from 'express';
import config from 'config';
import cmsProxy from 'server/api/public/cms/cmsProxy';

const router = express.Router();

router.post(
  '/search/search',
  cmsProxy(`${config.cms.host}${config.cms.search.globalSearchEndpoint}`),
);
router.post(
  '/search/filters',
  cmsProxy(`${config.cms.host}${config.cms.search.searchFiltersEndpoint}`),
);
router.get(
  '/search/autosuggest',
  cmsProxy(
    `${config.cms.host}${config.cms.search.searchAutoSuggest}`,
    true,
    true,
    [],
  ),
);

router.post(
  '/category/search',
  cmsProxy(`${config.cms.host}${config.cms.category.categorySearchEndpoint}`),
);
router.post(
  '/category/filters',
  cmsProxy(`${config.cms.host}${config.cms.search.searchFiltersEndpoint}`),
);
router.post(
  '/category/list',
  cmsProxy(`${config.cms.host}${config.cms.category.categoryListEndpoint}`),
);
router.post(
  '/category/info',
  cmsProxy(`${config.cms.host}${config.cms.category.categoryInfoEndpoint}`),
);
router.post(
  '/category/autosuggest',
  cmsProxy(
    `${config.cms.host}${config.cms.category.categoryAutoSuggestEndpoint}`,
  ),
);
router.get(
  '/category/autosuggest',
  cmsProxy(
    `${config.cms.host}${config.cms.category.categoryAutoSuggestEndpoint}`,
    true,
    true,
    [],
    (req: Request) => ({
      scLang: req.query.lang === 'ar' ? 'ar-AE' : 'en',
      pageSize: req.query.count,
      query: req.query.term,
    }),
    (data: any) => data.map((i: any) => i.title),
  ),
);

export default router;
