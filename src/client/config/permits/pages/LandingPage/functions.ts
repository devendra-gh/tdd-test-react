import { IVariables } from '@tamm/app-composer';
import permitConfigs from 'client/config/permits/permitConfigs';
import {
  PATH_APPLICATION_DETAILS,
  PATH_UNDERTAKING,
} from '../../utils/constants/pageRoutes';
// import getData from '../../services';

const init = async (props: IVariables) => {
  const { serviceName } = props.match.params;
  const lang = props.locale;
  if (serviceName) {
    const PermitConfigs: { [key: string]: any } = permitConfigs;
    const serviceConfig: any = PermitConfigs[serviceName];
    if (serviceConfig) {
      props.actions.urlServiceName.update(true);
      const { name, category } = serviceConfig;
      props.actions.serviceType.update(name);
      props.actions.permitType.update(category);
      const { permitInfo } = props;

      props.actions.permitInfo.update({
        ...permitInfo,
        [name]: {
          ...permitInfo[name],
        },
      });
    } else {
      props.actions.urlServiceName.update(false);
    }
  } else {
    props.actions.urlServiceName.update(false);
  }
  if (lang) {
    props.actions.locale.locale.update({
      lang,
    });
  }
  // const data = await getData(serviceName);
  // const getPermitConditions = get(data, 'result.Conditions', []);

  // const finalResultEn = getPermitConditions.map((li: any) => {
  //   return li.RequirementEn;
  // });
  // const finalResultAr = getPermitConditions.map((li: any) => {
  //   return li.RequirementAr;
  // });

  // props.actions.requiredConditionsAr.update(finalResultAr);
  // props.actions.requiredConditionsEn.update(finalResultEn);
};

const onStart = (props: IVariables) => {
  const { serviceType } = props;
  const PermitConfigs: { [key: string]: any } = permitConfigs;
  const serviceConfig: any = PermitConfigs[serviceType];
  if (serviceConfig) {
    let redirectPath = `/${serviceType}`;
    if (serviceConfig.requiresUndertakingApproval)
      redirectPath += PATH_UNDERTAKING;
    else redirectPath += PATH_APPLICATION_DETAILS;
    props.history.push(redirectPath);
  }
};

export default {
  init,
  onStart,
};
