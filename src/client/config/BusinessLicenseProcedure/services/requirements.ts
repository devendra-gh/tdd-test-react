import { get } from 'lodash';
import fetch from 'client/services/fetch';
import { IVariables } from '@tamm/app-composer';

const fetchRequirements = async ({
  location,
  legalForm,
  activityId,
}: IVariables) => {
  return fetch('/pub/proxy/getBusinessRequirements', 'POST', {
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
      const requirements = get(response, 'data.requirements.requirement', null);
      if (response.data.count === 1) return [requirements];
      if (requirements && requirements.length) {
        return requirements;
      }
      throw new Error('No sufficient data');
    })
    .catch(err => {
      throw err;
    });
};

export default fetchRequirements;
