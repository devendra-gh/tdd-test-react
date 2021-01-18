import { IVariables } from '@tamm/app-composer';
import { PATH_SUCCESS_ACTIVITY } from 'client/config/AddEconomicActivity/routes';
import { addEconomicActivitySteps } from '../../steps';
import { getAnalyticsData, getDateFromTimeStamp } from '../../utils/common';
import { PROCESS_NAME_ADD_ECONOMIC_ACTIVITY } from '../../constants';

const successActivity = [
  {
    path: PATH_SUCCESS_ACTIVITY, // path for router
    uniqueId: 'add-economic-activity.success-activity', // uniqueId for caching and other purposes
    template: 'successInfo', // template name, must be located in index of folder template/index
    title: 'addEconomicActivity.title', // title of the page, later it will be read from CMS

    props: {
      type: 'success',
      title: 'addEconomicActivity.success.title',
      text: 'addEconomicActivity.success.subTitle',
      steps: addEconomicActivitySteps,
      stepsStatus: {
        'addEconomicActivity.addActivity': 'finish',
        'addEconomicActivity.getDEDApproval': 'finish',
      },
      buttons: [],
    },
    fromProcessState: {
      processName: PROCESS_NAME_ADD_ECONOMIC_ACTIVITY,
      variables: ['applicationStatus'],
    },
    onPageInit: async (props: IVariables) => {
      const { i18n, applicationStatus } = props;
      getAnalyticsData('sla', { serviceStatus: 'success', applicationStatus });
      const redirectUrl =
        window.location.href.indexOf('stage.tamm.abudhabi') !== -1
          ? 'https://stage.tamm.abudhabi/'
          : 'https://www.tamm.abudhabi/';
      return {
        tags: [
          {
            label: 'addEconomicActivity.notice.refNo',
            value: props.newActivityApiData.altId,
          },
          {
            label: 'addEconomicActivity.notice.submit',
            value: getDateFromTimeStamp(props.newActivityApiData.submittedOn),
          },
        ],
        links: [
          {
            id: '1',
            label: i18n(
              'addEconomicActivity.other-links.request_to_add_activity',
            ),
            link: `${redirectUrl}services/business/ded/add-economic-activity`,
          },
          {
            id: '2',
            // description: i18n(
            //   'addEconomicActivity.desc.other-links.request_to_trade_licence',
            // ),
            label: i18n(
              'addEconomicActivity.other-links.request_to_trade_licence',
            ),
            link: `${redirectUrl}services/business/ded/amendments`,
          },
          {
            id: '3',
            label: i18n(
              'addEconomicActivity.other-links.request_to_issuing_licence',
            ),
            link: `${redirectUrl}services/business/ded/licences`,
          },
        ],
      };
    },

    state: {
      mapState: ['steps', 'stepsStatus', 'newActivityApiData'],
      mapDispatch: ['stepsStatus'],
    },
  },
];

export default successActivity;
