import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import fetch from 'client/services/fetch';
import {
  LOCATION_MATRIX,
  LOCATION_ACTIVITY_LOOKUP,
} from 'client/config/utils/lookup';

const getLocationActivities = (activities: IVariables) => {
  return async (location: string) => {
    return LOCATION_MATRIX[location] ? LOCATION_MATRIX[location] : [];

    // const locationActivityItemsPayload = await fetch(
    //   '/pub/proxy/locationActivity',
    //   'POST',
    //   {
    //     sector: LOCATION_ACTIVITY_LOOKUP[location],
    //     activity: activities.map((i: IVariables) => i.activityCode).join(','),
    //   },
    // );
    //
    // return get(
    //   locationActivityItemsPayload,
    //   'data.result.locationActivityItems',
    //   [],
    // ).map((item: IVariables) => ({
    //   id: item.LOCATION_EN,
    //   nameEn: item.LOCATION_EN,
    //   nameAr: item.LOCATION_AR,
    // }));
  };
};

export default getLocationActivities;
