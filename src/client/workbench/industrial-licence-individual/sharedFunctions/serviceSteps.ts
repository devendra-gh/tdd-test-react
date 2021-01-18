

const stepsLists = () => {
  return [
    {
      id: 'fill_application',
      substeps: [
        {
          id: 'enter_company_details',
        },
        {
          id: 'choose_activities',
        },
        {
          id: 'choose_economic_name',
        },
      ],
    },
    {
      id: 'get_economic_licence',
      substeps: [
        {
          id: 'get_ded_approval',
        },
        {
          id: 'make_payment',
        },
        {
          id: 'download_licence',
        },
      ],
    },
  ];
};

const stepsListsWithoutEconomicName = () => {
  return [
    {
      id: 'fill_application',
      substeps: [
        {
          id: 'enter_company_details',
        },
        {
          id: 'choose_activities',
        },
      ],
    },
    {
      id: 'get_economic_licence',
      substeps: [
        {
          id: 'get_ded_approval',
        },
        {
          id: 'make_payment',
        },
        {
          id: 'download_licence',
        },
      ],
    },
  ];
};

export { stepsLists, stepsListsWithoutEconomicName };
