import { Request, Response } from 'express';
import authConfig from 'config/authConfig';
import request from 'server/services/ajaxClient';
import {
  createErrorResponse,
  createSuccessResponse,
} from 'server/utils/response-utils';

const cmsProxy = (
  url: string,
  includeQueryParams = false,
  plainResponse = false,
  defaultValue = {},
  customBody?: Function,
  customResponseMapper?: Function,
) => async (req: Request, res: Response) => {
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
          ...(includeQueryParams ? req.query : {}),
          ...(customBody ? customBody(req) : {}),
        },
      },
      req,
    );

    const data = response?.data?.data || defaultValue;
    const payload = customResponseMapper ? customResponseMapper(data) : data;

    return plainResponse
      ? res.json(payload)
      : createSuccessResponse(res, 'success', payload);
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      'Failed to load cms data',
      error.message,
    );
  }
};

export default cmsProxy;
