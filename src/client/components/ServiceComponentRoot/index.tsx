import React, { useState, memo, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { IVariables } from '@tamm/app-composer';
import { getSmartpassData, getCMSData } from 'client/utils/appData';
import baseUrl from 'client/utils/baseUrl';

import { LocaleProvider } from '@tamm/ui-lib-v2-localization';
import Header from '@tamm/ui-lib-v2-header';
import ServiceComponent from 'client/components/ServiceComponent';

import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';

/* istanbul ignore file */

const user = getSmartpassData();
const { journeyInfo } = getCMSData();

function ServiceComponentRoot(props: IVariables) {
  const [lang, setLang] = useState<string>('en');
  const isLocal = window.location.href.indexOf('http://localhost') === 0;

  useEffect(() => {
    const queryParams = new URLSearchParams(props.location.search);
    const language =
      queryParams.get('lang') || localStorage.getItem('lang') || 'en';

    setLang(language);
    localStorage.setItem('lang', language);
  }, []);

  // const meta = getMetaData();
  const onLanguageChange = useCallback(() => {
    const l = lang === 'en' ? 'ar' : 'en';
    setLang(l);
    localStorage.setItem('lang', l);
  }, [lang]);

  const headerInfo = journeyInfo?.[lang]?.headerInfo || {};

  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <LocaleProvider locale={lang}>
        <div>
          <Header
            i18n={props.i18n}
            locale={lang}
            logo={headerInfo.logo}
            burgerMenuLinks={headerInfo.burgerMenuLinks}
            loggedOutUserIconPath={headerInfo.loggedOutUserIconPath}
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
            user={{
              isLoggedIn: !!user,
              welcomeMessage: headerInfo.welcomeMessage,
              name: user
                ? `${user[`First Name ${lang.toUpperCase()}`]} ${
                    user[`Last Name ${lang.toUpperCase()}`]
                  } `
                : '',
              avatarPath: user ? `data:image/gif;base64,${user.Photo}` : '',
              profileMenuLinks: headerInfo.profileMenuLinks || [],
            }}
            logoutLink={{
              label: headerInfo.logoutLabel || 'logout',
              link: `${window.location.origin}${baseUrl}/api/smartpass/${
                isLocal ? 'demo-logout' : 'logout'
              }`,
              linkTarget: '_self',
            }}
            onLanguageChange={onLanguageChange}
          />
          <ServiceComponent
            serviceId={props.match.params.serviceId}
            history={props.history}
          />
        </div>
      </LocaleProvider>
    </>
  );
}

export default memo(ServiceComponentRoot);
