import React from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import PropTypes from 'prop-types';

import { AlertCircleFilled, LoadingCircle2 } from '@tamm/ui-lib-v2-icon/Icons';
import Button from '@tamm/ui-lib-v2-button';
import Dropdown from '@tamm/ui-lib-v2-dropdown';
import Form from '@tamm/ui-lib-v2-form';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Notice from '@tamm/ui-lib-v2-notice';

import ServerError from 'client/templates/ServerError';
import Sidebar from 'client/templates/Sidebar';

import tablePropTypes from 'client/config/amendments/propTypes/table';
import buttonsPropTypes from 'client/config/amendments/propTypes/buttons';

import ReturnPageContent from './ReturnPageContent';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: string;
  alignIcon: string;
  withArrow: string;
}

interface Tags {
  label: string;
  value: string;
}

/**
 * NoticeTemplate template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  const {
    i18n,
    locale,
    additionalTextWithLink,
    amendmentServerError,
    cnNumber,
    content,
    currentPage,
    currentStep,
    currentSubStep,
    dedErrorMessage,
    downloadLicences,
    link,
    onReviewApplication,
    // showSidebar,
    startOver,
    status,
    steps,
    stepsStatus,
    subTitle,
    tags,
    text1,
    text2,
    text3,
    title,
  } = props;
  const pageContent =
    currentPage === 'applicationApproved'
      ? i18n(content, { cnNumber: cnNumber || '' })
      : i18n(content);

  const ApplicationError = () => {
    return (
      <Form
        submitButton={{
          label: i18n('button.reviewApplication'),
          withArrow: false,
          onClick: () => onReviewApplication(props),
        }}
      >
        {dedErrorMessage && (
          <Form.Fieldset title={i18n('applicationError.subTitle')}>
            {/* eslint-disable react/no-danger */}
            <p dangerouslySetInnerHTML={{ __html: dedErrorMessage }} />
          </Form.Fieldset>
        )}
      </Form>
    );
  };

  const ApplicationApproved = () => {
    return (
      <div className="display-flex flex-flow-wrap">
        <div className="back-button-wrap">
          <Button
            active={false}
            alignIcon="end"
            aria-label={i18n('button.downloadLicence')}
            label={i18n('button.downloadLicence')}
            name="Button"
            size="default"
            type="button"
            uiType="primary"
            onClick={() => downloadLicences('license', props)}
          />
        </div>
        <div className="next-button-wrap">
          <Dropdown
            items={[
              {
                id: 'receipt',
                label: i18n('receipt'),
              },
              {
                id: 'hasALicense',
                label: i18n('licenceOwnershipCertificate'),
              },
              {
                id: 'commercial',
                label: i18n('commercialRegisterCertificate'),
              },
            ]}
            label={i18n('downloadOthers')}
            uiType="secondary"
            onChange={(value: any) => downloadLicences(value, props)}
          />
        </div>
        <div className="next-button-wrap-extreme">
          <Button
            active={false}
            alignIcon="end"
            aria-label={i18n('button.goToDashBoard')}
            label={i18n('button.goToDashBoard')}
            name="Button"
            size="default"
            type="button"
            uiType="secondary"
            onClick={() => startOver(props)}
          />
        </div>
      </div>
    );
  };

  const AdditionalTextWithLink = () => {
    return (
      <Form.Fieldset>
        <Informational>
          <p>
            {i18n(text1)}{' '}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {i18n(text2)}
            </a>{' '}
            {i18n(text3)}
          </p>
        </Informational>
      </Form.Fieldset>
    );
  };

  return (
    <Container
      locale={locale}
      sidebar={
        <Sidebar
          currentStep={currentStep}
          currentSubStep={currentSubStep}
          i18n={i18n}
          steps={steps}
          stepsStatus={stepsStatus}
          // showSidebar={showSidebar}
        />
      }
    >
      <Form.Fieldset>
        <Informational>
          <ServerError amendmentServerError={amendmentServerError} />
          <Notice
            buttons={props.buttons.map((button: IButton) => ({
              'aria-label': `button-${button.variant}`,
              label: i18n(button.label),
              uiType: button.uiType ? button.uiType : 'primary',
              withArrow: button.withArrow ? button.withArrow : false,
              alignIcon: button.alignIcon ? button.alignIcon : '',
              onClick: () => {
                if (button.link) {
                  props.history.push(button.link);
                } else if (button.onClick) {
                  button.onClick(props);
                }
              },
              size: 'medium',
            }))}
            content={
              <Informational>
                {subTitle && <h5>{i18n(subTitle)}</h5>}
                <p>{pageContent}</p>
              </Informational>
            }
            status={status}
            icon={() =>
              currentPage.includes([
                'applicationReturned',
                'applicationError',
                'noInfoFound',
                'noInfo',
              ]) === true ? (
                <AlertCircleFilled className="ui-lib-notice__icon" />
              ) : (
                <LoadingCircle2 className="ui-lib-notice__icon" />
              )
            }
            tags={
              tags &&
              tags.map((tag: Tags) => ({
                ...tag,
                label: i18n(tag.label),
              }))
            }
            title={i18n(title)}
          />
        </Informational>
      </Form.Fieldset>

      {additionalTextWithLink && link && <AdditionalTextWithLink {...props} />}
      {currentPage === 'applicationError' && <ApplicationError {...props} />}
      {currentPage === 'applicationApproved' && (
        <ApplicationApproved {...props} />
      )}
      {currentPage === 'applicationReturned' && (
        <ReturnPageContent {...props} />
      )}
    </Container>
  );
}

NoticeTemplate.propTypes = {
  ...routePropTypes,
  /** Type of notice, will determine icon and layout */
  // type: PropTypes.oneOf(types.NOTICE_TYPES),
  /** Title */
  title: PropTypes.string.isRequired,
  /** Subtitle */
  subTitle: PropTypes.string,
  /** Text displayed in notice  */
  // text: PropTypes.string.isRequired,
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
  // type: noticeTypes.INFO,
  subTitle: '',
  image: {},
  customIcon: {},
};

export default withTemplateHooks(NoticeTemplate);
