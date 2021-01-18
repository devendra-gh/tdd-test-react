import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Sidebar from 'client/templates/Sidebar';
import { steps } from '../../steps';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const { i18n } = props;
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            showRelatedJourneyCard
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
          <JourneyLandingTemplate
            description={i18n('businessLicenseProcedure.home.description')}
            process={{
              steps: steps.map(step => ({
                description: i18n(`${step.name}.desc`),
                label: i18n(step.name),
              })),
              title: i18n('label.process'),
            }}
            startLogin={{
              buttonLabel: i18n('button.start'),
              description: i18n(
                'businessLicenseProcedure.home.start.description',
              ),
              title: i18n('businessLicenseProcedure.main.title'),
              onClick: () => props.onStart(props),
            }}
            title={i18n('label.serviceDescription')}
            helpfulBlock={{}}
          />
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
