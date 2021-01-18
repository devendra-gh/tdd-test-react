import express from 'express';

import businessCertificate from '../ded/businessCertificate';
import businessLicenseProcedure from './businessLicenseProcedure';

const router = express.Router();

// Business Certificate API
router.use(businessCertificate);
// Business License Procedure API
router.use(businessLicenseProcedure);

export default router;
