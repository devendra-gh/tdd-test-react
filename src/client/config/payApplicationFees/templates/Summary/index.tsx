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
import Sidebar from 'client/templates/Sidebar';
import Total from '@tamm/ui-lib-v2-total';
import Button from '@tamm/ui-lib-v2-button';
import './Summary.less';
import { IStep } from 'client/config/steps';

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
    link?: string;
    onClick: (props: IVariables) => void;
    label: string;
    variant: any;
    alignIcon: 'start' | 'end';
    uiType: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    withArrow: boolean;
  }[];
  list: {
    labelHeading?: string;
    valueHeading?: string;
    columns: {
      id: string;
      title?: string;
    }[];
    items: {
      [name: string]: string;
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
    <>
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
                {/* <Table
                  columns={item.listDetails}
                  headerHidden={false}
                  items={null}
                  onSelectionChange={function noRefCheck() {}}
                  selectable={false}
                  title={item.title}
                  uiType="compact"
                /> */}
                <Table
                  i18n={props.i18n}
                  columns={item.columns}
                  // headerHidden={item.headerHidden}
                  items={item.items}
                  title={item.title}
                  uiType={item.uiType}
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
            {props.buttons &&
              props.buttons.constructor === Array &&
              props.buttons.map(btn => (
                <div className="summary_buttons">
                  <Button
                    aria-label={btn.label}
                    label={props.i18n(btn.label)}
                    onClick={() =>
                      btn.link
                        ? props.history.push(btn.link)
                        : btn.onClick(props)
                    }
                    alignIcon={btn.alignIcon}
                    uiType={btn.uiType}
                    withArrow={btn.withArrow}
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
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
