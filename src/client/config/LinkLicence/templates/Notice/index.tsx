import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables, noticeTypes } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import types from '@tamm/app-composer/client/constants/types';
import Notice, { Tags } from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import SidebarTemplate from 'client/templates/Sidebar';
import Icon from '@tamm/ui-lib-v2-icon';
import { AlertCircleFilled, LoadingCircle2 } from '@tamm/ui-lib-v2-icon/Icons';
import List from '@tamm/ui-lib-v2-list';
import tablePropTypes from '../../propTypes/table';
import buttonsPropTypes from '../../propTypes/buttons';
import './index.less';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => any;
  variant: any;
  label: string;
  uiType: string;
  withArrow: boolean;
}

/**
 * Notice template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  const { i18n, type } = props;
  let status: 'success' | 'failure' | 'custom' | 'inProgress';
  let icon;
  switch (type) {
    case noticeTypes.SUCCESS:
      status = 'success';
      break;
    case noticeTypes.WARNING:
      status = 'custom';
      icon = () => (
        <Icon className="alert-circle-filled" source={LoadingCircle2} />
      );
      break;
    case noticeTypes.INFO:
      status = 'failure';
      icon = () => (
        <Icon className="alert-circle-filled" source={AlertCircleFilled} />
      );
      break;
    default:
      status = 'inProgress';
      break;
  }

  const otherService = () => {
    if (status === 'success') {
      const {
        onSuccessRedirect: { description, title, link },
      } = props;
      return (
        <div>
          <hr style={{ margin: '4rem auto' }} />
          <List
            i18n={i18n}
            items={[
              {
                id: '1',
                label: i18n(description),
                link,
              },
            ]}
            title={i18n(title)}
            withArrow
            withBoldContent
          />
        </div>
      );
    }
    return '';
  };

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <SidebarTemplate
            currentStep={props.currentStep || ''}
            i18n={props.i18n}
            steps={props.steps}
            showRelatedJourneyCard
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <Notice
          buttons={
            props.buttons &&
            props.buttons.map((button: IButton) => ({
              'aria-label': `button-${button.variant}`,
              label: i18n(button.label),
              uiType: button.uiType || 'secondary',
              withArrow: button.withArrow || false,
              alignIcon: 'start',
              onClick: button.onClick,
              // size: 'medium',
            }))
          }
          icon={icon}
          content={
            <div>
              {props.subTitle && <h5>{i18n(props.subTitle)}</h5>}
              {props.description && <p>{i18n(props.description)}</p>}
            </div>
          }
          status={status}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              label: i18n(tag.label),
              value: tag.value,
            }))
          }
          title={i18n(props.noticeTitle)}
        />
        {otherService()}
        <div style={{ height: 100 }} />
      </Container>
    </>
  );
}

NoticeTemplate.propTypes = {
  ...routePropTypes,
  /** Type of notice, will determine icon and layout */
  type: PropTypes.oneOf(types.NOTICE_TYPES),
  /** Title */
  noticeTitle: PropTypes.string.isRequired,
  /** Subtitle */
  subTitle: PropTypes.string,
  /** Text displayed in notice  */
  description: PropTypes.string.isRequired,
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
  /** Additionally uploaded file due to the economic name /  economic licence return */
  /** Buttons list, use it to add primary and secondary buttons */
  ...buttonsPropTypes,
  /** Table with details for notice */
  ...tablePropTypes,
};

NoticeTemplate.defaultProps = {
  type: noticeTypes.WARNING,
  subTitle: '',
  image: {},
  customIcon: {},
};

export default withTemplateHooks(NoticeTemplate);
