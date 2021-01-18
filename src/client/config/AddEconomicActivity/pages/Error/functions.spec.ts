import functions from './functions';

jest.mock('client/services/bpm');
jest.mock('client/config/AddEconomicActivity/utils/common.ts');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Functions', () => {
  let props: any;

  beforeEach(() => {
    props = {
      businessKey: 'businessKey',
      history: {
        push: jest.fn(),
      },
    };
  });

  // eslint-disable-next-line no-console
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};

  describe('onClick', () => {
    it('should be instance of function', () =>
      expect(functions.onClick).toBeInstanceOf(Function));

    it('should call with correct params', async () => {
      await functions.onClick(props);

      expect(props.history.push).toHaveBeenCalled();
    });
  });
});
