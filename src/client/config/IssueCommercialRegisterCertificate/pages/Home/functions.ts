import { IVariables } from '@tamm/app-composer';
import { PATH_SELECT_LICENCE } from '../../routes';
import { addAnalytics, JST_EVENT_KEY } from '../../utils';

const onStart = (props: IVariables) => {
  const {
    history: { push: redirectTo },
  } = props;
  addAnalytics(JST_EVENT_KEY);
  redirectTo(PATH_SELECT_LICENCE);
};

export default { onStart };
