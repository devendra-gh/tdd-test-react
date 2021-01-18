import { IVariables } from '@tamm/app-composer';

const handlePageChange = (value: number, state: IVariables) => {
  const { activitiesNonPaginated, activitiesRecInPage } = state;
  const activities = activitiesNonPaginated.slice(
    (value - 1) * activitiesRecInPage,
    value * activitiesRecInPage,
  );
  return {
    ...state,
    showTable: true,
    activitiesCurrentPage: value,
    // activity: activities[0] ? activities[0].activityCode : '',
    activities,
  };
};
export default handlePageChange;
