/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { IVariables } from '@tamm/app-composer';
import InternalApi from 'client/services/InternalApi';
import fetch from 'client/services/fetch';

import {
  steps,
  withoutNameSteps,
  moeSteps,
  moaWithoutNameSteps,
} from 'client/config/steps';
import documentCategory from 'client/config/utils/documentCategory';
import { isMoaRequired } from 'client/config/pages/EconomicLicence/functions/getLegalForms';

const checkLicenceOnly = (licenceType: string) => {
  if (
    licenceType === 'instant' ||
    licenceType === 'allInOne' ||
    licenceType === 'tajer'
  )
    return true;
  return false;
};

const checkMoeStep = (licenceType: string) => {
  if (licenceType === 'branchForeign' || licenceType === 'branchGCC')
    return true;
  return false;
};

/**
 * @param {IVariables} state
 * @returns {Object}
 */
const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
      legalForm: { legalForm },
    },
  } = state;
  if (checkLicenceOnly(licenceType)) {
    if (isMoaRequired(licenceType, legalForm)) {
      return moaWithoutNameSteps;
    }
    return withoutNameSteps;
  }
  if (checkMoeStep(licenceType)) return moeSteps;
  return steps;
};

const getCurrentStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkLicenceOnly(licenceType)) {
    return 'ded_approval';
  }
  return 'economic_licence';
};

const getStepStatus = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;

  if (checkLicenceOnly(licenceType)) {
    const status = {};
    return status;
  }
  if (checkMoeStep(licenceType)) {
    const status = {
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      economic_name: 'finish',
      initial_registration: 'finish',
      'economic_licence.submit_licence': 'finish',
    };
    return status;
  }

  const status = {
    'economic_name.ded_approval': 'finish',
    'economic_name.payment': 'finish',
    'economic_name.initial_approval': 'finish',
    'economic_name.download_certificate': 'finish',
    economic_name: 'finish',
  };
  return status;
};

interface DocumentObject {
  uploadedFileName: string;
  s3FilePath: string;
}

const onDocumentCategoryChange = (event: IVariables, props: IVariables) => {
  props.actions.licenceAdditionalDocumentCategory.update(event);
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
  const FileStatus = {
    Progress: 'progress',
    Success: 'success',
    Error: 'error',
  };
  const [uploadingFile] = files;
  const res = await InternalApi.uploadDedDoc(uploadingFile);
  if (res.status === 'success') {
    const { data } = res;
    const { uploadedFileDetails } = data;
    const documentCategory = getDocumentCategory().find(
      eachDocumentCategory =>
        eachDocumentCategory.id === props.selectedDocumentCategory,
    );
    const { label } = documentCategory || { id: '', label: '', labelAr: '' };
    const documentPayload = {
      documentName: uploadedFileDetails.uploadedFileName,
      documentCategory: label,
      capId: props.capId,
      documentPath: uploadedFileDetails.s3FilePath,
      trackingNumber: props.cnNumber,
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
        documentCategory,
      };
      clonnedUploadedAdditionaDocuments.push(updatedUploadedFileDetails);
      props.actions.licenceAdditionalDocuments.update(
        clonnedUploadedAdditionaDocuments,
      );
    }
  }
  props.actions.licenceAdditionalDocumentCategory.update(null);
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
    props.actions.licenceAdditionalDocuments.update(
      clonnedUploadedAdditionaDocuments,
    );
  }
};

const getDocs = (state: IVariables) => {
  return state.licenceAdditionalDocuments;
};

const getSelectedDocumentCategory = (state: IVariables) => {
  return state.licenceAdditionalDocumentCategory;
};

const getCapId = (state: IVariables) => {
  return state.licenceCapId;
};

export default {
  getStep,
  getCurrentStep,
  getStepStatus,
  onFileUpload,
  handleDocumentDelete,
  getDocs,
  getDocumentCategory,
  getSelectedDocumentCategory,
  onDocumentCategoryChange,
  getCapId,
};
