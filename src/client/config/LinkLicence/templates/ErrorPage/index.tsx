import React from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Container from 'client/containers';
import Notice from '@tamm/ui-lib-v2-notice';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
function ErrorPage(props: IVariables) {
  const { i18n, button } = props;
  props.actions.breadcrumbs.update(props.breadcrumbs);

  const buttonProps = {
    label: i18n(button.label),
    withArrow: button.withArrow,
    uiType: button.uiType || 'secondary',
    alignIcon: button.alignIcon || 'start',
    onClick: button.onClick,
  };

  return (
    <>
      <Container locale={props.locale}>
        <Notice
          buttons={[buttonProps]}
          content={<div>{i18n('errorPage.text')}</div>}
          status="failure"
          title={i18n('errorPage.title')}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

ErrorPage.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ErrorPage);
