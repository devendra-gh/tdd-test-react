import { IVariables } from '@tamm/app-composer';
import { TRANSACTION_REF } from '../../constants';

const init = () => {};

const getStatus = (props: IVariables) => {
  const { applicationStatus } = props.applicationStatusResponse;
  if (!applicationStatus || !props.statusRecieved) {
    props.history.push('/application-status/error-page');
  }
  const successResponse = ['Open', 'Initial Approval', 'Issued'];
  const inProgressResponse = [
    'In Progress',
    'Waiting Approval',
    'Pending for initial approval',
    'Pending For Payment',
    'Additional Requirements Needed',
    'Pending For Approving Entity Fee Payment',
    'Pending For Approving Entities',
    'Pending Payment',
  ];
  const failureResponse = ['Declined', 'Initial Approval Rejected'];

  if (successResponse.includes(applicationStatus)) {
    return 'success';
  }
  if (inProgressResponse.includes(applicationStatus)) {
    return 'inProgress';
  }
  if (failureResponse.includes(applicationStatus)) {
    return 'failure';
  }
  return 'inProgress';
};

const getTitleMessage = (props: IVariables) => {
  const transactionRef = TRANSACTION_REF;
  const { applicationNumber: transactionNumber } = props.formApplicationNumber;
  const messageKey = transactionRef.find(transRef =>
    transactionNumber.includes(transRef),
  );
  return `checkApplicationStatus.infoPage.titlePrefix.${messageKey ||
    'default'}`;
};

export default {
  init,
  getStatus,
  getTitleMessage,
};
