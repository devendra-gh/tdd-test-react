import { IVariables } from '@tamm/app-composer';
import InternalApi from 'client/services/InternalApi';
import fetch from 'client/services/fetch';
import documentCategory from 'client/config/utils/documentCategory';

interface DocumentObject {
  uploadedFileName: string;
  s3FilePath: string;
}

const onDocumentCategoryChange = (event: IVariables, props: IVariables) => {
  props.actions.additionalDocumentCategory.update(event);
};
const getDocumentCategory = () => {
  const modifiedDocumentCategory = documentCategory.map(
    (eachDocumentCategory, index) => ({
      id: `document-category-${index.toString()}`,
      label: eachDocumentCategory.titleEn,
      labelAr: eachDocumentCategory.titleAr,
    }),
  );
  return modifiedDocumentCategory;
};

const onFileUpload = async (files: (string | Blob)[], props: IVariables) => {
  props.actions.disableDocumentCategorySelection.update(true);
  const [uploadingFile] = files;
  const res = await InternalApi.uploadDedDoc(uploadingFile);
  if (res.status === 'success') {
    const { data } = res;
    const { uploadedFileDetails } = data;

    const documentCategoryFileUpload = getDocumentCategory().find(
      eachDocumentCategory =>
        eachDocumentCategory.id === props.selectedDocumentCategory,
    );
    const { label } = documentCategoryFileUpload || {
      id: '',
      label: '',
      labelAr: '',
    };
    const documentPayload = {
      documentName: uploadedFileDetails.uploadedFileName,
      documentCategory: label,
      capId: props.capId,
      documentPath: uploadedFileDetails.s3FilePath,
      trackingNumber: props.tnNumber,
    };
    const dedUploadResponse = await fetch(
      '/pub/proxy/uploadDocument',
      'POST',
      documentPayload,
    );

    if (
      dedUploadResponse.success &&
      dedUploadResponse.data &&
      dedUploadResponse.data.status === '200'
    ) {
      const clonnedUploadedFileDetails = props.uploadDocs.map(
        (eachDocument: DocumentObject) => ({ ...eachDocument }),
      );
      const clonnedUploadedAdditionaDocuments = clonnedUploadedFileDetails.slice();
      const updatedUploadedFileDetails = {
        ...uploadedFileDetails,
        documentCategoryFileUpload,
      };
      clonnedUploadedAdditionaDocuments.push(updatedUploadedFileDetails);
      props.actions.additionalDocuments.update(
        clonnedUploadedAdditionaDocuments,
      );
    }
  }
  props.actions.additionalDocumentCategory.update(null);
  props.actions.disableDocumentCategorySelection.update(false);
};

const handleDocumentDelete = (filePath: string, props: IVariables) => {
  const clonnedUploadedFileDetails = props.uploadDocs.map(
    (eachDocument: DocumentObject) => ({ ...eachDocument }),
  );
  const clonnedUploadedAdditionaDocuments = clonnedUploadedFileDetails.slice();
  const selectedIndex = clonnedUploadedAdditionaDocuments.findIndex(
    (eachDocument: DocumentObject) => eachDocument.s3FilePath === filePath,
  );
  if (selectedIndex !== -1) {
    clonnedUploadedAdditionaDocuments.splice(selectedIndex, 1);
    props.actions.additionalDocuments.update(clonnedUploadedAdditionaDocuments);
  }
};

const onRemoveFile = (file: IVariables, props: IVariables) => {
  props.actions.uploads.reset();
};

const getDocs = (state: IVariables) => {
  return state.additionalDocuments;
};

const getSelectedDocumentCategory = (state: IVariables) => {
  return state.additionalDocumentCategory;
};

const getCapId = (state: IVariables) => {
  return state.economicNameCapId;
};

export default {
  onFileUpload,
  onRemoveFile,
  handleDocumentDelete,
  getDocs,
  getDocumentCategory,
  onDocumentCategoryChange,
  getSelectedDocumentCategory,
  getCapId,
};
