import { IVariables } from '@tamm/app-composer';
import { PATH_ENTITY_APPROVAL_DOCS } from '../../utils/constants/pageRoutes';

const onNextClick = (props: IVariables) => {
  const { serviceType } = props;
  props.history.push(`/${serviceType}${PATH_ENTITY_APPROVAL_DOCS}`);
};

export default {
  onNextClick,
};
