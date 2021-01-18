const stepsLists = () => {
  return [
    {
      id: 'Global_FillApplicationStep',
      substeps: [
        {
          id: 'Global_SelectLicenceStep',
        },
        {
          id: 'Global_EnterCompanyDetailsStep',
        },
        {
          id: 'Global_UploadDocumentsStep',
        },
      ],
    },
    {
      id: 'Global_GetLicenceStep',
      substeps: [
        {
          id: 'Global_GetLicenceGetDedApproval',
        },
        {
          id: 'Global_GetLicenceMakePayment',
        },
        {
          id: 'Global_GetLicenceDownloadLicence',
        },
      ],
    },
  ];
};

export { stepsLists };
