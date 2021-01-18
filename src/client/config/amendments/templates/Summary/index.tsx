import React from 'react';
import PropTypes from 'prop-types';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Table from '@tamm/ui-lib-v2-table';
import Container from 'client/containers';
import Sidebar from 'client/templates/AmendmentsSidebar';
import Total from '@tamm/ui-lib-v2-total';
import Button from '@tamm/ui-lib-v2-button';
import Notice from '@tamm/ui-lib-v2-notice';
import { InformationCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Alert from '@tamm/ui-lib-v2-alert';

/**
 * Summary template
 * @param {Object} props
 * @returns {JSX}
 */

const SummaryTemplate = (props: IVariables) => {
  const { list, amendmentServerError } = props;

  const icon = () => (
    <InformationCircleFilled className="ui-lib-notice__icon" />
  );
  const { i18n, pay } = props;

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={props.i18n}
          steps={props.steps}
          stepsStatus={props.stepsStatus}
          showSidebar={props.showSidebar}
        />
      }
    >
      <Notice
        buttons={props.buttons.map((button: any) => ({
          'aria-label': `button-${button.variant}`,
          label: i18n(button.label),
          uiType: button.uiType ? button.uiType : 'primary',
          withArrow: props.withArrow,
          // onClick: () => {
          //   if (button.link) {
          //     props.history.push(button.link);
          //   } else if (button.onClick) {
          //     button.onClick(props);
          //   }
          // },
          size: 'medium',
        }))}
        content={
          <Informational>
            {props.subTitle && (
              <h5 className="titleColor">{i18n(props.subTitle)}</h5>
            )}
            {props.content && (
              <p className="subtitleColor">{i18n(props.content)}</p>
            )}
          </Informational>
        }
        status="success"
        icon={icon}
        tags={
          props.tags &&
          props.tags.map((tag: any) => ({
            ...tag,
            label: i18n(tag.label),
          }))
        }
        title={i18n(props.title)}
      />
      <div className="height-20" />
      <hr />
      <div className="height-20" />
      {amendmentServerError && (
        <div id="errorMessage">
          <Alert message={amendmentServerError} status="error" />
          <div className="height-20" />
        </div>
      )}
      <Informational>
        <h3 className="titleColor">{i18n('payment.summary')}</h3>
        <p className="subtitleColor">{i18n('payment.description')}</p>
      </Informational>
      <div className="height-20" />
      <div className="summary">
        <div className="summary__group">
          <Table
            i18n={i18n}
            clickable={false}
            columns={list.columns}
            disabledSelectionVisible={false}
            headerHidden={false}
            items={list.items}
            // onClick={function noRefCheck(){}}
            // onSelectionChange={function noRefCheck(){}}
            // onToggle={function noRefCheck(){}}
            selectable={false}
            size="default"
            title={props.i18n('global.fees')}
          />
        </div>
        <div className="height-20" />
        <div className="summary__group">
          <Total unit={props.i18n('global.aed')} value={props.totalSection} />
        </div>
        <div className="height-20" />
        <div className="summary__group">
          <Button
            aria-label="pay"
            label={i18n('button.pay')}
            onClick={pay(props)}
            // uiType={btn.uiType}
            withArrow
          />
        </div>
      </div>
      <div className="height-100" />
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
