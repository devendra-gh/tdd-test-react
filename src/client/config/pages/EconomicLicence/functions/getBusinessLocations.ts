import { includes } from 'lodash';

const getBusinessLocations = (licenceType: string) => {
  if (licenceType === 'instant') {
    return [
      {
        name: 'abu-dhabi-free-zones',
        label: 'location.freeZoneAbuDhabi.label',
      },
      {
        name: 'abu-dhabi-investment-areas',
        label: 'location.investAbuDhabi.label',
      },
      {
        name: 'emirate-abu-dhabi',
        label: 'location.emirateAbuDhabi.label',
      },
    ];
  }

  if (includes(['tajer', 'tamm', 'tech', 'branch'], licenceType)) {
    return [
      {
        name: 'abu-dhabi',
        label: 'global.abuDhabi',
      },
      {
        name: 'al-ain',
        label: 'global.alAin',
      },
      {
        name: 'al-dhafra',
        label: 'global.alDhafra',
      },
    ];
  }

  return [];
};

export default getBusinessLocations;
