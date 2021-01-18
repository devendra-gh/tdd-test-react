import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
// import Spinner from '@tamm/ui-lib-v2-spinner';
import SidebarTemplate from 'client/templates/Sidebar';
import Loading from '../../../../templates/Loading';
// import { Link } from 'react-router-dom';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Home(props: IVariables) {
  const { i18n, onStart } = props;

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
          {props.submitting && <Loading />}
          <JourneyLandingTemplate
            title={i18n('service.description.title')}
            description={i18n('service.description.body')}
            startLogin={{
              buttonLabel: i18n('service.startLogin.start'),
              description: i18n('service.startLogin.description'),
              onClick: () => onStart(props),
              title: '',
            }}
            process={{
              title: i18n('service.process.title'),
              steps: [
                {
                  description: i18n('service.process.step1.description'),
                  label: i18n('makePayment'),
                },
                {
                  description: i18n('service.process.step2.description'),
                  label: i18n('downloadCertificate'),
                },
              ],
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
}

Home.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Home);
