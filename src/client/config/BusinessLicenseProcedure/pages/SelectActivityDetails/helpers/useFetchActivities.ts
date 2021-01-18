import { IVariables } from '@tamm/app-composer';
import fetchActivities from '../../../services/activities';
import { getAlertTextAndStatus } from './getAlertTextAndStatus';

export const useFetchActivities = (
  args: {
    category: string | undefined;
    subCategory: string | undefined;
    searchText: string | undefined;
  },
  state: IVariables,
  updateStore: Function,
) =>
  fetchActivities(args)
    .then((activities: any) => {
      if (activities.length === 0) throw new Error('errorMessage.noData');
      updateStore({
        ...state,
        activities: activities.slice(0, state.activitiesRecInPage),
        // activity: activities[0] ? activities[0].activityCode : '',
        loading: false,
        showError: false,
        showTable: true,
        activitiesNonPaginated: activities,
        activitiesCurrentPage: 1,
        activitiesTotalCount: activities.length,
      });
    })
    .catch((error: any) => {
      console.error(error);
      updateStore({
        ...state,
        activities: [],
        loading: false,
        showError: true,
        ...getAlertTextAndStatus(error),
      });
    });
