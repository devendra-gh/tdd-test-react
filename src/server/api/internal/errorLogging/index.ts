import express, { Request, Response } from 'express';

import { createSuccessResponse } from 'server/utils/response-utils';

const router = express.Router();

/**
 * Main gss proxy handler
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise}
 */
export function errorLoggingHandler(req: Request, res: Response) {
  const { data } = req.body;

  req.log.error('Client error logging', { data });

  createSuccessResponse(res, 'Error was logged');
}

router.post('/', errorLoggingHandler);

export default router;
