import { IVariables } from '@tamm/app-composer';
import { PATH_ACCOUNT_UPGRADE, PATH_LOGIN } from './utils/constants/pageRoutes';

export const PROCESS_NAME = 'permits';

export const errorMsgMap: { [key: string]: string } = {
  'Incorrect emirates ID': 'errorMsg.incorrectemiratesid',
  'Incorrect Service Name': 'errorMsg.incorrectservicename',
  'Failed to send message': 'errorMsg.failedtosendmessage',
  'Incorrect DED license number': 'errorMsg.incorrectdedlicensenumber',
  'Incorrect pro mobile number': 'errorMsg.incorrectpromobilenumber',
  'Incorrect pro name': 'errorMsg.incorrectproname',
  'Incorrect email': 'errorMsg.incorrectemail',
  'Incorrect documents': 'errorMsg.incorrectdocuments',
  'Incorrect contact': 'errorMsg.incorrectcontact',
  'Incorrect Advertisement Details': 'errorMsg.incorrectadvertisementdetails',
  'Incorrect Advertisement Location': 'errorMsg.incorrectadvertisementlocation',
  'Incorrect Advertise Start Date': 'errorMsg.incorrectadvertisestartdate',
  'Incorrect Advertise End Date': 'errorMsg.incorrectadvertiseenddate',
  'Incorrect Customer Comment': 'errorMsg.incorrectcustomercomment',
  'Incorrect Study Specialization': 'errorMsg.incorrectstudyspecialization',
  'Incorrect Project Name': 'errorMsg.incorrectprojectname',
  'Incorrect Comments': 'errorMsg.incorrectcomments',
  'Incorrect Quantity': 'errorMsg.incorrectquantity',
  'Incorrect Plate Or Chassis Number': 'errorMsg.incorrectplateorchassisnumber',
  'Incorrect Seasonal Promotions': 'errorMsg.incorrectseasonalpromotions',
  'Incorrect Promotion Details': 'errorMsg.incorrectpromotiondetails',
  'Incorrect Promotion Location': 'errorMsg.incorrectpromotionlocation',
  'Incorrect Advertisements Quantity':
    'errorMsg.incorrectadvertisementsquantity',
  'Incorrect Plate Category': 'errorMsg.incorrectplatecategory',
  'Incorrect Advertisement Type': 'errorMsg.incorrectadvertisementtype',
  'Incorrect Note': 'errorMsg.incorrectnote',
  'Incorrect City': 'errorMsg.incorrectcity',
  'Incorrect Employee Comment': 'errorMsg.incorrectemployeecomment',
  'Incorrect Permit Type': 'errorMsg.incorrectpermittype',
  'Incorrect Airs': 'errorMsg.incorrectairs',
  'Incorrect Sign Boards': 'errorMsg.incorrectsignboards',
  'Please provide machines': 'errorMsg.pleaseprovidemachines',
  'Incorrect Umbrellas': 'errorMsg.incorrectumbrellas',
  'Incorrect Balloons': 'errorMsg.incorrectballoons',
  'Incorrect Sale Banners': 'errorMsg.incorrectsalebanners',
  'Incorrect Prizes': 'errorMsg.incorrectprizes',
  'Incorrect Propaganda Advertising Boards':
    'errorMsg.incorrectpropagandaadvertisingboards',
  'Incorrect Kiosks': 'errorMsg.incorrectkiosks',
  'Incorrect Vehicles': 'errorMsg.incorrectvehicles',
};

export const REQUIRES_SOP3 = {
  test: (props: IVariables) => {
    const { user } = props;
    if (user.Type === 'SOP3') return true;
    return false;
  },
  redirectTo: PATH_ACCOUNT_UPGRADE,
};

export const REQUIRES_CUSTOM_LOGIN = {
  test: (props: IVariables) => {
    if (props.loggedIn) return true;
    return false;
  },
  redirectTo: `${PATH_LOGIN}?redirectUrl=${window.location.href}`,
};
