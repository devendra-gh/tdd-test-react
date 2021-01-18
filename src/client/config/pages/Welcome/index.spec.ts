import fetch from 'client/services/fetch';
import home from './index';

jest.mock('client/services/fetch');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('pages/welcome', () => {
  let props: any;
  const fetchMock: any = fetch;

  beforeEach(() => {
    props = {
      actions: {
        resetState: jest.fn(),
        applications: {
          update: jest.fn(),
        },
      },
      history: {
        push: jest.fn(),
      },
    };
  });
  it('should properly call onClick', () => {
    const btnLen = home[0].props.buttons.length;
    for (let i = 0; i < btnLen; i += 1) {
      home[0].props.buttons[i].onClick(props);
      // expect(props.history.push).toBeCalled();
    }
  });

  it('should properly call onPageInit with no applications', async () => {
    props.user = {
      IDN: '7911993123456',
    };
    fetchMock.mockImplementation(() => ({
      message: 'Fail',
    }));
    await home[0].onPageInit(props);
    expect(props.actions.applications.update).toBeCalledTimes(0);
  });

  it('should properly call onPageInit and fetch applications', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(() => 'forceRedirect'),
        getItem: jest.fn(() => 'forceRedirect'),
        removeItem: jest.fn(() => 'forceRedirect'),
      },
      writable: true,
    });

    props.user = {
      IDN: '7911993123456',
    };
    fetchMock.mockImplementation(() => ({
      message: 'Success',
      data: {
        somedata: 'someData',
      },
    }));
    await home[0].onPageInit(props);
    expect(props.actions.applications.update).toBeCalledTimes(0);
  });
});
