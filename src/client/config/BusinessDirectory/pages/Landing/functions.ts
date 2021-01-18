import { IVariables } from '@tamm/app-composer';
import { getMapNatureData, getMapActivityData, getToken } from '../../services';

/* istanbul ignore file */

const init = (props: IVariables) => {
  props.actions.token.reset();
  props.actions.natureList.reset();
  props.actions.activityByNature.reset();
  props.actions.selectedHeatActivity.reset();
  props.actions.selectedHeatCategory.reset();
};

const onPageInit = async (props: IVariables) => {
  const esritoken = await getToken();
  props.actions.token.update(esritoken);

  const natureList = await getMapNatureData({ token: esritoken });
  props.actions.natureList.update(natureList && natureList.features);

  props.actions.selectedHeatActivity.update(null);
};

const onChange = async (value: string, props: IVariables) => {
  props.actions.selectedHeatCategory.update(value);

  const activityByNature = await getMapActivityData({
    activities: value,
    token: props.token,
  });

  props.actions.activityByNature.update(
    activityByNature && activityByNature.features,
  );
  props.actions.selectedHeatActivity.update(
    activityByNature && activityByNature.features,
  );
};

export default { init, onPageInit, onChange };
