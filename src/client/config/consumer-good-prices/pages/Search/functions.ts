import { IVariables } from '@tamm/app-composer';
import { getAnalyticsData } from '../../utils/common';

const onCancel = async (props: IVariables) => {
  props.history.push(`/consumer-good-prices/`);
};

const onNextClick = async (props: IVariables) => {
  getAnalyticsData('tra');
  props.history.push(`/consumer-good-prices/details/${props.itemId}`);
};

export default {
  onCancel,
  onNextClick,
};
