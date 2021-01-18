import React, { Suspense, lazy } from 'react';
import AppComposer from '@tamm/app-composer';
import baseUrl from 'client/utils/baseUrl';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from 'client/templates/Loading';
import * as routesPayApplicationFees from 'client/config/payApplicationFees/routes'; // 1 minute
import { BASE_PATH as RENEW_LICENCE_BASE_PATH } from 'client/config/renewLicence/routes';
import { BASE_PATH as INVESTOR_PROTECTION_BASE_PATH } from 'client/config/investorProtection/routes';
import { BASE_PATH as TRADE_NAME_RESERVATION_BASE_PATH } from 'client/config/tradeLicence/routes';
import { BASE_PATH as GOLDEN_SERVICES_BASE_PATH } from 'client/config/goldenServices/routes';
import { BASE_PATH as LINK_LICENCE_BASE_PATH } from 'client/config/LinkLicence/routes';

import {
  getSmartpassData,
  getMetaData,
  getCMSData,
} from 'client/utils/appData';

import {
  config,
  fetchState,
  templates,
  skipFetchState,
  translations,
} from './config';

// eslint-disable-next-line no-console
console.log = function () {};
console.info = function () {};
console.warn = function () {};

const FETCH_STATE_LONG_INTERVAL = 1000 * 5;

const SERVER_SIDE_HANDLED = [
  '/get-licence-details',
  '/tradename-search',
  '/business-licence-procedure',
  '/commercial-promotions',
  '/consumer-good-prices',
  `${routesPayApplicationFees.BASE_PATH}`,
  '/business-licence-fine',
  '/issue-commercial-register-certificate',
  '/list-economic-licences-certificate',
  '/application-status',
  RENEW_LICENCE_BASE_PATH,
  INVESTOR_PROTECTION_BASE_PATH,
  TRADE_NAME_RESERVATION_BASE_PATH,
  GOLDEN_SERVICES_BASE_PATH,
  '/add-economic-activity',
  '/economic-record-certificate',
  '/review-fees-payment',
  '/true-copy-licence',
  '/industrial-licence-company',
  '/industrial-licence-individual',
  '/renew-industrial-licence-in-abu-dhabi',
  '/request-industrial-electricity-tariff',
  '/issue-abu-dhabi-value-certificate',
  LINK_LICENCE_BASE_PATH,
  '/api/smartpass/login',
  '/api/smartpass/logout',
  '/api/smartpass/demo-login',
  '/api/smartpass/demo-logout',
];

const { metaTags } = getCMSData();

const AppComposerInvestorProtection = lazy(() =>
  import('./config/investorProtection/appComposer'),
);

const AppComposerPayApplicationFees = lazy(() =>
  import('./config/payApplicationFees/appComposer'),
);

const AppComposerCheckApplicationStatus = lazy(() =>
  import('./config/checkApplicationStatus/appComposer'),
);

const AppComposerRenewLicence = lazy(() =>
  import('./config/renewLicence/appComposer'),
);

const AppComposerBSG = lazy(() =>
  import('./config/BusinessSetupGuide/appComposer'),
);

const AppComposerLELC = lazy(() =>
  import('./config/ListEconomicLicences/appComposer'),
);

const AppComposerICRC = lazy(() =>
  import('./config/IssueCommercialRegisterCertificate/appComposer'),
);

const AppComposerGetLicenceDetails = lazy(() =>
  import('./config/getLicenceDetails/appComposer'),
);

const AppComposerTradeNameSearch = lazy(() =>
  import('./config/tradeNameSearch/appComposer'),
);

const AppComposerTradeLicence = lazy(() =>
  import('./config/tradeLicence/AppComposer'),
);

const AppComposerBusinessLicenseProcedure = lazy(() =>
  import('./config/BusinessLicenseProcedure/appComposer'),
);

const AppComposerPromotions = lazy(() =>
  import('./config/commercialPromotions/appComposer'),
);

const AppComposerConsumerGoodPrices = lazy(() =>
  import('./config/consumer-good-prices/appComposer'),
);

const AppComposerBLF = lazy(() =>
  import('./config/BusinessLicenseFines/appComposer'),
);

const AppComposerGoldenServices = lazy(() =>
  import('./config/goldenServices/appComposer'),
);

const AppComposerAddEconomicActivity = lazy(() =>
  import('./config/AddEconomicActivity/appComposer'),
);

const AppComposerLinkLicence = lazy(() =>
  import('./config/LinkLicence/appComposer'),
);

const AppComposerTemporaryKioskAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/temporaryKioskAd/appComposer'),
);

const AppComposerAirAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/airAd/appComposer'),
);

const AppComposerPropagandaAdBoardPermit = lazy(() =>
  import('./config/permits/permitConfigs/propagandaAdBoard/appComposer'),
);

const AppComposerBannerAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/bannerAd/appComposer'),
);

const AppComposerSalesPermit = lazy(() =>
  import('./config/permits/permitConfigs/sales/appComposer'),
);

const AppComposerSeasonalPromotionsPermit = lazy(() =>
  import('./config/permits/permitConfigs/seasonalPromotions/appComposer'),
);

const AppComposerBalloonsAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/balloonsAd/appComposer'),
);

const AppComposerDrawsPermit = lazy(() =>
  import('./config/permits/permitConfigs/draws/appComposer'),
);

const AppComposerClearancePermit = lazy(() =>
  import('./config/permits/permitConfigs/clearance/appComposer'),
);

const AppComposerAwningsAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/awningsAd/appComposer'),
);

const AppComposerAdditionalSignboardPermit = lazy(() =>
  import('./config/permits/permitConfigs/additionalSignboard/appComposer'),
);

const AppComposerFixedAdSignboardPermit = lazy(() =>
  import('./config/permits/permitConfigs/fixedAdSignboard/appComposer'),
);

const AppComposerPrizeDisplayPlatformPermit = lazy(() =>
  import('./config/permits/permitConfigs/prizeDisplayPlatform/appComposer'),
);

const AppComposerVehiclesAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/vehiclesAd/appComposer'),
);

const AppComposerVendingMachineAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/vendingMachineAd/appComposer'),
);

const AppComposerVariousMachinesAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/variousMachinesAd/appComposer'),
);

const AppComposerATMAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/ATMAd/appComposer'),
);

const AppComposerAutomaticPaymentAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/automaticPaymentAd/appComposer'),
);

const AppComposerPaperAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/paperAd/appComposer'),
);

const AppComposerPaperPublishingAdPermit = lazy(() =>
  import('./config/permits/permitConfigs/paperPublishingAd/appComposer'),
);

const AppComposerCafePermit = lazy(() =>
  import('./config/permits/permitConfigs/cafe/appComposer'),
);

const AppComposerFoodTruckPermit = lazy(() =>
  import('./config/permits/permitConfigs/foodTruckPermit/appComposer'),
);

const AppComposerMobileCarPermit = lazy(() =>
  import('./config/permits/permitConfigs/mobileCarPermit/appComposer'),
);

const AppComposerAmendments = lazy(() =>
  import('./config/amendments/appComposer'),
);

const AppComposerBusinessDirectory = lazy(() =>
  import('./config/BusinessDirectory/appComposer'),
);

// const AppComposerCommon = lazy(() =>
//   import('./config/permits/permitConfigs/commonAppComposer'),
// );

// export const ComposerExported: any = lazy(() =>
//   import('./_examples/exported/Composer'),
// );

export const ComposerEconomicRecordCertificate: any = lazy(() =>
  import('./workbench/economicRecordCertificate/appComposer'),
);

export const ComposerReviewFeesPayment: any = lazy(() =>
  import('./workbench/reviewFeesPayment/Composer'),
);

export const ComposerTrueCopyLicence: any = lazy(() =>
  import('./workbench/true-copy-licence/appComposer'),
);

export const ComposerIndustrialLicenceCompany: any = lazy(() =>
  import('./workbench/industrial-licence-company/appComposer'),
);

export const ComposerIndustrialLicenceIndividual: any = lazy(() =>
  import('./workbench/industrial-licence-individual/appComposer'),
);

export const ComposerIndustrialElectricityTariff: any = lazy(() =>
  import('./workbench/industrial-electricity-tariff/appComposer'),
);

export const ComposerIssueAbuDhabiValueCertificate: any = lazy(() =>
  import('./workbench/abu-dhabi-value-certificate/appComposer'),
);

export const ComposerIndustrialLicenceRenewal: any = lazy(() =>
  import('./workbench/industrial-licence-renewal/appComposer'),
);

// export const ComposerExportedBundle: any = lazy(() =>
//   import('./_examples/exported-bundle/Composer'),
// );

// export const ComposerV3Preview = lazy(() => import('./_examples/v3/Composer'));

// export const ComposerV4Preview = lazy(() => import('./_examples/v4/Composer'));

// export const ComposerV5Preview = lazy(() => import('./_examples/v5/Composer'));

export const ServiceComponentRoot = lazy(() =>
  import('client/components/ServiceComponentRoot'),
);

const App: React.FC = () => {
  return (
    <ViewportProvider>
      <Viewport sm md lg xl>
        <Router basename={baseUrl}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path={routesPayApplicationFees.BASE_PATH}>
                <AppComposerPayApplicationFees />
              </Route>
              <Route path="/application-status">
                <AppComposerCheckApplicationStatus />
              </Route>
              <Route path={RENEW_LICENCE_BASE_PATH}>
                <AppComposerRenewLicence />
              </Route>
              <Route path="/investment-compass">
                <AppComposerBSG />
              </Route>
              <Route path={TRADE_NAME_RESERVATION_BASE_PATH}>
                <AppComposerTradeLicence />
              </Route>
              <Route path="/list-economic-licences-certificate">
                <AppComposerLELC />
              </Route>
              <Route path="/issue-commercial-register-certificate">
                <AppComposerICRC />
              </Route>
              <Route path="/get-licence-details">
                <AppComposerGetLicenceDetails />
              </Route>
              <Route path="/business-directory">
                <AppComposerBusinessDirectory />
              </Route>
              <Route path="/tradename-search">
                <AppComposerTradeNameSearch />
              </Route>
              <Route path="/business-licence-procedure">
                <AppComposerBusinessLicenseProcedure />
              </Route>
              <Route path="/commercial-promotions">
                <AppComposerPromotions />
              </Route>
              <Route path="/consumer-good-prices">
                <AppComposerConsumerGoodPrices />
              </Route>
              <Route path="/business-licence-fine">
                <AppComposerBLF />
              </Route>
              <Route path="/add-economic-activity">
                <AppComposerAddEconomicActivity />
              </Route>
              <Route path={LINK_LICENCE_BASE_PATH}>
                <AppComposerLinkLicence />
              </Route>
              <Route path="/temporary-kiosk-ad-permit-in-abu-dhabi">
                <AppComposerTemporaryKioskAdPermit />
              </Route>
              <Route path="/air-ad-permit-in-abu-dhabi">
                <AppComposerAirAdPermit />
              </Route>
              <Route path="/propaganda-ad-board-permit-in-abu-dhabi">
                <AppComposerPropagandaAdBoardPermit />
              </Route>
              <Route path="/banner-ad-permit-in-abu-dhabi">
                <AppComposerBannerAdPermit />
              </Route>
              <Route path="/sales-permit-in-abu-dhabi">
                <AppComposerSalesPermit />
              </Route>
              <Route path="/seasonal-promotions-permit-in-abu-dhabi">
                <AppComposerSeasonalPromotionsPermit />
              </Route>
              <Route path="/balloons-ad-permit-in-abu-dhabi">
                <AppComposerBalloonsAdPermit />
              </Route>
              <Route path="/draws-permit-in-abu-dhabi">
                <AppComposerDrawsPermit />
              </Route>
              <Route path="/clearance-permit-in-abu-dhabi">
                <AppComposerClearancePermit />
              </Route>
              <Route path="/awnings-ad-permit-in-abu-dhabi">
                <AppComposerAwningsAdPermit />
              </Route>
              <Route path="/additional-signboard-permit-in-abu-dhabi">
                <AppComposerAdditionalSignboardPermit />
              </Route>
              <Route path="/fixed-ad-signboard-permit-in-abu-dhabi">
                <AppComposerFixedAdSignboardPermit />
              </Route>
              <Route path="/prize-display-platform-permit-in-abu-dhabi">
                <AppComposerPrizeDisplayPlatformPermit />
              </Route>
              <Route path="/vehicles-ad-permit-in-abu-dhabi">
                <AppComposerVehiclesAdPermit />
              </Route>
              <Route path="/vending-machine-ad-permit-in-abu-dhabi">
                <AppComposerVendingMachineAdPermit />
              </Route>
              <Route path="/various-machines-ad-permit-in-abu-dhabi">
                <AppComposerVariousMachinesAdPermit />
              </Route>
              <Route path="/atm-ad-permit-in-abu-dhabi">
                <AppComposerATMAdPermit />
              </Route>
              <Route path="/automatic-payment-ad-permit-in-abu-dhabi">
                <AppComposerAutomaticPaymentAdPermit />
              </Route>
              <Route path="/paper-ad-permit-in-abu-dhabi">
                <AppComposerPaperAdPermit />
              </Route>
              <Route path="/paper-publishing-ad-permit-in-abu-dhabi">
                <AppComposerPaperPublishingAdPermit />
              </Route>
              <Route path="/cafe-permit-in-abu-dhabi">
                <AppComposerCafePermit />
              </Route>
              <Route path="/food-truck-permit-in-abu-dhabi">
                <AppComposerFoodTruckPermit />
              </Route>
              <Route path="/mobile-car-tajer-permit-in-abu-dhabi">
                <AppComposerMobileCarPermit />
              </Route>
              <Route path={INVESTOR_PROTECTION_BASE_PATH}>
                <AppComposerInvestorProtection />
              </Route>
              <Route path={GOLDEN_SERVICES_BASE_PATH}>
                <AppComposerGoldenServices />
              </Route>
              {/* <Route path="/ded/permits">
                <AppComposerCommon />
              </Route> */}
              {/* <Route path="/v4">
                <ComposerV4Preview />
              </Route>
              <Route path="/v4">
                <ComposerV4Preview />
              </Route>

              <Route path="/v5">
                <ComposerV5Preview />
              </Route>
              <Route path="/v4">
                <ComposerV4Preview />
              </Route>

              <Route path="/v5">
                <ComposerV5Preview />
              </Route>
              <Route path="/exported">
                <ComposerExported path="/exported" />
              </Route> */}
              <Route path="/amendments">
                <AppComposerAmendments />
              </Route>
              <Route path="/economic-record-certificate">
                <ComposerEconomicRecordCertificate path="/economic-record-certificate" />
              </Route>
              <Route path="/review-fees-payment">
                <ComposerReviewFeesPayment path="/review-fees-payment" />
              </Route>
              <Route path="/true-copy-licence">
                <ComposerTrueCopyLicence path="/true-copy-licence" />
              </Route>
              <Route path="/industrial-licence-individual">
                <ComposerIndustrialLicenceIndividual path="/industrial-licence-individual" />
              </Route>
              <Route path="/request-industrial-electricity-tariff">
                <ComposerIndustrialElectricityTariff path="/request-industrial-electricity-tariff" />
              </Route>
              <Route path="/issue-abu-dhabi-value-certificate">
                <ComposerIssueAbuDhabiValueCertificate path="/issue-abu-dhabi-value-certificate" />
              </Route>
              <Route path="/renew-industrial-licence-in-abu-dhabi">
                <ComposerIndustrialLicenceRenewal path="/renew-industrial-licence-in-abu-dhabi" />
              </Route>
              <Route path="/industrial-licence-company">
                <ComposerIndustrialLicenceCompany path="/industrial-licence-company" />
              </Route>
              <Route path="/">
                <AppComposer
                  config={config}
                  baseUrl={baseUrl}
                  user={getSmartpassData()}
                  meta={{
                    meta: getMetaData(),
                    ...metaTags,
                  }}
                  translations={translations}
                  serverHandled={SERVER_SIDE_HANDLED}
                  fetchState={fetchState}
                  fetchStateInterval={FETCH_STATE_LONG_INTERVAL}
                  skipFetchState={skipFetchState}
                  customTemplates={templates}
                />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </Viewport>
    </ViewportProvider>
  );
};

export default App;
