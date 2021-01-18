import httpMocks from 'node-mocks-http';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import { createBugReport, bugReport } from './bugReport';

jest.mock('@tamm/adfeedback', () => {
  const fn = jest.fn();
  return {
    BugReport: class {
      createBugReport = fn;
    },
    BugReportType: {
      bug: 'bug',
    },
  };
});

jest.mock('server/utils/response-utils', () => {
  return {
    createSuccessResponse: jest.fn(),
    createErrorResponse: jest.fn(),
  };
});

describe('feedback', () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  it('should show success response when request resolved', async () => {
    req.body = {
      data: {
        reduxState: '{}',
      },
      image:
        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
    };
    (bugReport.createBugReport as jest.Mock).mockResolvedValue({
      data: {},
    });
    await createBugReport(req, res);
    expect(createSuccessResponse).toHaveBeenCalled();
  });

  it('should send bug report without image', async () => {
    req.body = {
      data: {
        reduxState: '{}',
      },
    };
    (bugReport.createBugReport as jest.Mock).mockResolvedValue({
      data: {},
    });
    await createBugReport(req, res);
    expect(createSuccessResponse).toHaveBeenCalled();
  });

  it('should show error response when request rejected', async () => {
    req.body = {};
    (bugReport.createBugReport as jest.Mock).mockRejectedValue({});
    await createBugReport(req, res);
    expect(createErrorResponse).toHaveBeenCalled();
  });
});
