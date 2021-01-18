import page1 from './pages/login';
import page2 from './pages/enter-company-details';
import page3 from './pages/choose-activities';
import page4 from './pages/choose-economic-name';
import page5 from './pages/application-inprogress';
import page6 from './pages/application-approved';
import page7 from './pages/licence-issued';
import page8 from './pages/went-wrong';
import page9 from './pages/service-status';
import page10 from './pages/continue-process';

import dictEn from './localization/en';
import dictAr from './localization/ar';

import symbol1 from './symbols/I74xTV9CmPftnlBY6a9py';
import symbol2 from './symbols/TH0ur8trAjubV5SVTKPNB';
import symbol3 from './symbols/_rSFAtv4sbf3yNFwRaLhl';
import symbol4 from './symbols/u_7BA0xr8Q0oku7QtzxvE';
import symbol5 from './symbols/pOuCbjftw6l5xN5WTMEPb';
import symbol6 from './symbols/n36dpY3tGRdQ5XTjH5wlv';
import symbol7 from './symbols/oxjIoMIWX28LAuIpS0Rcv';
import symbol8 from './symbols/tGBD8lzV5jP7jlq2kcvyS';
import symbol9 from './symbols/QAIBlH79UMJ7HmHuLz-ZV';
import symbol10 from './symbols/Fhf9lMC4-KOl-KiywsOLl';

const config = {
  "version": "2591",
  "appName": "Get Industrial Licence - Rowad - Final - Individual",
  "defaults": {
    "title": "Get Industrial Licence - Rowad - Final - Individual"
  },
  "initialState": {
    "categories": [],
    "divisions": [],
    "groups": [],
    "classes": [],
    "branches": [],
    "categoryValue": "All",
    "divisionValue": "All",
    "groupValue": "All",
    "classValue": "All",
    "branchValue": "All",
    "divisionDisabled": true,
    "groupDisabled": true,
    "classDisabled": true,
    "branchDisabled": true,
    "tableColumns": [],
    "tableActivities": [],
    "currentStepIndex": 0,
    "currentSubStepIndex": 0,
    "steps": [
      {
        "id": "step_fillApplication",
        "label": "Fill application",
        "link": "",
        "status": ""
      },
      {
        "id": "step_getEconomicLicence",
        "label": "Get economic licence",
        "link": "",
        "status": ""
      }
    ],
    "expandedStepIndexes": [],
    "showSidebar": true,
    "individualIssuedTags": [
      {
        "label": "i18n('referenceNo')",
        "value": ""
      },
      {
        "label": "i18n('submittedOn')",
        "value": ""
      }
    ],
    "referenceNo": "",
    "paymentSummaryColoum": [
      {
        "id": "description",
        "title": "Description"
      },
      {
        "id": "price",
        "title": "Price"
      }
    ],
    "paymentSummaryRows": [],
    "paymentTotal": 0,
    "listOfLegalForm": [
      {
        "id": "",
        "label": "",
        "disabled": false
      }
    ],
    "selectedLegalFrom": "",
    "industrialList": [
      {
        "id": "Chemical Industries",
        "label": "i18n('Chemical_Industries')",
        "disabled": false
      },
      {
        "id": "Construction and Glass Industries",
        "label": "i18n('Construction_and_Glass_Industries')",
        "disabled": false
      },
      {
        "id": "Electronic and Electrical Industries",
        "label": "i18n('Electronic_and_Electrical_Industries')",
        "disabled": false
      },
      {
        "id": "Energy and Sustainability Industries",
        "label": "i18n('Energy_and_Sustainability_Industries')",
        "disabled": false
      },
      {
        "id": "Food Industries",
        "label": "i18n('Food_Industries')",
        "disabled": false
      },
      {
        "id": "General Industries",
        "label": "i18n('General_Industries')",
        "disabled": false
      },
      {
        "id": "Machineries and Equipment's Industries",
        "label": "i18n('Machineries_and_Equipments_Industries')",
        "disabled": false
      },
      {
        "id": "Metal Industries",
        "label": "i18n('Metal_Industries')",
        "disabled": false
      },
      {
        "id": "Printing and Media Industries",
        "label": "i18n('Printing_and_Media_Industries')",
        "disabled": false
      },
      {
        "id": "Rubber, Plastic, and Fiberglass Industries",
        "label": "i18n('Rubber_Plastic_and_Fiberglass_Industries')",
        "disabled": false
      },
      {
        "id": "Textiles, Wearing Apparel, and Leather Industries",
        "label": "i18n('Textiles_Wearing_Apparel_and_Leather_Industries')",
        "disabled": false
      },
      {
        "id": "Wood and Paper Industries",
        "label": "i18n('Wood_and_Paper_Industries')",
        "disabled": false
      }
    ],
    "selectedIndustrialType": "",
    "ownerDetailsColumns": [
      {
        "id": "name",
        "title": "i18n('individual_owner_label_name')"
      },
      {
        "id": "idNumber",
        "title": "i18n('individual_owner_label_id_number')"
      },
      {
        "id": "nationality",
        "title": "i18n('individual_owner_label_nationality')"
      },
      {
        "id": "share",
        "title": "i18n('individual_owner_label_share')"
      }
    ],
    "ownerDetailsRow": [
      {
        "_id": "1",
        "exampleField": "Example Value"
      }
    ],
    "tableAllActivities": [],
    "tableSearch": "",
    "tableTotalRecords": 0,
    "tableCurrPage": 1,
    "tablePageSize": 10,
    "tablePageResizeOptions": [],
    "basket": [],
    "totalCapitalvalue": "",
    "totalInvestmentValue": "",
    "companySubmitStatusDisabled": false,
    "comanyTotalDisabled": false,
    "getActivitiesReqFilter": [],
    "transactionNumber": "",
    "capId": "",
    "englishPreferedName": "",
    "arabicPreferedName": "",
    "englishPreferedNameValidStatus": "null",
    "arabicPreferedNameValidStatus": "null",
    "englishPreferedNameHelpMsg": "",
    "arabicPreferedNameHelpMsg": "",
    "economicNameDisabled": true,
    "economicNameCheckLoader": false,
    "checkAvailabilityBtnDisabled": false,
    "showNameSuggestions": false,
    "tableEconomicNameColumns": [
      {
        "id": "nameEn",
        "title": "English economic name"
      },
      {
        "id": "nameAr",
        "title": "Arabic economic name"
      }
    ],
    "tableEconomicNameItems": [],
    "validateStatus_ totalCapitalvalue": "",
    "validateStatusTotalCapitalValue": "",
    "validateStatusTotalInvestmentValue": "",
    "helpValidateStatusTotalCapitalValue": "",
    "helpValidateStatusTotalInvestmentValue": "",
    "companyDetailsCheckLoader": false,
    "chooseActivitiesCheckLoader": false,
    "applicationApprovedCheckLoader": false,
    "downloadCertificateCheckLoader": false,
    "economicNameSubmitCheckLoader": false,
    "tags_bffdfccfdc": [
      {
        "label": "",
        "value": ""
      }
    ],
    "currency": "AED",
    "chooseActivitiesBtnDisabled": true,
    "autogenerateChecked": false,
    "economicNameEngDisabled": false,
    "economicNameArbDisabled": false,
    "isModalOpen": false,
    "companyDetailsExistingBranchType": [
      {
        "id": "Yes",
        "label": "i18n('existingBranchType_key1')",
        "disabled": false
      },
      {
        "id": "No",
        "label": "i18n('existingBranchType_key2')",
        "disabled": false
      }
    ],
    "companyDetailsExistingBranchTypeVal": "",
    "companyDetailsBranchType": [
      {
        "id": "i18n('companyDetailsBranchType_key1')",
        "label": "i18n('companyDetailsBranchType_key1')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key2')",
        "label": "i18n('companyDetailsBranchType_key2')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key3')",
        "label": "i18n('companyDetailsBranchType_key3')",
        "disabled": false
      },
      {
        "id": "i18n('companyDetailsBranchType_key4')",
        "label": "i18n('companyDetailsBranchType_key4')",
        "disabled": false
      }
    ],
    "companyDetailsBranchTypeVal": "",
    "parentCompanylicenceNumberVal": "",
    "validateStatus_existingLicense": "",
    "help_existingLicense": "",
    "existingLicenceVisibility": false,
    "validateStatus_industryType": "",
    "help_industryType": false,
    "validateStatus_branchType": "",
    "help_branchType": false,
    "validateStatus_parentLicenceNumber": "",
    "help_parentLicenceNumber": false,
    "download_dropdown_items": [
      {
        "id": "certificate",
        "label": "i18n('download_dropdown_certificate')",
        "disabled": false
      },
      {
        "id": "Commercial Register",
        "label": "i18n('download_dropdown_licence')",
        "disabled": false
      }
    ],
    "download_value": "",
    "selectedActivities": [],
    "smartPassURL": "",
    "uaePassURL": "",
    "legalType": "",
    "somethingWentWrongContent": "",
    "applicationsList": [],
    "applicationStatuses": [],
    "loading": false,
    "responseDescription": "",
    "tableActivitiesStatus": "",
    "activityCodes": [],
    "redirectUrl": "",
    "productName": "NOP",
    "serviceCode": "DED_027",
    "adgeName": "DED",
    "breadCrumItems": [],
    "isProcessStarted": false,
    "relevant_entities": [],
    "isCancelModalOpen": false,
    "activitiesCommonSelection": "unchecked",
    "skipEconomicName": false,
    "suggestionNoteVisibility": false,
    "element_tabIndex": 0
  },
  "persistStates": [
    "legalType",
    "loading",
    "responseDescription",
    "adgeName",
    "serviceCode",
    "productName",
    "productName",
    "productName",
    "productName",
    "isProcessStarted"
  ],
  "symbols": [
		...symbol1,
		...symbol2,
		...symbol3,
		...symbol4,
		...symbol5,
		...symbol6,
		...symbol7,
		...symbol8,
		...symbol9,
		...symbol10,
	],
  "dictionary": {
    "en": dictEn,
    "ar": dictAr
  },
  "skipFetchState": [],
  "pages": [
		...page1,
		...page2,
		...page3,
		...page4,
		...page5,
		...page6,
		...page7,
		...page8,
		...page9,
		...page10,
	],
  "states": {
    "initialState": {
      "categories": [],
      "divisions": [],
      "groups": [],
      "classes": [],
      "branches": [],
      "categoryValue": "All",
      "divisionValue": "All",
      "groupValue": "All",
      "classValue": "All",
      "branchValue": "All",
      "divisionDisabled": true,
      "groupDisabled": true,
      "classDisabled": true,
      "branchDisabled": true,
      "tableColumns": [],
      "tableActivities": [],
      "currentStepIndex": 0,
      "currentSubStepIndex": 0,
      "steps": [
        {
          "id": "step_fillApplication",
          "label": "Fill application",
          "link": "",
          "status": ""
        },
        {
          "id": "step_getEconomicLicence",
          "label": "Get economic licence",
          "link": "",
          "status": ""
        }
      ],
      "expandedStepIndexes": [],
      "showSidebar": true,
      "individualIssuedTags": [
        {
          "label": "i18n('referenceNo')",
          "value": ""
        },
        {
          "label": "i18n('submittedOn')",
          "value": ""
        }
      ],
      "referenceNo": "",
      "paymentSummaryColoum": [
        {
          "id": "description",
          "title": "Description"
        },
        {
          "id": "price",
          "title": "Price"
        }
      ],
      "paymentSummaryRows": [],
      "paymentTotal": 0,
      "listOfLegalForm": [
        {
          "id": "",
          "label": "",
          "disabled": false
        }
      ],
      "selectedLegalFrom": "",
      "industrialList": [
        {
          "id": "Chemical Industries",
          "label": "i18n('Chemical_Industries')",
          "disabled": false
        },
        {
          "id": "Construction and Glass Industries",
          "label": "i18n('Construction_and_Glass_Industries')",
          "disabled": false
        },
        {
          "id": "Electronic and Electrical Industries",
          "label": "i18n('Electronic_and_Electrical_Industries')",
          "disabled": false
        },
        {
          "id": "Energy and Sustainability Industries",
          "label": "i18n('Energy_and_Sustainability_Industries')",
          "disabled": false
        },
        {
          "id": "Food Industries",
          "label": "i18n('Food_Industries')",
          "disabled": false
        },
        {
          "id": "General Industries",
          "label": "i18n('General_Industries')",
          "disabled": false
        },
        {
          "id": "Machineries and Equipment's Industries",
          "label": "i18n('Machineries_and_Equipments_Industries')",
          "disabled": false
        },
        {
          "id": "Metal Industries",
          "label": "i18n('Metal_Industries')",
          "disabled": false
        },
        {
          "id": "Printing and Media Industries",
          "label": "i18n('Printing_and_Media_Industries')",
          "disabled": false
        },
        {
          "id": "Rubber, Plastic, and Fiberglass Industries",
          "label": "i18n('Rubber_Plastic_and_Fiberglass_Industries')",
          "disabled": false
        },
        {
          "id": "Textiles, Wearing Apparel, and Leather Industries",
          "label": "i18n('Textiles_Wearing_Apparel_and_Leather_Industries')",
          "disabled": false
        },
        {
          "id": "Wood and Paper Industries",
          "label": "i18n('Wood_and_Paper_Industries')",
          "disabled": false
        }
      ],
      "selectedIndustrialType": "",
      "ownerDetailsColumns": [
        {
          "id": "name",
          "title": "i18n('individual_owner_label_name')"
        },
        {
          "id": "idNumber",
          "title": "i18n('individual_owner_label_id_number')"
        },
        {
          "id": "nationality",
          "title": "i18n('individual_owner_label_nationality')"
        },
        {
          "id": "share",
          "title": "i18n('individual_owner_label_share')"
        }
      ],
      "ownerDetailsRow": [
        {
          "_id": "1",
          "exampleField": "Example Value"
        }
      ],
      "tableAllActivities": [],
      "tableSearch": "",
      "tableTotalRecords": 0,
      "tableCurrPage": 1,
      "tablePageSize": 10,
      "tablePageResizeOptions": [],
      "basket": [],
      "totalCapitalvalue": "",
      "totalInvestmentValue": "",
      "companySubmitStatusDisabled": false,
      "comanyTotalDisabled": false,
      "getActivitiesReqFilter": [],
      "transactionNumber": "",
      "capId": "",
      "englishPreferedName": "",
      "arabicPreferedName": "",
      "englishPreferedNameValidStatus": "null",
      "arabicPreferedNameValidStatus": "null",
      "englishPreferedNameHelpMsg": "",
      "arabicPreferedNameHelpMsg": "",
      "economicNameDisabled": true,
      "economicNameCheckLoader": false,
      "checkAvailabilityBtnDisabled": false,
      "showNameSuggestions": false,
      "tableEconomicNameColumns": [
        {
          "id": "nameEn",
          "title": "English economic name"
        },
        {
          "id": "nameAr",
          "title": "Arabic economic name"
        }
      ],
      "tableEconomicNameItems": [],
      "validateStatus_ totalCapitalvalue": "",
      "validateStatusTotalCapitalValue": "",
      "validateStatusTotalInvestmentValue": "",
      "helpValidateStatusTotalCapitalValue": "",
      "helpValidateStatusTotalInvestmentValue": "",
      "companyDetailsCheckLoader": false,
      "chooseActivitiesCheckLoader": false,
      "applicationApprovedCheckLoader": false,
      "downloadCertificateCheckLoader": false,
      "economicNameSubmitCheckLoader": false,
      "tags_bffdfccfdc": [
        {
          "label": "",
          "value": ""
        }
      ],
      "currency": "AED",
      "chooseActivitiesBtnDisabled": true,
      "autogenerateChecked": false,
      "economicNameEngDisabled": false,
      "economicNameArbDisabled": false,
      "isModalOpen": false,
      "companyDetailsExistingBranchType": [
        {
          "id": "Yes",
          "label": "i18n('existingBranchType_key1')",
          "disabled": false
        },
        {
          "id": "No",
          "label": "i18n('existingBranchType_key2')",
          "disabled": false
        }
      ],
      "companyDetailsExistingBranchTypeVal": "",
      "companyDetailsBranchType": [
        {
          "id": "i18n('companyDetailsBranchType_key1')",
          "label": "i18n('companyDetailsBranchType_key1')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key2')",
          "label": "i18n('companyDetailsBranchType_key2')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key3')",
          "label": "i18n('companyDetailsBranchType_key3')",
          "disabled": false
        },
        {
          "id": "i18n('companyDetailsBranchType_key4')",
          "label": "i18n('companyDetailsBranchType_key4')",
          "disabled": false
        }
      ],
      "companyDetailsBranchTypeVal": "",
      "parentCompanylicenceNumberVal": "",
      "validateStatus_existingLicense": "",
      "help_existingLicense": "",
      "existingLicenceVisibility": false,
      "validateStatus_industryType": "",
      "help_industryType": false,
      "validateStatus_branchType": "",
      "help_branchType": false,
      "validateStatus_parentLicenceNumber": "",
      "help_parentLicenceNumber": false,
      "download_dropdown_items": [
        {
          "id": "certificate",
          "label": "i18n('download_dropdown_certificate')",
          "disabled": false
        },
        {
          "id": "Commercial Register",
          "label": "i18n('download_dropdown_licence')",
          "disabled": false
        }
      ],
      "download_value": "",
      "selectedActivities": [],
      "smartPassURL": "",
      "uaePassURL": "",
      "legalType": "",
      "somethingWentWrongContent": "",
      "applicationsList": [],
      "applicationStatuses": [],
      "loading": false,
      "responseDescription": "",
      "tableActivitiesStatus": "",
      "activityCodes": [],
      "redirectUrl": "",
      "productName": "NOP",
      "serviceCode": "DED_027",
      "adgeName": "DED",
      "breadCrumItems": [],
      "isProcessStarted": false,
      "relevant_entities": [],
      "isCancelModalOpen": false,
      "activitiesCommonSelection": "unchecked",
      "skipEconomicName": false,
      "suggestionNoteVisibility": false,
      "element_tabIndex": 0
    },
    "persistStates": [
      "legalType",
      "loading",
      "responseDescription",
      "adgeName",
      "serviceCode",
      "productName",
      "productName",
      "productName",
      "productName",
      "isProcessStarted"
    ]
  },
  "hero": [
    {
      "type": "symbol",
      "props": {
        "symbol": "u_7BA0xr8Q0oku7QtzxvE"
      },
      "state": {
        "mapState": [
          "breadCrumItems"
        ],
        "mapDispatch": []
      }
    }
  ],
  "sidebar": [
    {
      "type": "symbol",
      "props": {
        "symbol": "pOuCbjftw6l5xN5WTMEPb"
      }
    }
  ]
}

export default config;