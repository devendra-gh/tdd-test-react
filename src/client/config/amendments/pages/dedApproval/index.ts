import ApplicationSubmitted from './ApplicationSubmitted';
import ApplicationError from './ApplicationError';
import ApplicationWaiting from './ApplicationWaiting';
import ApplicationReturned from './ApplicationReturned';
import ApplicationRejected from './ApplicationRejected';

const dedApprovalPages = [
  ...ApplicationSubmitted,
  ...ApplicationError,
  ...ApplicationWaiting,
  ...ApplicationReturned,
  ...ApplicationRejected,
];

export default dedApprovalPages;
