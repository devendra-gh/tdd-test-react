import { IVariables } from '@tamm/app-composer';

const validation = (props: IVariables) => {
  let isValid = false;
  let showError = false;
  const { permitInfo, serviceType } = props;
  if (permitInfo[serviceType]) {
    const { documents } = permitInfo[serviceType].entityApproval;
    showError = !permitInfo[serviceType].entityApproval.isApproved;
    if (Object.keys(documents).length) {
      isValid = Object.values(documents).every(document => {
        if (typeof document === 'object' && document !== null) {
          return Object.keys(document).length > 0;
        }
        return false;
      });
    }
    props.actions.permitInfo.update({
      ...permitInfo,
      [serviceType]: {
        ...permitInfo[serviceType],
        entityApproval: {
          ...permitInfo[serviceType].entityApproval,
          showError,
        },
      },
    });
  }
  return isValid && !showError;
};

export default validation;
