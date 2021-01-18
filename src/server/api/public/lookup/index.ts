import express from 'express';
import listCountries from './list';

const router = express.Router();

router.get('/countries', listCountries);

export default router;
