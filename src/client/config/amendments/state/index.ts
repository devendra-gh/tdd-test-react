/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import steps, { IStep } from '../steps';
import {
  AMENDMENT_CATEGORIES as categories,
  AMENDMENT_TYPES as types,
} from '../constants/amendmentObjects';
import { PROCESS_NAME } from '../constants';

interface IState {
  stepsStatus: IVariables;
  steps: IStep[];
  [key: string]: any;
}

const categoriesValues = Object.values(categories).reduce(
  (acc: IVariables, category: string) => {
    return { ...acc, [category]: false };
  },
  {},
);

export const initialState: IState = {
  businessKey: '',
  instanceId: '',
  licenseNo: '',
  capID: '',
  legalForm: '',
  prevLegalForm: '',
  licenseType: '',
  prevLicenseType: '',
  applicationStatus: 'application not submitted',
  commundaError: false,
  amendmentCategories: {
    category: categoriesValues,
    [categories.OWNERSHIP]: categoriesValues,
    isUploadStep: false,
  },
  licenceDetails: {
    [types.PARTNERS]: [],
    [types.MANAGERS]: [],
    [types.REPRESENTATIVES]: [],
    [types.LOCAL_AGENT]: [],
    [types.HEIRS]: [],
    [types.LOCATION]: {
      amendment: null,
    },
    [types.COUNTRY]: {},
    [types.TRADE_NAME]: {},
    [types.ACTIVITIES]: [],
    [types.PAID_UP_CAPITAL]: {
      paidCapital: '',
      revenuesSales: '',
      paidUpCapital: null,
      amendedCapital: '',
    },
    contactInfo: {
      name: '',
      phone: '',
      email: '',
    },
  },
  initialValues: {},
  documents: [],
  applicationReturnDocuments: [],
  profile: {
    representativeType: '',
    profileType: '',
    action: null,
    index: null,
    formValues: {},
  },
  tradeName: {
    response: [],
    fetched: false,
  },
  activityList: {
    pagesInList: [],
    list: [],
    updating: false,
    totalItems: 0,
  },
  activity: {
    searchFields: {
      activityCategory: '',
      activitySubCategory: '',
      searchTerm: '',
    },
    changeActivities: [],
    removeActivities: [],
  },
  tawtheeqDetails: null,
  countryList: [],
  pageLoading: false,
  amendmentServerError: '',
  processComplete: false,
  categoryType: [],
  tradeLicenceList: {},
  pageTitle: '',
  stepsStatus: {},
  steps,
  dedErrorMessage: '',
};

/**
 * fetches state from BPM
 * @param {string} instanceId
 * @returns {string}
 */
let unauthorizedCount = 0;
async function fetchState(instanceId: string) {
  try {
    const data: IVariables = await bpm.state(PROCESS_NAME, instanceId);
    // let unauthorizedCount = 0;
    if (!data.data) return false;
    if (data && data.data && data.data.value) {
      unauthorizedCount = 0;
      return data.data.value;
    }
    // when logged out set forceRedirect to current path and redirect to login page
    if (data && data.message && data.message === 'Unauthorized') {
      if (window && localStorage) {
        if (unauthorizedCount >= 5) {
          localStorage.setItem('forceRedirect', window.location.href);
          window.location.href = '/login';
        } else {
          unauthorizedCount += 1;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log('Error fetching state', e.toString());
  }
  return false;
}

export default fetchState;
