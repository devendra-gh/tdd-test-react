import { IVariables } from '@tamm/app-composer';
import config from '../../config';
import tammLogger from './logger';
import { DOCUMENT_PATH } from '../api/internal/upload';

const JSZip = require('jszip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const ImageModule = require('docxtemplater-image-module');

const logger = tammLogger.getService();

/**
 * blp generate function
 * @param {Object} data
 * @param {Object} fileName
 * @returns {Object}
 */
const blpGenerate = async (data: IVariables, fileName: string) => {
  const opts: IVariables = {};
  opts.centered = false;
  opts.getImage = (tagValue: IVariables, tagName: IVariables) =>
    fs.readFileSync(tagValue);

  opts.getSize = (
    img: IVariables,
    tagValue: IVariables,
    tagName: IVariables,
  ) => [150, 100];

  const imageModule = new ImageModule(opts);
  // Load the docx file as a binary
  let content = null;
  const readPath = config.api.fileReadFullPath
    ? `./src/server/api/internal/docxTemplates`
    : './docxTemplates';
  logger.info(`======== READ Path========== ${readPath}`);

  content = fs.readFileSync(`${readPath}/${fileName}.docx`, 'binary');

  logger.info('=============== CONTENT ================ ', !!content);

  const zip = new JSZip(content);

  const doc = new Docxtemplater();
  doc.loadZip(zip);

  doc.attachModule(imageModule);
  doc.setData(data);

  try {
    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    doc.render();
  } catch (error) {
    logger.info('========== DOC RENDER =================', error);
    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    throw error;
  }

  const buf = doc.getZip().generate({ type: 'nodebuffer' });
  // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
  fs.writeFileSync(
    `${DOCUMENT_PATH.blpDocumentGenerated}${fileName}.docx`,
    buf,
  );
  const response = {
    success: true,
    blpDocumentPath: `${DOCUMENT_PATH.blpDocumentGenerated}${fileName}.docx`,
  };
  return response;
};

export default blpGenerate;
