import { Request, Response } from 'express';
import authConfig from 'config/authConfig';
import request from 'server/services/ajaxClient';
import {
  createErrorResponse,
  createSuccessResponse,
} from 'server/utils/response-utils';

import { get } from 'lodash';

const gspProxy = (url: string) => async (req: Request, res: Response) => {
  try {
    const additionalParams = {
      scDevice: 'json',
    };

    const response = await request(
      {
        url,
        method: 'POST',
        headers: {
          [authConfig.apiGateway.header]: authConfig.apiGateway.key,
        },
        data: {
          ...additionalParams,
          ...req.body,
        },
      },
      req,
    );

    const data = get(response, 'data', {});
    return createSuccessResponse(res, 'success', data.data);
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      'Failed to load gsp data',
      error.message,
    );
  }
};

export default gspProxy;
