import { IVariables } from '@tamm/app-composer';
import { trimStart } from 'lodash';

const mapServiceData = (service: IVariables, i18n: any): IVariables => {
  const serviceData = service.serviceCodeData;

  const heroContent = {
    title: serviceData.Mainservice,
  };

  const baseContent = {
    title: serviceData.Name,
    description: serviceData.Description,
    process: {
      steps: serviceData.ProcessSteps.Collection.map((i: IVariables) => ({
        description: i.Value || '',
        label: i.Title,
      })),
      title: i18n('process'),
    },
    tables: [
      {
        columns: [
          {
            id: 'document',
            title: 'Document',
          },
          {
            align: 'end',
            id: 'description',
            title: 'Description',
          },
        ],
        items: serviceData.Documents.Collection.map(
          (i: IVariables, k: number) => ({
            description: i.SpecialConsideration,
            document: i.Name,
            id: k + 1,
          }),
        ),
        title: i18n('requiredDocuments'),
      },

      ...serviceData.FeesGroups.Collection.map((feeGroup: IVariables) => ({
        columns: [
          {
            id: 'title',
            title: 'Title',
          },
          {
            align: 'end',
            id: 'amount',
            title: 'Amount',
          },
        ],
        items: feeGroup.feesItems.map((i: IVariables, k: number) => ({
          title: i.feesTitle,
          amount: `${i.feesCurrency} ${i.feesValue}`,
          id: k + 1,
        })),
        title: feeGroup.groupName,
      })),
    ],
  };

  const logoId = trimStart(
    serviceData.ServicesEntities.ServiceEntity.Logo || '',
    '<image media="{',
  ).substr(0, 36);

  return {
    hero: heroContent,
    base: baseContent,
    sidebar: {
      label: '',
      relevantEntityLink: null,
      lists: [],
      relatedJourney: null,
      relevantEntity: {
        entities: [],
        title: serviceData.ServicesEntities.ServiceEntity.Name,
        address: serviceData.ServicesEntities.ServiceEntity.Address,
        email: serviceData.ServicesEntities.ServiceEntity.Email,
        logo: `https://www.tamm.abudhabi/-/media/${logoId.replace(
          /-/g,
          '',
        )}.ashx`,
        officeHours: serviceData.ServicesEntities.ServiceEntity.OfficeHours,
        phones: [serviceData.ServicesEntities.ServiceEntity.Phone],
        publicServiceHours:
          serviceData.ServicesEntities.ServiceEntity.ServiceHours,
        subTitle: '',
        verticalLogo: true,
        website: serviceData.ServicesEntities.ServiceEntity.Url,
      },
      relevantEntitiyLink: {
        label: '',
      },
    },
  };
};

export { mapServiceData };
