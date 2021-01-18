/* eslint-disable import/no-duplicates */
import * as express from 'express';

import { authorizedOnly } from '@tamm/app-security-middlewares/server';

import { Request, Response } from 'express';
import { getApplications } from 'server/services/adu/index';
import { IVariables } from '@tamm/app-composer';
import {
  createErrorResponse,
  createFailResponse,
  createSuccessResponse,
} from '@tamm/response';

const router = express.Router({ mergeParams: true });

export const getApplicationsAPI = async (req: Request, res: Response) => {
  let response: IVariables = {};

  try {
    let emiratesId: string = '';
    if (
      req.session &&
      req.session.tammUserInfo &&
      req.session.tammUserInfo.IDN
    ) {
      emiratesId = req.session.tammUserInfo.IDN;
    }
    if (!emiratesId) {
      return createFailResponse(
        req,
        res,
        400,
        'You are not authorized to download certificate.',
        {},
        {},
      );
    }

    req.body.sponsorEmiratesId =
      req.query.type === 'tradeLicence'
        ? `tradeLicence-${emiratesId}`
        : emiratesId;
    response = await getApplications(req);
    let data: IVariables[] = [];
    if (response.data && response.data.length) {
      data = response.data;
    }
    return createSuccessResponse(res, 200, data);
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      500,
      'Failed to get applications',
      error,
    );
  }
};

router.get('/getApplications', authorizedOnly, getApplicationsAPI);

export default router;
