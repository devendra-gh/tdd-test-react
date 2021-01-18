import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Sidebar from 'client/templates/Sidebar';
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
            steps={[]}
            stepsStatus={props.stepsStatus}
            showRelatedJourneyCard
          />
        }
      >
        <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
          <JourneyLandingTemplate
            description={i18n('cgp_with_this')}
            helpfulBlock={
              {
                // // callField: {
                // //   onChange: noRefCheck,
                // // },
                // commentField: {
                //   onChange: noRefCheck,
                // },
                // emailField: {
                //   onChange: noRefCheck,
                // },
                // // onChange: noRefCheck,
                // // submitButton: {
                // //   onClick: noRefCheck,
                // // },
                // telephoneField: {
                //   countries: [],
                //   onChange: noRefCheck,
                // },
              }
            }
            startLogin={{
              buttonLabel: i18n('button.welcome'),
              description: i18n('cgp_home_desc'),
              title: i18n('main.title'),
              onClick: () => props.onStart(props),
            }}
            title={i18n('cpg_service')}
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
