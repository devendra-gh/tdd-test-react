import httpMocks from 'node-mocks-http';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import { createFeedback, adFeedback } from './feedback';

jest.mock('@tamm/adfeedback', () => {
  const fn = jest.fn();
  return {
    AdFeedback: class {
      createAdFeedback = fn;
    },
    FeedbackSurveyType: {
      general: 'general',
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
    req.body = {};
    (adFeedback.createAdFeedback as jest.Mock).mockResolvedValue({
      data: {},
    });
    await createFeedback(req, res);
    expect(createSuccessResponse).toHaveBeenCalled();
  });

  it('should show error response when request rejected', async () => {
    (adFeedback.createAdFeedback as jest.Mock).mockRejectedValue({});
    await createFeedback(req, res);
    expect(createErrorResponse).toHaveBeenCalled();
  });
});
