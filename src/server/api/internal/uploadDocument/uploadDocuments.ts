/* eslint-disable no-console */
import express from 'express';
import FormData from 'form-data';
// @ts-ignore
// import multer from "multer";
import {
  upload,
  // saveDocument,
  DOCUMENT_PATH,
  deleteDocument,
} from 'server/api/internal/upload';
import S3 from 'server/services/s3';
import { createSuccessResponse, createErrorResponse } from '@tamm/response';
import { IVariables } from '@tamm/app-composer';
import config from '../../../../config';

/* istanbul ignore file */

const fs = require('fs');

const readChunk = require('read-chunk');
const fileType = require('file-type');
// const upload = multer({ dest: "/tmp/" });
const router = express.Router({ mergeParams: true });

/**
 * To upload DED document(PDF) that user has uploaded from frontside and save on decument store and upload to DED server
 * @param {Object} req
 * @param {Object} res
 * @returns {Object}
 */
// eslint-disable-next-line complexity
export const uploadDocuments = async (req: IVariables, res: IVariables) => {
  try {
    const { id: userId } = req.session;
    const savePath = `${req.uploaded.filePath}${req.uploaded.newFileName}`;
    const fileName = req.uploaded.newFileName;
    const uploadedFileName = req.uploaded.originalName || 'default_name.pdf';
    const allowedExtensions = ['JPG', 'JPEG', 'PDF'];
    const allowedMimes = ['IMAGE/JPG', 'IMAGE/JPEG', 'APPLICATION/PDF'];
    console.log('======= uploadedFile name =======', uploadedFileName);
    if (!req.file) {
      // @ts-ignore
      return createErrorResponse(req, res, 500, 'File not found', {});
    }

    const buffer = readChunk.sync(savePath, 0, fileType.minimumBytes);

    const contentType = fileType(buffer);
    console.log('type ====>', contentType);
    // condition for content must be PDF only else delete local file and return error
    if (
      !(
        contentType &&
        contentType.mime &&
        contentType.ext &&
        allowedExtensions.indexOf(contentType.ext.toUpperCase()) !== -1 &&
        allowedMimes.indexOf(contentType.mime.toUpperCase()) !== -1
      )
    ) {
      deleteDocument('DOCUMENT_UPLOAD', fileName);
      // @ts-ignore
      return createErrorResponse(req, res, 'Only upload PDF/JPG files', {});
    }

    const s3AppId = config.api.apiJourneyId;
    const s3userId = userId;
    const s3Stage = DOCUMENT_PATH.documentUploaded;

    console.log('================= s3 stage ============', s3Stage);

    const stream = fs.createReadStream(savePath);
    const fileData = new FormData();
    fileData.append('appId', s3AppId);
    fileData.append('userId', s3userId);
    fileData.append('stage', s3Stage);
    fileData.append('file', stream);

    let s3FilePath = `${s3AppId}**${s3userId}**${s3Stage}`;
    // @ts-ignore
    const response2 = await S3.uploadDocument(fileData, req);
    if (response2 && response2.data && response2.data.status === 'success') {
      s3FilePath = `${s3FilePath}**${response2.data.data.fileName}`;
      console.log('===== S3FilePath =====', s3FilePath);

      deleteDocument('DOCUMENT_UPLOAD', fileName);
    } else {
      return createErrorResponse(
        // @ts-ignore
        req,
        res,
        500,
        'Error occured while uploading document to S3',
        {},
      );
    }

    const { fileName: nameOfFile, message } = response2.data.data;
    return createSuccessResponse(
      // @ts-ignore
      res,
      200,
      {
        success: true,
        uploadedFileDetails: {
          s3FilePath,
          nameOfFile,
          message,
          uploadedFileName,
        },
      },
    );
  } catch (error) {
    console.log('======= Catch ======', error);

    return createErrorResponse(
      // @ts-ignore
      req,
      res,
      500,
      'Error occured while uploading file',
      error,
    );
  }
};

router.post('/uploadDocuments', upload.single('file'), uploadDocuments);

export default router;
