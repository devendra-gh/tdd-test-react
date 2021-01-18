import React from 'react';
import PropTypes from 'prop-types';
import { IVariables } from '@tamm/app-composer';
import Button from '@tamm/ui-lib-v2-button';
import './modal.less';

interface Imodal extends IVariables {
  i18n: (key: string) => string;
  visible: boolean;
  onOk: () => void;
  onCancel: () => {};
}

const Modal = (props: Imodal) => {
  const { visible, i18n, onOk, onCancel } = props;
  return (
    <div className={visible ? 'syb-modal-wrapper' : 'syb-modal-wrapper-hide'}>
      <div className="syb-modal-mask" onClick={onCancel} />
      <div className="syb-modal">
        {/* <div className="syb-modal__symbols">
          <i className="all-icon-cancel syb-modal__icon" />
          <i className="all-icon-close syb-modal__close" />
        </div> */}
        <div className="syb-modal__header">
          <div className="syb-modal__title">
            {i18n('questionnaire.summary.modal.title')}
          </div>
        </div>

        <div className="syb-modal__body">
          <p>{i18n('questionnaire.summary.modal.body')}</p>
        </div>

        <div className="syb-modal__footer">
          <Button
            aria-label="Yes"
            // icon={null}
            label={i18n('global.yes')}
            onClick={onOk}
            size="medium"
          />
          <Button
            aria-label="NO"
            // icon={null}
            label={i18n('global.no')}
            onClick={onCancel}
            size="medium"
            uiType="tertiary"
          />
        </div>
      </div>
    </div>
  );
};

Modal.prototype = {
  i18n: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default Modal;
