const locationMapping = {
  'Abu Dhabi': '1',
  'Al Ain': '2',
  'Al Dhafra': '3',
};

export const locationDropDownItems = [
  { label: 'location.abuDhabi', id: locationMapping['Abu Dhabi'] },
  { label: 'location.alAin', id: locationMapping['Al Ain'] },
  { label: 'location.alDhafra', id: locationMapping['Al Dhafra'] },
];

export const caseTypeMapping = {
  // param mapping based on api
  Complaint: 1,
  Enquiry: 2,
  Note: 3,
  Suggestion: 4,
};

export const caseTypeDropDownItems = [
  {
    label: 'investorProtection.form.caseDropdown.complaint',
    id: caseTypeMapping.Complaint,
  },
  {
    label: 'investorProtection.form.caseDropdown.enquiry',
    id: caseTypeMapping.Enquiry,
  },
  {
    label: 'investorProtection.form.caseDropdown.notes',
    id: caseTypeMapping.Note,
  },
  {
    label: 'investorProtection.form.caseDropdown.suggestion',
    id: caseTypeMapping.Suggestion,
  },
];

export const countries = [
  {
    code: 971,
    name: 'UAE',
  },
];

const userTypeMapping = {
  Consumer: '1',
  Investor: '2',
};

export const userTypes = [
  {
    label: 'consumer',
    value: userTypeMapping.Consumer,
    checked: true,
  },
  {
    label: 'investor',
    value: userTypeMapping.Investor,
  },
];
