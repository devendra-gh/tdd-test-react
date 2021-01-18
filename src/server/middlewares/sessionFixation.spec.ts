import httpMocks from 'node-mocks-http';

import sessionFixation from 'server/middlewares/sessionFixation';

describe('sessionFixation', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();

    req.session = {
      id: 1,
      some_session: 'props',
      x: '1',
    };

    Object.setPrototypeOf(req.session, {
      regenerate: jest.fn().mockImplementation(cb => {
        req.session = {
          id: req.session.id + 1,
        };
        cb();
      }),
    });
  });

  describe('default / no options', () => {
    let mockSessionFixation: any;

    beforeAll(() => {
      mockSessionFixation = sessionFixation();
    });

    it('add .resetSessionID method', () => {
      mockSessionFixation(req, res, next);

      expect(req.resetSessionID).toBeInstanceOf(Function);
    });
    it('calls next by default', () => {
      mockSessionFixation(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    describe('.resetSessionID', () => {
      beforeEach(() => {
        mockSessionFixation(req, res, next);
      });

      it('calls session.regenerate', async () => {
        const spy = req.session.regenerate;
        await req.resetSessionID();

        expect(spy).toHaveBeenCalled();
        expect(req.session).toMatchObject({
          id: 2,
          some_session: 'props',
          x: '1',
        });
      });

      it('fails on  session.regenerate fail', async () => {
        req.session.regenerate.mockImplementation((cb: any) => cb(new Error()));

        await req
          .resetSessionID()
          .then(() => expect(true).toBe(false))
          .catch(() => expect(true).toBe(true));
      });
    });
  });

  describe('options.everyRequest = true', () => {
    let mockSessionFixation: any;

    beforeEach(() => {
      mockSessionFixation = sessionFixation({ everyRequest: true });
    });

    it('calls .resetSessionID for non XMLHttp requests', async () => {
      delete req.xhr;
      delete req.headers['X-Requested-With'];

      const spy = req.session.regenerate;

      await mockSessionFixation(req, res, next);

      expect(spy).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
      expect(next.mock.calls[0][0]).toBeFalsy();
    });

    it('calls .resetSessionID for non XMLHttp requests (with error)', async () => {
      delete req.xhr;
      delete req.headers['X-Requested-With'];

      req.session.regenerate = jest.fn(cb => cb({ message: 'error' }));

      await mockSessionFixation(req, res, next);

      expect(req.session.regenerate).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
      expect(next.mock.calls[0][0]).toEqual({
        message: 'error',
      });
    });

    it("doesn't call .resetSessionID for XMLHttp requests, instead it calls next", async () => {
      req.headers['X-Requested-With'] = 'XMLHttpRequest';

      const spy = req.session.regenerate;

      await mockSessionFixation(req, res, next);

      expect(spy).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });
});
