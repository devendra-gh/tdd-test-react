import express from 'express';
import config from 'config';
import gspProxy from 'server/api/public/gsp/gspProxy';

const router = express.Router();

router.post(
  '/service/getKioskLocations',
  gspProxy(`${config.gsp.host}${config.gsp.servicesAll.kioskLocations}`),
);
router.post(
  '/service/getServiceCenters',
  gspProxy(`${config.gsp.host}${config.gsp.servicesAll.serviceCenters}`),
);

export default router;
