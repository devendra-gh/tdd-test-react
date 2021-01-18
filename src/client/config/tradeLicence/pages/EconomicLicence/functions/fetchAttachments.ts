import { get } from 'lodash';
import fetch from 'client/services/fetch';

const fetchAttachments = async (
  activityId: string,
  legalType: string,
  type = 'Document',
) => {
  const payload = await fetch('/pub/proxy/getRequirements', 'POST', {
    activityId,
    legalType,
    transactionType: 'License Issue',
    type,
    location: 'ABU DHABI',
  });

  const data = get(payload, 'data.result.TransactionRequirementData', []);

  return data;
};

export default fetchAttachments;
