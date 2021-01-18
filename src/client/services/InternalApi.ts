import { IVariables } from '@tamm/app-composer';
import fetch from './fetch';

const sendErrorLogs = (data: { [name: string]: any }) =>
  fetch('/error-logging', 'POST', { data });

const getServiceById = (id: string) => {
  return fetch(`/pub/service/${id}`);
};

const uploadDedDoc = (file: string | Blob) => {
  const formData = new FormData();
  formData.append('file', file);
  return fetch('/api/upload/uploadDocuments', 'POST', formData, true);
};

const uploadDocumentToDed = (data: IVariables) => {
  return fetch('/api/proxy/uploadDocument', 'POST', data, false);
};

const getDownloadLicenseProcedureDoc = (data: IVariables) => {
  return fetch(
    '/api/download/businessLicenseProcedure?mobileDownloadable=pdf&mobileFileName=Certificate',
    'POST',
    data,
  );
};
const getServiceByPath = (path: string) => {
  return fetch(`/pub/service/gsp-path/${path}`);
};

export default {
  sendErrorLogs,
  uploadDedDoc,
  getServiceById,
  getDownloadLicenseProcedureDoc,
  uploadDocumentToDed,
  getServiceByPath,
};
