import * as express from 'express';
import { IVariables } from '@tamm/app-composer';
import moment from 'moment';
import {
  createErrorResponse,
  createFailResponse,
  createSuccessResponse,
} from '@tamm/response';
import { getTokenHandler } from 'server/services/esri';

const TOKEN_CACHE_TIME_MINUTES = 15;
const TOKEN_CACHE = {
  token: false,
  expires: moment(),
};

const getToken = async (req: express.Request, res: express.Response) => {
  // For local development, to speed things up, uncomment and supply a token.
  // return createSuccessResponse(
  //   res,
  //   200,
  //   'kO8GQxKUEXBMVcZ7HStvKzpnSobBSBbIMldUL3rMaIksPV5FMxS9HW6ndnRzvCcSWcT8MyKbqW74jgxmHG-O4Sc6JpHzcq5TYsjOspXvDxgssXNgQOV1MARu_mNDrIZt1zS9zna05s8oUfhx3PuAHg..',
  // );

  // Try the cached token
  if (TOKEN_CACHE.token && moment().isBefore(TOKEN_CACHE.expires)) {
    return createSuccessResponse(res, 200, TOKEN_CACHE.token);
  }

  let response: IVariables = {};
  try {
    response = await getTokenHandler(req);
    // console.log('===========nik getTokenHandler=============', response);
    if (response.success && response.data) {
      const token = response.data.data;
      // Cache the token
      TOKEN_CACHE.token = token;
      TOKEN_CACHE.expires = moment().add(TOKEN_CACHE_TIME_MINUTES, 'm');

      return createSuccessResponse(res, 200, response.data);
    }

    return createFailResponse(
      req,
      res,
      400,
      response.message || 'Failed to get token',
      response.data,
      {},
    );
  } catch (err) {
    return createErrorResponse(req, res, 500, 'Failed to get token', err);
  }
};

export default getToken;
