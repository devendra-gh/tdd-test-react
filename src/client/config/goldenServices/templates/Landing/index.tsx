import React from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import JourneyLandingTemplate from '@tamm/ui-lib-v2-journey-landing-template';
import Sidebar from 'client/templates/Sidebar';
import { PATH_DETAILS } from '../../routes';

/**
 * Landing template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Landing(props: IVariables) {
  const { i18n } = props;
  const items = [
    {
      description: i18n('goldenServices.label.serviceFees'),
      fee: 'AED 1000',
      id: '0',
    },
  ];

  // {
  //   description: i18n('label.original'),
  //   document: i18n('label.tawtheeqLetter'),
  //   id: '0',
  // }

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
          />
        }
      >
        <div>
          <div className="ui-lib-story-container ui-lib-story-container_bg-light-grey">
            <JourneyLandingTemplate
              description={i18n('goldenServices.subTitle.serviceDescription')}
              helpfulBlock={{
                // callField: {
                //   onChange: function noRefCheck() {},
                // },
                commentField: {
                  // onChange: function noRefCheck() {},
                },
                emailField: {
                  // onChange: function noRefCheck() {},
                },
                onFieldChange: function noRefCheck() {},
                onSubmit: {
                  onClick: function noRefCheck() {},
                },
                telephoneField: {
                  countries: [
                    {
                      code: 374,
                      name: 'Armenia',
                    },
                    {
                      code: 375,
                      name: 'Belarus',
                    },
                    {
                      code: 961,
                      name: 'Lebanon',
                    },
                    {
                      code: 971,
                      name: 'UAE',
                    },
                    {
                      code: 1,
                      name: 'US',
                    },
                  ],
                  // onChange: function noRefCheck() {},
                },
              }}
              process={{
                steps: [
                  {
                    description: i18n(
                      'goldenServices.steps.desc.addApplicationInformation',
                    ),
                    label: i18n(
                      'goldenServices.steps.addApplicationInformation',
                    ),
                  },
                  {
                    description: i18n('goldenServices.steps.desc.makePayment'),
                    label: i18n('goldenServices.steps.makePayment'),
                  },
                  {
                    description: i18n(
                      'goldenServices.steps.desc.appointmentSummary',
                    ),
                    label: i18n('goldenServices.steps.appointmentSummary'),
                  },
                ],
                title: i18n('goldenServices.title.process'),
              }}
              startLogin={{
                buttonLabel: i18n('button.welcome'),
                description: i18n('goldenServices.subTitle.onStart'),
                title: i18n('goldenServices.title.goldenServices'),
                onClick: () => props.history.push(PATH_DETAILS),
              }}
              tables={[
                {
                  columns: [
                    {
                      id: 'description',
                      title: i18n('goldenServices.label.description'),
                    },
                    {
                      align: 'end',
                      id: 'fee',
                      title: i18n('goldenServices.label.fee'),
                    },
                  ],
                  items,
                  title: i18n('goldenServices.label.fee'),
                },
              ]}
              title={i18n('goldenServices.title.serviceDescription')}
            />
          </div>
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

Landing.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Landing);
