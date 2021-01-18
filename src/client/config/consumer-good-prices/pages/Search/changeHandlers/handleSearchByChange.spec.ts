import { IVariables } from '@tamm/app-composer';
import { handleSearchByChange } from './handleSearchByChange';
import { loadCategories } from '../helpers/loadCategories';
import { handleCategoryChange } from './handleCategoryChange';
import { handleSearchTextChange } from './handleSearchTextChange';

jest.mock('../helpers/loadCategories', () => ({
  loadCategories: jest.fn(),
  esModule: true,
}));
jest.mock('./handleCategoryChange', () => ({
  handleCategoryChange: jest.fn(),
  esModule: true,
}));
jest.mock('./handleSearchTextChange', () => ({
  handleSearchTextChange: jest.fn(),
  esModule: true,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('handleSearchByChange', () => {
  const props: IVariables = {
    loadedCategoriesLocale: 'ar',
    history: {
      push: jest.fn(),
    },
    itemId: 1,
    goodsList: {
      loadedCategoriesLocale: 'en',
      categories: [],
      searchBy: 'product',
      searchText: 'searchText',
      recInPage: 1,
      selectedGood: '1. Lipton / 200g / UAE',
      nonPaginatedData: [
        {
          id: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
        {
          id: '2. Lipton / 200g / UAE',
          value: 2,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
      data: [
        {
          id: '1. Lipton / 200g / UAE',
          value: 1,
          arName: 'ليبتون سايب/ 200 جرام / الإمارات',
        },
      ],
    },
    actions: {
      goodsList: {
        update: jest.fn(),
      },
    },
  };

  it('should call loadCategories when categories is []', () => {
    handleSearchByChange('category', props);
    expect(loadCategories).toBeCalled();
  });
  it('should call loadCategories when categories is there and locale changes', () => {
    props.goodsList.categories = [{}];
    handleSearchByChange('category', props);
    expect(loadCategories).toBeCalled();
  });

  it('should call handleCategoryChange if selectedCategory present', () => {
    props.goodsList.categories = [{}];
    props.goodsList.selectedCategory = 'selectedCategory';
    props.locale = 'en';
    handleSearchByChange('category', props);
    expect(handleCategoryChange).toBeCalled();
  });

  it('should call goodsList.update if selectedCategory not present', () => {
    props.goodsList.categories = [{}];
    props.goodsList.selectedCategory = '';
    props.locale = 'en';
    handleSearchByChange('category', props);
    expect(props.actions.goodsList.update).toBeCalled();
  });

  it('should call handleSearchTextChange if searchBy is product', () => {
    handleSearchByChange('product', props);
    expect(handleSearchTextChange).toBeCalled();
  });

  it('should call goodsList.update if searchBy is product and searchText less', () => {
    props.goodsList.searchText = '';
    handleSearchByChange('product', props);
    expect(props.actions.goodsList.update).toBeCalled();
  });

  it('should call goodsList.update if searchBy other', () => {
    handleSearchByChange('other', props);
    expect(props.actions.goodsList.update).toBeCalled();
  });
});
