import { Request, Response } from 'express';

interface Params {
  response: Response;
  code: number;
  success: boolean;
  message: string;
  data?: any;
  error?: any;
}

/**
 * @param {Object} params
 * @returns {Response}
 */
const createResponse = (params: Params) => {
  const { response, code, success, message, data = {}, error = {} } = params;

  return response.status(code).json({
    success,
    message,
    data,
    error,
  });
};

/**
 * @param {Response} response
 * @param {string} message
 * @param {*} data
 * @param {string|number} code
 * @returns {Response}
 */
const createSuccessResponse = (
  response: Response,
  message: string = 'Success',
  data: any = {},
  code: number = 200,
) =>
  createResponse({
    response,
    code,
    success: true,
    message,
    data,
  });

/**
 * @param {Request} request
 * @param {Response} response
 * @param {string} message
 * @param {*} error
 * @param {string|number} code
 * @returns {Response}
 */
const createErrorResponse = (
  request: Request,
  response: Response,
  message: string = 'Server Internal Error',
  error: any = {},
  code: number = 500,
) => {
  request.log.error(message, { err: error });

  let msg: string = message;

  if (process.env.NODE_ENV !== 'development') msg = 'Server Internal Error';

  return createResponse({
    response,
    code,
    success: false,
    message: msg,
    error: {},
  });
};

/**
 * @todo: refactore response utils for similar signatures
 * @param {Request} request
 * @param {Response} response
 * @param {*} error
 * @param {string} message
 * @param {string|number} code
 * @returns {Response}
 */
const createInvalidParameterResponse = (
  request: Request,
  response: Response,
  error: any = {},
  message: string = 'Validation Error',
  code: number = 400,
) => {
  request.log.error(message, { err: error });

  return createResponse({
    response,
    code,
    success: false,
    message,
    error: {},
  });
};

/**
 * @param {Request} request
 * @param {Response} response
 * @param {*} error
 * @param {string} message
 * @param {string|number} code
 * @returns {Response}
 */
const createAccessDeniedResponse = (
  request: Request,
  response: Response,
  error: any = {},
  message: string = 'Sorry you do not have permission anymore',
  code: number = 403,
) => {
  request.log.error(message, { err: error });

  return createResponse({
    response,
    code,
    success: false,
    message,
    error: {},
  });
};

export {
  createResponse,
  createInvalidParameterResponse,
  createSuccessResponse,
  createErrorResponse,
  createAccessDeniedResponse,
};
