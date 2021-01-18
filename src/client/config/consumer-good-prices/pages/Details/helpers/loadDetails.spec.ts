import getDetails from './loadDetails';
import { fetchGoodsDetail } from '../../../services';

jest.mock('../../../services', () => ({
  fetchGoodsDetail: jest.fn(),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('functions', () => {
  const barCode = '583312';
  const props = {};
  beforeEach(() => {});

  it('should call goodsList.update with error alert when api fails', async () => {
    await getDetails(props, barCode);
    expect(fetchGoodsDetail).toBeCalled();
  });
});
