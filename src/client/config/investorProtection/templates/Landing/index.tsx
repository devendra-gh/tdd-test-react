import React from 'react';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { getTables, getProcess } from './helpers';

/**
 * Landing template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Landing = (props: IVariables) => {
  // const { i18n } = props;
  return (
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
      <JourneyLandingTemplate
        startLogin={{
          title: props.i18n(props.startLogin.title),
          description: props.i18n(props.startLogin.description),
          onClick: () => {
            props.startLogin.onClick(props);
          },
          buttonLabel: props.i18n(props.startLogin.buttonLabel),
        }}
        process={getProcess(props)}
        tables={getTables(props)}
        helpfulBlock={props.helpfulBlock}
        title={props.i18n(props.title)}
        description={props.i18n(props.description)}
      />
    </Container>
  );
};

Landing.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Landing);
