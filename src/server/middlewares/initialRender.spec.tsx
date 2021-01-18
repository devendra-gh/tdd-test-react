import React from 'react';
import httpMocks from 'node-mocks-http';

import initialRender from 'server/middlewares/initialRender';

jest.mock('server/utils/logger', () => ({
  getService: () => ({
    error: jest.fn(),
  }),
}));
jest.mock('../Html', () => (...props: any) => (
  <pre data-role="props-list">{JSON.stringify(props, null, 2)}</pre>
));
jest.mock('../../config', () => ({
  api: {
    clientUrl: 'config.api.clientUrlExample',
    demoLogin: 'config.demoLoginExample',
  },
  cms: {
    tammUrl: 'tammUrl',
    tammWorkbenchUrl: 'tammWorkbenchUrl',
  },
}));
jest.mock('./chunk-manifest.json', () => ({
  client: ['client_script1.js', 'client_script2.js'],
}));

const user = {
  emiratesId: 'emiratesIdExample',
  firstName: 'firstNameExample',
  lastName: 'lastNameExample',
  email: 'emailExample',
  phone: 'phoneExample',
  avatarUrl: 'avatarUrlExample',
  nationalityEN: 'nationalityENExample',
};

describe('initial render', () => {
  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();

    res.send = jest.fn();
  });

  it('renders page (no user)', async () => {
    await initialRender(req, res, next);

    expect(res.send).toHaveBeenCalled();
    expect(res.send.mock.calls[0][0]).toMatchSnapshot('Page with not user');
    expect(next).not.toHaveBeenCalled();
  });

  it('renders page (no user, with mode)', async () => {
    req.query.mode = 'some';

    await initialRender(req, res, next);

    expect(res.send).toHaveBeenCalled();
    expect(res.send.mock.calls[0][0]).toMatchSnapshot(
      'renders page (no user, with mode)',
    );
    expect(next).not.toHaveBeenCalled();
  });

  it('renders page (with user)', async () => {
    req.user = user;

    await initialRender(req, res, next);

    expect(res.send).toHaveBeenCalled();
    expect(res.send.mock.calls[0][0]).toMatchSnapshot('Page with not user');
    expect(next).not.toHaveBeenCalled();
  });

  it('renders page (with user and session)', async () => {
    req.user = user;
    req.session = {
      tammUserInfo: {
        some: 'smart pass info',
      },
    };

    await initialRender(req, res, next);

    expect(res.send).toHaveBeenCalled();
    expect(res.send.mock.calls[0][0]).toMatchSnapshot('Page with not user');
    expect(next).not.toHaveBeenCalled();
  });

  it('calls next() in case of error', async () => {
    res.send = jest.fn(() => {
      throw new Error();
    });

    await initialRender(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
