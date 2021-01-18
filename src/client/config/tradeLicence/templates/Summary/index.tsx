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

/**
 * is function
 * @param  {[type]} obj [description]
 * @returns {[type]}     [description]
 */
function isFunction(obj: any) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

interface ISumamry extends IRouteVariables {
  i18n: (key: string) => string;
  title: string;
  subTitle: string;
  description: string;
  locale: string;
  currentStep: string;
  currentSubStep: string;
  reservationPeriod: string;
  steps: IStep[];
  stepsStatus: Record<string, string>;
  buttons: {
    onClick: (props: IVariables) => void;
    label: string;
    uiType: '"primary" | "secondary" | "tertiary" | "ghost" | undefined';
    withArrow: boolean;
  }[];
  list: Function;
  totalSection: Function;
}

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */
const SummaryTemplate = (props: ISumamry) => {
  // const list =
  //   props.list.constructor === Array
  //     ? props.list
  //     : isFunction(props.list)
  //     ? props.list(props.reservationPeriod || '03')
  //     : [];

  let list;
  if (props.list.constructor === Array) {
    list = props.list;
  } else if (isFunction(props.list)) {
    list = props.list(props.reservationPeriod || '03');
  } else {
    list = [];
  }

  const totalSection = isFunction(props.totalSection)
    ? props.totalSection(props.reservationPeriod)
    : props.totalSection;

  const getDescription = (data: IVariables) => {
    return (
      <div>
        {data.subTitle && (
          <h1 className="syb-title" style={{ marginBottom: '2rem' }}>
            {data.i18n(data.subTitle)}
          </h1>
        )}
        {data.description && (
          <p style={{ color: '#000' }}>{data.i18n(data.description)}</p>
        )}
      </div>
    );
  };

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
        {getDescription(props)}

        <div className="summary">
          {list &&
            list.constructor === Array &&
            list.map((item: any) => (
              <div className="summary__table">
                <Table
                  i18n={props.i18n}
                  columns={item.columns}
                  headerHidden={item.headerHidden}
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
              value={totalSection}
            />
          </div>

          <div className="summary__group">
            {props.buttons &&
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
    </>
  );
};

SummaryTemplate.prototypes = {
  ...routePropTypes,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.instanceOf(Function).isRequired,
  button: PropTypes.instanceOf(Object).isRequired,
};

SummaryTemplate.defaultProps = {
  // subTitle: '',
  // description: '',
  list: [],
};

export default withTemplateHooks(SummaryTemplate);
