/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import { PROCESS_NAME } from 'client/config/permits/constants';
import permitConfigs from 'client/config/permits/permitConfigs';
import bpm from 'client/services/bpm';
import { PATH_404_NOT_FOUND } from '../../utils/constants/pageRoutes';
import { PERMIT_SEASONAL_PROMOTION } from '../../utils/constants/permits';

const qs = require('querystring');

async function continueProcess(instanceId: string) {
  const data: IVariables = await bpm.state(PROCESS_NAME, instanceId);

  if (data && data.data) {
    return data.data;
  }
  return false;
}

const onPageInit = async (props: IVariables) => {
  const queryParams = qs.parse(props.history.location.search);
  const instanceId: any = get(queryParams, 'instanceId', '');
  const businessKey: any = get(queryParams, 'businessKey', '');
  if (instanceId && businessKey) {
    try {
      const redirectData = await continueProcess(instanceId);
      if (redirectData) {
        const variables: IVariables = await bpm.getVariables(instanceId, {
          processName: PROCESS_NAME,
          variables: ['serviceName', 'seasonalPromotions', 'emiratesId'],
        });
        let serviceType;
        let seasonalPromotions;
        let emiratesId;
        if (variables) {
          serviceType = variables.data.serviceName
            ? variables.data.serviceName.value
            : '';
          seasonalPromotions = variables.data.seasonalPromotions
            ? variables.data.seasonalPromotions.value
            : '';
          emiratesId = variables.data.emiratesId
            ? variables.data.emiratesId.value
            : '';
        }
        if (props.user.IDN === emiratesId) {
          props.actions.businessKey.update(businessKey);
          props.actions.instanceId.update(instanceId);
          props.actions.serviceType.update(serviceType);

          if (serviceType) {
            const PermitConfigs: { [key: string]: any } = permitConfigs;
            const serviceConfig: any = PermitConfigs[serviceType];

            if (serviceConfig) {
              const { category } = serviceConfig;
              props.actions.permitType.update(category);
            }
            if (
              serviceType === PERMIT_SEASONAL_PROMOTION &&
              seasonalPromotions
            ) {
              props.actions.permitInfo.update({
                ...props.permitInfo,
                [serviceType]: {
                  ...props.permitInfo[serviceType],
                  permitDetails: {
                    ...props.permitInfo[serviceType].permitDetails,
                    promotionType: seasonalPromotions,
                  },
                },
              });
            }
          }
          props.history.push(redirectData.value);
        } else {
          props.actions.businessKey.reset();
          props.actions.instanceId.reset();
          props.history.push(PATH_404_NOT_FOUND);
        }
      }
    } catch (exception) {
      // eslint-disable-next-line no-console
      // console.log('exception on redirect data: ', exception.toString());
    }
  }
};

export default { continueProcess, onPageInit };
