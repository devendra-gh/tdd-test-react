import window, { setTitle } from 'client/utils/window';

describe('window', () => {
  describe('setTitle', () => {
    let title: any;

    beforeEach(() => {
      title = document.title;
    });

    afterEach(() => {
      document.title = title;
    });

    it('is funciton', () => expect(setTitle).toBeInstanceOf(Function));

    it('set document title', () => {
      setTitle('111');
      expect(document.title).toBe('111');

      setTitle('22xxx888');
      expect(document.title).toBe('22xxx888');
    });
  });

  describe('window', () => {
    it('an object', () => expect(window).toBeInstanceOf(Object));
    /* eslint-disable import/no-named-as-default-member */
    it('contains document', () => expect(window.document).toEqual(document));
  });
});
