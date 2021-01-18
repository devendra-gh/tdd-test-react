import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import SidebarTemplate from 'client/templates/Sidebar';
// import { Link } from 'react-router-dom';
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const Home = (props: IVariables) => {
  const { i18n } = props;

  props.actions.breadcrumbs.update(props.breadcrumbs);

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <SidebarTemplate
            i18n={i18n}
            showRelatedJourneyCard
            currentStep=""
            steps={[]}
            stepsStatus={{}}
          />
        }
      >
        <>
          <JourneyLandingTemplate
            title={i18n(props.descriptionTitle)}
            description={i18n(props.description)}
            startLogin={{
              buttonLabel: i18n(props.startLogin.buttonLabel),
              description: i18n(props.startLogin.description),
              onClick: () => props.startLogin.onClick(props), // redirect to the find licence page
              title: '',
            }}
            process={{
              title: i18n(props.processSteps.title),
              steps: props.processSteps.steps.map((step: any, index: any) => {
                return {
                  key: index,
                  label: i18n(step.label),
                  description: i18n(step.description),
                };
              }),
            }}
            helpfulBlock={{
              callValue: true,
            }}
          />
        </>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
};

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
