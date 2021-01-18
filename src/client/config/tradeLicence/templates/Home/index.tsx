import React from 'react';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';

interface IStep {
  label: string;
  description: string;
}
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const {
    i18n,
    processSteps,
    processTitle,
    serviceTitle,
    serviceDescription,
    startButton,
  } = props;
  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={[]}
          stepsStatus={props.stepsStatus}
          // showRelatedJourneyCard={props.showRelatedJourneyCard} // should uncomment after merge with all other services
        />
      }
    >
      <JourneyLandingTemplate
        description={i18n(serviceDescription)}
        helpfulBlock={{
          // onFieldChange: function noRefCheck() {},
          // onSubmit: function noRefCheck() {},
          telephoneField: {
            countries: [],
          },
        }}
        process={{
          steps: processSteps.map((step: IStep) => ({
            label: i18n(step.label),
            description: i18n(step.description),
          })),
          title: i18n(processTitle),
        }}
        startLogin={{
          buttonLabel: i18n(startButton.label),
          description: i18n(startButton.description),
          title: i18n(startButton.title),
          onClick: () => startButton.onClick(props),
        }}
        title={i18n(serviceTitle)}
      />
    </Container>
  );
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
