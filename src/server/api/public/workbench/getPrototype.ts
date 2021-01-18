import { Request, Response } from 'express';
import {
  createErrorResponse,
  createSuccessResponse,
} from 'server/utils/response-utils';
import documentStore from 'server/services/documentStore';

const getPrototype = async (req: Request, res: Response) => {
  try {
    const journeyConfig = await documentStore.getFile(
      `config.json__${req.params.prototypeId}`,
      req,
    );

    return createSuccessResponse(
      res,
      'Journey config successfully loaded',
      journeyConfig,
    );
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      'Failed to load journey config',
      error.message,
    );
  }
};

export default getPrototype;
