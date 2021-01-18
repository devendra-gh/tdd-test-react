import { validationTypes } from 'client/config/utils/checkValidation';
import {
  PERMIT_TYPE_ANNUAL,
  PERMIT_TYPE_EVENT,
} from '../../utils/getPermitTypes';

const documents = {
  [PERMIT_TYPE_ANNUAL]: {
    title: 'foodTruck.desc1',
    collection: [
      {
        'aria-label': 'foodTruck.requiredDocument1',
        elementType: 'fileUpload',
        name: 'applicationSample',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument1',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_ANNUAL;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument2',
        elementType: 'fileUpload',
        name: 'manufacturerLetter',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument2',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_ANNUAL;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument3',
        elementType: 'fileUpload',
        name: 'vehiclePicture',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument3',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_ANNUAL;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument4',
        elementType: 'fileUpload',
        name: 'licenceCopy',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument4',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_ANNUAL;
        },
      },
    ],
  },
  entityApprovalForm: {
    title: 'foodTruck.desc2',
    collection: [
      {
        'aria-label': 'foodTruck.requiredDocument5',
        elementType: 'fileUpload',
        name: 'adpApproval',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument5',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument6',
        elementType: 'fileUpload',
        name: 'civilDefenceApproval',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument6',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument7',
        elementType: 'fileUpload',
        name: 'foodControlApproval',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument7',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument8',
        elementType: 'fileUpload',
        name: 'licenceCopy',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument8',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
      },
    ],
  },
  [PERMIT_TYPE_EVENT]: {
    title: 'foodTruck.desc3',
    collection: [
      {
        'aria-label': 'foodTruck.requiredDocument9',
        elementType: 'fileUpload',
        name: 'commercialLicenceCopy',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument9',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_EVENT;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument10',
        elementType: 'fileUpload',
        name: 'tourismAuthorityPermit',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument10',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_EVENT;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument11',
        elementType: 'fileUpload',
        name: 'eventOrganiserNOC',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument11',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_EVENT;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument12',
        elementType: 'fileUpload',
        name: 'vehiclePhotographs',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument12',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_EVENT;
        },
      },
      {
        'aria-label': 'foodTruck.requiredDocument13',
        elementType: 'fileUpload',
        name: 'mobileVehicleOwnership',
        accept: ['application/pdf'],
        label: 'foodTruck.requiredDocument13',
        help: 'global.uploadHelp',
        maxSize: 2e6,
        validationConfig: {
          type: validationTypes.REQUIRED_FILE,
        },
        conditionalBehaviour: (values: any) => {
          const { permitType: val } = values.permitDetails;
          return val === PERMIT_TYPE_EVENT;
        },
      },
    ],
  },
};
export default documents;
