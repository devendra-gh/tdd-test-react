import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Sidebar from 'client/templates/AmendmentsSidebar';
import Form from '@tamm/ui-lib-v2-form';
import Button from '@tamm/ui-lib-v2-button';
import Label from '@tamm/ui-lib-v2-label';
import Alert from '@tamm/ui-lib-v2-alert';
import Grid from '@tamm/ui-lib-v2-grid';
import Spinner from '@tamm/ui-lib-v2-spinner';
import Input from '@tamm/ui-lib-v2-input';
import {
  checkValidationField,
  validationTypes,
} from 'client/config/amendments/utils/checkValidation';
import { getRelatedRecords } from 'client/config/amendments/services';
import Informational from '@tamm/ui-lib-v2-informational-template';
import { AMENDMENT_TYPES as types } from '../../constants/amendmentObjects';
// import { validationTypes } from 'client/config/amendments/utils/checkValidation';

/**
 * Home template
 * @param       {Object} props
 * @returns     {JSX}
 */

function EconomicName(props: IVariables) {
  const {
    i18n,
    licenceDetails,
    pageLoading,
    tradeName,
    dedErrorMessage,
    amendmentServerError,
  } = props;
  const { tradeName: tN } = licenceDetails;
  const [tnNumber, setTnNumber] = useState('');
  const [noResponse, setNoResponse] = useState(props.noResponse || false);
  const { Row, Col } = Grid;
  let typeValidation: any;
  const unfortunateError = i18n('tradeName.notAvialable');
  const requiredError = i18n('validationMessage.required');
  const [validate, setValidate] = useState<'success' | 'error' | undefined>();
  const [error, setError] = useState('');

  const addInPayload = (type: string, value: IVariables) => {
    props.actions.licenceDetails.update({
      ...props.licenceDetails,
      [types.TRADE_NAME]: {
        ...props.licenceDetails[types.TRADE_NAME],
        amendment: {
          type,
          value,
        },
      },
    });
  };
  const getTradeNameInfo = async () => {
    props.actions.pageLoading.update(true);
    setNoResponse(false);
    let response = null;
    try {
      response = await getRelatedRecords(tnNumber);

      if (response.result) {
        let { relatedRecoreds } = response.result;

        if (relatedRecoreds.length)
          relatedRecoreds = response.result.relatedRecoreds.find(
            (e: any) => e.type === 'Trade Name',
          );

        props.actions.tradeName.update({
          fetched: true,
          response: relatedRecoreds,
        });

        setNoResponse(!response.result.relatedRecoreds.length);
      }
    } catch (e) {
      props.actions.pageLoading.update(false);
    }
    props.actions.pageLoading.update(false);
    return response;
  };
  const reset = () => {
    props.actions.licenceDetails.update({
      ...props.licenceDetails,
      [types.TRADE_NAME]: {
        ...props.licenceDetails[types.TRADE_NAME],
        amendment: {},
      },
    });
    setNoResponse(false);
    props.actions.tradeName.reset();
    setError('');
    setValidate(undefined);
  };
  const validationCheck = (val: string) => {
    if (!val) {
      setError(requiredError);
      setValidate('error');

      return false;
    }
    typeValidation = checkValidationField(
      {
        type: validationTypes.TN_NUMBER,
      },
      val || null,
      true,
      i18n,
    );
    if (typeValidation !== false) {
      setError(typeValidation);
      setValidate('error');
      return false;
    }

    return true;
  };
  const onCheck = async () => {
    if (validationCheck(tnNumber)) {
      const resp = await getTradeNameInfo();
      return resp;
    }
    return false;
  };
  const Submit = () => {
    if (validationCheck(tnNumber)) {
      if (tradeName.response.NameEn) {
        props.onSubmitAmendment(props);
      } else onCheck();
    }
  };

  const onBlurTnNumber = (e: any) => {
    const { value } = e.currentTarget;
    setTnNumber(value);
    validationCheck(value);
  };

  React.useEffect(() => {
    if (!!tradeName && !!tradeName.response.NameEn) {
      setValidate('success');
      setTnNumber(tradeName.response.transaction_No);
      addInPayload('number', {
        TradeName: tradeName.response.transaction_No,
      });
    }
  }, [tradeName]);

  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps}
            stepsStatus={props.stepsStatus}
            showSidebar={props.showSidebar}
          />
        }
      >
        {(amendmentServerError || dedErrorMessage) && (
          <div id="errorMessage">
            <Alert
              message={amendmentServerError || dedErrorMessage}
              status="error"
            />
            <div className="height-20" />
          </div>
        )}
        <Informational>
          <h3 className="titleColor">{props.i18n(props.subTitle)}</h3>
          {props.description && (
            <p className="subtitleColor">{props.i18n(props.description)}</p>
          )}
        </Informational>

        <div className="height-20" />
        <div className="economicName-body">
          <div>
            <Label>{i18n(props.currentEconomicName)}</Label>
            <p className="subtitleColor font-weight-900 text-align-left">
              {tN.eng}
            </p>
          </div>
          <div className="text-align-right">
            <Label>{i18n(props.currentEconomicNameAr)}</Label>
            <p className="subtitleColor font-weight-900 text-align-right">
              {tN.arb}
            </p>
          </div>
        </div>
        <div className="height-20" />
        <Form
          {...props}
          backButton={{
            label: props.i18n('button.back'),
            withArrow: true,
            alignIcon: 'start',
            uiType: 'secondary',
            onClick: () => props.onBack(props),
          }}
          submitButton={{
            label: props.i18n('button.next'),
            withArrow: true,
            onClick: () => Submit(),
          }}
        >
          <Form.Fieldset title={i18n('tradeName.chooseName')}>
            <p className="subtitleColor">{i18n('tradeName.tnTextInfo')}</p>
          </Form.Fieldset>

          <Form.Fieldset title="">
            <Row flex clasName="align-item-center">
              <Col md={6} xs={12}>
                <Input
                  help={error}
                  aria-label="tradeName.tnNumber"
                  name="tnNumber"
                  label={i18n('tradeName.tnNumber')}
                  onBlur={onBlurTnNumber}
                  onChange={reset}
                  type="text"
                  validateStatus={validate}
                  value={tnNumber}
                />
              </Col>
              <Col
                md={6}
                xs={12}
                className="col-padding col-padding-trade-name"
              >
                {pageLoading ? (
                  <Spinner type="circle" />
                ) : (
                  <Button
                    aria-label="button-secondary"
                    label={props.i18n('check')}
                    name={undefined}
                    onClick={onCheck}
                    size="medium"
                    type="button"
                    uiType="secondary"
                    withArrow={false}
                  />
                )}
              </Col>
            </Row>
          </Form.Fieldset>

          {!noResponse && !!tradeName.response.NameEn && (
            <React.Fragment>
              <div className="height-20" />
              <div className="economicName-body">
                <div>
                  <Label>{i18n('tradeName.proposeEn')}</Label>
                  <p className="subtitleColor">
                    <b>{tradeName.response.NameEn}</b>
                  </p>
                </div>
                <div>
                  <Label>{i18n('tradeName.proposeAr')}</Label>
                  <p className="subtitleColor">
                    <b>{tradeName.response.NameAr}</b>
                  </p>
                </div>
              </div>
            </React.Fragment>
          )}

          {noResponse && (
            <Alert status="error" message={i18n(unfortunateError)} />
          )}
          <div className="height-20" />
        </Form>
        <div />
        <div className="height-100" />
      </Container>
    </>
  );
}

export default withTemplateHooks(EconomicName);
