import { get, uniqBy } from 'lodash';
import fetch from 'client/services/fetch';

const fetchActivities = async ({
  category,
  subCategory,
  searchText,
}: {
  category: string | undefined;
  subCategory: string | undefined;
  searchText: string | undefined;
}) => {
  return fetch('/pub/proxy/getBusinessActivities', 'POST', {
    natureId: category || '',
    SubCategId: subCategory || '',
    ActivityName: searchText || '',
  })
    .then(response => {
      const activities = get(
        response,
        'data.businessActivities.businessActivities',
        null,
      );
      if (activities && activities.length) {
        return uniqBy(activities, 'activityCode');
      }
      const count = get(response, 'data.count', null);
      if (count === 0) {
        return [];
      }
      if (activities && activities.activityCode) {
        return [activities];
      }
      throw new Error();
    })
    .catch(err => {
      throw err;
    });
};

export default fetchActivities;
