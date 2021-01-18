import home from './Home';
import userForm from './UserForm';
import waitingApproval from './WaitingApproval';
import waitingUpload from './WaitingUpload';
import successActivity from './SuccessActivity';
import rejectedActivity from './RejectedActivity';
import login from './Login';
import error from './Error';
import notFound from './NotFound';
import applicationReturned from './ApplicationReturned';
import continueProcess from './ContinueProcess';

const pages: any[] = [
  ...home,
  ...userForm,
  ...waitingApproval,
  ...waitingUpload,
  ...successActivity,
  ...rejectedActivity,
  ...login,
  ...error,
  ...notFound,
  ...applicationReturned,
  ...continueProcess,
];

export default pages;
