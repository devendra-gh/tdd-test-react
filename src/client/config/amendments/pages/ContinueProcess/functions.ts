/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import { setReduxState } from 'client/config/amendments/utils/setUpdateReduxState';

const qs = require('querystring');

const resetReduxState = (props: IVariables) => {
  props.actions.instanceId.reset();
  props.actions.businessKey.reset();
  props.actions.licenseNo.reset();
  props.actions.capID.reset();
  props.actions.licenseType.reset();
  props.actions.prevLicenseType.reset();
  props.actions.legalForm.reset();
  props.actions.prevLegalForm.reset();
  props.actions.amendmentCategories.reset();
  props.actions.licenceDetails.reset();
  props.actions.initialValues.reset();
  props.actions.documents.reset();
  props.actions.applicationReturnDocuments.reset();
  props.actions.tradeName.reset();
  props.actions.tawtheeqDetails.reset();
  props.actions.activity.reset();
  props.actions.dedErrorMessage.reset();
};

const onPageInit = async (props: IVariables) => {
  const queryParams = qs.parse(props.history.location.search);
  const instanceId: any = get(queryParams, 'instanceId', '');
  const businessKey: any = get(queryParams, 'businessKey', '');
  if (instanceId && businessKey) {
    try {
      resetReduxState(props);
      // fetch reduxState from IO and update back in redux
      const state = await setReduxState(instanceId, businessKey, props);
      if (state) {
        props.history.push(state);
      } else {
        props.history.push(`/404`);
      }
    } catch (exception) {
      props.history.push(`/404`);
    }
  }
};

export default { onPageInit };
