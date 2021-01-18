import { get } from 'lodash';
import fetch from 'client/services/fetch';

const onCheckTradeName = async (
  tradeNameEnglish: string,
  tradenameArabic: string,
) => {
  const payload = await fetch('/pub/proxy/tradeNameCheck', 'POST', {
    tradeNameEnglish,
    tradenameArabic,
  });
  // console.log("data log payload", payload);
  const result = get(payload, 'data.checkedEconomicNameProperty', {});

  let message = 'licenceName.alertSuccess';
  let hasError = false;
  // console.log("data log", result);
  if (!result.nameAvailableInEnglish || !result.nameAvailableInArabic) {
    hasError = true;
    message = 'licenceName.alertErrorUnavailable';
  }
  if (result.isSpecialNameEn || result.isSpecialNameEn) {
    hasError = false;
    message = 'licenceName.alertSpecialName';
  }
  if (result.isProhibitedNameEn || result.isProhibitedNameAr) {
    hasError = true;
    message = 'licenceName.alertErrorProhibited';
  }

  return {
    status: hasError ? 'error' : 'success',
    message,
  };
};

export default onCheckTradeName;
