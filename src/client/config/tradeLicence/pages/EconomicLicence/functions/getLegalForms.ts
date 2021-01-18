import { includes } from 'lodash';
import { IVariables } from '@tamm/app-composer';
// import { isGCC } from 'client/config/utils/gcc';

const getLegalForms = (licenceType: string, loggedInUser: IVariables) => {
  let legalForms = [
    { id: 'establishment', label: 'legalForm.establishment.label' },
  ];
  // ['mubdia', 'tajer', 'allInOne']
  if (includes(['mubdia', 'tajer', 'allInOne'], licenceType)) {
    return legalForms;
  }

  /* TODO - MOA CODE DO NOT REMOVE
  const isLoggedInUserGCC = isGCC(
    loggedInUser && loggedInUser['Nationality EN']
      ? loggedInUser['Nationality EN']
      : '',
  );

  // if current logged in user is not GCC then we will not show soleProprietorshipLLC
  // only for 'tajer', 'allInOne'
  if (includes(['tajer', 'allInOne'], licenceType) && !isLoggedInUserGCC) {
    legalForms = [
      ...legalForms,
      {
        id: 'limitedLiabilityCompanyLLC',
        label: 'legalForm.limitedLiabilityCompanyLLC',
      },
    ];
    return legalForms;
  }
  */

  legalForms = [
    ...legalForms,
    {
      id: 'soleProprietorshipLLC',
      label: 'legalForm.soleProprietorshipLLC',
    },
    {
      id: 'limitedLiabilityCompanyLLC',
      label: 'legalForm.limitedLiabilityCompanyLLC',
    },
  ];

  if (includes(['tamm', 'tech'], licenceType)) {
    legalForms = [
      ...legalForms,
      {
        id: 'PJSCPrivate',
        label: 'legalform.PJSCPrivate',
      },
      {
        id: 'PJSCPublic',
        label: 'legalform.PJSCPublic',
      },
      {
        id: 'PJSCSoleProp',
        label: 'legalform.PJSCSoleProp',
      },
    ];
  }

  return legalForms;
};

export const isMoaRequired = (licenceType: string, legalForm: string) => {
  if (
    licenceType &&
    legalForm &&
    ['tajer', 'allInOne'].includes(licenceType) &&
    ['soleProprietorshipLLC', 'limitedLiabilityCompanyLLC'].includes(legalForm)
  ) {
    return true;
  }
  return false;
};

export default getLegalForms;
