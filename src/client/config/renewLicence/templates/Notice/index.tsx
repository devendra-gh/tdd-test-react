/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables, noticeTypes } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import types from '@tamm/app-composer/client/constants/types';
import Notice from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { Alert, NotFound } from 'client/config/components/Icons';
import { InformationCircleOutline } from '@tamm/ui-lib-v2-icon/Icons';
import Dropdown from '@tamm/ui-lib-v2-dropdown';
import Button from '@tamm/ui-lib-v2-button';
import tablePropTypes from '../../../propTypes/table';
import buttonsPropTypes from '../../../propTypes/buttons';
import './index.less';

interface IButton {
  link?: string;
  alignIcon?: 'start' | 'end';
  withArrow?: boolean;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
}

interface Tags {
  label: string;
  value: string;
}
/**
 * Notice template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  let status: 'success' | 'failure' | 'custom' | 'inProgress';
  let icon: any;
  switch (props.type) {
    case noticeTypes.SUCCESS:
      status = 'success';
      break;
    case noticeTypes.WARNING:
      status = 'failure';
      break;
    case noticeTypes.INFO:
      status = 'inProgress';
      break;
    case 'inProgress':
      status = 'inProgress';
      break;
    case 'information':
      status = 'custom';
      icon = () => <InformationCircleOutline className="ui-lib-notice__icon" />;
      break;
    case 'alert':
      icon = () => <Alert />;
      status = 'custom';
      break;
    case 'notFound':
      icon = () => <NotFound />;
      status = 'custom';
      break;
    default:
      icon = () => <InformationCircleOutline className="ui-lib-notice__icon" />;
      status = 'custom';
      break;
  }

  const {
    i18n,
    daysPendingForLicenceExpiry,
    content,
    licenceNumber,
    title,
    dropDownConfig = null,
    downloadLicenceBtnConfig = null,
    finishDownloadBtnConfig = null,
    msgCode = 'default',
  } = props;

  let localizedTitle = '';
  let localizedContent = '';
  switch (msgCode) {
    case 'checkRenewalEligibility107':
      localizedTitle = i18n(title, { daysPendingForLicenceExpiry });
      localizedContent = i18n(content);
      break;
    case 'success':
      localizedTitle = i18n(title);
      localizedContent = i18n(content, { licenceNumber });
      break;
    default:
      localizedTitle = i18n(title);
      localizedContent = i18n(content);
  }

  const renderNotice = (data: IVariables) => {
    return (
      <Notice
        buttons={data.buttons.map((button: IButton) => ({
          'aria-label': `button-${button.variant}`,
          withArrow: button.withArrow,
          alignIcon: button.alignIcon,
          label: i18n(button.label),
          uiType: button.uiType,
          onClick: () => {
            if (button.link) {
              data.history.push(button.link);
            } else if (button.onClick) {
              button.onClick(data);
            }
          },
        }))}
        content={content && <div>{localizedContent}</div>}
        icon={icon}
        status={status}
        tags={
          data.tags &&
          data.tags.map((tag: Tags) => ({
            label: i18n(tag.label),
            value: tag.value,
          }))
        }
        title={localizedTitle}
      />
    );
  };

  const renderLink = (data: IVariables) => {
    return (
      <>
        {data.link && (
          <div>
            <p>
              {i18n('payment.link.text1')}{' '}
              <a href={data.link} rel="noopener noreferrer">
                {i18n('payment.link.text2')}
              </a>{' '}
              {i18n('payment.link.text3')}
            </p>
          </div>
        )}
        <div className="marginTop" />
      </>
    );
  };

  const renderFooterSection = () => {
    return (
      <>
        {downloadLicenceBtnConfig && (
          <div className="align-center">
            <Button {...downloadLicenceBtnConfig(props)} />
          </div>
        )}
        <div className="notice-container__dropdown align-center">
          {dropDownConfig && <Dropdown {...dropDownConfig(props)} />}
        </div>
        {finishDownloadBtnConfig && (
          <div className="align-center">
            <Button {...finishDownloadBtnConfig(props)} />
          </div>
        )}

        <div style={{ height: 100 }} />
      </>
    );
  };

  return (
    <div className="notice-container">
      <Container
        locale={props.locale}
        sidebar={
          props.currentStep ? (
            <Sidebar
              currentStep={props.currentStep}
              currentSubStep={props.currentSubStep}
              i18n={props.i18n}
              steps={props.steps}
              stepsStatus={props.stepsStatus}
            />
          ) : (
            false
          )
        }
      >
        {renderNotice(props)}
        {renderLink(props)}
        {renderFooterSection()}
      </Container>
    </div>
  );
}

NoticeTemplate.propTypes = {
  ...routePropTypes,
  /** Type of notice, will determine icon and layout */
  type: PropTypes.oneOf(types.NOTICE_TYPES),
  /** Title */
  title: PropTypes.string.isRequired,
  /** Custom icon, use only in special cases */
  customIcon: PropTypes.shape({
    /** Icon name from our icon library */
    icon: PropTypes.string,
    /** Color of icon */
    color: PropTypes.string,
    /** Background color */
    bgColor: PropTypes.string,
  }),
  /** Image, to be used to display result as certificates or licenses */
  image: PropTypes.shape({
    /** Image source, base64 or url */
    src: PropTypes.string.isRequired,
    /** Image title in English used in alt */
    titleEn: PropTypes.string,
    /** Image title in English used in alt */
    titleAr: PropTypes.string,
  }),
  /** Buttons list, use it to add primary and secondary buttons */
  ...buttonsPropTypes,
  /** Table with details for notice */
  ...tablePropTypes,
};

NoticeTemplate.defaultProps = {
  type: noticeTypes.INFO,
  image: {},
  customIcon: {},
};

export default withTemplateHooks(NoticeTemplate);
