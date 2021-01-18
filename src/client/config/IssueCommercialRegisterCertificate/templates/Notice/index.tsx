/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Notice from '@tamm/ui-lib-v2-notice';
import SidebarTemplate from '@tamm/ui-lib-v2-sidebar-template';
import Container from 'client/containers';
import imagePath from 'client/utils/baseUrl';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function NoticeTemplate(props: IVariables) {
  const {
    i18n,
    buttons,
    content,
    title,
    status,
    showSidebar,
    process,
    stepStatus,
  } = props;
  props.actions.breadcrumbs.update(props.breadcrumbs);

  const baseWorkingTime = {
    label: '5 am - 10 pm',
    start: '5 am',
    end: '10 pm',
    closed: false,
  };

  const entity = {
    id: 0,
    logo: `${imagePath}/images/DED-logo.png`,
    phones: ['+971 2 815 8888'],
    email: 'contact.abudhabi.ae',
    website: 'www.adeconomy.ae',
    address: i18n('departmentOfEconomicDevelopment.address'),
    officeHours: {
      status: 'default',
      workingHours: {
        sunday: {
          ...baseWorkingTime,
        },
        monday: {
          ...baseWorkingTime,
        },
        tuesday: {
          ...baseWorkingTime,
        },
        wednesday: {
          ...baseWorkingTime,
        },
        thursday: {
          ...baseWorkingTime,
        },
        friday: {
          ...baseWorkingTime,
        },
        saturday: {
          closed: true,
        },
      },
    },
    publicServiceHours: {
      status: '24/7',
    },
  };

  const sidebarTemplateData = {
    label: i18n('sidebar.home.label'),
    relevantEntityLink: {
      label: i18n('sidebar.home.relevantEntityLink'),
    },
    process: {
      ...process,
      title: i18n(process.title),
      steps: process.steps.map((step: IVariables) => ({
        ...step,
        label: i18n(step.name),
        status: stepStatus[step.name],
      })),
    },
    relevantEntity: {
      title: i18n('relevant_entity'),
      entities: [entity],
    },
  };

  const buttonProps =
    buttons &&
    buttons.map((button: IVariables) => ({
      ...button,
      label: i18n(button.label) || '',
      onClick: () => button.onClick(props),
    }));

  let Sidebar = null;
  if (showSidebar) {
    Sidebar = <SidebarTemplate {...sidebarTemplateData} />;
  }

  return (
    <>
      <Container locale={props.locale} sidebar={Sidebar}>
        <div role="contentinfo" arial-label="Notice">
          <Notice
            buttons={buttonProps}
            content={<div>{i18n(content)}</div>}
            // icon={null}
            status={status}
            title={i18n(title)}
          />
          {props.link && (
            <>
              <div style={{ height: 50 }} />
              <p>
                {i18n('payment.link.text1')}{' '}
                <a href={props.link}>{i18n('payment.link.text2')}</a>{' '}
                {i18n('payment.link.text3')}
              </p>
            </>
          )}
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

NoticeTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(NoticeTemplate);
