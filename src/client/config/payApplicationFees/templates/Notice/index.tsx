/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-bind */
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
import HelpfulBlock from '@tamm/ui-lib-v2-helpful-block';
import tablePropTypes from '../../../propTypes/table';
import buttonsPropTypes from '../../../propTypes/buttons';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
}

interface Files {
  file?: object;
  status?: any;
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
// eslint-disable-next-line complexity
function NoticeTemplate(props: IVariables) {
  let status: 'success' | 'failure' | 'custom' | 'inProgress';
  let icon;
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
    waitingMsg,
    content,
    licenceNumber,
    title,
  } = props;
  let localizedTitle = waitingMsg || title;
  localizedTitle = daysPendingForLicenceExpiry
    ? i18n(localizedTitle, { daysPendingForLicenceExpiry })
    : i18n(localizedTitle);
  // eslint-disable-next-line no-nested-ternary
  const localizedContent = content
    ? licenceNumber
      ? i18n(content, { licenceNumber })
      : i18n(content)
    : '';
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
            uiType: button.uiType,
            onClick: () => {
              if (button.link) {
                props.history.push(button.link);
              } else if (button.onClick) {
                button.onClick(props);
              }
            },
            // size: 'medium',
          }))}
          content={content && <div>{localizedContent}</div>}
          icon={icon}
          status={status}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              label: i18n(tag.label),
              value: tag.value,
            }))
          }
          title={localizedTitle}
        />
        {props.link && (
          <>
            <div style={{ height: 50 }} />
            <div>
              <p>
                {i18n('payment.link.text1')}{' '}
                <a href={props.link} rel="noopener">
                  {i18n('payment.link.text2')}
                </a>{' '}
                {i18n('payment.link.text3')}
              </p>
            </div>
          </>
        )}
        <div style={{ height: 100 }} />
        {props.showHelpFulBlock ? (
          <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
            <HelpfulBlock
              callValue={false}
              // commentField={null}
              // emailField={null}
              i18n={i18n}
              // onFieldChange={function noRefCheck() {}}
              // onSubmit={function noRefCheck() {}}
              telephoneField={{
                countries: [
                  {
                    code: 374,
                    name: 'Armenia',
                  },
                  {
                    code: 375,
                    name: 'Belarus',
                  },
                  {
                    code: 961,
                    name: 'Lebanon',
                  },
                  {
                    code: 971,
                    name: 'UAE',
                  },
                  {
                    code: 1,
                    name: 'US',
                  },
                ],
              }}
            />
          </div>
        ) : (
          ''
        )}
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
  // eslint-disable-next-line react/no-unused-prop-types
  subTitle: PropTypes.string,
  /** Text displayed in notice  */
  // eslint-disable-next-line react/no-unused-prop-types
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
  videoSrc: PropTypes.string,
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
  uploadDocs: PropTypes.arrayOf(
    PropTypes.shape({
      /** s3 file path in which the file is stored */
      s3FilePath: PropTypes.string.isRequired,
      /** original name of the file */
      uploadedFileName: PropTypes.string.isRequired,
    }),
  ),
  documentCategory: PropTypes.string,
  disableDocumentCategorySelection: PropTypes.bool,
  selectedDocumentCategory: PropTypes.string,
  documentCategoryChange: PropTypes.func,
  onFileUpload: PropTypes.func,
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
  videoSrc: false,
  uploadDocs: [],
};

export default withTemplateHooks(NoticeTemplate);
