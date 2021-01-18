import applicationReturned from './index';

jest.mock('client/config/renewLicence/config', () => ({
  initialState: {},
}));
const props = {
  i18n: () => '',
  comments: '{}',
  cnNumber: 'cnNumber',
  capId: 'capId',
  actions: {
    fileUploadData: {
      update: jest.fn(),
    },
    licenceCapId: {
      update: jest.fn(),
    },
    cnNumber: {
      update: jest.fn(),
    },
  },
};
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('login/index', () => {
  it('Check instance', () => {
    expect(applicationReturned).toBeInstanceOf(Object);
  });

  it('Check onPageInit', () => {
    applicationReturned[0].onPageInit(props);
    expect(props.actions.fileUploadData.update).toBeCalled();
  });

  it('Check steps', () => {
    applicationReturned[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
