import handlePageChange from './page';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const state = {
    activitiesRecInPage: 1,
    activitiesNonPaginated: [
      { activityCode: 1 },
      { activityCode: 2 },
      { activityCode: 3 },
    ],
  };

  it('should load next page data and set the selectedGood', () => {
    const newState = handlePageChange(2, state);

    expect(newState).toStrictEqual({
      ...state,
      showTable: true,
      activitiesCurrentPage: 2,
      // activity: 2,
      activities: [{ activityCode: 2 }],
    });
  });
});
