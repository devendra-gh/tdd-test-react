import express from 'express';
import getBundlePrototype from './getBundlePrototype';
import getPrototype from './getPrototype';

const router = express.Router();

router.get('/bundle/:prototypeId', getBundlePrototype);
router.get('/:prototypeId', getPrototype);

export default router;
