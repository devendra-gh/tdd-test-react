import { IVariables } from '@tamm/app-composer';
import fetchLegalForms from '../../services/legalForms';
import { initialState } from '../../config';
import { getAnalyticsData } from '../../utils';

const onSubmit = async (props: IVariables) => {
  getAnalyticsData('tra');
  props.history.push('/business-licence-procedure/search-activities');
};

const getInitialState = async (props: IVariables) => {
  const { actions, formCompanyDetails } = props;
  const { legalForms, locations, loading, showError } = formCompanyDetails;
  if (
    legalForms &&
    legalForms.length &&
    locations &&
    locations.length &&
    !loading &&
    !showError
  ) {
    return;
  }
  try {
    actions.formCompanyDetails.update(initialState.formCompanyDetails);
    const legalFormsResponse = await fetchLegalForms();
    actions.formCompanyDetails.update({
      ...initialState.formCompanyDetails,
      ...{ loading: false, showError: false, legalForms: legalFormsResponse },
    });
  } catch (err) {
    props.history.push('/business-licence-procedure/error-page');
    actions.formCompanyDetails.update({
      ...initialState.formCompanyDetails,
      ...{
        loading: false,
        showError: true,
      },
    });
  }
};

export default {
  onSubmit,
  getInitialState,
};
