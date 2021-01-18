import React, { useEffect, useState } from 'react';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';
import Sidebar from 'client/templates/Sidebar';
import Form from '@tamm/ui-lib-v2-form';
import RadioGroup from '@tamm/ui-lib-v2-radio-group';
import './index.less';
import Loading from '../../components/Loading';
import CategoryInput from './Components/CategoryInput/index';
import ActivityTable from './Components/ActivityTable';
import SearchInput from './Components/SearchInput';
import AlertComponent from './Components/AlertComponent';
import PaginationActivity from './Components/PaginationActivity';

const inputTypes = {
  CATEGORY: 'CATEGORY',
  NAME: 'NAME',
};

function SelectActivityDetails(props: IVariables) {
  const { i18n, subTitle, description, formSelectActivity } = props;
  const {
    inputType,
    category,
    subCategory,
    loading,
    activity,
  } = formSelectActivity;

  const [startShowingValidateError, setStartShowingValidateError] = useState(
    false,
  );

  const onChange = (type: string, value: string) =>
    props.onChange(type, value, props);

  useEffect(() => {
    props.getInitialState(props);
  }, []);

  useEffect(() => {
    setStartShowingValidateError(false);
  }, [inputType]);

  const onSubmit = () => {
    if (
      (inputType === 'CATEGORY' && (!category || !subCategory)) ||
      !activity
    ) {
      window.scrollTo(0, 500);
      setStartShowingValidateError(true);
      props.actions.formSelectActivity.update({
        ...formSelectActivity,
        alertText: 'errorMessage.selectActivity',
        alertStatus: 'info',
        showError: true,
      });
    } else props.onSubmit(props);
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
        {subTitle && <h3 className="head-section__title">{i18n(subTitle)}</h3>}
        {description && (
          <p className="head-section__description">{i18n(description)}</p>
        )}
      </div>
      {
        <div className="radio-container">
          <RadioGroup
            i18n={i18n}
            align="horizontal"
            disabled={false}
            labelStyle="h5"
            defaultValue={inputType}
            items={[
              {
                label: i18n('label.businessActivity'),
                value: inputTypes.CATEGORY,
              },
              {
                label: i18n('label.activityName'),
                value: inputTypes.NAME,
              },
            ]}
            onChange={event => {
              onChange('inputType', event.target.value);
            }}
            uiType="default"
          />
        </div>
      }
      {
        <Form
          {...props}
          submitButton={{
            label: i18n('button.next'),
            withArrow: true,
            // disabled: !activity,
            onClick: () => onSubmit(),
          }}
          backButton={{
            uiType: 'secondary',
            alignIcon: 'start',
            label: i18n('button.back'),
            withArrow: true,
            onClick: () => {
              props.history.push(
                '/business-licence-procedure/select-transaction-type',
              );
            },
          }}
        >
          <SearchInput {...props} />
          <CategoryInput
            {...props}
            startShowingValidateError={startShowingValidateError}
          />
          {loading && (
            <>
              <div style={{ height: '40px' }} />
              <Loading />
            </>
          )}
          <AlertComponent {...props} />
          <ActivityTable {...props} />
          <PaginationActivity {...props} />
        </Form>
      }
      <div style={{ height: '60px' }} />
    </Container>
  );
}

export default withTemplateHooks(SelectActivityDetails);
