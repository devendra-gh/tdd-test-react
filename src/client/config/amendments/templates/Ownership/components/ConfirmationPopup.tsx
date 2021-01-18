import React from 'react';
import { IVariables } from '@tamm/app-composer';
import { AlertCircleFilled, Delete2Filled } from '@tamm/ui-lib-v2-icon/Icons';
import ConfirmationModal from '@tamm/ui-lib-v2-confirmation-modal';

const ConfirmationPopup = (props: IVariables) => {
  const {
    showPopUp,
    onCancelModal,
    onConfirmModal,
    title,
    descriptionMsg,
    setIcon,
    ...restProps
  } = props;

  const icon = () => {
    return setIcon === 'alertCircle' ? (
      <AlertCircleFilled className="ui-lib-fixed-width-height" />
    ) : (
      <Delete2Filled className="ui-lib-fixed-width-height" />
    );
  };

  return (
    <React.Fragment>
      {showPopUp && (
        <ConfirmationModal
          confirmText="Yes"
          containerId="contain"
          cancelText="No"
          description={descriptionMsg}
          onCancel={(e: any) => onCancelModal()}
          onConfirm={(e: any) => onConfirmModal()}
          title={title}
          icon={icon}
          {...restProps}
        />
      )}
      ;
    </React.Fragment>
  );
};

export default ConfirmationPopup;
