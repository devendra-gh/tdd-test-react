/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import React from 'react';
import { IVariables } from '@tamm/app-composer';

import Table from '@tamm/ui-lib-v2-table';
import Modal from '@tamm/ui-lib-v2-modal';
import Button from '@tamm/ui-lib-v2-button';
import Icon from '@tamm/ui-lib-v2-icon';
import Tooltip from '@tamm/ui-lib-v2-tooltip';
import './MoaPartner.less';
import { REPRESENTATIVE_TYPES } from 'client/config/utils/lookup';
import { isPartnerReminderOpen } from 'client/config/pages/MoaConfirm/functions';
import {
  SynchronizeArrow1Outline,
  RemoveCircleOutline,
} from '@tamm/ui-lib-v2-icon/Icons';
import { MOA_PARTNER_STATUS } from 'client/config/utils/gcc';
import { getPartnersArray } from 'client/config/pages/MoaConfirm/loadApplicationStateFromCamunda';
import AlertNotification from '@tamm/ui-lib-v2-alert';

const partnerStatus = (i18n: any, moaAgreed = '') => {
  if (!moaAgreed) {
    return i18n('pending');
  }
  if (moaAgreed === MOA_PARTNER_STATUS.DISAGREE) {
    return i18n('rejected');
  }
  return i18n('approved');
};

const getMoaContent = (props: IVariables) => {
  if (!props.moa.moaHTML) {
    return <div>MOA not found</div>;
  }

  const currentPartner = getPartnersArray(props.partners).find(
    (p: IVariables) =>
      p.idNumber === props.user.IDN ||
      p.idNumber.split('-').join('') === props.user.IDN,
  );

  if (!currentPartner) {
    return (
      <div className="modalMoaContent">
        <div>{props.i18n('moa_review_you_must_be_partner')}</div>
      </div>
    );
  }

  return (
    <div className="modalMoaContent">
      <div
        dangerouslySetInnerHTML={{
          __html: props.moa.moaHTML,
        }}
      />
    </div>
  );
};

const getMoaContentButtons = (props: IVariables, isAnyPartnerRejected: any) => {
  if (!props.moa.moaHTML) {
    return <div />;
  }

  const currentPartner = getPartnersArray(props.partners).find(
    (p: IVariables) =>
      p.idNumber === props.user.IDN ||
      p.idNumber.split('-').join('') === props.user.IDN,
  );

  if (!currentPartner) {
    return <div />;
  }

  const moaAgreed =
    currentPartner && currentPartner.moaAgreed === MOA_PARTNER_STATUS.AGREE;

  if (moaAgreed || isAnyPartnerRejected) {
    return (
      <>
        <div className="">
          <div>
            <AlertNotification
              message={props.i18n('moa_notice')}
              status="warning"
            />
          </div>
        </div>
        <div className="footer-buttons-close">
          <Button
            label={props.i18n('close')}
            uiType="secondary"
            onClick={() => props.showMoa(props)}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="">
        <div>
          <AlertNotification
            message={props.i18n('moa_notice')}
            status="warning"
          />
        </div>
      </div>
      <div className="footer-note">{props.i18n('review_moa_document')}</div>
      <div className="footer-buttons">
        <div />
        <Button
          label={props.i18n('approve')}
          uiType="primary"
          onClick={() => props.doesAgree(props, true)}
        />
        <Button
          label={props.i18n('reject')}
          uiType="secondary"
          onClick={() => props.doesAgree(props, false)}
        />
        <div />
      </div>
    </>
  );
};

const MoaPartner = (props: IVariables) => {
  const { allProps } = props;
  const { i18n } = allProps;
  const onlyPartners = getPartnersArray(
    allProps.partners,
  ).filter((p: IVariables) =>
    [
      REPRESENTATIVE_TYPES.OWNER.code,
      REPRESENTATIVE_TYPES.PARTNER.code,
      REPRESENTATIVE_TYPES.SPONSOR.code,
    ].includes(p.representativeType),
  );
  const alwaysRender = [...onlyPartners];

  const isAnyPartnerRejected = alwaysRender.find(
    (i: IVariables) => i && i.moaAgreed === MOA_PARTNER_STATUS.DISAGREE,
  );

  const partnerArr: any[] = alwaysRender.map((partner: any, index: number) => {
    const status = partnerStatus(i18n, partner.moaAgreed);
    const flag = isPartnerReminderOpen(partner.lastRemindTime || 0);
    return {
      id: index.toString(),
      moaStatus: status,
      fullName: `${partner.firstNameENG} ${partner.lastNameENG}`,
      action:
        partner.moaAgreed !== MOA_PARTNER_STATUS.AGREE &&
        partner.moaAgreed !== MOA_PARTNER_STATUS.DISAGREE ? (
          <div className="action-buttons">
            <Button
              label={allProps.i18n('reminder')}
              onClick={() => allProps.reInvite(allProps, partner.emailAddress)}
              size="medium"
              uiType="secondary"
              disabled={!flag || isAnyPartnerRejected}
            />
            {!flag && (
              <div className="tooltip">
                <Tooltip
                  delay="0s"
                  position="start"
                  title={allProps.i18n('re_invite_desc')}
                  trigger="hover"
                  width="16rem"
                >
                  <Icon source={SynchronizeArrow1Outline} />
                </Tooltip>
              </div>
            )}
          </div>
        ) : (
          <div>N/A</div>
        ),
    };
  });

  return (
    <div
      className="ui-lib-story-container"
      style={{
        background: '#fff',
      }}
    >
      <div className="MOAPartner">
        {allProps.moa.moaModalShow && (
          <Modal
            body={getMoaContent(allProps)}
            containerId="moa-modal-container"
            footer={getMoaContentButtons(allProps, isAnyPartnerRejected)}
            header={
              <>
                <div className="modalClose">
                  <button
                    type="button"
                    onClick={() => allProps.showMoa(allProps)}
                  >
                    <Icon
                      className="icon-example>"
                      source={RemoveCircleOutline}
                    />
                  </button>
                </div>
              </>
            }
            onClose={() => allProps.showMoa(allProps)}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
          />
        )}
        {isAnyPartnerRejected ? (
          <div className="moa-rejected-notification">
            <AlertNotification
              message={i18n('moaRejectedByPartner')}
              status="error"
            />
          </div>
        ) : (
          <div />
        )}
        <Table
          i18n={i18n}
          size="default"
          title={i18n('status_of_moa')}
          columns={[
            {
              id: 'fullName',
              title: i18n('partner_name'),
            },
            {
              id: 'moaStatus',
              title: i18n('status'),
            },
            {
              hideFor: 'sm',
              id: 'action',
              title: i18n('action'),
            },
          ]}
          items={partnerArr}
        />
      </div>
      <div id="moa-modal-container" />
    </div>
  );
};

export default MoaPartner;
