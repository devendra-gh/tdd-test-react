import index from './index';
// import { PERMIT_DRAWS } from '../../utils/constants/permits';
// import { PERMIT_CATEGORY_PROMOTIONAL_AD } from '../../utils/constants/permitCategories';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/Undertaking', () => {
  // let props: any;
  // beforeEach(() => {
  //   props = {
  //     serviceType: PERMIT_DRAWS,
  //     permitType: PERMIT_CATEGORY_PROMOTIONAL_AD,
  //     history: {
  //       location: { search: '' },
  //       push: jest.fn(),
  //     },
  //     permitInfo: {
  //       [`${PERMIT_DRAWS}`]: {
  //         requiresUndertakingApproval: true,
  //         undertaking: { isApproved: false, showError: false },
  //       },
  //     },
  //   };
  // });
  it('should export Undertaking', () => {
    expect(index).toBeInstanceOf(Object);
  });

  // it('should properly call onInit', () => {
  //   index[0].init(props);
  //   expect(props.history.push).toBeCalled();
  // });
});
