import { IVariables } from "@tamm/app-composer";
import InternalApi from "client/services/InternalApi";
import fetch from "client/services/fetch";
import { steps, moeSteps } from "client/config/steps";
import documentCategory from "client/config/utils/documentCategory";

interface DocumentObject {
  uploadedFileName: string;
  s3FilePath: string;
}

const onDocumentCategoryChange = (event: IVariables, props: IVariables) => {
  props.actions.additionalDocumentCategory.update(event);
};

const onFileUpload = async (files: Array<string | Blob>, props: IVariables) => {
  props.actions.disableDocumentCategorySelection.update(true);
  const FileStatus = {
    Progress: "progress",
    Success: "success",
    Error: "error"
  };
  const [uploadingFile] = files;
  const res = await InternalApi.uploadDedDoc(uploadingFile);
  if (res.status === "success") {
    const { data } = res;
    const { uploadedFileDetails } = data;
    const documentCategory = getDocumentCategory().find(
      eachDocumentCategory =>
        eachDocumentCategory.id === props.selectedDocumentCategory
    );
    const { label } = documentCategory || { id: "", label: "", labelAr: "" };
    const documentPayload = {
      documentName: uploadedFileDetails.uploadedFileName,
      documentCategory: label,
      capId: props.capId,
      documentPath: uploadedFileDetails.s3FilePath,
      trackingNumber: props.tnNumber
    };
    const dedUploadResponse = await fetch(
      "/pub/proxy/uploadDocument",
      "POST",
      documentPayload
    );

    if (dedUploadResponse.success && dedUploadResponse.data && dedUploadResponse.data.status === "200") {
      const clonnedUploadedFileDetails = props.uploadDocs.map(
        (eachDocument: DocumentObject) => ({ ...eachDocument })
      );
      const clonnedUploadedAdditionaDocuments = clonnedUploadedFileDetails.slice();
      const updatedUploadedFileDetails = {
        ...uploadedFileDetails,
        documentCategory
      };
      clonnedUploadedAdditionaDocuments.push(updatedUploadedFileDetails);
      props.actions.additionalDocuments.update(
        clonnedUploadedAdditionaDocuments
      );
    }
  }
  props.actions.additionalDocumentCategory.update(null);
  props.actions.disableDocumentCategorySelection.update(false);
};

const handleDocumentDelete = (filePath: string, props: IVariables) => {
  const clonnedUploadedFileDetails = props.uploadDocs.map(
    (eachDocument: DocumentObject) => ({ ...eachDocument })
  );
  const clonnedUploadedAdditionaDocuments = clonnedUploadedFileDetails.slice();
  const selectedIndex = clonnedUploadedAdditionaDocuments.findIndex(
    (eachDocument: DocumentObject) => eachDocument.s3FilePath === filePath
  );
  if (selectedIndex != -1) {
    clonnedUploadedAdditionaDocuments.splice(selectedIndex, 1);
    props.actions.additionalDocuments.update(clonnedUploadedAdditionaDocuments);
  }
};

const onRemoveFile = (file: IVariables, props: IVariables) => {
  props.actions.uploads.reset();
};

const getDocumentCategory = () => {
  const modifiedDocumentCategory = documentCategory.map(
    (eachDocumentCategory, index) => ({
      id: "document-category-" + index.toString(),
      label: eachDocumentCategory.titleEn,
      labelAr: eachDocumentCategory.titleAr
    })
  );
  return modifiedDocumentCategory;
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

const checkMoeStep = (licenceType: string) => {
  if (licenceType === "branchForeign" || licenceType === "branchGCC")
    return true;
  else return false;
};

const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType }
    }
  } = state;
  if (checkMoeStep(licenceType)) return moeSteps;
  else return steps;
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
  getStep
};
