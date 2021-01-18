import index from './index';
import { BASE_PATH } from '../../routes';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('/investorProtection/pages/Error/', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: [],
    };
  });

  it('should export routes', () => {
    expect(index).toBeInstanceOf(Object);
  });

  it('Check onClick for a button', () => {
    index[0].props.buttons.forEach((item: any) => {
      if (typeof item === 'object') {
        item.onClick(props);
        expect(props.history).toContain(BASE_PATH);
      }
    });
  });

  it('Check steps', () => {
    index[0].state.mapState.forEach((item: any) => {
      if (typeof item === 'object') {
        expect(item.steps()).toBeInstanceOf(Array);
      }
    });
  });
});
