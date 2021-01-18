import React from 'react';
import Notice, { Tags } from '@tamm/ui-lib-v2-notice';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import { AlertCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import Icon from '@tamm/ui-lib-v2-icon';
import List from '@tamm/ui-lib-v2-list';

import routePropTypes from '@tamm/app-composer/client/propTypes/route';
/**
 * Status template
 * @param       {Object} props
 * @returns     {JSX}
 */

function SuccessInfoTemplate(props: IVariables) {
  const { i18n } = props;
  const customIcon = () => {
    return <Icon className="alert-circle" source={AlertCircleFilled} />;
  };

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
        />
      }
    >
      <Notice
        buttons={[]}
        content={
          <div>
            {props.subTitle && <h5>{i18n(props.subTitle)}</h5>}
            {props.text && (
              <p>{i18n(props.text, { number: props.reservationPeriod })}</p>
            )}
          </div>
        }
        status={props.type}
        icon={customIcon}
        tags={
          props.tags &&
          props.tags.map((tag: Tags) => ({
            label: i18n(tag.label),
            value: tag.value,
          }))
        }
        title={i18n(props.title, { number: props.reservationPeriod })}
      />
      <div style={{ padding: '5rem 0' }}>
        <div style={{ borderTop: '0.1rem solid #e0e0e1', height: '0.1rem' }} />
      </div>
      <List
        i18n={i18n}
        items={props.links}
        title={i18n('addEconomicActivity.other-links.title')}
        withArrow
        withBoldContent
      />
    </Container>
  );
}

SuccessInfoTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(SuccessInfoTemplate);
