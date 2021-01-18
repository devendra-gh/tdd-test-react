import React, { useEffect } from 'react';
import Notice from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';

import routePropTypes from '@tamm/app-composer/client/propTypes/route';
/**
 * Status template
 * @param       {Object} props
 * @returns     {JSX}
 */

function StatusInfo(props: IVariables) {
  useEffect(() => {
    props.init(props);
  }, []);

  const {
    applicationStatus,
    ApplicationStatusComments,
    customId,
  } = props.applicationStatusResponse;

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
        />
      }
    >
      <Notice
        title={`${props.i18n(props.titlePrefix(props))}
        ${applicationStatus}`}
        status={props.getStatus(props)}
        content={ApplicationStatusComments}
        tags={[
          {
            label: props.i18n('checkApplicationStatus.infoPage.tag'),
            value: customId,
          },
        ]}
        buttons={[
          {
            'aria-label': 'button-secondary',
            label: props.i18n('button.back'),
            onClick: () => {
              props.history.push('/application-status/enter-number');
            },
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
          },
        ]}
      />
    </Container>
  );
}

StatusInfo.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(StatusInfo);
