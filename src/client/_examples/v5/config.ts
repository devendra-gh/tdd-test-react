import bpm from 'client/services/bpm';
import '@tamm/ui-lib-v2-styles/common.less';
import '@tamm/ui-lib-v2-styles/colors.less';
import './override.less';

interface IState {}

const initialState: IState = {};

const config = {
  // configuration/app version, please keep updating
  // for now redux counts on this to disregard the old state
  version: '1.3',
  // default variables, for now title is used
  defaults: {
    title: 'Workbench Preview',
  },
  getVariables: bpm.getVariables,
  // initial redux state, you can configure per your project need,
  initialState,
  header: {
    template: 'header',
    breadcrumbs: [
      {
        label: 'home',
        link: '#',
      },
      {
        label: 'businessLaunch',
        link: '#',
      },
    ],
    props: {
      aspectsOfLifeType: 'business-management',
    },
    state: {
      mapState: ['user', 'locale', 'title', 'breadcrumbs'],
      mapDispatch: ['user', 'locale'],
    },
  },
  footer: {
    template: 'footer',
    state: {
      mapState: ['user'],
    },
  },
  pages: [],
};

export default config;
