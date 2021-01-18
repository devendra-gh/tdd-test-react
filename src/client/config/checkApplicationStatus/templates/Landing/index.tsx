import React from 'react';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const StatusLanding = (props: IVariables) => {
  // const { i18n } = props;
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
          showRelatedJourneyCard={props.showRelatedJourneyCard}
        />
      }
    >
      <JourneyLandingTemplate
        startLogin={{
          title: props.i18n(props.startLogin.title),
          description: props.i18n(props.startLogin.description),
          onClick: () => {
            props.startLogin.onClick(props);
          },
          buttonLabel: props.i18n(props.startLogin.buttonLabel),
        }}
        process={{
          title: props.i18n(props.process.title),
          steps: props.process.steps.map((step: any, index: any) => {
            return {
              key: index,
              label: props.i18n(step.label),
              description: props.i18n(step.description),
            };
          }),
        }}
        helpfulBlock={props.helpfulBlock}
        title={props.i18n(props.title)}
        description={props.i18n(props.description)}
      />
    </Container>
  );
};

StatusLanding.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(StatusLanding);
