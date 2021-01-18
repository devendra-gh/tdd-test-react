import { cleanup } from '@testing-library/react';
import { IVariables } from '@tamm/app-composer';
import index from './index';

jest.mock('../../utils/common');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('LicenceDetails/index', () => {
  let props: IVariables;
  const { location } = window;

  beforeAll((): void => {
    delete window.location;
    // @ts-ignore
    window.location = {
      href: 'https://stage.tamm.abudhabi/',
    };
  });

  afterAll((): void => {
    window.location = location;
  });

  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      newActivityApiData: {
        altId: 'test',
        submittedOn: 'test',
      },
    };
  });

  afterEach(cleanup);

  it('should be instanceOf', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('should check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        item.steps({ getLicenceDetailsSteps: 'getLicenceDetailsSteps' });
      }
    });
    expect(index).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit', () => {
    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });

  it('should properly call onPageInit 2', () => {
    window.location.href = 'https://www.tamm.abudhabi/';

    expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
  });
});
