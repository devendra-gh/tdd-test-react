import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Table from '@tamm/ui-lib-v2-table';
import Button from '@tamm/ui-lib-v2-button';
import './index.less';

/**
 * Summary template
 * @param       {Object} props
 * @returns     {JSX}
 */
function SummaryTemplate(props: IVariables) {
  const { i18n } = props;

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={i18n}
            stepsStatus={props.stepsStatus}
            steps={props.steps}
          />
        }
      >
        <div style={{ height: 20 }} />
        <div className="table-col-width-50">
          {props.summaryList &&
            props.summaryList.constructor === Array &&
            props.summaryList.map((item: any) => (
              <Table
                i18n={i18n}
                columns={item.columns}
                headerHidden={item.headerHidden}
                items={item.items}
                title={item.title}
                size={item.uiType}
                selectable={false}
                {...item}
              />
            ))}
        </div>
        <div style={{ height: 60 }} />
        {props.activitiesList &&
          props.activitiesList.constructor === Array &&
          props.activitiesList.map((item: any) => (
            <Table
              i18n={i18n}
              columns={item.columns}
              headerHidden={item.headerHidden}
              items={item.items}
              title={item.title}
              size={item.uiType}
              selectable={false}
              {...item}
            />
          ))}
        <div style={{ height: 60 }} />
        <Button
          aria-label="button-primary"
          size="default"
          type="button"
          uiType="secondary"
          name="backBtn"
          onClick={e => props.onClick(props)}
          label={i18n('button.back')}
          withArrow
          alignIcon="start"
        />
        <div style={{ height: 60 }} />
      </Container>
    </>
  );
}

SummaryTemplate.propTypes = {
  ...routePropTypes,
  /** Title */
  // eslint-disable-next-line react/no-unused-prop-types
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  summaryList: PropTypes.instanceOf(Object).isRequired,
  // eslint-disable-next-line react/require-default-props
  activitiesList: PropTypes.instanceOf(Object).isRequired,
};

SummaryTemplate.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  summaryList: [],
  // eslint-disable-next-line react/default-props-match-prop-types
  activitiesList: [],
};

export default withTemplateHooks(SummaryTemplate);
