import { Request, Response } from 'express';
import { AdFeedback } from '@tamm/adfeedback';

import config from 'config';
import ajaxClient from 'server/services/ajaxClient';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';

export const adFeedback = new AdFeedback({
  host: config.adFeedbackUrl,
  request: ajaxClient,
  headers: {
    [config.gateway.header]: config.gateway.key,
  },
});

export async function createFeedback(req: Request, res: Response) {
  try {
    const { body } = req;
    const payload = await adFeedback.createAdFeedback(
      {
        surveyType: body.surveyType,
        smileyType: body.smileyType,
        comments: body.comments,
        ratings: body.ratings,
        logUuid: req.logUuid,
        pageUrl: body.pageUrl,
        surveyDateTime: new Date(),
      },
      req,
    );
    createSuccessResponse(res, 'success', payload.data);
  } catch (error) {
    createErrorResponse(req, res, 'Failed to create feedback', error.message);
  }
}
