/* eslint-disable complexity */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import SidebarTemplate from '@tamm/ui-lib-v2-sidebar-template';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Table from '@tamm/ui-lib-v2-table';
import Total from '@tamm/ui-lib-v2-total';
import Form from '@tamm/ui-lib-v2-form';
import Container from 'client/containers';
import imagePath from 'client/utils/baseUrl';
import TermsAndConditions from '../../components/TermsAndConditions';
import Loading from '../../../../templates/Loading';
import './Summary.less';

interface ISumamry extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  subtitle: string;
  description: string;
  locale: string;
  // currentStep: string;
  // currentSubStep: string;
  // steps: IStep[];
  stepsStatus: Record<string, string>;
  termsAndConditionsValues: [];
  termsAndConditions: IVariables[];
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
    withArrow: boolean;
  }[];
  list: {
    labelHeading?: string;
    valueHeading?: string;
    listDetails: {
      label: string;
      value?: string;
    }[];
  }[];
  process: IVariables;
  stepStatus: IVariables;
  totalSection: number;
  handleTermsConditions: Function;
  businessKey: string;
  instanceId: string;
  showErrors: boolean;
  startingPayment: boolean;
}

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */
const SummaryTemplate = (props: ISumamry) => {
  const { i18n, process, stepStatus } = props;

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

  return (
    <Container
      locale={props.locale}
      sidebar={<SidebarTemplate {...sidebarTemplateData} />}
    >
      {props.startingPayment && <Loading />}
      <div className="">
        {props.subtitle && (
          <h1 className="syb-title" style={{ marginBottom: '2rem' }}>
            {props.i18n(props.subtitle)}
          </h1>
        )}
        {props.description && (
          <p style={{ color: '#000' }}>{props.i18n(props.description)}</p>
        )}
      </div>
      <div className="summary">
        <Form
          {...props}
          submitButton={
            !!props.totalSection && props.buttons && props.businessKey
              ? {
                  label: i18n(props.buttons[0] && props.buttons[0].label),
                  onClick: () => {
                    props.buttons[0].onClick(props);
                  },
                  withArrow: true,
                }
              : undefined
          }
          cancelLink={
            !!props.totalSection && props.buttons && props.businessKey
              ? {
                  label: i18n(props.buttons[1] && props.buttons[1].label),
                  onClick: () => {
                    props.buttons[1].onClick(props);
                  },
                  href: '',
                }
              : undefined
          }
        >
          {props.list &&
            props.list.constructor === Array &&
            props.list.map((item: any) => (
              <div className="summary__group summary__group__table">
                <Table
                  i18n={i18n}
                  columns={item.columns}
                  headerHidden={item.headerHidden}
                  items={item.items}
                  title={item.title}
                  {...item}
                />
              </div>
            ))}
          <div className="summary__group">
            <Total
              isValueFirst={false}
              unit={props.i18n('global.aed')}
              value={props.totalSection}
            />
          </div>
          <div className="summary__group">
            <TermsAndConditions
              handleClick={(item: number) =>
                props.handleTermsConditions(props, item)
              }
              items={props.termsAndConditions}
              i18n={props.i18n}
              checked={props.termsAndConditionsValues}
              showErrors={props.showErrors}
            />
          </div>
        </Form>
      </div>
    </Container>
  );
};

SummaryTemplate.prototypes = {
  ...routePropTypes,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.instanceOf(Object).isRequired,
  button: PropTypes.instanceOf(Object).isRequired,
  termsAndConditions: PropTypes.instanceOf(Array),
};

export default withTemplateHooks(SummaryTemplate);
