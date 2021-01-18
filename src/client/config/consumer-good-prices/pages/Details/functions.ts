import { IVariables } from '@tamm/app-composer';
import moment from 'moment';
import loadDetails from './helpers/loadDetails';

const onBack = async (props: IVariables) => {
  props.history.push('/consumer-good-prices/search');
};

const showErrorPage = async (props: IVariables) => {
  props.history.push('/consumer-good-prices/error-page');
};

const getDetails = async (props: IVariables) => {
  const { locale, match } = props;
  const barCode = match.params.id;

  try {
    if (!barCode) throw new Error();
    let data = await loadDetails(props, barCode);
    if (!data.length) throw new Error();
    data = data.map((x: IVariables) => {
      return {
        ...x,
        store: locale === 'ar' ? x.storeAr : x.storeEn,
        location: locale === 'ar' ? x.locationAr : x.locationEn,
        collectionDate: moment(x.collectionDate).format('LL'),
      };
    });
    props.actions.currentGoods.update(data);
    // return data;
  } catch (e) {
    showErrorPage(props);
  }
};

export default {
  onBack,
  getDetails,
};
