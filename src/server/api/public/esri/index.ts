import express from 'express';
import getToken from './getToken';
import getArcgisMapServerQuery from './getArcgisMapServerQuery';

const router = express.Router();

router.get('/getToken', getToken);
router.get('/mapQuery/**', getArcgisMapServerQuery);

export default router;
