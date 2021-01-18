import { IVariables } from '@tamm/app-composer';
import fetch from 'client/services/fetch';
import { getAnalyticsData } from '../../utils/common';

const onPageInit = async (props: IVariables) => {
  props.actions.commercialPromotions.update({
    ...props.commercialPromotions,
  });
  props.actions.promotionType.update({
    id: '0',
    value: '',
  });
  props.actions.displaySpinner.update(false);
  props.actions.displayErrorFlag.update(false);
  props.actions.displayAccordian.update(false);
  props.actions.showNotFoundAlert.update(false);
  props.actions.showErrorAlert.update(false);
};

const getCommercialPromotions = async (
  value: string,
  currentPage: number,
  props: IVariables,
) => {
  getAnalyticsData('tra');

  try {
    props.actions.showErrorAlert.update(false);
    props.actions.showNotFoundAlert.update(false);
    props.actions.displayAccordian.update(false);

    if (value.length >= 3 && value.length <= 200) {
      props.actions.displaySpinner.update(true);

      const parmArray = {
        companyName: value,
        locale: props.locale === 'en' ? 'en_EN' : 'ar_AE',
        pageNumber: currentPage,
        promotionType: props.promotionType.value,
      };

      const res = await fetch(
        `/pub/proxy/getCommercialPromotions`,
        `POST`,
        parmArray,
      );

      if (!res.success || !res.data) {
        throw Error();
      }

      if (res.data.totalCount === 0) {
        props.actions.showNotFoundAlert.update(true);
      }

      props.actions.commercialPromotions.update({
        ...props.commercialPromotions,
        data: res.data,
        currentPage: parmArray.pageNumber,
        totalCount: res.data.totalCount,
        value,
      });
      props.actions.displaySpinner.update(false);
      props.actions.displayAccordian.update(true);
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
  getCommercialPromotions(props.commercialPromotions.value, currentPage, props);
};

const onRadioSelect = (id: string, props: IVariables) => {
  switch (id) {
    case '1':
      props.actions.promotionType.update({
        id,
        value: 'special offer',
      });
      break;
    case '2':
      props.actions.promotionType.update({
        id,
        value: 'sales',
      });
      break;
    case '3':
      props.actions.promotionType.update({
        id,
        value: 'back to school',
      });
      break;
    case '4':
      props.actions.promotionType.update({
        id,
        value: 'scratch and win',
      });
      break;
    case '5':
      props.actions.promotionType.update({
        id,
        value: 'draws',
      });
      break;
    default:
      props.actions.promotionType.update({
        id: '0',
        value: '',
      });
  }
};

const getValidation = (value: string, props: IVariables) => {
  const vartemp = value.length < 3;
  props.actions.displayErrorFlag.update(vartemp);
  if (value.length === 0) {
    props.actions.displayErrorFlag.update(false);
  }
};
const onBack = (props: IVariables) => {
  props.history.push('/commercial-promotions/home');
};

export default {
  getCommercialPromotions,
  getValidation,
  onRadioSelect,
  changePage,
  onPageInit,
  onBack,
};
