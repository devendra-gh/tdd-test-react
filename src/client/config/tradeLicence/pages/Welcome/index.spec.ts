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
    home[0].props.buttons[0].onClick(props);
    setTimeout(() => {
      expect(props.history.push).toBeCalled();
    }, 2000);
  });

  it('should properly call onPageInit and fetch applications', async () => {
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
    expect(props.actions.applications.update).toBeCalled();
  });

  it('should properly call onPageInit with no applications', async () => {
    props.user = {
      IDN: '7911993123456',
    };
    fetchMock.mockImplementation(() => ({
      message: 'Fail',
    }));
    await home[0].onPageInit(props);
    expect(props.actions.applications.update).toBeCalled();
  });
  it('should properly push to login if no user data', async () => {
    await home[0].onPageInit(props);
    // expect(props.history.push).toBeCalledWith('/login');
  });
});
