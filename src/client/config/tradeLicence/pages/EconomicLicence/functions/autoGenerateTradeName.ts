import { IVariables } from '@tamm/app-composer';
import { get } from 'lodash';
import fetch from 'client/services/fetch';

const autoGenerateTradeName = async (formState: IVariables) => {
  const requestData = {
    tradenameEnglish: formState.tradeNameEn,
    tradeNameArabic: formState.tradeNameAr,
    mainNature: 'ALL',
    activities: formState.activities.map((item: IVariables) => ({
      activityCode: item.activityCode,
    })),
  };
  const payload = await fetch(
    '/pub/proxy/autoFillBusinessName',
    'POST',
    requestData,
  );

  return {
    nameEn: get(payload, 'data.result.businessNameEng', ''),
    nameAr: get(payload, 'data.result.businessNameArb', ''),
  };
};

export default autoGenerateTradeName;
