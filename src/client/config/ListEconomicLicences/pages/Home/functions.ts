import { IVariables } from '@tamm/app-composer';
import { startPaymentService, addAnalytics, SLA_EVENT_KEY } from '../../utils';
import { errorBoundary, issueCertificate } from '../../services';

/* istanbul ignore file */

const getLetterNumber = (response: IVariables) => {
  let letterNumber = '';
  const lnRegex = /LN-\d{7}/i;
  switch (response.code) {
    case '200':
      letterNumber = response.Result.recordNumber;
      break;
    case '500':
      letterNumber = response.message.match(lnRegex)[0];
      break;
    default:
      break;
  }
  return letterNumber;
};

const onStart = async (props: IVariables) => {
  const {
    actions: { submitting },
    loggedIn,
  } = props;
  submitting.update(true);

  if (!loggedIn) {
    props.history.push(`/login?redirectUrl=${window.location.href}`);
  } else {
    let analyticsStatus = 'fail';
    try {
      const issueResponse = await issueCertificate({ cnNumber: '' });
      const letterNumber = getLetterNumber(issueResponse);

      if (letterNumber) {
        // start payment service
        await startPaymentService(props, {
          transactionNumber: letterNumber,
          emiratesId: '{{IDN}}',
        });
        analyticsStatus = 'success';
      } else {
        errorBoundary(props, new Error('Certificate could not be issued'));
      }
    } catch (error) {
      errorBoundary(props, error);
    } finally {
      addAnalytics(SLA_EVENT_KEY, { serviceStatus: analyticsStatus });
    }
  }
};

export default { onStart };
