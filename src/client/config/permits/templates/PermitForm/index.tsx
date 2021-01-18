import React, { useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Alert from '@tamm/ui-lib-v2-alert';
import Loading from 'client/templates/Loading';
import ServiceTemplate from '@tamm/ui-lib-v2-service-template';
import CompanyDetailsQuestion from './components/CompanyDetailsQuestion';
import PermitTypeForm from './components/PermitTypeForm';
import './PermitForm.less';

const margin = {
  margin: '20px',
};

const margin40 = {
  margin: '40px',
};

const PermitForm = (props: IVariables) => {
  const {
    permitInfo,
    companyDetails,
    companyType,
    permitCompanyTypes,
    handlePermitFormChange,
    handleCompanyTypeChange,
    handleRepresentativeTypeChange,
    handleCompanyDetailsChange,
    fetchLicenseDetails,
    serviceType,
    i18n,
  } = props;

  // const isWide = useMedia({ minWidth: '768px' });
  const [validate, setValidate] = useState(false);

  const onSubmit = () => {
    setValidate(true);
    const isValid = props.validation(props);
    if (!isValid) {
      return;
    }
    props.onSubmit(props);
    setValidate(false);
  };

  if (props.user && props.user.Type !== 'SOP3') {
    return (
      <Container locale={props.locale}>
        <div className={['ui-lib-margin-b_md'].join(' ')}>
          <Alert message={i18n('user_not_verified')} status="error" />
        </div>
        <div style={margin40} />
      </Container>
    );
  }

  return (
    <Container locale={props.locale}>
      {props.permitSubmitting && <Loading />}
      <div className={['PermitForm', 'ui-lib-margin-b_xl'].join(' ')}>
        {props.permitServerError ? (
          <div className="ui-lib-margin-b_md" id="error-message-div">
            <Alert message={i18n(props.permitServerError)} status="error" />
          </div>
        ) : (
          props.permitErrorMessage && (
            <div className="ui-lib-margin-b_md" id="error-message-div">
              <Alert
                message={props.permitErrorMessage.replace(/<[^>]+>/g, ' ')}
                status="warning"
              />
            </div>
          )
        )}
        <ServiceTemplate
          title={i18n('applicationdetails.templateTitle')}
          description={i18n('applicationdetails.templateDesc')}
        />
        <div style={margin} />
        <CompanyDetailsQuestion
          serviceType={serviceType}
          companyType={companyType}
          companyTypes={permitCompanyTypes}
          handleCompanyTypeChange={(value: any) =>
            handleCompanyTypeChange(props, value)
          }
          handleRepresentativeTypeChange={(value: any) =>
            handleRepresentativeTypeChange(props, value)
          }
          handleChange={(value: any) =>
            handleCompanyDetailsChange(props, value)
          }
          values={companyDetails}
          fetchLicenseDetails={fetchLicenseDetails}
          startShowingErrors={validate}
          i18n={i18n}
        />
        <div style={margin40} />
        <PermitTypeForm
          {...props}
          startShowingErrors={validate}
          handleChange={(value: any) => handlePermitFormChange(props, value)}
          values={permitInfo[serviceType]}
          onSubmit={onSubmit}
        />
        <div style={margin} />
      </div>
    </Container>
  );
};

export default withTemplateHooks(PermitForm);
