import express from 'express';

import cms from 'server/cms';

const router = express.Router();

router.post(
  '/getJourneyTranslations',
  cms.api.getJourneyTranslations.validate,
  cms.api.getJourneyTranslations.controller,
);
router.post(
  '/getJourneyTemplates',
  cms.api.getJourneyTemplates.validate,
  cms.api.getJourneyTemplates.controller,
);
router.get(
  '/updateJourneyTemplates',
  cms.api.updateJourneyTemplates.controller,
);
router.get(
  '/updateJourneyTranslations',
  cms.api.updateJourneyTranslations.controller,
);
router.get('/updateJourneyItems', cms.api.updateJourneyItems.controller);
router.get('/updateJourneyInfo', cms.api.updateJourneyInfo.controller);

export default router;
