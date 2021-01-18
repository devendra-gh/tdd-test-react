import { IVariables } from '@tamm/app-composer';
import bpm from 'client/services/bpm';
import moment from 'moment';
import { get } from 'lodash';
import { PROCESS_NAME_RENEW_LICENCE } from '../../constants';
import { getAnalyticsData } from '../../utils/common';

const onSubmit = async (props: IVariables) => {
  const { fileUploadData, isTawtheeqRequired } = props;
  const docArray = [];
  if (isTawtheeqRequired) {
    const twatheeq = get(fileUploadData, 'documents.thawtheeq[0]');
    docArray.push(twatheeq);
  }
  getAnalyticsData('tra');
  await bpm.message(PROCESS_NAME_RENEW_LICENCE, {
    businessKey: props.businessKey,
    messageName: 'msgFixIssuesWithRenewLicence',
    variables: {
      waitingMsg: 'notice.renewLicenceSubmitted.subTitle',
      submittedDate: moment().format('DD-MMM-YYYY'),
      documentsLicence: JSON.stringify(docArray),
    },
  });
};

export default {
  onSubmit,
};
