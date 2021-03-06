const getSteps = (i18n: Function, cStep: any, cSubStep: any) => {
  const stepsList: any[] = [
    {
      id: 'step_selectLicence',
    },
    {
      id: 'step_enterContactDetails',
    },
    {
      id: 'step_makePayment',
      substeps: [
        {
          id: 'subStep_requestConfirmation',
        },
        {
          id: 'subStep_payAmount',
          status: 'process',
        },
      ],
    },
    {
      id: 'step_downloadCertificate',
    },
  ];
  let stepFinish: boolean = false;
  let subStepFinish: boolean = false;
  const steps: any[] = stepsList.map((step: any) => {
    let subSteps = [];
    if (cStep.id === step.id) {
      stepFinish = true;
    }
    if (step.substeps) {
      subSteps = step.substeps.map((subStep: any) => {
        if (cSubStep.id === subStep.id) {
          subStepFinish = true;
        }
        return {
          label: i18n(subStep.id),
          status: subStepFinish
            ? (cSubStep.id === subStep.id
              ? cSubStep.status
              : '' )
            : ( !stepFinish || cStep.id === step.id ? 'finish' : ''),
        };
      });
    }
    return {
      ...(subSteps.length ? { substeps: subSteps } : {}),
      link: '',
      label: i18n(step.id),
      status: stepFinish ? (cStep.id === step.id ? cStep.status : '') : 'finish',
    };
  });
  return steps;
};

export { getSteps };
