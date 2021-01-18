import { IVariables } from '@tamm/app-composer';
import legalForms from '../constants/legalForms';
import { ADD, DELETE, UPDATE } from '../constants';
import { AMENDMENT_TYPES as types } from '../constants/amendmentObjects';

const requiredDocuments: IVariables = {
  [types.PARTNERS]: {
    [ADD]: [
      {
        name: 'partnershipContractEntry',
        description: 'uploadFieldLabel.partnershipContractEntry',
        required: true,
        isGeneral: false,
      },
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
      {
        name: 'icaApproval',
        description: 'uploadFieldLabel.icaApproval',
        required: true,
        isGeneral: false,
      },
    ],
    [DELETE]: [
      {
        name: 'partnershipContractWithdrawal',
        description: 'uploadFieldLabel.partnershipContractWithdrawal',
        required: true,
        isGeneral: false,
      },
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
    ],
  },
  [types.PARTNER_NATIONALITY]: {
    [UPDATE]: [
      {
        name: 'passportForNationality',
        description: 'uploadFieldLabel.passportForNationality',
        required: true,
        isGeneral: false,
      },
      {
        name: 'icaApproval',
        description: 'uploadFieldLabel.icaApproval',
        required: true,
        isGeneral: false,
      },
    ],
  },
  [types.PARTNER_SHARE]: {
    [UPDATE]: [
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
    ],
  },
  [types.LOCAL_AGENT]: {
    [ADD]: [
      {
        name: 'serviceAgentContract',
        description: 'uploadFieldLabel.serviceAgentContract',
        required: true,
        isGeneral: false,
      },
      {
        name: 'icaApproval',
        description: 'uploadFieldLabel.icaApproval',
        required: true,
        isGeneral: false,
      },
      {
        name: 'appointmentBoardResolution',
        description: 'uploadFieldLabel.appointmentBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
    ],
    [DELETE]: [
      {
        name: 'serviceAgentCancellation',
        description: 'uploadFieldLabel.serviceAgentCancellation',
        required: true,
        isGeneral: false,
      },
      {
        name: 'removeBoardResolution',
        description: 'uploadFieldLabel.removeBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
    ],
  },
  [types.REPRESENTATIVES]: {
    [ADD]: [
      {
        name: 'icaApproval',
        description: 'uploadFieldLabel.icaApproval',
        required: true,
        isGeneral: false,
      },
      {
        name: 'representativeAppointBoardResolution',
        description: 'uploadFieldLabel.representativeAppointBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
      {
        name: 'repChangeCertificate',
        description: 'uploadFieldLabel.repChangeCertificate',
        required: true,
        isGeneral: false,
      },
    ],
    [DELETE]: [
      {
        name: 'representativeRemoveBoardResolution',
        description: 'uploadFieldLabel.representativeRemoveBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
    ],
  },
  [types.HEIRS]: {
    [ADD]: [
      {
        name: 'notificationOfInheritance',
        description: 'uploadFieldLabel.notificationOfInheritance',
        required: true,
        isGeneral: false,
      },
      {
        name: 'heirPassport',
        description: 'uploadFieldLabel.heirPassport',
        required: true,
        isGeneral: false,
      },
    ],
    [DELETE]: [
      {
        name: 'heirRepRemoveNotification',
        description: 'uploadFieldLabel.heirRepRemoveNotification',
        required: true,
        isGeneral: false,
      },
      {
        name: 'passportofNewRep',
        description: 'uploadFieldLabel.passportofNewRep',
        required: true,
        isGeneral: false,
      },
    ],
  },
  [types.MANAGERS]: {
    [ADD]: [
      {
        name: 'icaApproval',
        description: 'uploadFieldLabel.icaApproval',
        required: true,
        isGeneral: false,
      },
      {
        name: 'appointManagerBoardResolution',
        description: 'uploadFieldLabel.appointManagerBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
      {
        name: 'managerChangeCertificate',
        description: 'uploadFieldLabel.managerChangeCertificate',
        required: true,
        isGeneral: false,
      },
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
    ],
    [DELETE]: [
      {
        name: 'managerCancelBoardResolution',
        description: 'uploadFieldLabel.managerCancelBoardResolution',
        required: true,
        isGeneral: false,
        conditionalBehaviour: () => {
          // If foreign company, board resolution is madatory // todo
          return false;
        },
      },
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
    ],
  },
  [types.PAID_UP_CAPITAL]: {
    [UPDATE]: [
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
      },
      {
        name: 'moeCapitalApproval',
        description: 'uploadFieldLabel.moeCapitalApproval',
        required: true,
        isGeneral: false,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.PJSC_PRIVATE ||
            legalForm === legalForms.PJSC_PUBLIC ||
            legalForm === legalForms.PJSC_SOLE_PROP
          );
        },
      },
    ],
  },
  [types.TRADE_NAME]: {
    [UPDATE]: [
      {
        name: 'moa',
        description: 'uploadFieldLabel.moa',
        required: true,
        isGeneral: true,
        conditionalBehaviour: ({ legalForm }: IVariables) => {
          return (
            legalForm === legalForms.LLC || legalForm === legalForms.SOLE_LLC
          );
        },
      },
      // {
      //   name: 'tradeNameCertificate',
      //   description: 'uploadFieldLabel.tradeNameCertificate',
      //   required: true,
      //   isGeneral: false,
      // },
    ],
  },
  [types.COUNTRY]: {
    [UPDATE]: [
      {
        name: 'moeCountryValidation',
        description: 'uploadFieldLabel.moeCountryValidation',
        required: true,
        isGeneral: false,
      },
      {
        name: 'parentCompanyLicence',
        description: 'uploadFieldLabel.parentCompanyLicence',
        required: true,
        isGeneral: false,
      },
    ],
  },
  [types.ACTIVITIES]: {
    [UPDATE]: [],
  },
  [types.LOCATION]: {
    [UPDATE]: [],
  },
};
export default requiredDocuments;
