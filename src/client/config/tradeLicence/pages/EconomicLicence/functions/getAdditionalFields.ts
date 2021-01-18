export const getAdditionalFields = (licenceType: string, legalForm: string) => {
  if (
    !(
      ['tajer', 'allInOne'].includes(licenceType) &&
      ['soleProprietorshipLLC', 'limitedLiabilityCompanyLLC'].includes(
        legalForm,
      )
    )
  ) {
    return [];
  }

  return [
    {
      type: 'select',
      name: 'emirateName',
      label: 'input.emirate_name',
      items: [
        { id: 'Abu Dhabi', label: 'input.AbuDhabi' },
        { id: 'Dubai', label: 'input.Dubai' },
        { id: 'Ajman', label: 'input.Ajman' },
        { id: 'Fujairah', label: 'input.Fujairah' },
        { id: 'Ras al Khaimah', label: 'input.RasalKhaimah' },
        { id: 'Sharjah', label: 'input.Sharjah' },
        { id: 'Umm Al Quwain', label: 'input.UmmAlQuwain' },
      ],
      required: true,
    },
    {
      type: 'input',
      name: 'streetENG',
      label: 'input.streetENG',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'streetARB',
      label: 'input.streetARB',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'areaENG',
      label: 'input.areaENG',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'areaARB',
      label: 'input.areaARB',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'buildingNameENG',
      label: 'input.buildingEn',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'buildingNameARB',
      label: 'input.buildingAr',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'buildingNumber',
      label: 'input.building',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'flatVillaNo',
      label: 'input.flatVillaNo',
      required: false,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
    {
      type: 'input',
      name: 'poBox',
      label: 'input.poBox',
      required: true,
      validate: (value: string) => {
        if (!value) {
          return { status: 'error', message: 'required_field' };
        }
        return { status: 'success', message: '' };
      },
    },
  ];
};
