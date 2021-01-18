import fetch from 'client/services/fetch';
import { get } from 'lodash';
import { SD_TYPES } from 'client/config/utils/lookup';

const authorizedOperations = async (location: string) => {
  const authorizedOperationsPayload = await fetch(
    '/pub/proxy/authorizedOperations',
    'POST',
    {
      sector: SD_TYPES[location],
    },
  );

  return get(
    authorizedOperationsPayload,
    'data.result.authorizedOperations',
    [],
  );
};

export default authorizedOperations;
