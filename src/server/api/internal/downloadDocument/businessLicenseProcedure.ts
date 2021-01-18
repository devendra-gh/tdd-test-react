import express, { Request, Response } from 'express';
import { convertToPdf } from 'server/services/download';
import {
  createErrorResponse,
  createFailResponse,
  createSuccessResponse,
} from '@tamm/response';
import tammLogger from 'server/utils/logger';
import blpGenerate from 'server/utils/blpGenerate';
import FormData from 'form-data';
import { DOCUMENT_PATH, deleteDocument } from '../upload';

const router = express.Router({ mergeParams: true });
const logger = tammLogger.getService();
const fs = require('fs');

export const businessLicenseProcedureAPI = async (
  req: Request,
  res: Response,
) => {
  try {
    let resp: any = {
      success: false,
    };
    const reqBody = { ...req.body };
    const { locale, payload } = reqBody;
    const fileName = `blp_${locale === 'en' ? 'en' : 'ar'}`;
    resp = await blpGenerate(payload, fileName);
    logger.info('===========BLP docx generated=========', resp);
    const pdfFileName = `${fileName}.pdf`;
    const docFileName = `${fileName}.docx`;
    /* convert to PDF */
    const docFullPath = `${DOCUMENT_PATH.blpDocumentGenerated}${fileName}.docx`;
    const stream = fs.createReadStream(docFullPath);
    const fileData = new FormData();
    fileData.append('file', stream);
    const response = await convertToPdf(req, fileData);
    logger.info('======PDF CONVERT RESPONSE=========', response.success);

    if (response && response.success) {
      resp.blpDocumentPath = `${DOCUMENT_PATH.blpDocumentGenerated}${pdfFileName}`;

      res.type('application/pdf');
      res.attachment(pdfFileName);
      const download = Buffer.from(response.data, 'binary');
      deleteDocument('BLP_DOCUMENT_GENERATED', docFileName);
      return createSuccessResponse(res, 200, download);
    }
    deleteDocument('BLP_DOCUMENT_GENERATED', docFileName);
    return createFailResponse(
      req,
      res,
      500,
      'Failed to download business procedure',
      {},
    );
  } catch (error) {
    logger.info(
      `=================== BLP generate error=============${error}`,
      error,
    );
    return createErrorResponse(
      req,
      res,
      400,
      'Failed to download business procedure',
      {},
    );
  }
};

router.post('/businessLicenseProcedure', businessLicenseProcedureAPI);

export default router;
