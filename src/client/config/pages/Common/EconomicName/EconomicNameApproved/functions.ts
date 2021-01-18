import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { steps, moeSteps } from 'client/config/steps';
import { get } from 'lodash';
import fetch from 'client/services/fetch';
import InternalApi from 'client/services/InternalApi';
import baseUrl from 'client/utils/baseUrl';

const onClick = async (props: IVariables) => {
  const { inputFieldValue } = props;
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onSubmitLicence',
    variables: {
      // TODO pass the document here please
      tawtheeq: inputFieldValue,
      documentsLicence: props.files ? JSON.stringify(props.files) : '',
    },
  });
};

const checkMoeStep = (licenceType: string) => {
  if (licenceType === 'branchForeign' || licenceType === 'branchGCC')
    return true;
  return false;
};

const getStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkMoeStep(licenceType)) return moeSteps;
  return steps;
};

const getStepStatus = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;

  if (checkMoeStep(licenceType)) {
    const status = {
      'economic_name.ded_approval': 'finish',
      'economic_name.payment': 'finish',
      'economic_name.initial_approval': 'finish',
      economic_name: 'finish',
      initial_registration: 'finish',
    };
    return status;
  }
  const status = {
    'economic_name.ded_approval': 'finish',
    'economic_name.payment': 'finish',
    'economic_name.initial_approval': 'finish',
  };
  return status;
};

const getCurrentStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkMoeStep(licenceType)) return 'economic_licence';
  return 'economic_name';
};

const getCurrentSubStep = (state: IVariables) => {
  const {
    economicLicense: {
      licenceType: { licenceType },
    },
  } = state;
  if (checkMoeStep(licenceType)) return 'submit_licence';
  return 'download_certificate';
};

const fetchAttachments = async (activityId: string, legalType: string) => {
  const payload = await fetch('/pub/proxy/getRequirements', 'POST', {
    activityId,
    legalType,
    transactionType: 'License Issue',
    type: 'Document',
    location: 'ABU DHABI',
  });

  const data = get(payload, 'data.result.TransactionRequirementData', []);

  return data;
};

const uploadFile = (state: IVariables) => {
  return (props: IVariables) => {
    return (fieldName: string) => {
      return async (files: IVariables) => {
        try {
          const promise = files.map(async (uploadedFile: any) => {
            const res = await InternalApi.uploadDedDoc(uploadedFile);

            const payload = {
              fieldName,
              id: res.data.uploadedFileDetails.nameOfFile,
              lastModifiedDate: uploadedFile.lastModifiedDate,
              name: uploadedFile.name,
              documentName: uploadedFile.name,
              documentPath: res.data.uploadedFileDetails.s3FilePath,
              documentCategory: 'Document Category',
              type: uploadedFile.type,
              lastModified: uploadedFile.lastModified,
              size: uploadedFile.size,
            };
            return payload;
          });

          const documents = await Promise.all(promise);
          props.actions.economicLicenceDocuments.update([
            ...state.economicLicenceDocuments,
            ...documents,
          ]);
        } catch (err) {
          // eslint-disable-next-line no-console
          // console.log(err);
        }
      };
    };
  };
};

const removeFile = (state: IVariables) => {
  return (props: IVariables) => {
    return (fieldName: string) => {
      return () => {
        const documents = state.economicLicenceDocuments.map(
          (eachDocument: IVariables) => ({ ...eachDocument }),
        );
        const filteredDocs = documents.filter(
          (i: IVariables) => i.fieldName !== fieldName,
        );

        props.actions.economicLicenceDocuments.update(filteredDocs);
      };
    };
  };
};

const getDocuments = (state: IVariables) => {
  return state.economicLicenceDocuments;
};
const getActivites = (state: IVariables) => {
  return state.economicLicenceActivities;
};

const getConditions = (state: IVariables) => {
  const mappedConditions = state.economicLicenceConditions.map(
    (eachLicenceCondtions: IVariables) => ({
      labelEn: eachLicenceCondtions.RequirementDescEn,
      labelAr: eachLicenceCondtions.RequirementDescAr,
    }),
  );
  return mappedConditions;
};

const formatActivities = (activityData: IVariables) => {
  const activityCodeList = activityData.map((eachActivity: IVariables) => {
    const splittedActivityCode = eachActivity.split('(');
    const activityCode =
      splittedActivityCode.length && splittedActivityCode[1]
        ? splittedActivityCode[1].replace(/[)]/g, '')
        : ' ';
    return activityCode;
  });
  const mappedActivityCode: IVariables = activityCodeList.map(
    (eachActivityCode: string) => ({ activityCode: eachActivityCode }),
  );
  return mappedActivityCode;
};

const fetchConditions = async (activityData: IVariables, legalType: string) => {
  const activityId = activityData
    .map((eachActivityData: IVariables) => eachActivityData.activityCode)
    .join(',');
  const payload = await fetch('/pub/proxy/getRequirements', 'POST', {
    activityId,
    legalType,
    transactionType: 'License Issue',
    type: 'Condition',
    location: 'ABU DHABI',
  });

  const data = get(payload, 'data.result.TransactionRequirementData', []);

  return data;
};

const documentDownload = (props: IVariables) => {
  window.open(
    `${baseUrl}/api/download/businessCertificateFromAdu?instanceId=${props.instanceId ||
      ''}&type=economicLicenceTn`,
    '_blank',
  );
};

const getTawtheeqStatus = (state: IVariables) => {
  const { status } = state.tawtheeqNumber;
  return status;
};

const inputOnChange = (value: string, actions: IVariables) => {
  actions.tawtheeqNumber.update({ tawtheeqNumber: value, status: '' });
};

const onBlur = async (value: string, actions: IVariables) => {
  if (value) {
    const res = await fetch('/pub/proxy/getTawtheeqInfo', 'POST', {
      contractNo: value,
    });

    // TODO update only success response
    if (res.success) {
      actions.tawtheeqNumber.update({
        tawtheeqNumber: value,
        status: 'success',
      });
    } else
      actions.tawtheeqNumber.update({ tawtheeqNumber: value, status: 'error' });
  } else {
    actions.tawtheeqNumber.update({ tawtheeqNumber: value, status: 'error' });
  }
};

const getTawtheeqValue = (state: IVariables) => {
  const { tawtheeqNumber } = state.tawtheeqNumber;
  return tawtheeqNumber;
};

export default {
  onClick,
  getStep,
  getStepStatus,
  getCurrentStep,
  getCurrentSubStep,
  fetchAttachments,
  uploadFile,
  removeFile,
  getDocuments,
  getActivites,
  formatActivities,
  fetchConditions,
  getConditions,
  documentDownload,
  onBlur,
  inputOnChange,
  getTawtheeqStatus,
  getTawtheeqValue,
};
