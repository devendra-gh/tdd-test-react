import React from 'react';
import Sidebar from 'client/templates/Sidebar';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
/**
 * ServiceHomeTemplate template
 * @param       {Object} props
 * @returns     {JSX}
 */

function ServiceHomeTemplate(props: IVariables) {
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
          startLogin={{
            title: i18n('commericalPromotions.title'),
            buttonLabel: i18n('button.start'),
            description: i18n(props.startLogin.description),
            onClick: () => {
              props.onSubmit(props);
            },
          }}
          helpfulBlock={props.helpfulBlock}
          title={props.i18n(props.title)}
          description={props.i18n(props.description)}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

ServiceHomeTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ServiceHomeTemplate);
