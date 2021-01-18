import React, { useState } from 'react';
import cookie from 'react-cookies';

import Footer from '@tamm/ui-lib-v2-footer';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import CookieTray from '@tamm/ui-lib-v2-cookie-tray';

import { getCMSData } from 'client/utils/appData';
import { getLogUuid } from 'client/utils/logUuid';
import { Feedback } from 'client/templates/Feedback';
import { BugReport } from 'client/templates/BugReport';
import { hasFeatureFlag } from 'client/services/featureFlag';

const { journeyInfo = {} } = getCMSData();

const cookiePrivacy =
  parseInt(cookie.load('privacy-notification') || '', 10) !== 1;

/**
 * Header component
 * @param       {Object} props
 * @returns     {JSX}
 */
function FooterTemplate(props: IVariables) {
  const { locale } = props;
  const [showPrivacy, setShowPrivacy] = useState(cookiePrivacy);

  const footerInfo = journeyInfo?.[locale]?.footerInfo || {};

  return (
    <>
      <Feedback i18n={props.i18n} />
      {hasFeatureFlag('bugReport') ? <BugReport /> : null}
      {showPrivacy && (
        <CookieTray
          i18n={props.i18n}
          cookieTrayStorageKey="ui-lib-cookey-key"
          onClick={() => {
            cookie.save('privacy-notification', '1', { path: '/' });
            setShowPrivacy(false);
          }}
        />
      )}
      <Footer
        locale={locale}
        logUuid={getLogUuid()}
        emergencyItems={
          footerInfo.emergencyNumbers &&
          footerInfo.emergencyNumbers.map((item: IVariables) => ({
            label: item.name,
            number: item.number,
          }))
        }
        emergencyViewMoreLink={footerInfo.viewAllEmergencyNumbers}
        emergencyViewMoreLinkTarget="_blank"
        translateLabel={footerInfo.translateLabel}
        colorLabel={footerInfo.colorLabel}
        fontSizeLabel={footerInfo.fontSizeLabel}
        appLinks={
          footerInfo.downloadApps &&
          footerInfo.downloadApps.map((item: IVariables) => ({
            iconPath: item.appImage,
            link: item.appLink,
            linkTarget: '_self',
            target: '_self',
          }))
        }
        socialLinks={
          footerInfo.socialLinks &&
          footerInfo.socialLinks.map((item: IVariables) => ({
            iconPath: item.socialSiteImage,
            link: item.socialSiteLink,
            linkTarget: '_self',
            target: '_self',
          }))
        }
        emiratesLogo={{
          iconPath:
            footerInfo.logos &&
            footerInfo.logos[0] &&
            footerInfo.logos[0].image,
        }}
        copyright={{
          label: footerInfo.copyrightMessage,
        }}
        bottomRightLinks={
          footerInfo.copyrights &&
          footerInfo.copyrights.map((item: IVariables) => ({
            label: item.copyrightName,
            link: item.copyrightLink,
            linkTarget: '_self',
            target: '_self',
          }))
        }
      />
    </>
  );
}

FooterTemplate.propTypes = {
  ...routePropTypes,
};

export { FooterTemplate };

export default withTemplateHooks(FooterTemplate);
