import { get } from 'lodash';
import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const fetchFees = async ({ location, legalForm, activityId }: IVariables) => {
  return fetch('/pub/proxy/getBusinessFees', 'POST', {
    location,
    transactionType: 'New License',
    legalForm,
    activityId: activityId.toString(),
    licenseId: '',
    amendmentType: '',
    signBoardTotalArea: '1',
  })
    .then(response => {
      if (response.data.count === 0) return [];
      const locations = get(response, 'data.fee.fee', null);
      if (response.data.count === 1) return [locations];
      if (locations && locations.length) {
        return locations;
      }
      throw new Error('No sufficient data');
    })
    .catch(err => {
      throw err;
    });
};

export default fetchFees;
