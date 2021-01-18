import express from 'express';
import { createFeedback } from './feedback';
import { createBugReport } from './bugReport';

const router = express.Router();

router.post('/', (req, res) => {
  res.json({});
});

router.post('/feedbacks', createFeedback);
router.post('/bugReport', createBugReport);

export default router;
