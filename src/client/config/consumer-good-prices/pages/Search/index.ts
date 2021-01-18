import functions from './functions';
import { handlePageChange } from './changeHandlers/handlePageChange';
import { handleSearchTextChange } from './changeHandlers/handleSearchTextChange';
import { handleSearchByChange } from './changeHandlers/handleSearchByChange';
import { handleCategoryChange } from './changeHandlers/handleCategoryChange';
import { handleGoodsRadioChange } from './changeHandlers/handleGoodsRadioChange';

const search = [
  {
    path: ['/consumer-good-prices/search'], // path for router
    uniqueId: 'cgp-search', // uniqueId for caching and other purposes
    template: 'search', // template name, must be located in index of folder template/index
    title: 'main.title', // title of the page, later it will be read from CMS
    props: {
      subTitle: 'cgp_title',
      description: 'cpg_subtitle',
      onCancel: functions.onCancel,
      handleSearchTextChange,
      handlePageChange,
      handleSearchByChange,
      handleCategoryChange,
      handleGoodsRadioChange,
      info: false,
      error: '',
      buttons: [
        {
          id: '1',
          label: 'button.next',
          onClick: functions.onNextClick,
          uiType: 'primary',
          withArrow: true,
          alignIcon: 'end',
        },
      ],
      searchVal: '',
      radioGroups: [
        {
          id: 'product',
          label: 'cgp_by_product',
        },
        {
          id: 'category',
          label: 'cgp_by_cat',
        },
      ],
    },
    state: {
      mapState: [
        'loggedIn',
        'user',
        'itemId',
        'goodsList',
        'showSpinner',
        'showTable',
      ],
      mapDispatch: [
        'itemId',
        'showSpinner',
        'showTable',
        'goodsList',
        'currentChecked',
      ],
    },
  },
];

export default search;
