import express from 'express';
import getServiceById from './getServiceById';
import getServiceByPath from './getServiceByPath';

const router = express.Router();

router.get('/:id', getServiceById);
router.get('/gsp-path/:path', getServiceByPath);

export default router;
