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
        <JourneyLandingTemplate
          description={i18n('payfines.subTitle.desc.serviceDescription')}
          helpfulBlock={{
            commentField: {},
            emailField: {},
            // onFieldChange: function noRefCheck() {},
            // onSubmit: {
            //   onClick: function noRefCheck() {},
            // },
            telephoneField: {
              countries: [],
            },
          }}
          process={{
            steps:
              props.stepsSummary &&
              props.stepsSummary.map(({ name }: { name: string }) => ({
                label: i18n(name),
                description: i18n(`${name}.desc`),
              })),

            title: i18n('sidebar.steps'),
          }}
          startLogin={{
            buttonLabel: i18n('button.start'),
            description: i18n('payfines.onStart.desc'),
            title: i18n('payfines.title'),
            onClick: () =>
              props.history.push('/business-licence-fine/enter-licence'),
          }}
          title={i18n('payfines.subTitle.serviceDescription')}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Landing.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Landing);
