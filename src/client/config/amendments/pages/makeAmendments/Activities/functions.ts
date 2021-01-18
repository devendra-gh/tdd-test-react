import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import { PROCESS_NAME } from 'client/config/amendments/constants';
import * as functions from 'client/config/amendments/utils/functions';
import { getActivities } from 'client/config/amendments/services';
import LICENSE_TYPES from 'client/config/amendments/constants/licenseTypes';
import { updateReduxStoreInDB } from 'client/config/amendments/utils/setUpdateReduxState';

const onPageInit = async (props: IVariables) => {
  props.actions.activityList.reset();
  props.actions.amendmentServerError.reset();
  return {
    logUuid: props.logUuid,
    dbAmendmentId: props.dbAmendmentId,
  };
};

const onSubmitAmendment = async (props: IVariables) => {
  const nextPage = functions.getNextSubStepPage(props.currentPage, props);

  await updateReduxStoreInDB(props);
  if (nextPage) {
    const response = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: nextPage,
      },
    });
    functions.returnCamundaMessage(response, props, nextPage);
  }
};

const getSearchBy = (props: IVariables) => {
  const { locale, activity, licenseType } = props;
  const {
    activityCategory,
    activitySubCategory,
    searchTerm,
  } = activity.searchFields;

  let filter: IVariables;

  switch (licenseType) {
    case LICENSE_TYPES.BRANCH:
      filter = {
        searchType: 'BY FIELD',
        searchBy: [
          {
            Field: 'not allowed for frc',
            Value: 'N',
          },
        ],
      };
      break;
    case LICENSE_TYPES.INSTANT:
      filter = {
        searchType: 'BYFIELD_INSTANT',
        searchBy: [
          {
            Field: 'sub nature',
            Value: activityCategory || 'Services',
          },
        ],
      };
      break;
    case LICENSE_TYPES.TAJER:
      filter = {
        searchType: 'BY FIELD',
        searchBy: [
          {
            Field: 'lease optional',
            Value: 'checked',
          },
        ],
      };
      break;
    case LICENSE_TYPES.MOBDEA:
      filter = {
        searchType: 'BY FIELD',
        searchBy: [
          {
            Field: 'creativity activity',
            Value: 'Y',
          },
        ],
        // legalType: 'Establishment',
        // nationalityCode: 'ARE',
        // gender: 'Female',
      };
      break;
    case LICENSE_TYPES.TECH:
      filter = {
        searchType: 'BY FIELD',
        searchBy: [
          {
            Field: 'nature activity en',
            Value: 'tech',
          },
        ],
      };
      break;
    default: {
      const tmpSearch = [];
      if (activityCategory !== '') {
        tmpSearch.push({
          field: `nature activity ${locale}`,
          value: activityCategory,
        });
      }
      if (activitySubCategory !== '') {
        tmpSearch.push({
          field: `sub nature ${locale}`,
          value: activitySubCategory,
        });
      }
      filter = {
        searchType: 'BY FIELD',
        searchBy: [...tmpSearch],
      };
    }
  }
  if (searchTerm) {
    console.info('SEARCH BY', filter.searchBy);
    filter.searchBy = [
      ...filter.searchBy,
      {
        Field: `activity name ${locale}`,
        Value: searchTerm,
      },
    ];
  }
  return filter;
};

const createPayload = (
  props: IVariables,
  pageNumber: string,
  pageSize: string,
) => {
  return {
    ...getSearchBy(props),
    configurationList: [
      {
        operator: 'and',
        pageNumber,
        rowNum: null,
        pageSize,
      },
    ],
  };
};

const setActivities = async ({
  props,
  pageNumber,
  pageSize,
}: {
  props: IVariables;
  pageNumber: string;
  pageSize: string;
}) => {
  const { activityList } = props;
  props.actions.activityList.update({
    ...activityList,
    updating: true,
  });
  if (!activityList.pagesInList.includes(pageNumber)) {
    try {
      const response = await getActivities(
        createPayload(props, pageNumber, pageSize),
      );
      let { activityinfoData } = response.result;

      const [, , fromRow] = activityinfoData[0].responseInfo.match(
        /Row : (\d+) From : (\d+) \| Page : (\d+) From : (\d+)/,
      );
      activityinfoData = activityinfoData.map((a: IVariables) => ({
        pageNumber,
        ...a,
      }));
      if (activityinfoData) {
        props.actions.activityList.update({
          pagesInList: activityList.pagesInList.includes(pageNumber)
            ? [activityList.pagesInList]
            : [...activityList.pagesInList, pageNumber],
          list: [...activityList.list, ...activityinfoData],
          updating: false,
          totalItems: fromRow,
        });
      }
    } catch (e) {
      props.actions.activityList.update({
        ...activityList,
        updating: false,
      });
    }
  } else {
    props.actions.activityList.update({
      ...activityList,
      updating: false,
    });
  }
};

// const onPageInit = async (props: IVariables) => {
//   // setActivities({
//   //   props,
//   //   pageNumber: '1',
//   //   pageSize: '10',
//   // });
// };

const handleBack = async (props: IVariables) => {
  const prevPage = functions.getPrevSubStepPage(props.currentPage, props);
  await updateReduxStoreInDB(props);
  if (prevPage) {
    const response = await bpm.message(PROCESS_NAME, {
      businessKey: props.businessKey,
      messageName: 'makeAmendments',
      variables: {
        continueAmendments: true,
        pageName: prevPage,
      },
    });
    functions.returnCamundaMessage(response, props, prevPage);
  }
};

export default {
  onSubmitAmendment,
  handleBack,
  setActivities,
  onPageInit,
};
