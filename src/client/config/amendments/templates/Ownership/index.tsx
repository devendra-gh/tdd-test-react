import React, { useState, useEffect } from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';

import Alert from '@tamm/ui-lib-v2-alert';
import Button from '@tamm/ui-lib-v2-button';
import Eligibility from '@tamm/ui-lib-v2-eligibility';
import Form from '@tamm/ui-lib-v2-form';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Label from '@tamm/ui-lib-v2-label';
import Table from '@tamm/ui-lib-v2-table';

import ServerError from 'client/templates/ServerError';
import Sidebar from 'client/templates/Sidebar';

import {
  ADD,
  DELETE,
  residenceTypes,
  profileTypes,
} from 'client/config/amendments/constants';
import {
  AMENDMENT_TYPES as types,
  AMENDMENT_CATEGORIES,
} from 'client/config/amendments/constants/amendmentObjects';
import { getRequiredDocuments } from 'client/config/amendments/utils/getReqDocuments';
import { truncate } from 'client/config/amendments/utils/functions';
import getAmendmentsMade from 'client/config/amendments/utils/getAmendmentsMade';
import LEGAL_FORMS from 'client/config/amendments/constants/legalForms';
import scrollToElement from 'client/config/amendments/utils/scrollToElement';

import ActionLink from './components/ActionLink';
import ConfirmationPopup from './components/ConfirmationPopup';

/**
 * Ownership template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Ownership(props: IVariables) {
  const {
    i18n,
    locale,
    amendmentCategories,
    amendmentServerError,
    checkRules,
    currentCategory,
    currentStep,
    currentSubStep,
    dedErrorMessage,
    getActionType,
    getAmendmentTypes,
    initialValues,
    legalForm,
    licenceDetails,
    licenseType,
    onBack,
    onNext,
    prevLegalForm,
    // showSidebar,
    steps,
    stepsStatus,
  } = props;

  const LegalFormChangeListError = (legalFormChangeList: any) => {
    return legalFormChangeList.length ? (
      <Alert message={i18n('ownership.current.form.no')} status="error" />
    ) : (
      <Alert message={i18n('ownership.due.to')} status="success" />
    );
  };

  const [deletePopupFlag, setDeleteModal] = useState(false);
  const [resetPopup, setResetPopup] = useState(false);
  const [amendmentsMadeAlert, setamendmentsMadeAlert] = useState(false);
  const [selectedAmendment, setSelectedAmendment] = useState({
    index: -1,
    amendmentItems: '',
  });
  const [rules, setRules] = useState(checkRules(props) || []);

  const AmendmentsMadeAlert = () => {
    return (
      (amendmentsMadeAlert && (
        <Alert message={i18n('ownership.amendmentsMadeAlert')} status="error" />
      )) ||
      null
    );
  };
  const switchLegalForm = () => {
    props.history.push('/amendments/switch-legalForm');
  };

  const showDeleteModal = (selectedValue: any) => {
    setSelectedAmendment(selectedValue);
    setDeleteModal(true);
  };
  const onCancelModal = () => {
    setDeleteModal(false);
  };
  const onConfirmModal = () => {
    let reps = licenceDetails[selectedAmendment.amendmentItems];
    if (reps[selectedAmendment.index].status === ADD) {
      reps = reps.filter(
        (_d: IVariables, i: number) => selectedAmendment.index !== i,
      );
    } else {
      reps = reps.map((rep: IVariables, index: number) => {
        return index === selectedAmendment.index
          ? {
              ...licenceDetails[selectedAmendment.amendmentItems][
                selectedAmendment.index
              ],
              status: DELETE,
            }
          : rep;
      });
    }

    props.actions.licenceDetails.update({
      ...licenceDetails,
      [selectedAmendment.amendmentItems]: reps,
    });
    setDeleteModal(false);
  };

  const getAmendmentHeader = (value: string) => {
    return types.PARTNERS === value
      ? [
          {
            name: 'name',
            render: (name: string) => truncate(name, 20),
          },
          { name: 'type', hideFor: ['sm', 'md', 'xl'] },
          { name: 'idNumber', hideFor: ['sm', 'md'] },
          { name: 'phone', hideFor: ['sm', 'md', 'xl'] },
          { name: 'nationality', hideFor: ['sm', 'md'] },
          { name: 'share', hideFor: ['sm', 'md'] },
          { name: 'action', align: 'end' },
        ]
      : [
          {
            name: 'name',
            render: (name: string) => truncate(name, 20),
          },
          { name: 'type', hideFor: ['sm', 'md', 'xl'] },
          { name: 'idNumber', hideFor: ['sm', 'md'] },
          { name: 'phone', hideFor: ['sm', 'md', 'xl'] },
          { name: 'nationality', hideFor: ['sm', 'md'] },
          { name: 'action', align: 'end' },
        ];
  };
  const getRowValues = (rowValues: any) => {
    const returnRowValue: any = {};

    if (rowValues.profileType === profileTypes.INDIVIDUAL) {
      returnRowValue.name = i18n('name', {
        nameEn: rowValues.nameEn,
        nameAr: rowValues.nameAr,
      });
      returnRowValue.idNumber =
        rowValues.type === residenceTypes.VISITOR && rowValues.moiID
          ? rowValues.moiID
          : rowValues.emiratesId;
      returnRowValue.nationality = i18n('rowNationality', {
        rowNationalityEn: rowValues.nationality,
        rowNationalityAr: rowValues.nationalityAr,
      });
    }
    if (rowValues.profileType === profileTypes.COMPANY) {
      returnRowValue.name = i18n('name', {
        nameEn: rowValues.companyNameEn,
        nameAr: rowValues.companyNameAr,
      });
      returnRowValue.idNumber = rowValues.licenceNo;
      returnRowValue.nationality = i18n('rowNationality', {
        rowNationalityEn: rowValues.domicile,
        rowNationalityAr: rowValues.domicile,
      });
    }
    return returnRowValue;
  };
  const getAmendmentItems = (amendmentItems: string, amendmentRules: any) => {
    let amendment: any;
    let deleteAmendment: any;

    const amendmentObject: any = {
      amendmentArray: [],
    };
    licenceDetails[amendmentItems].forEach((values: any, index: number) => {
      deleteAmendment = { amendmentItems, index };
      if (values.status !== DELETE) {
        const rowValues = getRowValues(values);
        amendment = {
          id: `'${index}'`,
          name: rowValues.name,
          type: i18n(`profileTypes.${values.profileType}`),
          idNumber: rowValues.idNumber,
          phone: <span dir="ltr">{values.phoneNumber}</span>,
          nationality: rowValues.nationality,
          share: values.sharePercentage,
          action: (
            <ActionLink
              {...props}
              i18n={i18n}
              toggleModal={showDeleteModal}
              deleteAmendment={deleteAmendment}
              index={index}
              amendmentItems={amendmentItems}
              getActionType={getActionType}
              userAction={amendmentRules.actions}
            />
          ),
        };
        amendmentObject.amendmentArray.push(amendment);
      }
    });
    return amendmentObject.amendmentArray.length > 0
      ? amendmentObject.amendmentArray
      : [];
  };
  const amendmentTypesConfig = getAmendmentTypes(
    legalForm,
    licenseType,
    currentCategory,
  );
  const amendmentTypes: IVariables = {};
  let setFlag: boolean = false;
  if (amendmentTypesConfig) {
    Object.keys(amendmentTypesConfig).forEach((values: any) => {
      if (amendmentTypesConfig[values].actions.add === true) {
        setFlag = true;
      }
      if (!amendmentTypesConfig[values].noDisplay) {
        amendmentTypes[values] = {
          header: getAmendmentHeader(values),
          items: getAmendmentItems(values, amendmentTypesConfig[values]),
        };
      }
    });
  }

  const getNoRecord = (amendmentType: any) => {
    return [
      {
        id: `rowLabel.${amendmentType}Added`,
        title: (
          <span className="font-weight-500">
            {i18n(`rowLabel.noRow.${amendmentType}`)}
          </span>
        ),
      },
      {
        align: 'end',
        id: 'action',
        title: amendmentTypesConfig[amendmentType].actions.add ? (
          // <Link
          //   aria-label={i18n('button.addNew')}
          //   href="/amendments/profile"
          //   label={i18n('button.addNew')}
          //   target="_self"
          //   uiType="text"
          //   onClick={() =>
          //     getActionType(amendmentType, ADD, -1, props)
          //   }
          // />
          <span
            className="hoverType linkColor font-weight-500"
            onClick={() => getActionType(amendmentType, ADD, -1, props)}
            role="presentation"
            tabIndex={-1}
          >
            {i18n('button.addNew')}
          </span>
        ) : (
          ''
        ),
      },
    ];
  };

  const resetChanges = () => {
    setResetPopup(true);
  };
  const onCancelReset = () => {
    setResetPopup(false);
  };
  const onConfirmReset = () => {
    props.actions.legalForm.update(prevLegalForm);

    const categoriesValues = Object.values(AMENDMENT_CATEGORIES).reduce(
      (acc: IVariables, category: string) => {
        return { ...acc, [category]: false };
      },
      {},
    );
    props.actions.amendmentCategories.update({
      ...amendmentCategories,
      [AMENDMENT_CATEGORIES.OWNERSHIP]: categoriesValues,
      isUploadStep: false,
    });

    props.actions.licenceDetails.update({
      ...licenceDetails,
      ...initialValues,
    });
    setResetPopup(false);
  };

  const legalFormChangeList = rules.reduce(
    (acc: string[], rule: IVariables) =>
      rule.legalFormChange ? acc.concat(rule.legalFormChange) : acc,
    [],
  );

  const updateRules = () => {
    const ruleStatus = checkRules(props);
    setRules(ruleStatus);
  };

  const updateUploadStep = () => {
    const documents = getRequiredDocuments(props);
    const isUploadStep = !!documents.length;
    props.actions.amendmentCategories.update({
      ...amendmentCategories,
      isUploadStep,
    });
  };

  useEffect(() => {
    updateRules();
    updateUploadStep();
  }, [legalForm, licenceDetails]);

  const onNextButton = () => {
    const amendmentsMade = getAmendmentsMade(props);

    if (amendmentsMade.ownership) {
      updateRules();

      if (rules.some((rule: IVariables) => !rule.status)) {
        scrollToElement('eligibility-conditions', 'id');
      } else {
        // gioto next page
        onNext(props);
      }
    } else {
      setamendmentsMadeAlert(true);
    }
  };
  const onBackButton = () => {
    onBack(props);
  };

  return (
    <Container
      locale={locale}
      sidebar={
        <Sidebar
          currentStep={currentStep}
          currentSubStep={currentSubStep}
          i18n={i18n}
          steps={steps}
          stepsStatus={stepsStatus}
          // showSidebar={showSidebar}
        />
      }
    >
      <Form
        {...props}
        backButton={{
          label: i18n('button.back'),
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
          onClick: onBackButton,
        }}
        submitButton={{
          label: i18n('button.next'),
          withArrow: true,
          onClick: onNextButton,
          alignIcon: 'end',
          disabled: legalFormChangeList.length,
        }}
      >
        <Form.Fieldset>
          <Informational>
            <ServerError
              dedErrorMessage={dedErrorMessage}
              amendmentServerError={amendmentServerError}
            />
            <h3>{i18n('ownership.makeAmendments')}</h3>
            <p>{i18n('ownership.makeAmendmentsDescription1')}</p>
          </Informational>
        </Form.Fieldset>
        {Object.keys(amendmentTypes).map((repType: any, index: number) => {
          if (
            repType === types.HEIRS &&
            amendmentTypes[repType].items.length === 0
          ) {
            return false;
          }
          let tableTitle = i18n(`tableTitle.${repType}`);
          if (repType === types.PARTNERS) {
            tableTitle =
              legalForm === LEGAL_FORMS.ESTABLISHMENT ||
              legalForm === LEGAL_FORMS.SOLE_LLC
                ? i18n(`tableTitle.Owner`)
                : i18n(`tableTitle.partners`);
          }
          return (
            <Form.Fieldset>
              <Table
                i18n={i18n}
                clickable={false}
                columns={
                  amendmentTypes[repType].items.length > 0
                    ? amendmentTypes[repType].header.map(
                        ({ name, ...restCol }: IVariables) => ({
                          ...restCol,
                          id: name,
                          title: i18n(`colLabel.${name}`),
                        }),
                      )
                    : getNoRecord(repType)
                }
                disabledSelectionVisible={false}
                headerHidden={false}
                items={amendmentTypes[repType].items}
                // onClick={function noRefCheck(){}}
                // onSelectionChange={function noRefCheck(){}}
                // onToggle={function noRefCheck(){}}
                selectable={false}
                size="default"
                title={tableTitle}
              />
            </Form.Fieldset>
          );
        })}
        {setFlag && (
          <Form.Fieldset>
            <Button
              aria-label={i18n('button.addNewProfile')}
              label={i18n('button.addNewProfile')}
              onClick={() => getActionType('', ADD, -1, props)}
              uiType="secondary"
              withArrow={false}
              size="medium"
            />
          </Form.Fieldset>
        )}
        <Form.Fieldset
          title={i18n('ownership.legalTypeRequirements')}
          gapSize="small"
        >
          <p>{i18n('ownership.makeAmendmentsDescription2')}</p>
        </Form.Fieldset>
        <Form.Fieldset gapSize="small">
          <Label>{i18n('ownership.currentLegalType')}</Label>
          <p className="font-weight-700" id="eligibility-conditions">
            {i18n(`${legalForm}.detailedTitle`)}
          </p>

          <Eligibility
            checkList={rules
              .filter((rule: IVariables) => rule.display || !rule.status)
              .map((rule: IVariables) => ({
                label: i18n(rule.message),
                status: rule.status ? 'success' : 'error',
              }))}
            isLoggedIn
            title=""
          />
        </Form.Fieldset>
        {(!!legalFormChangeList.length || legalForm !== prevLegalForm) && (
          <div className="legal-form-change">
            <LegalFormChangeListError
              legalFormChangeList={legalFormChangeList}
            />

            <div className="display-flex flex-flow-wrap">
              <div className="back-button-wrap">
                <Button
                  aria-label="button-secondary"
                  label={i18n('button.resetChanges')}
                  onClick={resetChanges}
                  uiType="secondary"
                  size="medium"
                />
              </div>
              <div className="next-button-wrap">
                <Button
                  data-target="ui-lib-modal"
                  data-toggle="modal"
                  aria-label="button-secondary"
                  label={i18n('button.switchLegalForm')}
                  onClick={switchLegalForm}
                  uiType={legalFormChangeList.length ? 'primary' : 'secondary'}
                  size="medium"
                />
              </div>
            </div>
          </div>
        )}
        <AmendmentsMadeAlert />
      </Form>

      <ConfirmationPopup
        showPopUp={deletePopupFlag}
        onCancelModal={onCancelModal}
        onConfirmModal={onConfirmModal}
        title={
          selectedAmendment.amendmentItems === types.PARTNERS &&
          (legalForm === LEGAL_FORMS.ESTABLISHMENT ||
            legalForm === LEGAL_FORMS.SOLE_LLC)
            ? i18n(`confirmationMsg.Owner`)
            : i18n(`confirmationMsg.${selectedAmendment.amendmentItems}`)
        }
        cancelText={i18n('button.no')}
        confirmText={i18n('button.yes')}
        descriptionMsg=""
        setIcon="deleteFilled"
      />

      <ConfirmationPopup
        showPopUp={resetPopup}
        onCancelModal={onCancelReset}
        onConfirmModal={onConfirmReset}
        title={i18n(`resetConfirmationMsg`)}
        cancelText={i18n('button.cancel')}
        confirmText={i18n('button.reset')}
        descriptionMsg=""
        setIcon="deleteFilled"
      />
    </Container>
  );
}

Ownership.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Ownership);
