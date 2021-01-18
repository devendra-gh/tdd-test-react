

const stepsLists = () => {
  return [
  {
    id: 'fill_application',
    substeps: [
      {
        id: 'enter_trade_name',
      },
      {
        id: 'enter_company_details',
      },
      {
        id: 'choose_activities',
      },
      {
        id: 'upload_documents',
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
}

export { stepsLists }