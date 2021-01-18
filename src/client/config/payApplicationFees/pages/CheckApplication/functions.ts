/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import { isTransactionNumber } from 'client/config/utils/validations';
import * as constants from 'client/config/payApplicationFees/constants';
import bpm from 'client/services/bpm';
import moment from 'moment';
import fetch from 'client/services/fetch';
import {
  PATH_NO_FEES,
  PATH_ERROR,
} from 'client/config/payApplicationFees/routes';
import { getAnalyticsData } from '../../utils/common';

/* istanbul ignore file */

const onSubmit = async (tnNumber: string, props: IVariables) => {
  if (props.form.showTradeName) {
    props.actions.buttonDisabled.update(false);
    props.actions.showLoader.update(true);
    const { transactionNumber, businessNameEng, businessNameArb } = props.form;
    getAnalyticsData('tra');
    if (props.instanceId === '') {
      const data = await bpm.start(constants.PROCESS_NAME, {}, true);
      if (data.success && data.data && data.data.businessKey && data.data.id) {
        props.actions.instanceId.update(data.data.id);
        props.actions.businessKey.update(data.data.businessKey);
      }
      await bpm.message(
        constants.PROCESS_NAME,
        {
          businessKey: data.data.businessKey,
          messageName: 'msgCheckApplicationStatus',
          variables: {
            transactionNumber,
            businessNameEng,
            businessNameArb,
            submittedDate: moment().toLocaleString(),
          },
        },
        true,
      );
    } else {
      await bpm.message(
        constants.PROCESS_NAME,
        {
          businessKey: props.businessKey,
          messageName: 'msgCheckApplicationStatus',
          variables: {
            transactionNumber,
            businessNameEng,
            businessNameArb,
            submittedDate: moment().toLocaleString(),
          },
        },
        true,
      );
    }
  } else {
    props.actions.buttonDisabled.update(true);
  }
};

const getOnChangeHandler = (state: any) => (
  props: IVariables,
  fieldValues: IVariables,
) => {
  props.actions.form.update({
    ...state.form,
    ...fieldValues,
  });
};
const onChange = (transactionNumber: string, props: IVariables) => {
  props.actions.form.update({
    ...props.form,
    transactionNumber,
  });
};
const validateTransactionNumber = (props: IVariables) => {
  const { transactionNumber } = props.form;
  return isTransactionNumber(transactionNumber);
};
const onShowTradeName = async (props: IVariables) => {
  const { transactionNumber } = props.form;
  props.actions.showError.update(false);

  const parmArray = {
    licenseNo: transactionNumber,
  };

  const res = await fetch(`/pub/proxy/relatedRecords`, `POST`, parmArray);
  if (!res.success || !res.data) {
    props.history.push(PATH_ERROR);
  }
  let nameAr = '';
  let nameEn = '';

  if (
    res &&
    res.data &&
    res.data.result &&
    res.data.result.relatedRecoreds &&
    res.data.result.relatedRecoreds[0]
  ) {
    nameAr = res.data.result.relatedRecoreds[0].NameAr;
    nameEn = res.data.result.relatedRecoreds[0].NameEn;
  } else if (
    res &&
    res.data &&
    res.data.result &&
    res.data.result.relatedRecoreds &&
    res.data.result.relatedRecoreds[1]
  ) {
    nameAr = res.data.result.relatedRecoreds[1].NameAr;
    nameEn = res.data.result.relatedRecoreds[1].NameEn;
  } else {
    props.history.push(PATH_NO_FEES);
  }
  if (validateTransactionNumber(props)) {
    props.actions.showSpinner.update(true);
    props.actions.form.update({
      ...props.form,
      showTradeName: true,
      businessNameArb: nameAr,
      businessNameEng: nameEn,
    });
    props.actions.showSpinner.update(false);
    props.actions.buttonDisabled.update(false);
  }
};

export default {
  onSubmit,
  getOnChangeHandler,
  onChange,
  onShowTradeName,
  validateTransactionNumber,
};
