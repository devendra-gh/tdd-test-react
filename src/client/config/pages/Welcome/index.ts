import { IVariables } from '@tamm/app-composer';
import { BASE_PATH as PAY_APP_FEES_BASE_PATH } from 'client/config/payApplicationFees/routes';
import { BASE_PATH as RENEW_LICENCE_BASE_PATH } from 'client/config/renewLicence/routes';
import { BASE_PATH as GOLDEN_SERVICES_BASE_PATH } from 'client/config/goldenServices/routes';
import { BASE_PATH as TRADE_NAME_RESERVATION_BASE_PATH } from 'client/config/tradeLicence/routes';
import { BASE_PATH as INVESTOR_PROTECTION_BASE_PATH } from 'client/config/investorProtection/routes';
import { BASE_PATH as LINK_LICENCE_BASE_PATH } from 'client/config/LinkLicence/routes';
import baseUrl from 'client/utils/baseUrl';

const windowScrollTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
};

const home = [
  {
    path: ['/'], // path for router
    uniqueId: 'welcome-page', // uniqueId for caching and other purposes
    template: 'welcome', // template name, must be located in index of folder template/index
    title: 'title.startServices', // title of the page, later it will be read from CMS
    props: {
      buttons: [
        // {
        //   label: 'button.startEconomicLicense',
        //   onClick: (props: IVariables) =>
        //     props.history.push('/economic-licence/submit'),
        // },
        // {
        // label: 'getLicenceDetails.button',
        // onClick: (props: IVariables) => {
        // props.history.push('/get-licence-details');
        // },
        // },
        // {
        // label: 'checkApplicationStatus.button',
        // onClick: (props: IVariables) => {
        // props.history.push('/application-status/landing');
        // },
        // },
        // {
        // label: 'goodsInquiry.button',
        // onClick: (props: IVariables) => {
        // props.history.push('/consumer-good-prices');
        // },
        // },
        // {
        //   label: 'button.startPermit',
        //   onClick: (props: IVariables) => {
        //     window.location.href = `${baseUrl}/permits/application-details`;
        //   },
        // },
        // {
        // label: 'tradeNameSearch.button',
        // onClick: (props: IVariables) => {
        // props.history.push('/tradename-search/home');
        // },
        // },
        // {
        //   label: 'button.startPermit',
        //   onClick: (props: IVariables) => {
        //     window.location.href = `${baseUrl}/permits/application-details`;
        //   },
        // },
        // {
        //   label: 'renew_licence',
        //   onClick: (props: IVariables) => {
        //     props.history.push('/renew-economic-licence/');
        //   },
        // },
        // {
        // label: 'commercialPromotion.button',
        // onClick: (props: IVariables) => {
        // props.history.push('/commercial-promotions/home');
        // },
        // },
        // {
        // label: 'Request list of economic licenses - Dropped service',
        // onClick: (props: IVariables) => {
        // window.location.href = `${baseUrl}/request-economic-licences`;
        // },
        // },
        // {
        // label: 'payApplicationFees.button',
        // onClick: (props: IVariables) => {
        // props.history.push(`${PAY_APP_FEES_BASE_PATH}`);
        // },
        // },
        // {
        // label: 'businesslicensefines.title',
        // onClick: (props: IVariables) => {
        // props.history.push('/business-licence-fine');
        // },
        // },
        // {
        // label: 'Licence Ownership Certificate - Dropped service',
        // onClick: (props: IVariables) => {
        // window.location.href = `${baseUrl}/licence-ownership-certificate`;
        // },
        // },
        {
          label: 'Economic Record Certificate',
          onClick: (props: IVariables) => {
            props.history.push('/economic-record-certificate');
            windowScrollTop();
          },
        },
        {
          label: 'Review Fees Payment',
          onClick: (props: IVariables) => {
            props.history.push('/review-fees-payment');
            windowScrollTop();
          },
        },
        {
          label: 'True Copy Licence',
          onClick: (props: IVariables) => {
            props.history.push('/true-copy-licence');
            windowScrollTop();
          },
        },
        {
          label: 'Industrial Licence Individual',
          onClick: (props: IVariables) => {
            props.history.push('/industrial-licence-individual');
            windowScrollTop();
          },
        },
        {
          label: 'Industrial Licence Company',
          onClick: (props: IVariables) => {
            props.history.push('/industrial-licence-company');
            windowScrollTop();
          },
        },
        {
          label: 'Industrial Electricity Tariff',
          onClick: (props: IVariables) => {
            props.history.push('/request-industrial-electricity-tariff');
            windowScrollTop();
          },
        },
        {
          label: 'Issue Abu Dhabi Value Certificate',
          onClick: (props: IVariables) => {
            props.history.push('/issue-abu-dhabi-value-certificate');
            windowScrollTop();
          },
        },
        {
          label: 'Industrial Licence Renewal',
          onClick: (props: IVariables) => {
            props.history.push('/renew-industrial-licence-in-abu-dhabi');
            windowScrollTop();
          },
        },
        {
          label: 'businessDirectory.button',
          onClick: (props: IVariables) => {
            window.location.href = `${baseUrl}/business-directory`;
            // props.history.push('/business-directory');
          },
        },
        {
          label: 'getLicenceDetails.button',
          onClick: (props: IVariables) => {
            props.history.push('/get-licence-details');
            windowScrollTop();
          },
        },
        {
          label: 'checkApplicationStatus.button',
          onClick: (props: IVariables) => {
            props.history.push('/application-status/landing');
            windowScrollTop();
          },
        },
        // {
        //   label: 'button.welcome',
        //   onClick: (props: IVariables) =>
        //     props.history.push('/economic-licence/submit'),
        // },
        {
          label: 'issueCommercialRegister.title',
          onClick: (props: IVariables) => {
            props.history.push('/issue-commercial-register-certificate');
            windowScrollTop();
          },
        },
        {
          label: 'tradeNameSearch.button',
          onClick: (props: IVariables) => {
            props.history.push('/tradename-search/home');
            windowScrollTop();
          },
        },
        {
          label: 'businessLicenceProcedure.button',
          onClick: (props: IVariables) => {
            props.actions.resetState();
            props.history.push('/business-licence-procedure/');
            windowScrollTop();
          },
        },
        {
          label: 'button.tradeNameService',
          onClick: (props: IVariables) => {
            props.history.push(TRADE_NAME_RESERVATION_BASE_PATH);
            windowScrollTop();
          },
        },
        {
          label: 'commercialPromotion.button',
          onClick: (props: IVariables) => {
            props.history.push('/commercial-promotions/home');
            windowScrollTop();
          },
        },
        {
          label: 'goodsInquiry.button',
          onClick: (props: IVariables) => {
            props.history.push('/consumer-good-prices');
            windowScrollTop();
          },
        },
        {
          label: 'payApplicationFees.button',
          onClick: (props: IVariables) => {
            props.history.push(`${PAY_APP_FEES_BASE_PATH}`);
            windowScrollTop();
          },
        },
        {
          label: 'businesslicensefines.title',
          onClick: (props: IVariables) => {
            props.history.push('/business-licence-fine');
            windowScrollTop();
          },
        },
        {
          label: 'listOfEconomicLicences.title',
          onClick: (props: IVariables) => {
            props.history.push('/list-economic-licences-certificate');
            windowScrollTop();
          },
        },
        {
          label: 'consumerBusinessProtection.title',
          onClick: (props: IVariables) => {
            props.history.push(INVESTOR_PROTECTION_BASE_PATH);
            windowScrollTop();
          },
        },
        {
          label: 'goldenServices.title',
          onClick: (props: IVariables) => {
            props.history.push(GOLDEN_SERVICES_BASE_PATH);
            windowScrollTop();
          },
        },
        {
          label: 'linkLicence.title',
          onClick: (props: IVariables) => {
            props.history.push(LINK_LICENCE_BASE_PATH);
            windowScrollTop();
          },
        },
        // {
        // label: 'button.consumerProtection.investors',
        // onClick: (props: IVariables) => {
        // window.location.href = `${baseUrl}/investor-protection/`;
        // },
        // },
        {
          label: 'renewLicense.title',
          onClick: (props: IVariables) => {
            props.history.push(RENEW_LICENCE_BASE_PATH);
            windowScrollTop();
          },
        },
        {
          label: 'addEconomicActivity.title',
          onClick: (props: IVariables) => {
            props.history.push('/add-economic-activity');
            windowScrollTop();
          },
        },
        // {
        // label: 'button.welcome',
        // onClick: (props: IVariables) => {
        // // resetting state when you click on start
        // props.actions.resetState();
        // setTimeout(() => {
        // props.history.push('/economic-licence/submit');
        // }, 2000);
        // },
        // },
        // {
        // label: 'button.tradeNameService',
        // onClick: (props: IVariables) => props.history.push('/trade-name'),
        // },
        // {
        // label: 'businessLicenceProcedure.button',
        // onClick: (props: IVariables) => {
        // props.actions.resetState();
        // props.history.push('/business-licence-procedure/');
        // },
        // },
        // {
        // label: 'businessLicenceProcedure.button',
        // onClick: (props: IVariables) => {
        // props.actions.resetState();
        // props.history.push('/business-licence-procedure/');
        // },
        // },
      ],
    },
    onPageInit: async (props: IVariables) => {
      // let response = { message: '', data: [] };
      // if (props.user && props.user.IDN) {
      //   const forceRedirect = localStorage.getItem('forceRedirect');
      //   if (forceRedirect) {
      //     localStorage.removeItem('forceRedirect');
      //     props.history.push(forceRedirect);
      //   }
      //   response = await fetch('/api/io/getApplications', 'GET');
      // } else {
      //   props.history.push('/login');
      // }
      // const applications = response && response.data ? response.data : [];
      // props.actions.applications.update(applications);
      const forceRedirect = localStorage.getItem('forceRedirect');
      if (forceRedirect) {
        localStorage.removeItem('forceRedirect');
        props.history.push(forceRedirect);
      }
    },

    state: {
      mapState: ['loggedIn', 'businessKey', 'user', 'applications'],
      mapDispatch: ['instanceId', 'businessKey', 'applications'],
    },
  },
];

export default home;
