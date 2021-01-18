import React, { useEffect } from 'react';
import { IVariables, withTemplateHooks } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Header from '@tamm/ui-lib-v2-header';
import Hero from '@tamm/ui-lib-v2-hero';
import { getCMSData } from 'client/utils/appData';
import baseUrl, { imagePath } from 'client/utils/baseUrl';

const qs = require('query-string');

const { journeyInfo } = getCMSData();
// const { navigationItems } = getCMSData();

/**
 * Header component
 * @param       {Object} props
 * @returns     {JSX}
 */
function HeaderTemplate(props: IVariables) {
  const { i18n, locale } = props;

  const isLocal = window.location.href.indexOf('http://localhost') === 0;
  const headerInfo = journeyInfo?.[locale]?.headerInfo || {};

  // const navItems = navigationItems
  //   ? navigationItems[locale].map(
  //       (item: { text: string; url: string }, index: number) => ({
  //         id: `nav${index}`,
  //         label: item.text,
  //         link: item.url,
  //         isVisible: true,
  //       }),
  //     )
  // : [];

  const getTitle = () => {
    let { title } = props;
    const {
      location: { pathname },
      serviceType,
    } = props;

    const titlePath =
      pathname === '/' ||
      pathname === '/login' ||
      pathname === '/404' ||
      pathname === '/account-upgrade' ||
      pathname === '/api/smartpass/demo-login' ||
      pathname === '/api/smartpass/login';
    if (pathname === '/economic-licence/submit') {
      title = props.economicLicense.pageTitle;
    } else if (title) {
      title = serviceType && !titlePath ? `${title}.${serviceType}` : title;
    }

    return title;
  };

  useEffect(() => {
    const queryParams = qs.parse(props.history.location.search);

    if (queryParams.language) {
      if (queryParams.language !== props.locale && props.actions.locale) {
        props.actions.locale.switch();
      }
    }
  }, []);

  return (
    <>
      <Header
        i18n={props.i18n}
        locale={locale}
        logo={headerInfo.logo}
        burgerMenuLinks={headerInfo.burgerMenuLinks}
        loggedOutUserIconPath={headerInfo.loggedOutUserIconPath}
        user={{
          isLoggedIn: !!props.user,
          welcomeMessage: headerInfo.welcomeMessage,
          name: props.user
            ? `${props.user[`First Name ${locale.toUpperCase()}`]} ${
                props.user[`Last Name ${locale.toUpperCase()}`]
              } `
            : '',
          avatarPath: props.user
            ? `data:image/gif;base64,${props.user.Photo}`
            : '',
          profileMenuLinks: headerInfo.profileMenuLinks || [],
        }}
        registerLink={headerInfo.registerLink}
        smartPassButton={{
          imagePath: headerInfo.smartPassImage,
          link: `/api/smartpass/${isLocal ? 'demo-login' : 'login'}`,
        }}
        uaePassButton={{
          imagePath: headerInfo.uaePassImage,
          link: `/api/smartpass/${
            isLocal ? 'demo-login' : 'login?provider=uaepass'
          }`,
        }}
        logoutLink={{
          label: headerInfo.logoutLabel || i18n('logout'),
          link: `${baseUrl}/api/smartpass/${
            isLocal ? 'demo-logout' : 'logout'
          }`,
        }}
        onLanguageChange={props.actions.locale.switch}
      />
      <Hero
        aspectOfLifeType={props.aspectOfLifeType}
        backgroundBase64Extension=""
        backgroundImage={`${imagePath}/hero.jpg`}
        breadcrumbs={[
          ...props.breadcrumbs.map((bc: { label: string; link: string }) => ({
            ...bc,
            label: i18n(bc.label),
          })),
        ]}
        internal
        title={i18n(getTitle())}
      />
    </>
  );
}

HeaderTemplate.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(HeaderTemplate);
