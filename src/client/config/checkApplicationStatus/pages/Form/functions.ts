import { IVariables } from '@tamm/app-composer';
import fetchApplicationStatus from '../../services/fetchApplicationStatus';
import { getAnalyticsData } from '../../utils/common';

const init = async (props: IVariables) => {
  props.actions.formApplicationNumber.update({
    applicationNumber: '',
    isSubmitted: false,
  });
  props.actions.applicationStatusResponse.update({});
  props.actions.statusRecieved.update(false);
};

const isTransactionNumber = (transactionNumber: string) => {
  const patt = /(TN|TR|CN|CA|CR|CC|AP|II|IN|IA|IR|IC|IO|IE|IEA)-\d{7}$/;
  return patt.test(transactionNumber);
};

const validate = (props: IVariables) => {
  const { applicationNumber } = props.formApplicationNumber;
  const testResponse = isTransactionNumber(applicationNumber);
  if (!testResponse && applicationNumber.length > 0) {
    return true;
  }
  return undefined;
};

const onChange = (props: IVariables, value: any, key: string) => {
  const fieldValue = { [key]: value };
  props.actions.formApplicationNumber.update({
    ...props.formApplicationNumber,
    ...fieldValue,
  });
};

const onSubmit = async (props: IVariables) => {
  try {
    props.actions.formApplicationNumber.update({
      ...props.formApplicationNumber,
      isSubmitted: true,
    });
    const response = await fetchApplicationStatus(
      props.formApplicationNumber.applicationNumber,
    );
    if (
      response.success &&
      response.message === 'Success' &&
      response.data.code === '200'
    ) {
      const applicationStatusResponse = response.data.result[0];
      props.actions.applicationStatusResponse.update({
        ...applicationStatusResponse,
      });
      props.actions.statusRecieved.update(true);
      props.actions.stepsStatus.update({
        ...props.stepsStatus,
        'checkApplicationStatus.step.1': 'finish',
      });
      props.history.push('/application-status/info');
    } else if (response.success && response.data.code === '500') {
      props.history.push('/application-status/not-found');
    } else {
      throw Error();
    }
  } catch (e) {
    props.history.push('/application-status/error-page');
  } finally {
    getAnalyticsData('tra');
  }
};

export default {
  init,
  onSubmit,
  validate,
  onChange,
  isTransactionNumber,
};
