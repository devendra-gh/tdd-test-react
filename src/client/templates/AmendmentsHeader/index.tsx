import React, { useEffect, useState, useCallback } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import baseUrl, { imagePath } from 'client/utils/baseUrl';
import { getCMSData } from 'client/utils/appData';
import qs from 'query-string';
import { includes, pick } from 'lodash';
import cookie from 'react-cookies';
import Header from '@tamm/ui-lib-v2-header';
import AppTray from '@tamm/ui-lib-v2-app-tray';
import Hero from '@tamm/ui-lib-v2-hero';
import RenderDefinition from 'client/components/workbench/v3/RenderDefinition';
import formatState from 'client/utils/workbench/formatState';

/* istanbul ignore file */

const { journeyInfo } = getCMSData();

export const onLanguageChange = (props: IVariables) => {
  return () => {
    const newSearch = window.location.search
      .replace(/[?&]lang=[^&]+/, '')
      .replace(/^&/, '?');
    props.history.push({ search: newSearch });
    props.actions.locale.switch();
  };
};

export const getSearchUrl = (props: IVariables) => {
  return `${
    window.location.origin
  }${baseUrl}/pub/search/autosuggest?term=$[searchTerm]&${qs.stringify({
    count: 5,
    lang: props.locale === 'ar' ? 'ar-AE' : 'en',
  })}`;
};

export const onSearch = (search: string) => {
  window.location.assign(`${window.location.origin}/searchresults?q=${search}`);
};
const DEFAULT_SHARED_PROPS = ['i18n', 'locale', 'tammUrl', 'tammWorkbenchUrl'];

/**
 * Header component
 * @param       {Object} props
 * @returns     {JSX}
 */
// eslint-disable-next-line complexity
function HeaderTemplate(props: IVariables) {
  console.info(
    'HEADER PROPS',
    props,
    props.hero,
    Object.prototype.hasOwnProperty.call(props, 'hero'),
  );
  const { i18n, locale } = props;
  const isLocal = window.location.href.indexOf('http://localhost') === 0;
  const getSharedProps = useCallback(
    (sharedProps: string[]) =>
      pick(props, [...DEFAULT_SHARED_PROPS, ...(sharedProps || [])]),
    [props],
  );

  const headerInfo = journeyInfo?.[locale]?.headerInfo || {};
  try {
    headerInfo.burgerMenuLinks = headerInfo.burgerMenuLinks.map(
      (group: any) => {
        return {
          ...group,
          links: group.links.map((link: any) => ({
            ...link,
            target: '_self',
            linkTarget: '_self',
          })),
        };
      },
    );
  } catch (error) {
    console.info(error);
  }
  const [mobileAppInfo, setMobileAppInfo] = useState<any>(null);
  // eslint-disable-next-line complexity
  useEffect(() => {
    let lang = props.location.pathname.split('/')[1];
    if (includes(['en', 'ar-AE'], lang)) {
      if (lang === 'ar-AE') {
        lang = 'ar';
      }
      if (lang !== props.locale) {
        props.actions.locale.switch();
      }
      cookie.save('tamm#lang', lang === 'en' ? 'en' : 'ar-AE', { path: '/' });
    } else {
      let cookieLang = cookie.load('tamm#lang');
      if (cookieLang?.toLowerCase() === 'ar-ae') cookieLang = 'ar';

      console.info('COOKIE LANG', props.locale, cookieLang);
      if (typeof cookieLang !== 'undefined' && cookieLang !== props.locale) {
        props.actions.locale.switch();
      }

      if (cookieLang) {
        lang = cookieLang;
      } else {
        lang = props.locale;
      }
    }
    const mobileBannerInfo = journeyInfo?.[lang]?.mobileBannerInfo || {};

    const hideTrayCookie = cookie.load('hide');
    if (!hideTrayCookie) {
      setMobileAppInfo({
        bannerText: mobileBannerInfo.description,
        logoUrl: mobileBannerInfo.image,
        buttonText: mobileBannerInfo.downloadlabel,
        appLinks: {
          ios: mobileBannerInfo.appleplayurl,
          android: mobileBannerInfo.googleplayurl,
        },
      });
    }
  }, [props.location.pathname]);

  return (
    <>
      {mobileAppInfo && (
        <AppTray
          i18n={props.i18n}
          bannerText={mobileAppInfo.bannerText}
          logoUrl={mobileAppInfo.logoUrl}
          buttonText={mobileAppInfo.buttonText}
          appLinks={mobileAppInfo.appLinks}
          onClose={() => cookie.save('hide', true, null)}
        />
      )}
      <Header
        i18n={props.i18n}
        locale={locale}
        logo={headerInfo.logo}
        burgerMenuLinks={headerInfo.burgerMenuLinks}
        loggedOutUserIconPath={headerInfo.userIcon}
        user={{
          isLoggedIn: !!props.user,
          welcomeMessage: headerInfo.welcomeMessage,
          name: props.user
            ? `${props.user[`First Name ${locale.toUpperCase()}`]} ${
                props.user[`Last Name ${locale.toUpperCase()}`]
              } `
            : '',
          avatarPath:
            props.user && props.user.Photo
              ? `data:image/gif;base64,${props.user.Photo}`
              : '',
          defaultAvatarPath: headerInfo.loggedOutUserIconPath,
          profileMenuLinks: headerInfo.profileMenuLinks || [],
        }}
        registerLink={headerInfo.registerLink}
        smartPassButton={{
          imagePath: headerInfo.smartPassImage,
          link: `${window.location.origin}${baseUrl}/api/smartpass/${
            isLocal ? 'demo-login' : 'login'
          }`,
          linkTarget: '_self',
        }}
        uaePassButton={{
          imagePath: headerInfo.uaePassImage,
          link: `${window.location.origin}${baseUrl}/api/smartpass/${
            isLocal ? 'demo-login' : 'login?provider=uaepass'
          }`,
          linkTarget: '_self',
        }}
        logoutLink={{
          label: headerInfo.logoutLabel || i18n('logout'),
          link: `${window.location.origin}${baseUrl}/api/smartpass/${
            isLocal ? 'demo-logout' : 'logout'
          }`,
          linkTarget: '_self',
        }}
        onLanguageChange={onLanguageChange(props)}
        searchUrl={getSearchUrl(props)}
        onSearchItemSelect={onSearch}
        onSearch={onSearch}
      />
      {Object.prototype.hasOwnProperty.call(props, 'hero') ? (
        props.hero !== false &&
        props.hero.map((definition: any) => {
          const stateFullDefinition = formatState(definition, props);
          return (
            <RenderDefinition
              key={definition.componentId}
              definition={stateFullDefinition}
              getSharedProps={getSharedProps}
            />
          );
        })
      ) : (
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
          title={i18n(props.title)}
        />
      )}
    </>
  );
}

HeaderTemplate.propTypes = {
  ...routePropTypes,
};

export { HeaderTemplate };

export default withTemplateHooks(HeaderTemplate);
