const processsteps = (i18n: Function, cStep: any, cSubStep: any) => {
  const steps: any[] = [
    {
      description: 'Answer a several questions to determine your legal form.',
      label: 'Select legal form',
      stepNumber: 1,
    },
    {
      description:
        'Answer a few quick questions to determine your legal form and enter the details of owner(s) and representatives, as required.',
      label: 'Add ownership details',
      stepNumber: 2,
    },
    {
      description:
        'Search and select business activities to be added to the economic licence.',
      label: 'Select business activities',
      stepNumber: 3,
    },
    {
      description:
        'Search for available economic names, select a recommended pre-approved one or customise it as you wish and complete the approval process, and submit the economic name reservation application.',
      label: 'Reserve economic name',
      stepNumber: 4,
    },
    {
      description: 'TEST....',
      label: 'Get economic licence',
      stepNumber: 5,
    },
  ];
  return steps;
};

export { processsteps };
