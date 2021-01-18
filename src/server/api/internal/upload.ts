/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';

import { IVariables } from '@tamm/app-composer';
import tammLogger from 'server/utils/logger';

const logger = tammLogger.getService();

const multer = require('multer');

export const DOCUMENT_PATH: IVariables = {
  documentUploaded: '/tmp/uploaded/',
  documentDownloaded: '/tmp/downloaded/',
  tradeCertificate: '/tmp/downloaded/',
  blpDocumentGenerated: '/tmp/blp-documents/generated/',
};

/**
 * make all temporary folders in /tmp that we are using for temporary purpose
 * @param {string} targetDir
 * @param {Object} isRelativeToScript
 * @returns {Object}
 */
const mkDirByPathSync = (
  targetDir: string,
  { isRelativeToScript = false } = {},
) => {
  const { sep } = path;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = isRelativeToScript ? __dirname : '.';

  return targetDir.split(sep).reduce((parentDir: string, childDir: string) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      /* istanbul ignore next */
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      /* istanbul ignore next */
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      /* istanbul ignore next */
      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
      /* istanbul ignore next */
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
};

Object.keys(DOCUMENT_PATH).map((item: string) => {
  mkDirByPathSync(DOCUMENT_PATH[item]);
  return item;
});

const storage = multer.diskStorage({
  /** save/store file destination function
   * @param {Object} req
   * @param {Object} file
   * @param {Object} cb
   * @returns {Object}
   */
  destination(req: IVariables, file: IVariables, cb: Function) {
    logger.info('======= file =======');
    cb(null, DOCUMENT_PATH.documentUploaded);
  },
  /** file name for upload
   * @param {Object} req
   * @param {Object} file
   * @param {Object} cb
   * @returns {Object}
   */
  filename(req: IVariables, file: IVariables, cb: Function) {
    const extArray = file.mimetype.split('/');

    const extension = extArray[extArray.length - 1];
    const allowedExtensions = ['JPG', 'PDF', 'JPEG'];

    if (
      !extension ||
      allowedExtensions.indexOf(extension.toUpperCase()) === -1
    ) {
      cb(new Error('Only pdfs/jpeg are allowed'));
    }
    let rendomName = `${Math.random()}${Math.floor(Date.now() / 1000)}`;
    rendomName = rendomName.replace('.', '');
    const { originalname } = file;
    req.uploaded = {};
    req.uploaded.originalName = originalname;
    req.uploaded.filePath = DOCUMENT_PATH.documentUploaded;
    req.uploaded.newFileName = `${rendomName}.${extension}`;

    // TODO change request user id to trade name document
    cb(null, req.uploaded.newFileName);
  },
});
const maxSize = 1 * 1024 * 5000;
export const upload = multer({ storage, limits: { fileSize: maxSize } });

/**
 * To save document to /tmp folder for temporary then we will upload it on s3 and delete from temporary folder
 * @param {string} documentType
 * @param {string} fileName
 * @param {Object} data
 * @returns {Object}
 */
export const saveDocument = async (
  documentType: string,
  fileName: string,
  data: IVariables,
) => {
  const dataFile = Buffer.from(data.toString(), 'base64'); // eslint-disable-line
  let filePath = `${DOCUMENT_PATH.documentDownloaded}`;
  if (documentType === 'MOA_DOCUMENT') {
    filePath = `${DOCUMENT_PATH.documentDownloaded}${fileName}`;
  }

  // @ts-ignore
  fs.writeFileSync(filePath, dataFile, err => {
    /* istanbul ignore next */
    if (err) {
      return err;
    }
    return filePath;
  });
};

/**
 * To delete document from temporary folder
 * @param {string} documentType
 * @param {string} fileName
 * @returns {Object}
 */
export const deleteDocument = async (
  documentType: string,
  fileName: string,
) => {
  const filePathStore: IVariables = {
    DOCUMENT_DOWNLOAD: `${DOCUMENT_PATH.documentDownloaded}${fileName}`,
    DOCUMENT_UPLOAD: `${DOCUMENT_PATH.documentUploaded}${fileName}`,
    BLP_DOCUMENT_GENERATED: `${DOCUMENT_PATH.blpDocumentGenerated}${fileName}`,
  };
  let filePath = `${DOCUMENT_PATH.documentDownloaded}`;
  if (documentType) {
    filePath = filePathStore[documentType];
  }
  fs.unlink(filePath, err => {
    /* istanbul ignore next */
    if (err) throw err;
    logger.info('temporary file deleted');
  });
};

/**
 * To save document to /tmp folder for temporary then we will upload it on s3 and delete from temporary folder
 * @param {string} documentType
 * @param {string} fileName
 * @param {Object} data
 * @returns {Object}
 */
export const saveFullDocument = async (
  documentType: string,
  fileName: string,
  data: IVariables,
) => {
  logger.info('=======filePathPre==========');
  let filePath = `${DOCUMENT_PATH.documentDownloaded}`;
  if (documentType === 'CERTIFICATE') {
    filePath = `${DOCUMENT_PATH.tradeCertificate}${fileName}`;
  }
  // @ts-ignore
  fs.writeFileSync(filePath, data, err => {
    /* istanbul ignore next */
    if (err) {
      return err;
    }
    return filePath;
  });
};

/**
 * To delete document from temporary folder
 * @param {string} documentType
 * @param {string} fileName
 * @returns {Object}
 */
export const deleteFullDocument = async (
  documentType: string,
  fileName: string,
) => {
  logger.info('====== DELETEFULLDOCUMENT =====');
  let filePath = `${DOCUMENT_PATH.documentDownloaded}`;
  if (documentType === 'CERTIFICATE') {
    filePath = `${DOCUMENT_PATH.documentDownloaded}${fileName}`;
  }
  fs.unlink(filePath, err => {
    /* istanbul ignore next */
    if (err) throw err;
    logger.info('temporary file deleted');
  });
};
