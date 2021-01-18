import home from './pages/Home';
import categoryPage from './pages/Category';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';

const config = {
  // configuration/app version, please keep updateding
  // for now redux counts on this to disregard the old state
  version: '1',
  // default variables, for now title is used
  defaults: {
    title: 'Investment compass',
  },
  // getVariables: () => {},
  // initial redux state, you can configure per your project need,
  header: {
    template: 'header',
    props: {
      aspectsOfLifeType: 'business-management',
    },
    state: {
      mapState: ['user', 'locale', 'title', 'breadcrumbs'],
      mapDispatch: ['user', 'locale', 'breadcrumbs'],
    },
    // hideForPaths: ['/login'],
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
    // hideForPaths: ['/login'],
  },
  // pages of the application
  pages: [...home, ...categoryPage],
};

export default config;
