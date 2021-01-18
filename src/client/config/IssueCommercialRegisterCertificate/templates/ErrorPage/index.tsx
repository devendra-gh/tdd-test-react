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
  const { i18n, handleBackButton } = props;
  props.actions.breadcrumbs.update(props.breadcrumbs);

  const buttonProps = {
    'aria-label': i18n('selectLicence.empty.button'),
    label: i18n('selectLicence.empty.button'),
    withArrow: true,
    uiType: 'secondary',
    alignIcon: 'start',
    onClick: (_: any) => handleBackButton(props),
  };

  return (
    <>
      <Container locale={props.locale}>
        <div role="navigation" arial-label="Error Page">
          <Notice
            buttons={[buttonProps]}
            content={<div>{i18n('errorPage.text')}</div>}
            status="failure"
            title={i18n('errorPage.title')}
          />
        </div>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

ErrorPage.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(ErrorPage);
