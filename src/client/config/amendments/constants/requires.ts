import { IVariables } from '@tamm/app-composer';

export const REQUIRES_SOP3 = {
  test: (props: IVariables) => {
    return true;
    // const { user } = props;
    // if (user.Type === 'SOP3') return true;
    // return false;
  },
  redirectTo: '/account-upgrade',
};

export const REQUIRES_BUSINESS_KEY = {
  test: (props: IVariables) => {
    return !!props.businessKey;
  },
  redirectTo: '',
};

export const REQUIRES_CUSTOM_LOGIN = {
  test: (props: IVariables) => {
    if (props.loggedIn) return true;
    return false;
  },
  redirectTo: `/login?redirectUrl=${window.location.href}`,
};
