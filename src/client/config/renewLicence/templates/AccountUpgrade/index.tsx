import React from 'react';
import Container from 'client/containers';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import AccountUpgradeRequiredTemplate from '@tamm/ui-lib-v2-account-upgrade-required-template';

/**
 * AccountUpgrade template
 * @param       {Object} props
 * @returns     {JSX}
 */
function AccountUpgrade(props: IVariables) {
  const { i18n, locale } = props;
  return (
    <>
      <Container locale={locale}>
        <AccountUpgradeRequiredTemplate
          button={{
            label: i18n('button.upgradeYourAccount'),
            link: 'https://smartpass.government.ae/index-en.html/how_to',
          }}
          i18n={i18n}
        />
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
}

AccountUpgrade.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(AccountUpgrade);
