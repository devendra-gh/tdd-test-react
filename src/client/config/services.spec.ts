import services, { emptyFunc, goToPage } from './services';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/services', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
  };
  const heroProps = { test: 1 };

  it('should call history and emptyFunc', () => {
    expect(emptyFunc()).toMatchSnapshot();
    expect(
      goToPage({ push: jest.fn(page => page) }, '/login')(),
    ).toMatchSnapshot();
  });

  it('should call function', async () => {
    services.forEach(service => {
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 0.7;
      global.Math = mockMath;
      const user = { name: 'test' };
      expect(service.getProps(props, user, heroProps)).toMatchSnapshot();
      expect(service.getProps(props, false, heroProps)).toMatchSnapshot();

      mockMath.random = () => 0.3;
      global.Math = mockMath;
      expect(service.getProps(props, user, heroProps)).toMatchSnapshot();
      expect(service.getProps(props, false, heroProps)).toMatchSnapshot();
    });
  });
});
