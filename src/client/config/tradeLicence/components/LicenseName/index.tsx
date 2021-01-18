import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IVariables } from '@tamm/app-composer';

import useDebounce from 'client/config/hooks/useDebounce';
import useMedia from 'use-media';
import { includes } from 'lodash';
import { NAME_RESERVATION_PERIOD } from 'client/config/utils/lookup';

import Link from '@tamm/ui-lib-v2-link';
import Grid from '@tamm/ui-lib-v2-grid';
import Button from '@tamm/ui-lib-v2-button';
import Checkbox from '@tamm/ui-lib-v2-checkbox';
import Input from '@tamm/ui-lib-v2-input';
import Card from '@tamm/ui-lib-v2-card';
import Alert from '@tamm/ui-lib-v2-alert';
import Select from '@tamm/ui-lib-v2-select';
import Spinner from '@tamm/ui-lib-v2-spinner';

import './LicenseName.less';

/* istanbul ignore file */

const { Row, Col } = Grid;

/**
 * LicenseName component
 * @param {Object} props
 * @returns {JSX}
 */
function LicenseName(props: IVariables) {
  const { i18n, formState, showAutoGenerate, validate, locale } = props;

  const [isLoadingTradeNameGenerate, setIsLoadingTradeNameGenerate] = useState(
    false,
  );
  const [autoGenerate, setAutoGenerate] = useState(false);

  const [isLoadingTradeNameCheck, setIsLoadingTradeNameCheck] = useState(false);
  const [
    tradeNameValidation,
    setTradeNameValidation,
  ] = useState<null | IVariables>(null);

  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<IVariables[]>([]);

  const isWide = useMedia({ minWidth: '768px' });

  const [tradeNameEn, setTradeNameEn] = useState(formState.tradeNameEn);
  const [tradeNameAr, setTradeNameAr] = useState(formState.tradeNameAr);
  const [isTranslated, setIsTranslated] = useState(true);
  const [translatedField, setTranslatedField] = useState('');
  const [onBlurVar, setOnBlur] = useState(false);
  const [onReserveClick, setOnReserveClick] = useState(false);
  const debouncedTradeNameEn = useDebounce(tradeNameEn, 500);
  const debouncedTradeNameAr = useDebounce(tradeNameAr, 500);

  const getTransliteration = async (word: string) => {
    setIsTranslated(false);
    if (!autoGenerate && !onReserveClick) {
      const payload = await props.getTransliteration(word);
      setIsTranslated(true);
      if (translatedField === 'en') {
        setTradeNameEn(payload.nameEn);
      }
      if (translatedField === 'ar') {
        setTradeNameAr(payload.nameAr);
      }
    }
    setOnReserveClick(false);
  };

  useEffect(() => {
    setTranslatedField(props.locale === 'en' ? 'ar' : 'en');
  }, [props.locale]);

  useEffect(() => {
    if (debouncedTradeNameEn && translatedField === 'ar') {
      getTransliteration(debouncedTradeNameEn);
    }
  }, [debouncedTradeNameEn]);

  useEffect(() => {
    if (debouncedTradeNameAr && translatedField === 'en') {
      getTransliteration(debouncedTradeNameAr);
    }
  }, [debouncedTradeNameAr]);

  useEffect(() => {
    props.onReserve({
      nameEn: tradeNameEn,
      nameAr: tradeNameAr,
    });
  }, [
    tradeNameEn,
    tradeNameAr,
    tradeNameValidation,
    isLoadingTradeNameCheck,
    suggestions,
  ]);

  const onAutoGenerate = async () => {
    if (!autoGenerate) {
      setAutoGenerate(true);
      setIsLoadingTradeNameGenerate(true);
      setTradeNameValidation(null);

      const payload = await props.autoGenerateTradeName(formState);
      const formatted = {
        nameEn:
          formState.licenceType === 'instant' && props.currentCategory.nameEn
            ? `${payload && payload.nameEn} ${props.currentCategory.nameEn}`
            : payload && payload.nameEn,
        nameAr:
          formState.licenceType === 'instant' && props.currentCategory.nameAr
            ? `${payload && payload.nameAr} ${props.currentCategory.nameAr}`
            : payload && payload.nameAr,
      };
      props.onReserve(formatted);
      setIsLoadingTradeNameGenerate(false);
      setTradeNameEn(formatted.nameEn);
      setTradeNameAr(formatted.nameAr);
    } else {
      setAutoGenerate(false);
    }
  };

  const onCheckTradeName = async () => {
    if (formState.tradeNameEn && formState.tradeNameAr) {
      setOnBlur(false);
      setIsLoadingTradeNameCheck(true);
      setTradeNameValidation(null);
      const validationResult = await props.onCheckTradeName(
        formState.tradeNameEn,
        formState.tradeNameAr,
      );
      setIsLoadingTradeNameCheck(false);
      setTradeNameValidation(validationResult);
      props.setTradeNameCheckStatus(validationResult.status);
    }
  };

  useEffect(() => {
    if (onReserveClick) onCheckTradeName();
  }, [onReserveClick]);

  useEffect(() => {
    if (onBlurVar && isTranslated) onCheckTradeName();
  }, [onBlurVar, isTranslated]);

  const onLoadSuggestions = async () => {
    setIsLoadingSuggestions(true);

    const result = await props.onLoadSuggestions(formState);

    setSuggestions(result);
    setIsLoadingSuggestions(false);
  };

  const validateStatusTradeNameEnglish = () => {
    return (validate && formState.tradeNameEn === '') ||
      props.tradeNameCheckStatus === 'error'
      ? 'error'
      : null;
  };

  const helpStatusTradeNameEnglish = () => {
    let status = '';

    if (validate && formState.tradeNameEn === '') {
      status = i18n('required_field');
    } else if (showAutoGenerate) {
      status = 'Example: 100024 For Services';
    }

    return status;
    // return validate && formState.tradeNameEn === ''
    //   ? i18n('required_field')
    //   : showAutoGenerate
    //   ? 'Example: 100024 For Services'
    //   : '';
  };

  const getValueTradeNameEnglish = () => {
    return props.disableEditing ? formState.tradeNameEn : tradeNameEn;
  };

  const getDisabledTradeNameEnglish = () => {
    return autoGenerate || props.disableEditing;
  };

  const tradeNameEnglishInput = (
    <Input
      aria-label="trade-name-en"
      label={i18n('licenceName.inputLabelEn')}
      disabled={getDisabledTradeNameEnglish()}
      value={getValueTradeNameEnglish()}
      onBlur={() => {
        setTimeout(() => {
          setOnBlur(true);
        }, 3000);
      }}
      onChange={value => {
        setTradeNameEn(value);
      }}
      validateStatus={validateStatusTradeNameEnglish()}
      help={helpStatusTradeNameEnglish()}
    />
  );

  const helpStatusTradeNameArabicInput = () => {
    let status = '';

    if (validate && formState.tradeNameAr === '') {
      status = i18n('required_field');
    } else if (showAutoGenerate) {
      status = 'مثال: 100024 للخدمات"';
    }

    return status;
    // return validate && formState.tradeNameAr === ''
    //   ? i18n('required_field')
    //   : showAutoGenerate
    //   ? 'مثال: 100024 للخدمات"'
    //   : '';
  };

  const validateStatusTradeNameArabicInput = () => {
    return (validate && formState.tradeNameAr === '') ||
      props.tradeNameCheckStatus === 'error'
      ? 'error'
      : null;
  };

  const getValueTradeNameArabicInput = () => {
    return props.disableEditing ? formState.tradeNameAr : tradeNameAr;
  };

  const getDisabledTradeNameArabicInput = () => {
    return autoGenerate || props.disableEditing;
  };

  const tradeNameArabicInput = (
    <Input
      aria-label="trade-name-ar"
      label={i18n('licenceName.inputLabelAr')}
      disabled={getDisabledTradeNameArabicInput()}
      value={getValueTradeNameArabicInput()}
      onBlur={() => {
        setTimeout(() => {
          setOnBlur(true);
        }, 3000);
      }}
      onChange={value => {
        setTradeNameAr(value);
      }}
      validateStatus={validateStatusTradeNameArabicInput()}
      help={helpStatusTradeNameArabicInput()}
    />
  );

  const getSuggestionsApiBodyIsEmpty = !(
    formState.tradeNameAr &&
    formState.tradeNameEn &&
    formState.legalForm &&
    formState.activities.length
  );

  const renderTenderHeaderFooter = () => {
    return (
      !isLoadingSuggestions &&
      suggestions &&
      suggestions.length > 0 && (
        <div className="ui-lib-margin-t_lg">
          <Row gutter={20}>
            {suggestions.map((item: IVariables) => (
              <Col key={item.serial} xs={12} lg={3}>
                <Card>
                  <Card.Header.Tender title={item.nameEn} />
                  <Card.Body.Data
                    items={[
                      {
                        content: item.nameAr,
                        label: '',
                      },
                    ]}
                    uiType="vertical"
                  />
                  <Card.Footer.Simple
                    button={{
                      label: i18n('button.reserve'),
                      onClick: () => {
                        setTradeNameEn(item.nameEn);
                        setTradeNameAr(item.nameAr);
                        setOnReserveClick(true);
                      },
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )
    );
  };

  const renderSpinner = () => {
    return (
      isLoadingSuggestions && (
        <div className="ui-lib-margin-t_lg LicenseName__loading">
          <Spinner type="circle" />
        </div>
      )
    );
  };

  const renderShowNameReservationPeriod = () => {
    return (
      props.showNameReservationPeriod && (
        <Row gutter={20} flex>
          <Col xs={12} lg={3}>
            <div className="ui-lib-margin-t_md">
              <Select
                i18n={i18n}
                placeholder={i18n('select')}
                label={`${i18n('licenceName.nameReservationPeriod')} *`}
                items={NAME_RESERVATION_PERIOD.map((i: IVariables) => ({
                  id: i.id,
                  label: props.locale === 'en' ? i.nameEn : i.nameAr,
                }))}
                validateStatus={
                  validate && formState.nameReservationPeriod === ''
                    ? 'error'
                    : undefined
                }
                help={
                  validate && formState.nameReservationPeriod === ''
                    ? i18n('required_field')
                    : ''
                }
                value={formState.nameReservationPeriod}
                onChange={value => {
                  props.onReserve({
                    nameReservationPeriod: value,
                  });
                }}
              />
            </div>
          </Col>
        </Row>
      )
    );
  };

  const renderAlertTradeNameCheck = () => {
    return (
      isLoadingTradeNameCheck && (
        <div className="ui-lib-margin-t_md">
          <Alert
            message={i18n('licenceName.alertInfoChecking')}
            status="info"
          />
        </div>
      )
    );
  };

  const renderAlertTradeNameValidation = () => {
    return (
      tradeNameValidation && (
        <div className="ui-lib-margin-t_md">
          {isLoadingTradeNameCheck ? (
            <Alert
              message={i18n('licenceName.alertInfoChecking')}
              status={tradeNameValidation.status}
            />
          ) : (
            <Alert
              message={i18n(tradeNameValidation.message)}
              status={tradeNameValidation.status}
            />
          )}
        </div>
      )
    );
  };

  const renderSuggestionButton = () => {
    return (
      <Row gutter={32} flex>
        <Col xs={12} lg={3}>
          <div className="ui-lib-margin-b_md">
            {locale === 'en' ? tradeNameEnglishInput : tradeNameArabicInput}
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <div className="ui-lib-margin-b_md">
            {locale === 'en' ? tradeNameArabicInput : tradeNameEnglishInput}
          </div>
        </Col>
        {!props.disableEditing && (
          <Col xs={12} lg={6}>
            <div
              className={`LicenseName__button-group ${
                !isWide ? 'LicenseName__button-group-mobile' : ''
              }`}
            >
              <Button
                aria-label="get-suggestions"
                uiType="secondary"
                label={i18n('button.suggestion')}
                size="medium"
                disabled={
                  isLoadingSuggestions ||
                  autoGenerate ||
                  getSuggestionsApiBodyIsEmpty
                }
                onClick={onLoadSuggestions}
              />
            </div>
          </Col>
        )}
      </Row>
    );
  };

  const renderAutoGeneratedCheckbox = () => {
    return (
      <div className="ui-lib-margin-b_md">
        {showAutoGenerate && (
          <Row gutter={20} flex>
            <Col xs={12} lg={3}>
              <Checkbox
                checked={autoGenerate}
                label={`${
                  isLoadingTradeNameGenerate
                    ? i18n('licenceName.generating')
                    : i18n('licenceName.autoGenerate')
                }`}
                name="checkbox"
                disabled={isLoadingTradeNameGenerate}
                onChange={onAutoGenerate}
                tabIndex={0}
              />
            </Col>
          </Row>
        )}
      </div>
    );
  };

  const rendeReconomicName = () => {
    return (
      includes(
        ['branchUAE', 'branchFZ', 'branchGCC', 'branchForeign'],
        formState.branch || '',
      ) && (
        <div className="ui-lib-margin-b_md">
          {i18n('economicName.likeParent')}
        </div>
      )
    );
  };

  const renderDescription = () => {
    return (
      <p className="ui-lib-margin-b_xl LicenceForm__form-description">
        {includes(['branchAD'], formState.branch || '') &&
          i18n('economicName.descriptionBranch')}
        {!includes(['branchAD'], formState.branch || '') &&
          (locale === 'en' ? (
            <>
              Please enter the economic name below and make sure it includes at
              least one of the selected activities. We will automatically
              confirm if your chosen name is available. Please check to confirm
              that your economic name is not a{' '}
              <Link
                aria-label="wizard-link"
                href="/media/prohibited-names.pdf"
                label="prohibited word"
                uiType="text"
                target="_blank"
              />{' '}
              or an{' '}
              <Link
                aria-label="wizard-link"
                href="/media/exceptional-names-list.pdf"
                label="exceptional word"
                uiType="text"
                target="_blank"
              />
              .
            </>
          ) : (
            <>
              يُرجى إضافة الاسم الاقتصادي المرغوب أدناه، مع مراعاة أن يحتوي على
              الأقل إحدى الأنشطة المختارة وألا يكون من الأسماء
              <Link
                aria-label="wizard-link"
                href="/media/exceptional-names-list.pdf"
                label="الاستثنائية أو"
                uiType="text"
                target="_blank"
              />{' '}
              <Link
                aria-label="wizard-link"
                href="/media/prohibited-names.pdf"
                label="المحظورة"
                uiType="text"
                target="_blank"
              />{' '}
              , سيتم التحقق تلقائياً إذا ما كان الاسم متاحاً للاستخدام
            </>
          ))}
      </p>
    );
  };

  return (
    <div className="LicenseName">
      {renderDescription()}

      {rendeReconomicName()}

      {renderAutoGeneratedCheckbox()}

      {renderSuggestionButton()}

      {renderAlertTradeNameValidation()}

      {renderAlertTradeNameCheck()}

      {renderShowNameReservationPeriod()}

      {renderSpinner()}

      {renderTenderHeaderFooter()}
    </div>
  );
}

LicenseName.propTypes = {
  disableEditing: PropTypes.bool,
  formState: PropTypes.shape({
    branch: PropTypes.any,
  }),
};

LicenseName.defaultProps = {
  disableEditing: false,
  formState: {
    branch: null,
  },
};

export default LicenseName;
