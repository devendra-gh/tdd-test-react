import { IVariables } from '@tamm/app-composer';
import { validationRules, inputTypes } from 'client/config/components/Form';

const getOnChangeHandler = (state: any) => (
  props: IVariables,
  fieldValues: IVariables,
) => {
  props.actions.questionnaireData.update({
    ...state.questionnaireData,
    ...fieldValues,
  });
};

// const isVisible = (formData: any) => formData.owner === "owner";
// const isDisabled = (formData: any) => formData.owner === "disable";

/**
 * get form state
 * @param {IVariables} state
 * @returns {Object}
 */
const getFormState = (state: IVariables) => {
  const formValues = state.questionnaireData;
  return {
    formData: formValues,
    onChange: getOnChangeHandler(state),
    steps: [
      {
        fields: [
          {
            name: 'applicantType',
            title: 'questioner.optionTitle',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'newBusiness',
                label: 'questioner.option4',
              },
              {
                value: 'female',
                label: 'questioner.option3',
              },
              {
                value: 'simpleBusiness',
                label: 'questioner.option2',
              },
              {
                value: 'expandBusiness',
                label: 'questioner.option1',
              },
            ],
            defaultValue: formValues.applicantType || 'newBusiness',
            // align: "horizontal"
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'expandBusiness',
        fields: [
          {
            name: 'eCommerce',
            title: 'questioner.question.eCommerce',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.eCommerce || 'yes',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'expandBusiness' &&
          formValues.eCommerce === 'no',
        fields: [
          {
            name: 'freeZoneToMain',
            title: 'questioner.question2',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.freeZoneToMain || 'yes',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'expandBusiness' &&
          formValues.freeZoneToMain === 'no',
        fields: [
          {
            name: 'parentLocation',
            title: 'questioner.question3',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'abuDhabi',
                label: 'questioner.abuDhabi',
              },
              {
                value: 'otherUae',
                label: 'questioner.otherUae',
              },
              {
                value: 'gcc',
                label: 'questioner.gcc',
              },
              {
                value: 'foreign',
                label: 'questioner.foreign',
              },
            ],
            defaultValue: formValues.parentLocation || 'abuDhabi',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'expandBusiness' &&
          formValues.freeZoneToMain === 'no' &&
          (formValues.parentLocation === 'abuDhabi' ||
            formValues.parentLocation === 'otherUae'),
        fields: [
          {
            name: 'ownerOrPartner',
            title: 'questioner.question4',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'oneOwner',
                label: 'questioner.oneOwner',
              },
              {
                value: 'partners',
                label: 'questioner.partners',
              },
            ],
            defaultValue: formValues.ownerOrPartner || 'oneOwner',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'simpleBusiness',
        fields: [
          {
            name: 'oneOrMoreOwner',
            title: 'questioner.question5',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'oneOwner',
                label: 'questioner.oneOwner',
              },
              {
                value: 'moreOwners',
                label: 'questioner.moreOwners',
              },
            ],
            defaultValue: formValues.oneOrMoreOwner || 'oneOwner',
            align: 'horizontal',
          },
        ],
      },
      // {
      //   visible: (formValues: IVariables) =>
      //     (formValues.applicantType === "simpleBusiness" ||
      //       formValues.applicantType === "newBusiness") &&
      //     formValues.oneOrMoreOwner === "oneOwner",
      //   fields: [
      //     {
      //       name: "isGccOwner",
      //       title: "questioner.question6",
      //       type: inputTypes.radio,
      //       validation: [validationRules.required],
      //       options: [
      //         {
      //           value: "yes",
      //           label: "questioner.yes"
      //         },
      //         {
      //           value: "no",
      //           label: "questioner.no"
      //         }
      //       ],
      //       // defaultValue: "yes",
      //       align: "horizontal"
      //     }
      //   ]
      // },
      // {
      //   visible: (formValues: IVariables) =>
      //     formValues.applicantType === "simpleBusiness" &&
      //     formValues.oneOrMoreOwner === "oneOwner" &&
      //     formValues.isGccOwner === "yes",
      //   fields: [
      //     {
      //       name: "limitedOrUnlimitedCompany",
      //       title: "questioner.question7",
      //       type: inputTypes.radio,
      //       validation: [validationRules.required],
      //       options: [
      //         {
      //           value: "limited",
      //           label: "questioner.limited"
      //         },
      //         {
      //           value: "unLimited",
      //           label: "questioner.unLimited"
      //         }
      //       ],
      //       // defaultValue: "yes",
      //       align: "horizontal"
      //     }
      //   ]
      // },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness',
        fields: [
          {
            name: 'timeSpan',
            title: 'questioner.question8',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'moreThree',
                label: 'questioner.moreThree',
              },
              {
                value: 'lessThree',
                label: 'questioner.lessThree',
              },
            ],
            defaultValue: formValues.timeSpan || 'moreThree',
            align: 'horizontal',
          },
        ],
      },

      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'moreThree',
        fields: [
          {
            name: 'isTechBusiness',
            title: 'questioner.question10',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.isTechBusiness || 'yes',
            align: 'horizontal',
          },
        ],
      },

      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'lessThree',
        fields: [
          {
            name: 'isOffice',
            title: 'questioner.question16',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.isOffice || 'yes',
            align: 'horizontal',
          },
        ],
      },

      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness',
        // formValues.timeSpan === "moreThree",
        fields: [
          {
            name: 'ownerType',
            title: 'questioner.question11',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'oneOwner',
                label: 'questioner.oneOwner',
              },
              {
                value: 'multipleOwners',
                label: 'questioner.multipleOwners',
              },
            ],
            defaultValue: formValues.ownerType || 'oneOwner',
            align: 'horizontal',
          },
        ],
      },

      {
        visible: (formValues: IVariables) =>
          (formValues.applicantType === 'simpleBusiness' ||
            (formValues.applicantType === 'newBusiness' &&
              formValues.timeSpan === 'lessThree')) &&
          (formValues.oneOrMoreOwner === 'oneOwner' ||
            formValues.ownerType === 'oneOwner'),
        fields: [
          {
            name: 'isGccOwner',
            title: 'questioner.question6',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.emirati',
              },
              {
                value: 'no',
                label: 'questioner.other',
              },
            ],
            defaultValue: formValues.isGccOwner || 'yes',
            align: 'horizontal',
          },
        ],
      },

      {
        visible: (formValues: IVariables) =>
          (formValues.applicantType === 'simpleBusiness' ||
            formValues.applicantType === 'newBusiness') &&
          (formValues.oneOrMoreOwner === 'oneOwner' ||
            formValues.ownerType === 'oneOwner') &&
          formValues.isGccOwner === 'yes',
        fields: [
          {
            name: 'limitedOrUnlimitedCompany',
            title: 'questioner.question7',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'limited',
                label: 'questioner.limited',
              },
              {
                value: 'unLimited',
                label: 'questioner.unLimited',
              },
            ],
            defaultValue: formValues.limitedOrUnlimitedCompany || 'limited',
            align: 'horizontal',
          },
        ],
      },

      // {
      //   visible: (formValues: IVariables) =>
      //     formValues.applicantType === "newBusiness",
      //   fields: [
      //     {
      //       name: "isOffice",
      //       title: "questioner.question16",
      //       type: inputTypes.radio,
      //       validation: [validationRules.required],
      //       options: [
      //         {
      //           value: "yes",
      //           label: "questioner.yes"
      //         },
      //         {
      //           value: "no",
      //           label: "questioner.no"
      //         }
      //       ],
      //       // defaultValue: "yes",
      //       align: "horizontal"
      //     }
      //   ]
      // },

      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'moreThree' &&
          // formValues.isTechBusiness === "yes" &&
          formValues.ownerType === 'oneOwner',
        fields: [
          {
            name: 'isOwnerCompany',
            title: 'questioner.question12',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.isOwnerCompany || 'yes',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'moreThree' &&
          // formValues.isTechBusiness === "yes" &&
          formValues.ownerType === 'oneOwner' &&
          formValues.isOwnerCompany === 'no',
        fields: [
          {
            name: 'isGcc',
            title: 'questioner.question13',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.emirati',
              },
              {
                value: 'no',
                label: 'questioner.other',
              },
            ],
            defaultValue: formValues.isGcc || 'yes',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'moreThree' &&
          // formValues.isTechBusiness === "yes" &&
          formValues.ownerType === 'oneOwner' &&
          formValues.isOwnerCompany === 'no' &&
          formValues.isGcc === 'yes',
        fields: [
          {
            name: 'limitedOrUnlimited',
            title: 'questioner.question14',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'limited',
                label: 'questioner.limited',
              },
              {
                value: 'unLimited',
                label: 'questioner.unLimited',
              },
            ],
            defaultValue: formValues.limitedOrUnlimited || 'limited',
            align: 'horizontal',
          },
        ],
      },
      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'newBusiness' &&
          formValues.timeSpan === 'moreThree' &&
          // formValues.isTechBusiness === "yes" &&
          formValues.ownerType === 'multipleOwners',
        fields: [
          {
            name: 'legalType',
            title: 'questioner.question15',
            type: inputTypes.radio,
            validation: [validationRules.required],
            uiType: 'extended',
            options: [
              {
                value: 'llc',
                label: 'questioner.llc',
                description: 'wizard.llc.description',
              },
              {
                value: 'pjscPublic',
                label: 'questioner.pjscPublic',
                description: 'wizard.pjscPublic.description',
              },
              {
                value: 'pjscPrivate',
                label: 'questioner.pjscPrivate',
                description: 'wizard.pjscPrivate.description',
              },
            ],
            defaultValue: formValues.legalType || 'llc',
            // align: "horizontal"
          },
        ],
      },
      // {
      //   visible: (formValues: IVariables) => false,
      //   fields: [
      //     {
      //       name: "isOffice",
      //       title: "questioner.question16",
      //       type: inputTypes.radio,
      //       validation: [validationRules.required],
      //       options: [
      //         {
      //           value: "yes",
      //           label: "questioner.yes"
      //         },
      //         {
      //           value: "no",
      //           label: "questioner.no"
      //         }
      //       ],
      //       // defaultValue: "yes",
      //       align: "horizontal"
      //     }
      //   ]
      // },

      {
        visible: (formValues: IVariables) =>
          formValues.applicantType === 'female' ||
          // (formValues.applicantType === 'newBusiness' &&
          //   (formValues.isTechBusiness === 'no' ||
          //     !formValues.isTechBusiness))
          //      ||
          (formValues.applicantType === 'newBusiness' &&
            (formValues.isTechBusiness === 'no' ||
              (!formValues.isTechBusiness &&
                !(
                  formValues.applicantType === 'newBusiness' &&
                  formValues.timeSpan === 'lessThree' &&
                  formValues.isOffice === 'no' &&
                  formValues.ownerType === 'oneOwner' &&
                  formValues.isGccOwner === 'no'
                )))),
        fields: [
          {
            name: 'isDigitalChannels',
            title: 'questioner.question9',
            type: inputTypes.radio,
            validation: [validationRules.required],
            options: [
              {
                value: 'yes',
                label: 'questioner.yes',
              },
              {
                value: 'no',
                label: 'questioner.no',
              },
            ],
            defaultValue: formValues.isDigitalChannels || 'yes',
            align: 'horizontal',
          },
        ],
      },
    ],
  };
};

const updateLegalForm = (outcomes: any[], props: IVariables) => {
  if (outcomes.length === 1) {
    // const { value } = outcomes[0];
    // props.actions.legalForm.update({
    //   type: value,
    //   businessRole: props.questionnaireData.owner
    // });
  }
};

const getLicenceType = (answers: IVariables): string => {
  const {
    applicantType,
    timeSpan,
    isOffice,
    isTechBusiness,
    parentLocation,
    freeZoneToMain,
    eCommerce,
    isGccOwner,
    ownerType,
  } = answers;

  const mubdia = applicantType === 'female';

  const instant = applicantType === 'simpleBusiness';

  // const branch = applicantType === "expandBusiness";

  const amend = applicantType === 'expandBusiness' && eCommerce === 'yes';

  const adbBranch =
    applicantType === 'expandBusiness' && parentLocation === 'abuDhabi';

  const uaeBranch =
    applicantType === 'expandBusiness' && parentLocation === 'otherUae';
  const gccBranch =
    applicantType === 'expandBusiness' && parentLocation === 'gcc';

  const foreignBranch =
    applicantType === 'expandBusiness' && parentLocation === 'foreign';

  const freeZoneBranch =
    applicantType === 'expandBusiness' && freeZoneToMain === 'yes';

  const tech =
    applicantType === 'newBusiness' &&
    timeSpan === 'moreThree' &&
    isTechBusiness === 'yes';

  const tamm =
    applicantType === 'newBusiness' &&
    timeSpan === 'moreThree' &&
    isTechBusiness === 'no';

  const tajer =
    applicantType === 'newBusiness' &&
    timeSpan === 'lessThree' &&
    isOffice === 'no' &&
    (ownerType === 'oneOwner' || ownerType === 'multipleOwners') &&
    (isGccOwner === 'yes' || !isGccOwner);

  const instantOther =
    applicantType === 'newBusiness' &&
    timeSpan === 'lessThree' &&
    isOffice === 'no' &&
    ownerType === 'oneOwner' &&
    isGccOwner === 'no';

  const allInOne =
    applicantType === 'newBusiness' &&
    timeSpan === 'lessThree' &&
    isOffice === 'yes';

  if (mubdia) return 'mubdia';
  if (instant) return 'instant';
  if (amend) return 'amend';
  if (adbBranch) return 'adbBranch';
  if (uaeBranch) return 'uaeBranch';
  if (gccBranch) return 'gccBranch';
  if (foreignBranch) return 'foreignBranch';
  if (freeZoneBranch) return 'freeZoneBranch';
  if (tech) return 'tech';
  if (tamm) return 'tamm';
  if (tajer) return 'tajer';
  if (instantOther) return 'instant';
  if (allInOne) return 'allInOne';
  return '';
};

const getLegalForm = (answers: IVariables, licenceType: string) => {
  const {
    applicantType,
    ownerOrPartner,
    oneOrMoreOwner,
    ownerType,
    limitedOrUnlimitedCompany,
    limitedOrUnlimited,
    // freeZoneToMain,
    isGccOwner,
    isGcc,
    isOwnerCompany,
    legalType,
    timeSpan,
    isOffice,
  } = answers;

  // let legalForm = "";

  // branch ==> legalType
  if (applicantType === 'expandBusiness') {
    if (ownerOrPartner === 'oneOwner') {
      return 'establishment';
    }
    if (ownerOrPartner === 'partners') {
      return 'llc';
    }
  }

  // branch
  // const est = ownerOrPartner === "oneOwner";
  // const firstllc = ownerOrPartner === "partners";

  // instant ==> legalType
  if (applicantType === 'simpleBusiness') {
    if (limitedOrUnlimitedCompany === 'unLimited' || isGccOwner === 'no') {
      return 'establishment';
    }
    if (oneOrMoreOwner === 'moreOwners') {
      return 'llc';
    }
    if (limitedOrUnlimitedCompany === 'limited') {
      return 'soleLLC';
    }
  }
  // instant
  // const iEst = limitedOrUnlimitedCompany === "unLimited" || isGccOwner === "no";
  // const iLlc = oneOrMoreOwner === "moreOwners";
  // const iSole = limitedOrUnlimitedCompany === "limited";

  if (applicantType === 'female') {
    return 'establishment';
  }

  // mubdia
  // const mEst = true;

  if (licenceType === 'tech') {
    if (isGcc === 'no' || limitedOrUnlimited === 'unLimited') {
      return 'establishment';
    }
    if (isOwnerCompany === 'yes') {
      return 'solePjsc';
    }
    if (limitedOrUnlimited === 'limited') {
      return 'soleLLC';
    }
    if (legalType === 'llc') {
      return 'llc';
    }
    if (legalType === 'pjscPublic') {
      return 'pjscPublic';
    }
    if (legalType === 'pjscPrivate') {
      return 'pjscPrivate';
    }
  }
  // tech
  // const tEst = isGcc === "no" || limitedOrUnlimited === "unLimited";
  // const tsolePjsc = isOwnerCompany === "yes";
  // const tsolellc = limitedOrUnlimited === "limited";
  // const tllc = legalType === "llc";
  // const pjscPublic = legalType === "pjscPublic";
  // const pjscPrivate = legalType === "pjscPublic";

  if (licenceType === 'tamm') {
    if (isOwnerCompany === 'yes') {
      return 'solePjsc';
    }
    if (isGcc === 'no' || limitedOrUnlimited === 'unLimited') {
      return 'establishment';
    }
    if (limitedOrUnlimited === 'limited') {
      return 'soleLLC';
    }
    if (legalType === 'llc') {
      return 'llc';
    }
    if (legalType === 'pjscPublic') {
      return 'pjscPublic';
    }
    if (legalType === 'pjscPrivate') {
      return 'pjscPrivate';
    }
  }
  // tamm
  // const esolePjsc = isOwnerCompany === "no";
  // const eEst = isGcc === "no" || limitedOrUnlimited === "unLimited";
  // const eSolellc = limitedOrUnlimited === "limited";
  // const ellc = legalType === "llc";
  // const epjscPublic = legalType === "pjscPublic";
  // const epjscPrivate = legalType === "pjscPrivate";

  if (licenceType === 'allInOne') {
    if (isGccOwner === 'no' || limitedOrUnlimitedCompany === 'unLimited') {
      return 'establishment';
    }
    if (limitedOrUnlimitedCompany === 'limited') {
      return 'soleLLC';
    }
    if (ownerType === 'multipleOwners') {
      return 'llc';
    }
  }
  // allInOne
  // const aEst =
  //   ownerType === "multipleOwners" || limitedOrUnlimitedCompany === "unLimited";
  // const aSolellc = limitedOrUnlimitedCompany === "limited";

  if (licenceType === 'tajer') {
    if (isGccOwner === 'no' || limitedOrUnlimitedCompany === 'unLimited') {
      return 'establishment';
    }
    if (limitedOrUnlimitedCompany === 'limited') {
      return 'soleLLC';
    }
    if (ownerType === 'multipleOwners') {
      return 'llc';
    }
  }

  if (
    applicantType === 'newBusiness' &&
    timeSpan === 'lessThree' &&
    ownerType === 'oneOwner' &&
    isGccOwner === 'no' &&
    isOffice === 'no'
  ) {
    return 'establishment';
  }

  // tajer
  // const taEst =
  //   isGccOwner === "no" || limitedOrUnlimitedCompany === "unLimited";
  // const tSllc = limitedOrUnlimitedCompany === "limited";
  // const taLlc = ownerType === "multipleOwners";

  // freeZoneToMain

  // return "establishment";
  return '';
};

const getLicenceDescription = (licenceType: string): string => {
  const description: IVariables = {
    mubdia: 'wizard.mubdia.description',
    instant: 'wizard.instant.description',
    // branch: "wizard.branch.description",
    amend: 'wizard.amend.description',
    adbBranch: 'wizard.adbBranch.description',
    uaeBranch: 'wizard.uaeBranch.description',
    gccBranch: 'wizard.gccBranch.description',
    foreignBranch: 'wizard.foreignBranch.description',
    freeZoneBranch: 'wizard.freeZoneBranch.description',
    tech: 'wizard.tech.description',
    tamm: 'wizard.tamm.description',
    tajer: 'wizard.tajer.description',
    allInOne: 'wizard.allInOne.description',
    '': '',
  };

  return description[licenceType];
};

const getLegalFormDescription = (legalForm: string): string => {
  const description: IVariables = {
    establishment: 'wizard.establishment.description',
    llc: 'wizard.llc.description',
    soleLLC: 'wizard.soleLLC.description',
    solePjsc: 'wizard.tsolePjsc.description',
    pjscPublic: 'wizard.pjscPublic.description',
    pjscPrivate: 'wizard.pjscPrivate.description',
    '': '-',
  };

  return description[legalForm];
};

const getTranslationKeys = (word: string): string => {
  const key: IVariables = {
    mubdia: 'licenceType.mubdia',
    instant: 'licenceType.instant',
    amend: 'licenceType.ammend',
    adbBranch: 'licenceType.adbBranch',
    uaeBranch: 'licenceType.uaeBranch',
    gccBranch: 'licenceType.gccBranch',
    foreignBranch: 'licenceType.foreignBranch',
    freeZoneBranch: 'licenceType.freeZoneBranch',
    tech: 'licenceType.tech',
    tamm: 'licenceType.tamm',
    tajer: 'licenceType.tajer',
    allInOne: 'licenceType.allInOne',
    establishment: 'legalForm.establishment.label',
    llc: 'legalForm.limitedLiabilityCompanyLLC',
    soleLLC: 'legalForm.soleProprietorshipLLC',
    solePjsc: 'legalform.PJSCSoleProp',
    pjscPublic: 'legalform.PJSCPublic',
    pjscPrivate: 'legalform.PJSCPrivate',
    '': '-',
  };

  return key[word];
};

const getSummary = (props: IVariables) => {
  const { questionnaireData } = props;
  const isEcommerce = questionnaireData.isDigitalChannels === 'yes';
  const licenceType = getLicenceType(questionnaireData);
  const legalForm = getLegalForm(questionnaireData, licenceType);
  const items = [
    {
      id: '1',
      licenceSection: 'summary.licence.type',
      choice: getTranslationKeys(licenceType),
      description: [getLicenceDescription(licenceType)],
    },
  ];

  const legalFormMsg = {
    id: '2',
    licenceSection: 'summary.legal.form.type',
    choice: getTranslationKeys(legalForm),
    description: [getLegalFormDescription(legalForm)],
  };

  const eCommerceMsg = {
    id: '3',
    licenceSection: 'E-commerce activity? ',
    choice: 'questioner.yes',
    // description:
    //   "In order to sell your products or services online, please make sure to add the relevant activity below to your economic licence."
    // description: getDescription(questionnaireData)
    description: [
      'ecommerce.activity.text',
      'ecommerce.activity1',
      'ecommerce.activity2',
      'ecommerce.activity3',
      'ecommerce.activity4',
      'ecommerce.activity5',
      'ecommerce.activity6',
      'ecommerce.activity7',
      'ecommerce.activity8',
      'ecommerce.activity9',
      'ecommerce.activity10',
    ],
  };

  if (
    licenceType === 'mubdia' ||
    licenceType === 'instant' ||
    licenceType === 'tech' ||
    licenceType === 'tamm' ||
    licenceType === 'tajer' ||
    licenceType === 'allInOne'
  ) {
    items.push(legalFormMsg);
  }

  if (isEcommerce) items.push(eCommerceMsg);

  const summary = {
    columns: [
      {
        id: 'licenceSection',
        title: 'summary.licence.section',
      },
      {
        id: 'choice',
        title: 'summary.best.choice',
        align: 'center',
      },
      {
        id: 'description',
        title: 'summary.description',
        align: 'end',
      },
    ],
    headerHidden: false,
    items,
    title: 'wizard_summary',
    uiType: 'default',
  };
  return [summary];
};

const init = (props: IVariables) => {
  const {
    match: {
      params: { formIndex },
    },
    questionnaireData,
  } = props;

  console.log('questionerData', questionnaireData);
  const data = { applicantType: questionnaireData.applicantType };
  console.log('asd', data);
  if (formIndex === '1') {
    props.actions.questionnaireData.update(data);
    // props.actions.questionnaireData.reset();
  }
};

const getButtonLabel = (props: IVariables) => {
  const licenceType = getLicenceType(props.questionnaireData);
  if (licenceType === 'amend') {
    return 'button.dashBoard';
  }
  return 'button.next';
};

const getSummaryText = (props: IVariables) => {
  const licenceType = getLicenceType(props.questionnaireData);
  if (licenceType === 'amend') {
    return 'wizardSummary.amendDescription';
  }
  return 'wizardSummary.description';
};
/**
 * @param {IVariables} formData
 * @param {IVariables} props
 * @returns {*}
 */
const onSubmit = async (formData: IVariables, props: IVariables) => {
  const licenceType = getLicenceType(props.questionnaireData);
  const legalForm = getLegalForm(props.questionnaireData, licenceType);

  const lForm: IVariables = {
    establishment: 'establishment',
    llc: 'limitedLiabilityCompanyLLC',
    soleLLC: 'soleProprietorshipLLC',
    solePjsc: 'PJSCSoleProp',
    pjscPublic: 'PJSCPublic',
    pjscPrivate: 'PJSCPrivate',
  };

  if (licenceType === 'amend') {
    window.open('https://www.tamm.abudhabi/journeys/manage-your-business/');
  } else if (
    licenceType === 'adbBranch' ||
    licenceType === 'uaeBranch' ||
    licenceType === 'foreignBranch' ||
    licenceType === 'freeZoneBranch'
  ) {
    await props.actions.economicLicense.update({
      ...props.economicLicense,
      licenceType: { licenceType: 'branch' },
    });
    props.history.push('/economic-licence/submit?licenceType=branch');
  } else {
    await props.actions.economicLicense.update({
      ...props.economicLicense,
      licenceType: { licenceType },
      legalForm: { legalForm: lForm[legalForm] },
    });
    props.history.push(
      `/economic-licence/submit?licenceType=${licenceType}&legalForm=${lForm[legalForm]}`,
    );
  }
};

export default {
  onSubmit,
  init,
  getButtonLabel,
  getSummaryText,
  getFormState,
  getOnChangeHandler,
  // isVisible,
  // isDisabled,
  updateLegalForm,
  getSummary,
};
