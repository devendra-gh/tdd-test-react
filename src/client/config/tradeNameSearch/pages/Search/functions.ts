import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import { getAnalyticsData } from '../../utils/common';

const onPageInit = async (props: IVariables) => {
  props.actions.tradeName.update({
    ...props.tradeName,
    ...{ recInPage: 10 },
  });
  props.actions.displayTable.update(false);
  props.actions.displaySpinner.update(false);
  props.actions.displayErrorFlag.update(false);
  props.actions.showNotFoundAlert.update(false);
  props.actions.showErrorAlert.update(false);
};

const getTradeName = async (
  value: string,
  currentPage: number,
  props: IVariables,
) => {
  getAnalyticsData('tra');

  try {
    props.actions.showErrorAlert.update(false);
    props.actions.showNotFoundAlert.update(false);
    props.actions.displayTable.update(false);

    if (value.length >= 3 && value.length <= 200) {
      props.actions.displaySpinner.update(true);

      let enName = value;
      let arName = '';

      if (props.locale === 'ar') {
        enName = '';
        arName = value;
      }

      const parmArray = {
        enName,
        arName,
        type: '',
        searchType: 1,
        pageNb: currentPage,
        recInPage: props.tradeName.recInPage ? props.tradeName.recInPage : 10,
        tradeNameByArAlphabetIndex: 0,
        tradeNameByEnAlphabetIndex: 0,
        indexLetter: 'string',
      };

      const res = await fetch(`/pub/proxy/getTradeNames`, `POST`, parmArray);

      if (!res.success || !res.data) {
        throw Error();
      }

      if (res.data.data.totalRecords === 0) {
        props.actions.showNotFoundAlert.update(true);
      }

      props.actions.tradeName.update({
        ...props.tradeName,
        data: res.data,
        currentPage: parmArray.pageNb,
        totalRecords: res.data.data.totalRecords,
        value,
      });
      props.actions.displaySpinner.update(false);
      props.actions.displayTable.update(true);
      getAnalyticsData('sla', { serviceStatus: 'success' });
    }
  } catch (e) {
    props.actions.showErrorAlert.update(true);
    props.actions.displaySpinner.update(false);
    getAnalyticsData('sla', { serviceStatus: 'fail' });
  }
};

const changePage = async (currentPage: number, props: IVariables) => {
  props.actions.displaySpinner.update(true);
  getTradeName(props.tradeName.value, currentPage, props);
};

const getValidation = (value: string = '', props: IVariables) => {
  props.actions.displayTable.update(false);
  const vartemp = value.length < 3 || value.length > 200;
  props.actions.displayErrorFlag.update(vartemp);
  if (value.length === 0) {
    props.actions.displayErrorFlag.update(false);
  }
};
const onBack = (props: IVariables) => {
  props.history.push('/tradename-search/home');
};

export default {
  getTradeName,
  getValidation,
  changePage,
  onPageInit,
  onBack,
};
