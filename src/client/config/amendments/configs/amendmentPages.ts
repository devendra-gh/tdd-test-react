import { IVariables } from '@tamm/app-composer';
import {
  AMENDMENT_PAGES as pages,
  AMENDMENT_CATEGORIES as categories,
} from '../constants/amendmentObjects';

const amendmentPages: IVariables[] = [
  {
    name: pages.OWNERSHIP,
    category: categories.OWNERSHIP,
    order: 1,
  },
  {
    name: pages.ACTIVITIES,
    category: categories.ACTIVITIES,
    order: 2,
  },
  {
    name: pages.TRADE_NAME,
    category: categories.TRADE_NAME,
    order: 3,
  },
  {
    name: pages.LOCATION,
    category: categories.LOCATION_COUNTRY,
    order: 4,
  },
  {
    name: pages.PAID_UP_CAPITAL,
    category: categories.FINANCIAL,
    order: 5,
  },
];

export const pageUrls: IVariables = {
  'subStep.ownership': 'ownership',
  'subStep.activities': 'activities',
  'subStep.tradeName': 'trade-name',
  'subStep.location': 'location',
  'subStep.paidUpCapital': 'financial-details',
  'subStep.uploadDocuments': 'upload',
  'subStep.contactInfo': 'contact-information',
};

export default amendmentPages;
