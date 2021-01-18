import React, { useState, useEffect } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Form from '@tamm/ui-lib-v2-form';
import Select from '@tamm/ui-lib-v2-select';
import Alert from '@tamm/ui-lib-v2-alert';
import Loading from '../../components/Loading';
import './index.less';

function SelectCompanyDetails(props: IVariables) {
  const {
    i18n,
    subTitle,
    description,
    locale,
    formCompanyDetails,
    actions,
  } = props;

  const { legalForm, loading, showError, legalForms } = formCompanyDetails;

  useEffect(() => {
    props.getInitialState(props);
  }, []);

  const onChange = (type: string, value: string) => {
    let legalFormAr = '';
    legalForms.find((element: IVariables) => {
      if (element.legalFormEn === value) {
        legalFormAr = element.legalFormAr;
        return true;
      }
      return false;
    });
    actions.formCompanyDetails.update({
      ...formCompanyDetails,
      [type]: value,
      legalFormAr,
    });
  };

  const [startShowingErrors, setStartShowingErrors] = useState(false);

  const onSubmit = () => {
    if (formCompanyDetails.location && formCompanyDetails.legalForm) {
      props.onSubmit(props);
    } else {
      setStartShowingErrors(true);
    }
  };

  const getItems = () => {
    if (!legalForms) return [];
    return legalForms.map((element: IVariables) => ({
      label: locale === 'en' ? element.legalFormEn : element.legalFormAr,
      id: element.legalFormEn,
    }));
  };

  const getFields = () => {
    return (
      <Select
        value={legalForm}
        items={getItems()}
        label={i18n('label.legalForm')}
        onChange={value => onChange('legalForm', value)}
        placeholder={i18n('placeholder.select')}
        help={
          startShowingErrors && !legalForm
            ? i18n('validationMessage.required')
            : undefined
        }
        validateStatus={startShowingErrors && !legalForm ? 'error' : undefined}
      />
    );
  };

  return (
    <Container
      locale={props.locale}
      sidebar={
        <Sidebar
          currentStep={props.currentStep}
          currentSubStep={props.currentSubStep}
          i18n={i18n}
          stepsStatus={props.stepsStatus}
          steps={props.steps}
        />
      }
    >
      <div className="head-section">
        <h3 className="head-section__title">{i18n(subTitle)}</h3>
        <p className="head-section__description">{i18n(description)}</p>
      </div>
      {loading ? <Loading /> : null}
      {showError ? (
        <Alert message={i18n('errorMessage.network')} status="error" />
      ) : null}

      <>
        <Form
          {...props}
          submitButton={{
            label: i18n('button.next'),
            withArrow: true,
            onClick: () => onSubmit(),
            disabled: loading,
          }}
          cancelLink={{
            href: '/business-licence-procedure',
          }}
        >
          {' '}
          {!loading && !showError ? (
            <Form.Fieldset
              twoColumns
              // title={i18n('fieldSet.title.selectLegalForm')}
            >
              {getFields()}
            </Form.Fieldset>
          ) : null}
        </Form>
      </>
    </Container>
  );
}

export default withTemplateHooks(SelectCompanyDetails);
