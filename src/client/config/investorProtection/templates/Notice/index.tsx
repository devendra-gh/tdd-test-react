import React from 'react';
import { withTemplateHooks, IVariables, noticeTypes } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Notice, { Tags } from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { getButtons } from './helpers';

/**
 * Notice template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  const { i18n } = props;
  let status: 'success' | 'failure' | 'inProgress';
  switch (props.type) {
    case noticeTypes.SUCCESS:
      status = 'success';
      break;
    case noticeTypes.WARNING:
      status = 'failure';
      break;
    default:
      status = 'inProgress';
      break;
  }
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            showSteps={props.showSteps}
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <Notice
          content={i18n(props.content)}
          buttons={getButtons(props)}
          status={status}
          tags={
            props.tags &&
            props.tags.map((tag: Tags) => ({
              label: i18n(tag.label),
              value: tag.value,
            }))
          }
          title={i18n(props.title)}
        />
        <div style={{ height: 100 }} />
      </Container>
    </>
  );
}

NoticeTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(NoticeTemplate);
