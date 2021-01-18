import bpm from 'client/services/bpm';
import { initialState } from '../../state';
import pages from '../../pages';

import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import '../../override.less';
import { PERMIT_BALLOONS_AD } from '../../utils/constants/permits';

const config = {
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  appName: PERMIT_BALLOONS_AD,
  version: '1.0',
  // default variables, for now title is used
  defaults: {
    title: 'Permits',
  },
  getVariables: bpm.getVariables,
  // initial redux state, you can configure per your project need,
  initialState,
  header: {
    template: 'header',
    props: {
      aspectsOfLifeType: 'business-management',
      breadcrumbs: [
        {
          label: 'breadcrumbs.home',
          link: `${
            window.location.href.indexOf('stage.tamm') !== -1
              ? 'https://stage.tamm.abudhabi/'
              : 'https://www.tamm.abudhabi/'
          }`,
          linkTarget: '_self',
        },
        {
          label: 'breadcrumbs.digitalServices',
          link: `${
            window.location.href.indexOf('stage.tamm') !== -1
              ? 'https://stage.tamm.abudhabi/'
              : 'https://www.tamm.abudhabi/'
          }tamm-centers-services`,
          linkTarget: '_self',
        },
        {
          label: 'breadcrumbs.DED',
          link: `${
            window.location.href.indexOf('stage.tamm') !== -1
              ? 'https://stage.tamm.abudhabi/'
              : 'https://www.tamm.abudhabi/'
          }tamm-centers-services/department-of-economic-development`,
          linkTarget: '_self',
        },
      ],
    },
    state: {
      mapState: ['user', 'locale', 'title', 'pageTitle', 'serviceType'],
      mapDispatch: ['user', 'locale'],
    },
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
  },
  // pages of the application
  pages,
};

export default config;
