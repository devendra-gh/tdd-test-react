/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables, noticeTypes } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import types from '@tamm/app-composer/client/constants/types';
import Notice from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import DocumentListSection from 'client/config/components/DocumentListSection';
import DEDFileUpload from 'client/config/components/DEDFileUpload';
import SubmitLicence from 'client/config/components/SubmitLicence';

import InvestmentCompass from 'client/config/components/InvestmentCompass';
import { Alert, NotFound } from 'client/config/components/Icons';
import AlertNotification from '@tamm/ui-lib-v2-alert';
import { InformationCircleOutline } from '@tamm/ui-lib-v2-icon/Icons';
import tablePropTypes from '../../propTypes/table';
import buttonsPropTypes from '../../propTypes/buttons';
// import { Link } from 'react-router-dom';

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
/* eslint-disable complexity */
function NoticeTemplate(props: IVariables) {
  let status: 'success' | 'failure' | 'custom' | 'inProgress';
  let icon: (...args: any[]) => void = () => {};
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
    case 'information':
      status = 'custom';
      icon = InformationCircleOutline;

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
      icon = InformationCircleOutline;

      status = 'custom';
      break;
  }
  const { i18n } = props;

  let moaMessage = '';
  if (
    props.uniqueId === 'economic-licence-approved' &&
    props.licenceType &&
    props.businessLegalFormCode &&
    ['allInOne', 'tajer'].includes(props.licenceType)
  ) {
    if (props.businessLegalFormCode === '3') {
      moaMessage = i18n('moa_llc_ded_message');
    }
    if (props.businessLegalFormCode === '34') {
      moaMessage = i18n('moa_sole_ded_message');
    }
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
          content={
            <div>
              {props.subTitle && <h5>{i18n(props.subTitle)}</h5>}
              {props.text && (
                <p>{i18n(props.text, { number: props.reservationPeriod })}</p>
              )}
            </div>
          }
          icon={icon}
          status={status}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              label: i18n(tag.label),
              value: tag.value,
            }))
          }
          title={i18n(props.title, { number: props.reservationPeriod })}
        />
        {props.additionalTextWithLink && (
          <div>
            <p>
              {i18n(props.text1)}{' '}
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                {i18n(props.text2)}
              </a>{' '}
              {i18n(props.text3)}
            </p>
          </div>
        )}
        {props.videoSrc && (
          <div>
            <video
              ref={React.createRef()}
              src={props.videoSrc}
              // src='https://www.tamm.abudhabi/journeys/media/video_en.mp4'
              controls
              autoPlay
              style={{ width: '100%', height: '100%' }}
            >
              <track src={props.videoSrc} kind="captions" />
            </video>
          </div>
        )}
        {props.showUpload && (
          <DEDFileUpload
            i18n={props.i18n}
            documentCategory={props.documentCategory}
            disableDocumentCategorySelection={
              props.disableDocumentCategorySelection
            }
            selectedDocumentCategory={props.selectedDocumentCategory}
            uploadDocs={props.uploadDocs}
            documentCategoryChange={props.documentCategoryChange}
            // handleDocumentDelete={props.handleDocumentDelete}
            onFileUpload={props.onFileUpload}
            actions={props.actions}
            capId={props.capId || ''}
          />
        )}
        {props.list && (
          <>
            <hr style={{ marginTop: '4rem' }} />
            <div style={{ marginTop: '4rem' }}>
              <DocumentListSection
                i18n={i18n}
                history={props.history}
                title={props.sectionTitle}
                description={props.sectionDescription}
                list={props.list}
                buttons={props.sectionButtons}
                businessKey={props.businessKey}
              />
            </div>
          </>
        )}
        {props.isSubmitLicenceNeeded && (
          <>
            {/* {console.log(
              '=================== props ============================',
              props,
            )} */}
            <hr style={{ marginTop: '4rem' }} />
            <SubmitLicence
              i18n={i18n}
              locale={props.locale}
              files={props.documents}
              subTitle={props.licenceSubTitle}
              activities={props.economicLicenceActivities}
              legalType={props.legalType}
              showMultipleDocumentUpload={props.showMultipleDocumentUpload}
              onFileUpload={props.onFileUpload}
              onRemoveFile={props.onRemoveFile}
              fetchAttachments={props.fetchAttachments}
              termsAndConditions={props.termsAndConditions}
              licenceButton={props.licenceButton}
              actions={props.actions}
              conditions={props.conditions}
              businessKey={props.businessKey}
              inputField={props.inputField}
              inputOnBlur={props.inputOnBlur}
              inputOnChange={props.inputOnChange}
              validateStatus={props.tawtheeqStatus}
              inputFieldValue={props.tawtheeqValue}
            />
          </>
        )}
        {moaMessage && (
          <div>
            <div style={{ height: 50 }} />
            <div>
              <AlertNotification message={moaMessage} status="warning" />
            </div>
          </div>
        )}
        {/* business guide */}
        {props.categories && (
          <>
            <hr style={{ marginTop: '4rem' }} />
            <div style={{ marginTop: '4rem' }}>
              <InvestmentCompass
                i18n={i18n}
                categories={
                  props.locale === 'en'
                    ? props.categories.categoriesEn
                    : props.categories.categoriesAr
                }
              />
            </div>
          </>
        )}

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
  onRemoveFile: PropTypes.func,
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
  documentCategory: '',
  disableDocumentCategorySelection: false,
  selectedDocumentCategory: '',
  documentCategoryChange: () => {},
  onFileUpload: () => {},
  onRemoveFile: () => {},
};

// @ts-ignore
export default withTemplateHooks(NoticeTemplate);
