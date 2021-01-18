import { IVariables } from '@tamm/app-composer';
import functions from './functions';
import loadDetails from './helpers/loadDetails';

jest.mock('./helpers/loadDetails');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Home/functions', () => {
  const mockLoadDetails: any = loadDetails;
  let props: IVariables;
  beforeEach(() => {
    props = {
      locale: 'ar',
      history: {
        push: jest.fn(),
      },
      currentGoods: {},
      match: {
        params: { id: '444444' },
      },
      actions: {
        currentGoods: {
          update: jest.fn(),
        },
      },
    };
  });

  it('should properly call history.push', async () => {
    functions.onBack(props);
    expect(props.history.push).toBeCalledWith('/consumer-good-prices/search');
  });

  it('getDetails should redirect api fails', async () => {
    props.match = {
      params: { id: '' },
      locale: 'ar',
    };
    await functions.getDetails(props);
    expect(props.history.push).toBeCalled();
  });

  it('getDetails should redirect - api fails', async () => {
    await functions.getDetails(props);
    expect(props.history.push).toBeCalled();
  });

  it('getDetails should redirect - api success - unexpected data', async () => {
    mockLoadDetails.mockImplementationOnce(() => Promise.resolve([]));
    await functions.getDetails(props);
    expect(props.history.push).toBeCalled();
  });

  it('getDetails should redirect - api success - unexpected data', async () => {
    mockLoadDetails.mockImplementationOnce(() =>
      Promise.resolve([{ storeAr: 'storeAr' }]),
    );
    await functions.getDetails(props);
    expect(props.actions.currentGoods.update).toBeCalled();
  });

  it('getDetails should redirect - api success - unexpected data - en', async () => {
    props.locale = 'en';
    mockLoadDetails.mockImplementationOnce(() =>
      Promise.resolve([{ storeAr: 'storeAr' }]),
    );
    await functions.getDetails(props);
    expect(props.actions.currentGoods.update).toBeCalled();
  });
});
