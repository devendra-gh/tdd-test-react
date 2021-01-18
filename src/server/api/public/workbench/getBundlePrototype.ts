import { Request, Response } from 'express';
import { createErrorResponse } from 'server/utils/response-utils';
import documentStore from 'server/services/documentStore';

const getBundlePrototype = async (req: Request, res: Response) => {
  try {
    const journeyConfig = await documentStore.getFile(
      `bundle.js__${req.params.prototypeId}`,
      req,
    );
    res.setHeader('content-type', 'text/javascript');
    return res.send(journeyConfig);
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      'Failed to load journey config',
      error.message,
    );
  }
};

export default getBundlePrototype;
