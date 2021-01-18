import { Request, Response } from 'express';
import fs from 'fs';
import moment from 'moment';
import request from 'server/services/ajaxClient';
import {
  createSuccessResponse,
  createErrorResponse,
} from 'server/utils/response-utils';
import { get, isEmpty } from 'lodash';
import authConfig from 'config/authConfig';
import config from 'config';

// eslint-disable-next-line consistent-return
const getServiceByPath = (req: Request, res: Response) => {
  const { path } = req.params;
  const { recache } = req.query;

  const filePath = path.split(' ').join('-');
  function getDataFromApi() {
    const servicePathArr = path.split('_');
    const lang = servicePathArr.pop();
    request(
      {
        url: `${config.gsp.host}${config.gsp.servicesAll.serviceByPath}`,
        method: 'POST',
        headers: {
          [authConfig.apiGateway.header]: authConfig.apiGateway.key,
        },
        data: {
          servicePath: servicePathArr.join('/'),
          lang,
        },
      },
      req,
    ).then(response => {
      const data = get(response, 'data.data', {});

      if (!data) {
        const message = 'GSP Services not found';

        return createErrorResponse(req, res, message, 404);
      }
      if (!isEmpty(data)) {
        fs.writeFile(
          `public/gsp-path/${filePath}.json`,
          JSON.stringify({ serviceCodeData: data }),
          () => {},
        );
      }
      return createSuccessResponse(res, 'Success', { serviceCodeData: data });
    });
  }
  if (recache) {
    // eslint-disable-next-line consistent-return
    const stats = fs.statSync(`public/gsp-path/${filePath}.json`);
    const timeDifference = moment().diff(moment(stats?.mtime), 'minutes');
    if (!stats || timeDifference > 3) {
      return getDataFromApi();
    }
  }
  fs.readFile(
    `public/gsp-path/${filePath}.json`,
    'utf8',
    // eslint-disable-next-line consistent-return
    (fileReadErr, service) => {
      if (!service || service === 'undefined' || fileReadErr) {
        return getDataFromApi();
      }
      return createSuccessResponse(res, 'Success', JSON.parse(service));
    },
  );
};

export default getServiceByPath;
