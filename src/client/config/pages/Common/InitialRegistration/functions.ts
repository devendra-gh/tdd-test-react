import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const getMoeRequirements = () => {
  const list = [
    {
      label: 'moeDoc.commercialNameCertificate',
      value: 'global.duplicateCopy',
    },
    {
      label: 'moeDoc.economicNameCertificate',
      value: 'global.offCertificate',
    },
    {
      label: 'moeDoc.adminisrativeDepartment',
      value: 'global.offDoc',
    },
    {
      label: 'moeDoc.localAgentContract',
      value: 'global.duplicateCopy',
    },
    {
      label: 'moeDoc.localAgentId',
      value: 'global.duplicateCopy',
    },
  ];

  const moeRequirements = {
    columns: [
      {
        id: 'requirement',
        title: 'global.requirement',
      },
      {
        id: 'type',
        title: 'global.type',
        align: 'end',
      },
    ],
    headerHidden: false,
    items: list.map((li, index) => ({
      id: index,
      requirement: li.label,
      type: li.value,
    })),
    title: 'moeRequirements.title',
    uiType: 'default',
  };

  return [moeRequirements];
};

const continueApp = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onInitialRegistration',
  });
};

export default { getMoeRequirements, continueApp };
