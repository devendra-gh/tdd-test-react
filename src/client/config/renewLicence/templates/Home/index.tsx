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
  const { i18n, onSubmit } = props;
  const items = [
    {
      description: i18n('label.original'),
      document: i18n('label.tawtheeqLetter'),
      id: '0',
    },
  ];

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
            showTracker={false}
            stepsStatus={props.stepsStatus}
          />
        }
      >
        <div>
          <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
            <JourneyLandingTemplate
              description={i18n('main.description')}
              helpfulBlock={{}}
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
                  {
                    description: i18n('step4.description'),
                    label: i18n('step4.title'),
                  },
                  {
                    description: i18n('step5.description'),
                    label: i18n('step5.title'),
                  },
                  {
                    description: i18n('step6.description'),
                    label: i18n('step6.title'),
                  },
                ],
                title: i18n('label.process'),
              }}
              startLogin={{
                buttonLabel: i18n('label.start'),
                description: i18n('renew.economic.licence.renew.all'),
                title: i18n('main.title'),
                onClick: () => onSubmit(props),
              }}
              tables={[
                {
                  columns: [
                    {
                      id: 'document',
                      title: i18n('label.document'),
                    },
                    {
                      align: 'end',
                      id: 'description',
                      title: i18n('label.description'),
                    },
                  ],
                  items,
                  title: i18n('label.requiredDocuments'),
                },
              ]}
              title={i18n('label.serviceDescription')}
            />
          </div>
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
