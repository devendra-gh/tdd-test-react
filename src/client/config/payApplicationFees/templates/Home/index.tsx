/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Sidebar from 'client/templates/Sidebar';
import './home.less';
/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  // const noRefCheck = () => {};
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
            showRelatedJourneyCard={true}
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
          <JourneyLandingTemplate
            description={i18n('main.description')}
            helpfulBlock={{
              // onFieldChange: () => {},
              // onSubmit: () => {},
              telephoneField: {
                countries: [],
              },
            }}
            process={{
              steps: [
                {
                  description: i18n('step1.description'),
                  label: i18n('step1.title'),
                },
                {
                  description: i18n('step2.description'),
                  label: i18n('step2.title'),
                },
                {
                  description: i18n('step3.description'),
                  label: i18n('step3.title'),
                },
              ],
              title: i18n('label.process'),
            }}
            startLogin={{
              buttonLabel: i18n('label.start'),
              description: i18n('main.description'),
              title: i18n('main.title'),
              onClick: () =>
                props.history.push('/pay-application-fees/check-application'),
            }}
            title={i18n('label.serviceDescription')}
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
