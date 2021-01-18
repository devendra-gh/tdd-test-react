import React from 'react';
import PropTypes from 'prop-types';
import {
  withTemplateHooks,
  IVariables,
  IRouteVariables,
} from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Table from '@tamm/ui-lib-v2-table';
import Container from 'client/containers';
import Sidebar from 'client/templates/PermitsSidebar';
import Total from '@tamm/ui-lib-v2-total';
import Button from '@tamm/ui-lib-v2-button';
import { IStep } from 'client/config/permits/steps';
import './Summary.less';

interface ISumamry extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  subTitle: string;
  description: string;
  locale: string;
  currentStep: string;
  currentSubStep: string;
  steps: IStep[];
  stepsStatus: Record<string, string>;
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
  totalSection: number;
}

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */
const SummaryTemplate = (props: ISumamry) => {
  return (
    <Container
      locale={props.locale}
      sidebar={
        props.currentStep ? (
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
          />
        ) : (
          false
        )
      }
    >
      <div className="">
        {props.subTitle && (
          <h1 className="syb-title" style={{ marginBottom: '2rem' }}>
            {props.i18n(props.subTitle)}
          </h1>
        )}
        {props.description && (
          <p style={{ color: '#000' }}>{props.i18n(props.description)}</p>
        )}
      </div>
      <div className="summary">
        {props.list &&
          props.list.constructor === Array &&
          props.list.map((item: any) => (
            <div className="summary__group">
              <Table
                i18n={props.i18n}
                columns={item.columns}
                headerHidden={item.headerHidden}
                items={item.items}
                title={item.title}
                //uiType={item.uiType}
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
          {!!props.totalSection &&
            props.buttons &&
            props.buttons.constructor === Array &&
            props.buttons.map(btn => (
              <Button
                aria-label={btn.label}
                label={props.i18n(btn.label)}
                onClick={() => btn.onClick(props)}
                // uiType={btn.uiType}
                withArrow={btn.withArrow}
              />
            ))}
        </div>
      </div>
    </Container>
  );
};

SummaryTemplate.prototypes = {
  ...routePropTypes,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.instanceOf(Object).isRequired,
  button: PropTypes.instanceOf(Object).isRequired,
};

export default withTemplateHooks(SummaryTemplate);
