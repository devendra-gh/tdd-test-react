import { IVariables } from '@tamm/app-composer';
import requiredDocuments from 'client/config/amendments/configs/requiredDocuments';
import getAmendmentsMade from 'client/config/amendments/utils/getAmendmentsMade';

export const getRequiredDocuments = (props: IVariables) => {
  // get the complete structure of amendments, the user has made
  const amendmentsMade = getAmendmentsMade(props);

  let generalFields: IVariables = [];
  const reqDocuments = Object.keys(amendmentsMade).map((category: string) => {
    const uploadSection = {
      name: category,
      description: `uploads.groupDescription.${category}`,
    };
    const sections: IVariables = [];
    const categorySections = amendmentsMade[category];

    Object.keys(categorySections).forEach((type: string) => {
      const typeSections: IVariables = categorySections[type];

      Object.keys(typeSections).forEach((action: string) => {
        const actionSections = typeSections[action];
        const sectionDocuments: IVariables[] =
          (requiredDocuments[type] && requiredDocuments[type][action]) || [];

        if (sectionDocuments.length) {
          const generalFieldsInSection: IVariables[] = [];
          const fields: IVariables[] = [];
          sectionDocuments.forEach((document: IVariables) => {
            // check whether the upload field has to be displayed only on some condition
            const isConditionSatisfy =
              typeof document.conditionalBehaviour === 'function'
                ? document.conditionalBehaviour(props)
                : true;
            if (isConditionSatisfy) {
              if (document.isGeneral) {
                generalFieldsInSection.push(document);
              } else {
                fields.push(document);
              }
            }
          });
          generalFields = generalFields.concat(generalFieldsInSection);
          if (fields.length) {
            if (Array.isArray(actionSections)) {
              actionSections.forEach((representative: IVariables) => {
                const section = {
                  name: type,
                  userEn: `${representative.firstNameEn} ${representative.lastNameEn}`,
                  userAr: `${representative.firstNameAr} ${representative.lastNameAr}`,
                  referenceKey: representative.referenceKey,
                  action,
                  fields,
                };
                sections.push(section);
              });
            } else {
              const section = {
                name: type,
                action,
                fields,
              };
              sections.push(section);
            }
          }
        }
      });
    });
    return { ...uploadSection, sections };
  });

  // check if there is any document in general section, if any. put it in the top of array
  if (generalFields.length) {
    // remove duplicate document fields
    generalFields = Array.from(
      new Set(generalFields.map((d: IVariables) => d.name)),
    ).map((fileName: any) =>
      generalFields.find((d: IVariables) => d.name === fileName),
    );

    reqDocuments.unshift({
      name: 'general',
      description: ``,
      sections: [
        {
          name: 'common',
          user: 'common',
          action: 'update',
          fields: generalFields,
        },
      ],
    });
  }
  return reqDocuments.filter(({ sections }: IVariables) => sections.length);
};
