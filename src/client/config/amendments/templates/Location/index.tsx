import React, { useState } from 'react';
import Container from 'client/containers';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Sidebar from 'client/templates/AmendmentsSidebar';
import Label from '@tamm/ui-lib-v2-label';
import Grid from '@tamm/ui-lib-v2-grid';
import Form from '@tamm/ui-lib-v2-form';
import Input from '@tamm/ui-lib-v2-input';
import Button from '@tamm/ui-lib-v2-button';
import Select from '@tamm/ui-lib-v2-select';
import Spinner from '@tamm/ui-lib-v2-spinner';
import getTawtheeqInfo from 'client/config/amendments/services/getTawtheeqInfo';
import Alert from '@tamm/ui-lib-v2-alert';
import LICENSE_TYPES from '../../constants/licenseTypes';
import { getRequiredDocuments } from '../../utils/getReqDocuments';

const { Row, Col } = Grid;

// eslint-disable-next-line complexity
function Location(props: IVariables) {
  const {
    i18n,
    licenceDetails,
    tawtheeqDetails,
    dedErrorMessage,
    amendmentServerError,
  } = props;
  const [validate, setValidate] = useState<'success' | 'error' | undefined>();
  const [error, setError] = useState('');
  const [invalid, setInvalid] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [tawtheeqNum, setTawtheeqNum] = useState('');
  const requiredError = i18n('validationMessage.required');

  const updateUploadStep = () => {
    const documents = getRequiredDocuments(props);
    const isUploadStep = !!documents.length;
    props.actions.amendmentCategories.update({
      ...props.amendmentCategories,
      isUploadStep,
    });
  };
  React.useEffect(() => {
    updateUploadStep();
  }, [props.legalForm, licenceDetails.country]);

  const setCountryOfOrigin = (country: string) => {
    props.actions.licenceDetails.update({
      ...licenceDetails,
      country: {
        ...licenceDetails.country,
        amendedCountryOfOrigin: country,
      },
    });
  };

  const addInPayload = (value: IVariables) => {
    props.actions.licenceDetails.update({
      ...licenceDetails,
      location: {
        ...licenceDetails.location,
        amendment: value,
      },
    });
  };
  const validationCheck = (val: string) => {
    setInvalid(false);
    if (!val) {
      setError(requiredError);
      setValidate('error');
      return false;
    }
    const regexDigit5to20 = new RegExp(/^[0-9]{5,20}$/g);

    const regexTawtheeqFormat = new RegExp(/^[A-Z]{3}?-(\d{7})-(\d{4})$/g);
    if (regexDigit5to20.test(val) || regexTawtheeqFormat.test(val)) {
      setTawtheeqNum(val);
      setError('');
    } else {
      setError('');
      setInvalid(true);
      setValidate('error');
      return false;
    }

    return true;
  };
  const reset = () => {
    props.actions.licenceDetails.update({
      ...licenceDetails,
      location: {
        ...licenceDetails.location,
        amendment: tawtheeqNum,
      },
    });
    props.actions.tawtheeqDetails.reset();
    setInvalid(false);
    setError('');
    setValidate(undefined);
  };
  const onBlurTawtheeq = (e: any) => {
    const { value } = e.currentTarget;
    setTawtheeqNum(value);
    validationCheck(value);
  };

  const getTawtheeqInfoFunc = async () => {
    setLoading(true);
    try {
      const data = await getTawtheeqInfo(tawtheeqNum);
      if (Object.keys(data).length) {
        setValidate('success');
        props.actions.licenceDetails.update({
          ...licenceDetails,
          location: {
            ...licenceDetails.location,
            amendment: tawtheeqNum,
          },
        });
        props.actions.tawtheeqDetails.update(tawtheeqNum);
      } else {
        setValidate('error');
        setInvalid(true);
        props.actions.tawtheeqDetails.update(null);
      }
    } catch (e) {
      setError('');
      setValidate('error');
    }
    setLoading(false);
  };
  const onCheck = async () => {
    if (validationCheck(tawtheeqNum)) {
      await getTawtheeqInfoFunc();
    }
  };
  const Submit = () => {
    if (validationCheck(tawtheeqNum)) {
      if (tawtheeqDetails) props.onSubmitAmendment(props);
      else onCheck();
    }
  };
  React.useEffect(() => {
    if (tawtheeqDetails) {
      setValidate('success');
      setTawtheeqNum(tawtheeqDetails);
      addInPayload(tawtheeqDetails);
    }
  }, [tawtheeqDetails]);
  return (
    <>
      <Container
        locale={props.locale}
        sidebar={
          <Sidebar
            currentStep={props.currentStep}
            currentSubStep={props.currentSubStep}
            i18n={props.i18n}
            steps={props.steps || []}
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
          <h3 className="titleColor">{i18n(props.subTitle)}</h3>
          {props.licenseType === LICENSE_TYPES.BRANCH ? (
            <p className="subtitleColor">
              {props.branchDescription && i18n(props.branchDescription)}
            </p>
          ) : (
            <p className="subtitleColor">
              {props.description && i18n(props.description)}
            </p>
          )}
        </Informational>
        <div className="height-20" />
        <Row>
          <Col md={12} xs={12}>
            <Label>{i18n('location.tawtheeqNumber')}</Label>
            <p className="location-address">
              {licenceDetails.location.tawtheeqNum || '1234567'}
            </p>
          </Col>
        </Row>
        {props.licenseType === LICENSE_TYPES.BRANCH ? (
          <Row>
            <Col md={12} xs={12}>
              <Label>{i18n('location.countryOfOrigin')}</Label>
              <p className="location-address">
                {i18n('location.countryOfOriginValue', {
                  countryOfOriginEn: licenceDetails.country.countryOfOrigin,
                  countryOfOriginAr: licenceDetails.country.countryOfOriginAr,
                })}
              </p>
            </Col>
          </Row>
        ) : (
          ''
        )}
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
          <Form.Fieldset title={i18n('location.amended')}>
            <p className="subtitleColor">{i18n('location.desc')}</p>
          </Form.Fieldset>

          <Row flex className="align-item-center">
            <Col md={6} xs={12}>
              <Input
                help={error}
                aria-label="location.tawtheeqCurrentNumber"
                name="tawtheeqCurrentNumber"
                label={i18n('location.tawtheeqCurrentNumber')}
                onBlur={onBlurTawtheeq}
                onChange={reset}
                type="text"
                validateStatus={validate}
                value={tawtheeqNum}
              />
            </Col>
            <Col md={6} xs={12} className="col-padding col-padding-trade-name">
              {!loading && (
                <Button
                  aria-label="button-secondary"
                  label={props.i18n('check')}
                  name={undefined}
                  onClick={() => onCheck()}
                  size="medium"
                  type="button"
                  //  disabled={!!error.length}
                  uiType="secondary"
                  withArrow={false}
                />
              )}
              {loading && <Spinner type="circle" />}
            </Col>
          </Row>

          <Row>
            {invalid && (
              <Col span={12}>
                <Alert
                  message={i18n('validationMessage.tawtheeq')}
                  status="error"
                />
              </Col>
            )}
            {validate === 'success' ? (
              <Col span={12}>
                <Alert
                  message={i18n('validationMessage.tawtheeqSuccess')}
                  status="success"
                />
              </Col>
            ) : (
              <div className="height-40" />
            )}
          </Row>

          {props.licenseType === LICENSE_TYPES.BRANCH && (
            <div>
              <Form.Fieldset>
                <hr />
              </Form.Fieldset>
              <Form.Fieldset title="">
                <p className="subtitleColor">{i18n('addressCountry.desc')}</p>
              </Form.Fieldset>
              <Form.Fieldset twoColumns>
                <Select
                  items={props.countryList}
                  label={i18n('location.countryOfOrigin*')}
                  showSearch
                  value={licenceDetails.country.amendedCountryOfOrigin}
                  onChange={setCountryOfOrigin}
                />
              </Form.Fieldset>
            </div>
          )}
        </Form>
        <div className="height-100" />
      </Container>
    </>
  );
}

export default withTemplateHooks(Location);
