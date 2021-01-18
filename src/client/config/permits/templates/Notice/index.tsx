/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable complexity */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
// import types from '@tamm/app-composer/client/constants/types';
import Notice from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Alert from '@tamm/ui-lib-v2-alert';
import Table from '@tamm/ui-lib-v2-table';
import Sidebar from 'client/templates/PermitsSidebar';
import Button from '@tamm/ui-lib-v2-button';
import Loading from 'client/templates/Loading';
import { validationTypes } from 'client/config/utils/checkValidation';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import buttonsPropTypes from '../../propTypes/buttons';
import tablePropTypes from '../../propTypes/table';
import FileUploads from '../PermitForm/components/FileUpload';

interface IButton {
  link?: string;
  onClick?: (props: IVariables) => void;
  variant: any;
  label: string;
  uiType: string;
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
  const {
    showUpload,
    i18n,
    serviceType,
    entityApproval,
    icon,
    onNextClick,
  } = props;
  const [validate, setValidate] = useState(false);

  const reUpload = () => {
    setValidate(true);
    const isValid = props.validation(props);
    if (!isValid) {
      return;
    }
    props.reUpload(props);
  };

  const messageItems: any[] = [
    {
      id: '1',
      comments: props.comments,
    },
  ];
  const messageRejectedItems: any[] = [
    {
      id: '1',
      comments: props.commentMessage,
    },
  ];

  const entityItems: any[] = [
    {
      id: '1',
      entity: i18n('entityApproval.table.entity1'),
      instructions: i18n('entityApproval.table.instructions1'),
      address: i18n('entityApproval.table.address'),
    },
    {
      id: '2',
      entity: i18n('entityApproval.table.entity2'),
      instructions: i18n('entityApproval.table.instructions1'),
      address: i18n('entityApproval.table.address'),
    },
    {
      id: '3',
      entity: i18n('entityApproval.table.entity3'),
      instructions: i18n('entityApproval.table.instructions1'),
      address: i18n('entityApproval.table.address'),
    },
  ];
  const entityItems1: any[] = [
    {
      id: '1',
      entity: i18n('entityApproval.table.entity4'),
      instructions: i18n('entityApproval.table.instructions2'),
    },
  ];

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          (props.currentStep || props.currentStep === '') && (
            <Sidebar
              currentStep={props.currentStep}
              currentSubStep={props.currentSubStep}
              i18n={props.i18n}
              steps={props.steps}
              stepsStatus={props.stepsStatus}
              hideSidebar={props.hideSidebar}
            />
          )
        }
      >
        <Notice
          buttons={props.buttons.map((button: IButton) => ({
            'aria-label': `button-${button.variant}`,
            label: i18n(button.label),
            uiType: button.uiType ? button.uiType : 'primary',
            withArrow: props.withArrow,
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
            <div>
              {props.subTitle && <h5>{i18n(props.subTitle)}</h5>}
              {props.content && <p>{i18n(props.content)}</p>}
            </div>
          }
          status={props.status}
          icon={icon}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              ...tag,
              label: i18n(tag.label),
            }))
          }
          title={i18n(props.title)}
        />
        {props.finishButton && (
          <>
            {props.commentMessage && (
              <Table
                i18n={i18n}
                clickable={false}
                columns={[
                  {
                    id: 'comments',
                    title: i18n('application.tableHeader.feedback'),
                  },
                ]}
                headerHidden={false}
                items={messageRejectedItems}
                selectable={false}
              />
              // <Table
              //   clickable={false}
              //   columns={[
              //     {
              //       id: 'feedBack',
              //       title: i18n('application.tableHeader.feedback'),
              //     },
              //     {
              //       id: 'text',
              //       title: i18n('application.tableHeader.date'),
              //       align: 'end',
              //     },
              //   ]}
              //   headerHidden={false}
              //   items={messageRejectedItems}
              //   selectable={false}
              // />
            )}
            <div style={{ height: 50 }} />

            <Button
              alignIcon="end"
              aria-label="button-primary"
              label={i18n('button.finish')}
              onClick={() => props.onFinish(props)}
              size="default"
              type="button"
              uiType="primary"
            />
            <div style={{ height: 50 }} />
          </>
        )}
        {props.additionalTextWithLink && props.link && (
          <div>
            <p>
              {i18n(props.text1)}{' '}
              <a href={props.link} target="_blank" rel="noopener">
                {i18n(props.text2)}
              </a>{' '}
              {i18n(props.text3)}
            </p>
          </div>
        )}
        {showUpload && serviceType && (
          <React.Fragment>
            {props.permitSubmitting && <Loading />}
            {props.permitServerError && (
              <div className="ui-lib-margin-b_md" id="error-message-div">
                <Alert message={i18n(props.permitServerError)} status="error" />
              </div>
            )}

            {props.comments && (
              <Table
                i18n={i18n}
                clickable={false}
                columns={[
                  {
                    id: 'comments',
                    title: i18n('application.tableHeader.feedback'),
                  },
                ]}
                headerHidden={false}
                items={messageItems}
                selectable={false}
              />
            )}
            <div style={{ height: 50 }} />
            <FileUploads
              inputGroups={[
                {
                  name: i18n('title.addAttachments'),
                  stateKey: 'returnPage',
                  fields: [
                    {
                      'aria-label': 'global.returnFilesTitle',
                      elementType: 'fileUpload',
                      name: 'documents',
                      accept: ['application/pdf'],
                      label: 'global.returnFilesTitle',
                      help: 'global.uploadHelpPhoto',
                      multiple: true,
                      maxSize: 2e6,
                      validationConfig: {
                        type: validationTypes.REQUIRED_FILE,
                      },
                    },
                  ],
                },
              ]}
              handleChange={(value: any) =>
                props.actions.returnPage.update({
                  ...value.returnPage,
                })
              }
              values={{
                returnPage: props.returnPage,
              }}
              serviceType={props.serviceType}
              name="returnPage"
              i18n={i18n}
              startShowingErrors={validate}
              colSpan={12}
            />

            <hr style={{ marginBottom: 15 }} />
            <Button
              alignIcon="end"
              aria-label="button-primary"
              label={i18n('submit')}
              onClick={reUpload}
              size="default"
              type="button"
              uiType="primary"
            />
            <div style={{ height: 50 }} />
          </React.Fragment>
        )}
        {entityApproval && (
          <>
            <hr />
            <ServiceTemplate
              description={
                <div>
                  <p>{i18n('entityApproval.sectionContent')}</p>
                </div>
              }
              title={i18n('entityApproval.sectionTitle')}
            />
            <Table
              i18n={i18n}
              clickable={false}
              columns={[
                {
                  id: 'entity',
                  title: i18n('entityApproval.tableTitle.entity'),
                },
                {
                  align: 'end',
                  id: 'instructions',
                  title: i18n('entityApproval.tableTitle.instructions'),
                },
                {
                  hideFor: ['lg', 'xl'],
                  align: 'end',
                  id: 'address',
                  title: i18n('entityApproval.tableTitle.Address'),
                },
              ]}
              headerHidden={false}
              items={entityItems}
              onClick={() => {}}
              size="default"
            />
            <Table
              i18n={i18n}
              clickable={false}
              columns={[
                {
                  id: 'entity',
                  title: '',
                },
                {
                  align: 'end',
                  id: 'instructions',
                  title: '',
                },
              ]}
              headerHidden
              items={entityItems1}
              onClick={() => {}}
              size="default"
            />
            <div style={{ marginTop: 40 }} />
            <Button
              alignIcon="end"
              aria-label="button-primary"
              label={i18n('next')}
              onClick={e => {
                onNextClick(props);
              }}
              size="default"
              type="button"
              uiType="primary"
            />
            <div style={{ height: 50 }} />
          </>
        )}
      </Container>
    </>
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
