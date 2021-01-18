const getInitialSteps = () => [
  {
    id: 0,
    label: 'Global_FillApplication',
    substeps: [
      { id: 0, label: 'Global_SelectLicence' },
      { id: 1, label: 'Global_SelectCertifiedEntities' },
      { id: 2, label: 'Global_UploadDocuments' },
      { id: 3, label: 'Global_AddContactInformation' },
    ],
  },
  {
    id: 1,
    label: 'Global_GetCertificate',
    substeps: [
      { id: 0, label: 'Global_SubmitApplication' },
      { id: 1, label: 'Global_ReviewQuotations' },
      { id: 2, label: 'Global_GetApproval' },
      { id: 3, label: 'Global_DownloadCertificate' },
    ],
  },
];

let localizer: any;

const updateSteps = (
  steps: any[],
  currentIndex: number,
  currentSubstepIndex: number = 0,
) => {
  // mark current page as in progress and mark older pages as completed
  let completedSteps = steps.slice(0, currentIndex);
  completedSteps = completedSteps
    .map((step: any) => ({
      ...step,
      status: 'finish',
    }))
    .map((step: any) => {
      let updatedSubsteps: any[] = [];
      if (step.substeps) {
        updatedSubsteps = updateSteps(step.substeps, step.substeps.length);
        return {
          ...step,
          substeps: updatedSubsteps,
        };
      }
      return {
        ...step,
      };
    });

  if (steps.length == currentIndex) {
    return completedSteps;
  }

  let currentStep = steps[currentIndex];
  let currentSubSteps: any[] = [];
  if (currentStep.substeps) {
    currentSubSteps = updateSteps(currentStep.substeps, currentSubstepIndex);
    currentStep = { ...currentStep, substeps: currentSubSteps };
  }

  const updatedSteps = [
    ...completedSteps,
    currentStep,
    ...steps.slice(currentIndex + 1),
  ];
  return updatedSteps;
};

const getSteps = (
  i18n: any,
  currentIndex: number = 0,
  currentSubIndex: number = 0,
) => {
  let steps = getInitialSteps();
  localizer = i18n;
  steps = localizeSteps(steps);

  const updatedSteps = updateSteps(steps, currentIndex, currentSubIndex);
  return updatedSteps;
};

const localizeSteps = (steps: any) => {
  if (steps) {
    return steps.map((step: any) => ({
      ...step,
      label: localizer(step.label),
      substeps: localizeSteps(step.substeps),
    }));
  }
};

export { getInitialSteps, updateSteps, getSteps };
