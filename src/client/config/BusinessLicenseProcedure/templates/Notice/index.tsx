import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables, noticeTypes } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import types from '@tamm/app-composer/client/constants/types';
import Notice, { Tags } from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { AlertCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import Icon from '@tamm/ui-lib-v2-icon';
import tablePropTypes from '../../propTypes/table';
import buttonsPropTypes from '../../propTypes/buttons';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  withArrow: boolean;
  alignIcon: string;
}

/**
 * Notice template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  const { i18n } = props;
  let status: 'success' | 'failure' | 'custom' | 'inProgress';
  switch (props.type) {
    case noticeTypes.SUCCESS:
      status = 'success';
      break;
    case noticeTypes.WARNING:
      status = 'failure';
      break;
    case 'inProgress':
      status = 'inProgress';
      break;
    default:
      status = 'custom';
      break;
  }
  return (
    <>
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
        <Notice
          buttons={props.buttons.map((button: IButton) => ({
            'aria-label': `button-${button.variant}`,
            label: i18n(button.label),
            onClick: () => {
              if (button.link) {
                props.history.push(button.link);
              } else if (button.onClick) {
                button.onClick(props);
              }
            },
            withArrow: button.withArrow,
            alignIcon: button.alignIcon,
            uiType: button.variant,
          }))}
          content={
            <div>
              {props.subTitle && <h5>{i18n(props.subTitle)}</h5>}
              {props.text && (
                <p>{i18n(props.text, { number: props.reservationPeriod })}</p>
              )}
            </div>
          }
          status={status}
          icon={() => {
            return <Icon className="alert-circle" source={AlertCircleFilled} />;
          }}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              label: i18n(tag.label),
              value: tag.value,
            }))
          }
          title={i18n(props.title, { number: props.reservationPeriod })}
        />
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
  title: PropTypes.string.isRequired,
  /** Subtitle */
  subTitle: PropTypes.string,
  /** Text displayed in notice  */
  text: PropTypes.string.isRequired,
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
  type: noticeTypes.INFO,
  subTitle: '',
  image: {},
  customIcon: {},
};

export default withTemplateHooks(NoticeTemplate);
