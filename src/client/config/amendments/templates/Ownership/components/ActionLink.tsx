import React from 'react';
import { IVariables } from '@tamm/app-composer';
import { UPDATE } from 'client/config/amendments/constants';

const ActionLink = (props: IVariables) => {
  const {
    i18n,
    toggleModal,
    deleteAmendment,
    getActionType,
    amendmentItems,
    index,
    userAction,
  } = props;

  return (
    <div className="action-link-wrapper">
      {userAction.edit && (
        <div className="action-item">
          <span
            className="hoverType linkColor"
            onClick={() => getActionType(amendmentItems, UPDATE, index, props)}
            role="presentation"
            tabIndex={-1}
          >
            {i18n('button.edit')}
          </span>
        </div>
      )}
      {userAction.delete && (
        <div className="action-item margin-left-20-">
          <span
            className="hoverType linkColor"
            onClick={() => toggleModal(deleteAmendment)}
            role="presentation"
            tabIndex={-1}
          >
            {i18n('button.delete')}
          </span>
        </div>
      )}
      {!userAction.edit && !userAction.delete && <div> - </div>}
    </div>
  );
};

export default ActionLink;
