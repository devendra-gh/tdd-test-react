import { redirectToErrorPage } from './redirect';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('RedirectToErrorPage', () => {
  let props: any;
  beforeEach(() => {
    props = {
      history: {
        push: jest.fn(),
      },
    };
  });

  it('should initialize init call', () => {
    redirectToErrorPage(props);
  });
});
