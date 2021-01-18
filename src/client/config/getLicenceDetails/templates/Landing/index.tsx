import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Sidebar from 'client/templates/Sidebar';
/**
 * Landing template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Landing(props: IVariables) {
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
            stepsStatus={props.stepsStatus}
            showRelatedJourneyCard={props.showRelatedJourneyCard}
          />
        }
      >
        <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
          <JourneyLandingTemplate
            description={i18n('getLicenceDetails.subTitle.serviceDescription')}
            helpfulBlock={{
              commentField: {},
              emailField: {},
              // onFieldChange: () => {},
              // onSubmit: {
              //   onClick: () => {},
              // },
              telephoneField: {
                countries: [],
              },
            }}
            startLogin={{
              buttonLabel: i18n('button.welcome'),
              description: i18n('getLicenceDetails.subTitle.onStart'),
              title: i18n('getLicenceDetails.title.tradeLicenceDetails'),
              onClick: () =>
                props.history.push('/get-licence-details/licence-number'),
            }}
            title={i18n('getLicenceDetails.title.serviceDescription')}
          />
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Landing.propTypes = {
  ...routePropTypes,
};

// @ts-ignore
export default withTemplateHooks(Landing);
