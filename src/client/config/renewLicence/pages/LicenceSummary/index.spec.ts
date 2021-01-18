import index from './index';

jest.mock('./functions');
jest.mock('client/config/renewLicence/utils/common.ts');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Economiclicence/index', () => {
  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check steps, onPageInit', () => {
    expect(
      index[0].onPageInit({
        i18n: () => '',
        stepsStatus: {},
        actions: { stepsStatus: { update: jest.fn() } },
        errorMsg: '{}',
      }),
    ).toBeInstanceOf(Object);

    expect(
      index[0].onPageInit({
        isRenewalEligible: true,
        i18n: () => '',
        stepsStatus: {},
        actions: { stepsStatus: { update: jest.fn() } },
        errorMsg: '{}',
      }),
    ).toBeInstanceOf(Object);

    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
