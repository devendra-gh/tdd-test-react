/* eslint-disable complexity */
import { IVariables } from '@tamm/app-composer';
import Analytics from '@tamm/analytics';
import { PATH_HOME, PATH_GET_STATUS, PATH_ERROR } from '../../routes';
import { functions, constants } from '../../helper';
import { services } from '../../services';

// TODO: initially operations
const init = (props: IVariables) => {
  const {
    actions: { loadingLicense },
  } = props;

  loadingLicense.update(false);
};

// TODO: validate the licence number based on the type
const validate = (props: IVariables) => {
  const { selectedLicenceType, selectedLicenceNumber } = props;
  if (selectedLicenceNumber === '') return false;
  const pattern: RegExp =
    constants.licenceTypeCheckPattern[selectedLicenceType];
  const response = pattern.test(selectedLicenceNumber);
  if (!response) {
    return true;
  }
  return false;
};

// TODO: fetch the licence details based on the licence number using the api
const getLicenceDetails = async (props: IVariables) => {
  const { selectedLicenceType, selectedLicenceNumber, licenceDetails } = props;
  const updateStore = props.actions.licenceDetails.update;
  const linkLicenceStatusUpdate = props.actions.linkLicenseStatus.update;
  const updateLoading = props.actions.loadingLicense.update;
  const details = { ...licenceDetails };
  if (!selectedLicenceNumber || !selectedLicenceType) return false;
  updateLoading(true);
  linkLicenceStatusUpdate({ status: '' });
  // calling the api
  try {
    const response = await services.industrialLicenceDetails(
      selectedLicenceNumber,
    );
    details.status = 'success';
    updateStore({ ...details, ...response });
    updateLoading(false);
    return true;
  } catch (error) {
    const errorCode = (error && error.code) || 500;
    details.status = errorCode === 500 ? 'error' : 'info';
    details.error = error.message;
    details.errorCode = errorCode;
    updateStore({ ...details });
    updateLoading(false);
    return false;
  }
};

// TODO: update the Licence number
const handleInputLicence = (value: any, props: IVariables) => {
  const inputValue: string = value;
  props.actions.selectedLicenceNumber.update(inputValue);
};

// TODO: handle back , return to home page
const handleBackButton = (props: IVariables) =>
  functions.handleRedirectLink(props, PATH_HOME);
// TODO: call the link licence api
const onSubmit = async (props: IVariables) => {
  const errorCodeResponse: { [key: string]: string } = {
    201: 'success',
    200: 'info',
    500: 'error',
  };
  const {
    actions: {
      linkLicenseStatus: { update: linkLicenceStatusUpdate },
      loadingLicense: { update: updateLoading },
    },
  } = props;
  // calling the analytics event
  const {
    eventKey,
    adgeName,
    serviceName,
    productName,
  } = constants.ANALYTICS_INFO;
  Analytics.addEvent({
    eventKey: eventKey.tra, // tag name
    additionalData: {
      adgeName,
      serviceName,
      productName,
    },
  });

  try {
    updateLoading(true);
    const {
      selectedLicenceNumber,
      user: { 'User Unique Identifier': SPUUID },
    } = props;
    const responseData = await services.linkUserLicence(
      selectedLicenceNumber,
      SPUUID,
      props.user && props.user['User Email'] && props.user['User Email'] !== ''
        ? props.user['User Email']
        : '',
      props.user && props.user.Mobile && props.user.Mobile !== ''
        ? props.user.Mobile
        : '',
    );
    const { data: response } = responseData;
    const responseMessage =
      response.code === '201'
        ? response.message
        : `linkLicence.${response.code}.response`;
    linkLicenceStatusUpdate({
      status: errorCodeResponse[response.code],
      errorCode: response.status,
      message: responseMessage,
      traceID: response.traceId,
    });

    updateLoading(false);
    if (response.code !== '201') {
      functions.handleRedirectLink(props, PATH_GET_STATUS);
    }
    return true;
  } catch (error) {
    linkLicenceStatusUpdate({
      status: errorCodeResponse[500],
      errorCode: '500',
    });
    updateLoading(false);
    functions.handleRedirectLink(props, PATH_ERROR);
    throw error;
  }
};

const firstUpdate = async (props: IVariables) => {
  const { selectedLicenceNumber, licenceDetails } = props;
  if (
    licenceDetails &&
    selectedLicenceNumber &&
    licenceDetails.status === 'error'
  )
    await getLicenceDetails(props);
};

export {
  init,
  validate,
  handleInputLicence,
  getLicenceDetails,
  handleBackButton,
  onSubmit,
  firstUpdate,
};
