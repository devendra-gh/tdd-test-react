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

  it('should export onPageInit Function', () => {
    expect(index).toBeInstanceOf(Array);
  });

  it('onPageInit', () => {
    let errorMsg = JSON.stringify({
      title: 'test-103',
      content: 'test',
    });
    let props = {
      errorMsg,
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

    errorMsg = JSON.stringify({
      title: 'test-107',
      content: 'test',
    });
    props = {
      errorMsg,
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

    errorMsg = JSON.stringify({
      title: 'test',
      content: 'test',
    });
    props = {
      errorMsg,
    };
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);

    const props2 = {
      errorMsg: undefined,
    };
    expect(index[0].onPageInit(props2)).toBeInstanceOf(Object);
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ renewlicenceSteps: 'renewlicenceSteps' });
      }
    });
  });
});
