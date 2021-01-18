import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';

const getMoeRequirements = () => {
  const list = [
    {
      label: 'moeDoc.certifiedAuditor',
      value: 'global.trueCopy',
    },
    {
      label: 'moeDoc.pertinentAuthorities',
      value: 'global.trueCopy',
    },
    {
      label: 'moeDoc.managerPoa',
      value: 'global.trueCopy',
    },
    {
      label: 'moeDoc.bankWarrenty',
      value: 'global.trueCopy',
    },
    {
      label: 'moeDoc.managerPassPort',
      value: 'global.duplicateCopy',
    },
    {
      label: 'moeDoc.otherAttachments',
      value: '',
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

const onClick = async (props: IVariables) => {
  await bpm.message('economicLicence', {
    businessKey: props.businessKey,
    messageName: 'onFinalRegistration',
  });
};

export default { getMoeRequirements, onClick };
