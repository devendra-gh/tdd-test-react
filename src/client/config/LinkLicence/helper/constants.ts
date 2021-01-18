import { noticeTypes } from '@tamm/app-composer/client/constants/types';
import {
  TAMM_BASE_PATH,
  TAMM_DIGITAL_SERVICES,
  TAMM_DED_SERVICES,
} from '../routes';

const BREADCRUMBS: readonly { label: string; link: string }[] = [
  {
    label: 'breadcrumb.home',
    link: TAMM_BASE_PATH,
  },
  {
    label: 'breadcrumb.digitalServices',
    link: TAMM_DIGITAL_SERVICES,
  },
  {
    label: 'breadcrumb.dedServices',
    link: TAMM_DED_SERVICES,
  },
];

const searchByList: readonly { id: number; value: string }[] = [
  { id: 1, value: 'industrialLicence' },
];

const licenceTypeCheckPattern: { [key: string]: RegExp } = {
  industrialLicence: /(CN|IN)-\d{7}$/,
};

const NOTICE_TYPES: { [key: string]: any } = {
  error: noticeTypes.INFO,
  warning: noticeTypes.WARNING,
  success: noticeTypes.INFO,
  inProgress: '',
};

const ANALYTICS_INFO: { [key: string]: any } = {
  serviceName: 'DED_041',
  productName: 'NOP',
  adgeName: 'DED',
  eventKey: { tra: 'TRA', sla: 'SLA' },
};

export {
  BREADCRUMBS,
  searchByList,
  licenceTypeCheckPattern,
  NOTICE_TYPES,
  ANALYTICS_INFO,
};
