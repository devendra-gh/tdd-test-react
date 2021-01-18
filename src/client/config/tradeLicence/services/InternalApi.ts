import { IVariables } from '@tamm/app-composer';
import fetch from './fetch';

const sendErrorLogs = (data: { [name: string]: any }) =>
  fetch('/error-logging', 'POST', { data });

const uploadDedDoc = (file: string | Blob) => {
  const formData = new FormData();
  formData.append('file', file);
  return fetch('/api/upload/uploadDocuments', 'POST', formData, true);
};

const uploadDocumentToDed = (data: IVariables) => {
  return fetch('/api/proxy/uploadDocument', 'POST', data, false);
};

export default {
  sendErrorLogs,
  uploadDedDoc,
  uploadDocumentToDed,
};
