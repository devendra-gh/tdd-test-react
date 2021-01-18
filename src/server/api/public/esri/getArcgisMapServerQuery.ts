import * as express from 'express';
import { IVariables } from '@tamm/app-composer';
import {
  createErrorResponse,
  // createFailResponse,
  createSuccessResponse,
} from '@tamm/response';
import { getMapServerQuery } from 'server/services/esri';

const getArcgisMapServerQuery = async (
  req: express.Request,
  res: express.Response,
) => {
  console.info('---nik console--req.path--', req.url);
  const appendUrl = req.url.replace(/\/mapQuery/g, '');

  console.info('---nik console--appendUrl--', appendUrl);
  // return createSuccessResponse(res, 200, { data: '' });
  let response: IVariables = {};
  try {
    response = await getMapServerQuery(req, appendUrl);
    console.info('===========nik getMapServerQuery=============', response);
    // if (respo) {
    return createSuccessResponse(res, 200, response);
    // }

    // return createFailResponse(
    //   req,
    //   res,
    //   400,
    //   response.message || 'Failed to get data',
    //   response.data,
    //   {},
    // );
  } catch (err) {
    return createErrorResponse(req, res, 500, 'Failed to get token', err);
  }
};

export default getArcgisMapServerQuery;
