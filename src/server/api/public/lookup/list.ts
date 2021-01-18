import { Request, Response } from 'express';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import { fetchCountries } from 'server/services/lookupService';

/**
 * list of applications
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
export default async (req: Request, res: Response) => {
  try {
    const payload = await fetchCountries(req);

    return createSuccessResponse(res, 'List of countries', payload.data);
  } catch (error) {
    return createErrorResponse(req, res, 'Failed to fetch countries', error);
  }
};
