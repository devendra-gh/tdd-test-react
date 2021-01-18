import fetch from 'client/services/fetch';
import { get } from 'lodash';
import index from './index';

jest.mock('client/services/fetch');
jest.mock('lodash');
global.window = Object.create(window);
// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('permits/pages/Welcome', () => {
  let props: any;
  let mockFetch: any;
  let mockLodash: any;
  beforeEach(() => {
    mockFetch = fetch;
    mockLodash = get;
    props = {
      user: { IDN: 'emirates-id' },
      apTransactionNumber: 'submit-date',
      submitDate: '13-10-2019',
      loggedIn: true,
      buttons: [
        {
          label: 'test_button',
          uiType: 'primary',
          withArrow: true,
          onClick: jest.fn(),
        },
      ],
      actions: {
        getPermits: {
          update: jest.fn(),
        },
      },
    };
  });
  it('should export Welcome', () => {
    expect(index).toBeInstanceOf(Object);
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onPageInit', () => {
    it('LoggedIn User', async () => {
      const fakePayload = {
        success: true,
        data: {
          permitsByEmiratesId: [{ record: 1 }, { record: 2 }],
        },
      };
      mockFetch.mockImplementation(() => {
        return Promise.resolve(fakePayload);
      });

      mockLodash.mockImplementation(() => {
        return Promise.resolve(fakePayload.data.permitsByEmiratesId);
      });
      index[0].onPageInit(props);
      expect(mockFetch).toHaveBeenCalled();
    });
    it('non loggedin user', async () => {
      props.loggedIn = false;
      expect(index[0].onPageInit(props)).toBeInstanceOf(Object);
    });
  });
  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('button onClick Event', () => {
    it('onClick is defined', () => {
      expect(index[0].props.buttons[0].onClick).toBeInstanceOf(Function);
    });
    it('onClick window href property', async () => {
      index[0].props.buttons[0].onClick(props);
      Object.defineProperty(window, 'location', {
        value: {
          href: 'test',
        },
      });
      expect(window.location.href).toEqual('test');
    });
  });
});
