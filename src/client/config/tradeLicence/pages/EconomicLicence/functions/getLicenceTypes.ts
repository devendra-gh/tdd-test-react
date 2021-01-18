import { IVariables } from '@tamm/app-composer';

const getLicenceTypes = (user: IVariables) => {
  return [
    {
      id: 'instant',
      label: 'licenceType.instant',
    },
    {
      id: 'tajer',
      label: 'licenceType.tajer',
    },
    {
      id: 'allInOne',
      label: 'licenceType.allInOne',
    },
    {
      id: 'mubdia',
      label: 'licenceType.mubdia',
      visible: user && user.Gender === 'Female',
    },
    {
      id: 'tamm',
      label: 'licenceType.tamm',
    },
    {
      id: 'tech',
      label: 'licenceType.tech',
    },
    {
      id: 'branch',
      label: 'licenceType.branch',
    },
  ];
};

export default getLicenceTypes;
