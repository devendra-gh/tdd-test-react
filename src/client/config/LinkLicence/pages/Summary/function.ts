import { IVariables } from '@tamm/app-composer';
import Analytics from '@tamm/analytics';
import { constants, functions } from '../../helper';
import { PATH_ERROR, PATH_HOME } from '../../routes';

const getAnalyticsData = (status: string) => {
  const {
    eventKey,
    adgeName,
    serviceName,
    productName,
  } = constants.ANALYTICS_INFO;
  Analytics.addEvent({
    eventKey: eventKey.sla,
    additionalData: {
      serviceStatus: status,
      adgeName,
      serviceName,
      productName,
    },
  });
};

const pageInitialization = (props: IVariables, currentStep: string) => {
  try {
    const {
      linkLicenseStatus: { status },
      selectedLicenceNumber,
    } = props;
    const stepsStatus: { [key: string]: string } = {
      findLicence: 'finish',
      uploadDocument: 'finish',
    };
    const tags = [
      ...(status !== 'error'
        ? [
            {
              label: 'notice.referenceNo',
              value: selectedLicenceNumber,
            },
          ]
        : []),
      {
        label: 'notice.submitedOn',
        value: functions.getDateFromTimeStamp(),
      },
    ];
    const NoticeTemplateDetails: { [key: string]: any } = {
      success: () => ({
        noticeTitle: 'errorPage.title',
        description: 'errorPage.text',
        type: constants.NOTICE_TYPES[status],
        buttons: [
          {
            label: 'button.back',
            link: 'link-licence',
            uiType: 'secondary',
            onClick: () => functions.handleRedirectLink(props, PATH_HOME),
          },
        ],
        stepsStatus,
      }),
      error: () => ({
        noticeTitle: 'errorPage.title',
        description: 'errorPage.text',
        type: constants.NOTICE_TYPES[status],
        buttons: [
          {
            label: 'button.back',
            link: 'link-licence',
            uiType: 'secondary',
            onClick: () => functions.handleRedirectLink(props, PATH_HOME),
          },
        ],
        stepsStatus,
      }),
      info: () => ({
        noticeTitle: `${props.linkLicenseStatus.message || ''}`,
        description: `${currentStep}.info.description`,
        type: constants.NOTICE_TYPES[status],
        tags,
        buttons: [],
        stepsStatus,
      }),
    };
    const responseInfo =
      status === 'success' || status === 'info' ? 'success' : 'error';
    getAnalyticsData(responseInfo);
    return NoticeTemplateDetails[status || 'error'];
  } catch (error) {
    getAnalyticsData('error');
    return functions.handleRedirectLink(props, PATH_ERROR);
  }
};

export { pageInitialization };
