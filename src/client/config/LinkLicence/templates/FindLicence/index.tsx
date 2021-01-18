import React from 'react';
import PropTypes from 'prop-types';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import SidebarTemplate from 'client/templates/Sidebar';
import Form from '@tamm/ui-lib-v2-form';
import Alert from '@tamm/ui-lib-v2-alert';
import Input from '@tamm/ui-lib-v2-input';
// import Spinner from '@tamm/ui-lib-v2-spinner';
import Button from '@tamm/ui-lib-v2-button';
import Table from '@tamm/ui-lib-v2-table';
import './findLicence.less';
import Loading from '../../../../templates/Loading';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */
const findLicence = (props: IVariables) => {
  const {
    i18n,
    currentStep,
    onBack,
    selectedLicenceType,
    getLicenceDetails,
    handleInputLicence,
    selectedLicenceNumber,
    validate,
    loadingLicense,
    licenceDetails,
    licenceTable,
    linkLicenseStatus,
    licenceDetails: { status: licenceStatus },
    locale,
  } = props;

  props.actions.breadcrumbs.update(props.breadcrumbs);

  // TODO: Input filed that takes value based on the licence type
  const getInputField = () => {
    const invalidateResponse = validate(props);
    return (
      <>
        {/* Enter key DLS bug workaround */}
        <div style={{ display: 'none' }}>
          <Input // for bug fix
            aria-label="input-text"
          />
        </div>
        <Input
          name="input-text"
          type="text"
          aria-label={i18n(
            `linkLicence.${currentStep}.input.label.${selectedLicenceType}`,
          )}
          label={i18n(
            `linkLicence.${currentStep}.input.label.${selectedLicenceType}`,
          )}
          placeholder=""
          help={
            invalidateResponse
              ? i18n(
                  `linkLicence.${currentStep}.input.error.${selectedLicenceType}`,
                )
              : i18n(
                  `linkLicence.${currentStep}.input.help.${selectedLicenceType}`,
                )
          }
          textDirection="ltr"
          onChange={e => handleInputLicence(e, props)}
          validateStatus={invalidateResponse ? 'error' : null}
          value={selectedLicenceNumber}
        />
        <div className="ui-lib-button-story" style={{ marginTop: '20px' }}>
          <Button
            aria-label="showLicenceDetails"
            uiType="secondary"
            label={i18n('button.view')}
            size="medium"
            onClick={() => getLicenceDetails(props)}
            disabled={
              !selectedLicenceNumber || invalidateResponse || loadingLicense
            }
          />
        </div>
      </>
    );
  };

  const getTableDetails = () => {
    const tableDetails: { [key: string]: any } = {
      success: {
        row:
          (licenceTable &&
            licenceTable.map((item: any, index: number) => ({
              id: index.toString(),
              detail: i18n(`${currentStep}.table.${item}`),
              value:
                !licenceDetails[item] && locale === 'ar'
                  ? licenceDetails[`${item}Ar`]
                  : licenceDetails[`${item}En`] || licenceDetails[item],
            }))) ||
          [],
        columns: [
          {
            id: 'detail',
            title: i18n(`${currentStep}.table.detail`),
          },
          {
            id: 'value',
            title: i18n(`${currentStep}.table.value`),
          },
        ],
      },
      info: {
        message: `${currentStep}.table.details.notFound`,
      },
      error: {
        message: `${currentStep}.table.details.alert`,
      },
    };

    if (licenceStatus === 'error')
      return (
        <Alert
          message={i18n(`${currentStep}.table.details.alert`)}
          status="error"
        />
      );

    return (
      <>
        <Table
          i18n={i18n}
          clickable={false}
          columns={
            (tableDetails[licenceStatus] &&
              tableDetails[licenceStatus].columns) ||
            []
          }
          headerHidden
          items={
            (tableDetails[licenceStatus] && tableDetails[licenceStatus].row) ||
            []
          }
          selectable={false}
          size="small"
          title={i18n(`${currentStep}.table.title`)}
        />
        {licenceStatus === 'info' && (
          <p style={{ margin: '2rem auto' }}>
            {i18n(
              tableDetails[licenceStatus] &&
                tableDetails[licenceStatus].message,
            )}
          </p>
        )}
      </>
    );
  };

  const LicenceList = (
    <Form
      name="applicationStatusForm"
      {...props}
      submitButton={{
        label: i18n('button.next'),
        withArrow: true,
        disabled: loadingLicense || licenceDetails.status !== 'success', // disable the next button if there is no value
        onClick: () => props.onSubmit(props),
      }}
      backButton={{
        uiType: 'secondary',
        alignIcon: 'start',
        label: i18n('button.back'),
        withArrow: true,
        onClick: () => onBack(props),
      }}
    >
      <Form.Fieldset twoColumns>{getInputField()}</Form.Fieldset>
      {licenceDetails.status !== '' ? <div>{getTableDetails()}</div> : ''}
      {linkLicenseStatus.status === 'success' ? (
        <Alert message={i18n(linkLicenseStatus.message)} status="error" />
      ) : (
        ''
      )}
    </Form>
  );

  const Sidebar = (
    <SidebarTemplate
      currentStep={currentStep}
      i18n={i18n}
      steps={props.steps}
      showRelatedJourneyCard
      stepsStatus={props.stepsStatus || {}}
    />
  );

  return (
    <>
      <Container locale={props.locale} sidebar={Sidebar}>
        <>
          {loadingLicense && <Loading />}
          <h3>{i18n(props.subTitle)}</h3>
          <p className="intoText">{i18n(props.subDescription)}</p>
          {LicenceList}
        </>
        <div style={{ height: 200 }} />
      </Container>
    </>
  );
};

findLicence.propTypes = {
  ...routePropTypes,
  licenceTable: PropTypes.arrayOf(PropTypes.string).isRequired,
  licenceDetails: PropTypes.objectOf(PropTypes.string),
};

findLicence.defaultProps = {
  licenceDetails: { status: '' },
};

export default withTemplateHooks(findLicence);
