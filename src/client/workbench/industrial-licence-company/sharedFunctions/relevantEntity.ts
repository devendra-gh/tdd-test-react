

const updateRelevantEntity = (props: any) => {
  const { i18n } = props;
  
  const baseWorkingTime = {
    label: '5:00 am - 10:00 pm',
    start: '5:00 am',
    end: '10:00 pm',
    closed: false,
  };
  
  const relevantEntityData = [
    {
      logo: "https://www.tamm.abudhabi/en/tamm-centers-services/-/media/Project/TAMM/Home/Footer%20Logos/Department%20of%20Economic%20Development",
      address: i18n('relevant-entity-address'),
      phones: ['+971 2 815 8888'],
      email: 'info@adeconomy.ae',
      website: 'https://added.gov.ae/en',
      officeHours: {
        status: "default",
        workingHours: {
          sunday: {
            ...baseWorkingTime,
          },
          monday: {
            ...baseWorkingTime,
          },
          tuesday: {
            ...baseWorkingTime,
          },
          wednesday: {
            ...baseWorkingTime,
          },
          thursday: {
            ...baseWorkingTime,
          },
          friday: {
            closed: true,
          },
          saturday: {
            closed: true,
          },
        },
      },
      publicServiceHours: {
        status: "24/7",
      },
      forceServicesAndKiosksReloadOnOpen : false,
      }
  ];
    
  return relevantEntityData;
};

export { updateRelevantEntity };
