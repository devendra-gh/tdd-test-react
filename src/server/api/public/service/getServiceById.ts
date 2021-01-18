import { Request, Response } from 'express';
import fs from 'fs';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';

const getServiceById = (req: Request, res: Response) => {
  const { id } = req.params;

  fs.readFile(`public/gsp/${id}.json`, 'utf8', (fileReadErr, service) => {
    let message;

    if (!service || service === 'undefined' || fileReadErr) {
      message = 'GSP Services not found';

      return createErrorResponse(
        req,
        res,
        message,
        fileReadErr ? fileReadErr.message : 'No errors while reading cache',
        404,
      );
    }

    return createSuccessResponse(res, 'Success', JSON.parse(service));
  });
};

export default getServiceById;
