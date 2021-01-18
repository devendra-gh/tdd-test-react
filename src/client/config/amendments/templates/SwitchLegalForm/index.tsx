/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import Container from 'client/containers';
import Sidebar from 'client/templates/AmendmentsSidebar';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import Grid from '@tamm/ui-lib-v2-grid';
import Informational from '@tamm/ui-lib-v2-informational-template';
import Select from '@tamm/ui-lib-v2-select';
import Form from '@tamm/ui-lib-v2-form';
import Icon from '@tamm/ui-lib-v2-icon';
import { AlertCircleFilled } from '@tamm/ui-lib-v2-icon/Icons';
import Label from '@tamm/ui-lib-v2-label';
import { AMENDMENT_CATEGORIES } from '../../constants/amendmentObjects';

const { Row, Col } = Grid;

const SwitchLegalForm = (props: IVariables) => {
  const { i18n, getRuleList, licenseType, checkRules } = props;

  const [rules, setRules] = useState(checkRules(props) || []);
  const updateRules = () => {
    const ruleStatus = checkRules(props);
    setRules(ruleStatus);
  };

  let legalFormList =
    rules &&
    rules.reduce(
      (acc: string[], rule: IVariables) =>
        rule.legalFormChange ? acc.concat(rule.legalFormChange) : acc,
      [],
    );

  if (!legalFormList || legalFormList.length <= 0) {
    legalFormList = [props.prevLegalForm];
  }
  const [legalForm, setLegalForm]: [string, Function] = useState(
    legalFormList[0],
  );
  const isSingle = legalFormList.length === 1;

  const onChangeLegalForm = (value: string) => {
    setLegalForm(value);
  };

  useEffect(() => {
    updateRules();
    setLegalForm(legalFormList[0]);
  }, []);

  const legalFormConditions = getRuleList(licenseType, legalForm);

  const changeLegalForm = () => {
    props.actions.legalForm.update(legalForm);

    const ruleStatus = checkRules({ ...props, legalForm }, 'all');
    const toUpdateCategories: IVariables = {};

    if (props.prevLegalForm !== legalForm) {
      Object.keys(ruleStatus).forEach((category: string) => {
        const ruleStatusCategory: IVariables = ruleStatus[category];
        const categoryRuleSet = Object.values(ruleStatusCategory).reduce(
          (acc, item) => acc.concat(item),
          [],
        );
        if (categoryRuleSet.some((item: IVariables) => !item.status))
          toUpdateCategories[category] = true;
        return null;
      });
    }

    const categoriesValues = Object.values(AMENDMENT_CATEGORIES).reduce(
      (acc: IVariables, category: string) => {
        return { ...acc, [category]: false };
      },
      {},
    );
    props.actions.amendmentCategories.update({
      ...props.amendmentCategories,
      [AMENDMENT_CATEGORIES.OWNERSHIP]: {
        ...categoriesValues,
        ...toUpdateCategories,
      },
    });
    props.history.push('/amendments/ownership');
  };

  const toUpdateUpdomingSteps: any = [];
  if (props.prevLegalForm !== legalForm) {
    const upcomingSteps = checkRules({ ...props, legalForm }, 'all');

    if (upcomingSteps) {
      Object.keys(upcomingSteps).forEach((category: string) => {
        if (category !== 'ownership') {
          const ruleStatusCategory: IVariables = upcomingSteps[category];
          const categoryRuleSet = Object.values(ruleStatusCategory).reduce(
            (acc, item) => acc.concat(item),
            [],
          );
          if (categoryRuleSet.some((item: IVariables) => !item.status))
            toUpdateUpdomingSteps[category] = true;
        }
      });
    }
  }

  const onBack = () => {
    props.history.push('/amendments/ownership');
  };
  return (
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
      <Icon className="ui-lib-fixed-width-height" source={AlertCircleFilled} />
      <div className="height-20" />
      <Informational>
        <div className="legal-form-switch-wrapper">
          <h3 className="titleColor">{i18n('legalFormSwitch.choose')}</h3>
          <p className="subtitleColor">{i18n('legalFormSwitch.description')}</p>
          <div className="height-20" />
          {!isSingle && (
            <div>
              <Row gutter={20}>
                <Col lg={6} md={6}>
                  <Select
                    label={i18n('legalFormSwitch.label.alternateLegalForm')}
                    placeholder={i18n('legalFormSwitch.selectLegalForm')}
                    value={legalForm}
                    onChange={onChangeLegalForm}
                    items={legalFormList.map((legalFormItem: string) => ({
                      id: legalFormItem,
                      label: i18n(`${legalFormItem}.name`),
                    }))}
                    showSearch={false}
                  />
                </Col>
              </Row>
              <div className="height-20" />
            </div>
          )}
          {isSingle && (
            <div>
              <Label>{i18n('legalFormSwitch.label.alternateLegalForm')}</Label>
              <p className="subtitleColor">
                <b>{i18n(`${legalForm}.name`)}</b>
              </p>
              <p className="font-size-16">{i18n(`${legalForm}.description`)}</p>
            </div>
          )}

          <p className="font-size-16">
            {i18n('legalFormSwitch.legalFormRequires')}
          </p>
          <ul>
            {legalFormConditions &&
              legalFormConditions.map((condition: string) => (
                <li className="font-size-16" key={condition}>
                  {i18n(condition)}
                </li>
              ))}
          </ul>
          {Object.keys(toUpdateUpdomingSteps).length > 0 && (
            <div>
              <div className="height-40" />
              <Form.Fieldset
                title={i18n('legalFormSwitch.upcomingSteps')}
                twoColumns={false}
              />
              <p className="subtitleColor">
                {i18n('legalFormSwitch.legalFormUpcomingSteps')}
              </p>
              <ul>
                {Object.keys(toUpdateUpdomingSteps).map((condition: string) => (
                  <li className="font-size-16" key={condition}>
                    {i18n(`legalFormSwitch.update.${condition}`)}
                  </li>
                ))}
              </ul>
              <div className="height-20" />
              <p className="subtitleColor">{i18n('legalFormSwitch.agree')}</p>
            </div>
          )}
        </div>
      </Informational>
      <div className="height-40" />
      <Form
        {...props}
        backButton={{
          label: i18n('button.back'),
          withArrow: true,
          uiType: 'secondary',
          alignIcon: 'start',
          onClick: onBack,
        }}
        submitButton={{
          label: i18n('button.confirm'),
          withArrow: true,
          onClick: changeLegalForm,
          alignIcon: 'end',
        }}
      />
    </Container>
  );
};

SwitchLegalForm.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(SwitchLegalForm);
