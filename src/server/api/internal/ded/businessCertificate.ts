/* eslint-disable import/no-duplicates */
import * as express from 'express';
import { Request, Response } from 'express';
import { authorizedOnly } from '@tamm/app-security-middlewares/server';
import { businessCertificate } from 'server/services/ded/index';
import { businessCertificateGeneric } from 'server/services/adu';
import { businessCertificate as businessCertificateAdu } from 'server/services/adu/index';
import { IVariables } from '@tamm/app-composer';
import { createErrorResponse, createFailResponse } from '@tamm/response';

const router = express.Router({ mergeParams: true });

export const businessCertificateAPI = async (req: Request, res: Response) => {
  let response: IVariables = {};

  try {
    const { query } = req;
    const { capId, applicationNumber } = query;
    if (!capId || !applicationNumber) {
      return createFailResponse(
        req,
        res,
        400,
        'Unable to process download request',
        {},
        {},
      );
    }
    req.body.capID = capId;
    req.body.applicationNumber = applicationNumber;
    response = await businessCertificate(req);
    if (response.data && response.status === 'success') {
      const { data } = response;
      if (data.result && data.result.Certificate) {
        const {
          result: { Certificate },
        } = data;
        res.type('application/pdf');
        res.attachment('Certificate.pdf');
        const download = Buffer.from(Certificate, 'binary');
        return res.send(download);
      }
      return createFailResponse(
        req,
        res,
        400,
        'Failed to get business certificate from DED',
        {},
        {},
      );
    }
    return createFailResponse(
      req,
      res,
      400,
      'Failed to get business certificate from DED',
      {},
      {},
    );
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      500,
      'Failed to get business certificate',
      error,
    );
  }
};

export const businessCertificateFromAduAPI = async (
  req: Request,
  res: Response,
) => {
  let response: IVariables = {};

  let emiratesId: string = '';
  if (req.session && req.session.tammUserInfo && req.session.tammUserInfo.IDN) {
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
  req.query.emiratesId = emiratesId;

  try {
    response = await businessCertificateAdu(req);
    if (response.data && response.status === 'success') {
      const { data } = response;
      if (data.fileContent) {
        res.type('application/pdf');
        res.attachment('Certificate.pdf');
        const download = Buffer.from(data.fileContent, 'binary');
        return res.send(download);
      }
      return createFailResponse(
        req,
        res,
        400,
        'Failed to get business certificate from DED',
        {},
        {},
      );
    }
    return createFailResponse(
      req,
      res,
      400,
      'Failed to get business certificate from DED',
      {},
      {},
    );
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      500,
      'Failed to get business certificate',
      error,
    );
  }
};

export const businessCertificateGenericADUAPI = async (
  req: Request,
  res: Response,
) => {
  let response: IVariables = {};

  try {
    response = await businessCertificateGeneric(req);
    if (response.data && response.status === 'success') {
      const { data } = response;
      if (data.fileContent) {
        res.type(data.mimeType);
        res.attachment(data.fileName);
        const download = Buffer.from(data.fileContent, 'binary');
        return res.send(download);
      }
      return createFailResponse(
        req,
        res,
        400,
        'Failed to get business certificate from DED',
        {},
        {},
      );
    }
    return createFailResponse(
      req,
      res,
      400,
      'Failed to get business certificate from DED',
      {},
      {},
    );
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      500,
      'Failed to get business certificate',
      error,
    );
  }
};

export const businessCertificateGenericAuthADUAPI = async (
  req: Request,
  res: Response,
) => {
  let response: IVariables = {};

  let emiratesId: string = '';
  if (req.session && req.session.tammUserInfo && req.session.tammUserInfo.IDN) {
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
  req.query.emiratesId = emiratesId;

  try {
    response = await businessCertificateGeneric(req);
    if (response.data && response.status === 'success') {
      const { data } = response;
      if (data.fileContent) {
        res.type(data.mimeType);
        res.attachment(data.fileName);
        const download = Buffer.from(data.fileContent, 'binary');
        return res.send(download);
      }
      return createFailResponse(
        req,
        res,
        400,
        'Failed to get business certificate from DED',
        {},
        {},
      );
    }
    return createFailResponse(
      req,
      res,
      400,
      'Failed to get business certificate from DED',
      {},
      {},
    );
  } catch (error) {
    return createErrorResponse(
      req,
      res,
      500,
      'Failed to get business certificate',
      error,
    );
  }
};

router.get('/businessCertificate', authorizedOnly, businessCertificateAPI);
router.get(
  '/businessCertificateFromAdu',
  authorizedOnly,
  businessCertificateFromAduAPI,
);
router.get('/businessCertificateGenericADU', businessCertificateGenericADUAPI);
router.get(
  '/businessCertificateGenericAuthADU',
  authorizedOnly,
  businessCertificateGenericAuthADUAPI,
);

export default router;
