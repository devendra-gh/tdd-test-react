import { BugReport, BugReportType } from '@tamm/adfeedback';

import config from 'config';
import ajaxClient from 'server/services/ajaxClient';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import { Request, Response } from 'express';

export const bugReport = new BugReport({
  host: config.adFeedbackUrl,
  request: ajaxClient,
  headers: {
    [config.gateway.header]: config.gateway.key,
  },
});

export async function createBugReport(req: Request, res: Response) {
  try {
    const { body } = req;
    const data = body.data || {};
    const payload = await bugReport.createBugReport(
      {
        userEmail: data.email,
        reportType: BugReportType.bug,
        description: data.title,
        pageUrl: data.url,
        browserInfo: {
          pixelRatio: data.pixelRatio,
          screenHeight: data.screenHeight,
          screenWidth: data.screenWidth,
          locale: data.locale,
          browserName: data.browserName,
        },
        additionalData: {
          localStorage: data.localStorage,
          cookie: data.cookie,
          logs: data.logs,
        },
        reduxState: data.reduxState ? JSON.parse(data.reduxState) : {},
      },
      body.image
        ? Buffer.from(
            body.image.replace('data:image/png;base64,', ''),
            'base64',
          )
        : Buffer.from(''),
      req,
    );
    createSuccessResponse(res, 'success', (payload.data as any).data);
  } catch (error) {
    createErrorResponse(
      req,
      res,
      'Failed to create feedback',
      error.response?.data || error.message,
    );
  }
}
