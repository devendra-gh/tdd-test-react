import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import {
  PATH_ENTITY_APPROVAL,
  PATH_APPLICATION_WAITING,
} from '../../utils/constants/pageRoutes';
import { PROCESS_NAME } from '../../constants';
import validation from './functions/validation';

const onBackClick = (props: IVariables) => {
  const { serviceType } = props;
  props.history.push(`/${serviceType}${PATH_ENTITY_APPROVAL}`);
};
const onSubmit = async (props: IVariables) => {
  const { businessKey, serviceType, permitInfo } = props;
  const { entityApproval } = permitInfo[serviceType];
  if (Object.keys(entityApproval.documents).length !== 0) {
    await bpm.message(PROCESS_NAME, {
      businessKey,
      messageName: 'onOtherEntitySubmit',
      variables: {
        otherEntitySubmitted: true,
        entityApprovalDocs: JSON.stringify(
          Object.values(
            permitInfo[serviceType].entityApproval.documents,
          ).reduce((fileArray: any, file: any) => fileArray.concat(file), []),
        ),
      },
    });
    props.history.push(`/${serviceType}${PATH_APPLICATION_WAITING}`);
  }
};

const handleToggleCheckbox = (props: IVariables) => {
  const { serviceType, permitInfo } = props;
  props.actions.permitInfo.update({
    ...permitInfo,
    [serviceType]: {
      ...permitInfo[serviceType],
      entityApproval: {
        ...permitInfo[serviceType].entityApproval,
        isApproved: !permitInfo[serviceType].entityApproval.isApproved,
      },
    },
  });
};
export default {
  onBackClick,
  onSubmit,
  validation,
  handleToggleCheckbox,
};
