import React, { useState, useEffect } from 'react';
import routePropTypes from '@tamm/app-composer/client/propTypes/route';
import { withTemplateHooks, IVariables } from '@tamm/app-composer';
import Container from 'client/containers';

import Alert from '@tamm/ui-lib-v2-alert';
import BusinessActivities from '@tamm/ui-lib-v2-business-activities';
import Form from '@tamm/ui-lib-v2-form';
import Informational from '@tamm/ui-lib-v2-informational-template';

import ServerError from 'client/templates/ServerError';
import Sidebar from 'client/templates/Sidebar';

import { AMENDMENT_CATEGORIES as CATEGORIES } from 'client/config/amendments/constants/amendmentObjects';
import { getCategoryTypes } from 'client/config/amendments/utils/functions';
import LICENSE_TYPES from 'client/config/amendments/constants/licenseTypes';
/**
 * Category template
 * @param       {Object} props
 * @returns     {JSX}
 */
function Category(props: IVariables) {
  const {
    i18n,
    locale,
    amendmentCategories,
    amendmentServerError,
    currentStep,
    currentSubStep,
    dedErrorMessage,
    description,
    legalForm,
    licenseType,
    onBack,
    onNext,
    pageLoading,
    prevLicenseType,
    // showSidebar,
    steps,
    stepsStatus,
    subTitle,
  } = props;

  const [categoryList, setCategoryList] = useState(
    getCategoryTypes(legalForm, licenseType),
  );

  useEffect(() => {
    setCategoryList(getCategoryTypes(legalForm, licenseType));
  }, [legalForm, licenseType]);

  const toggleCategories = (item: any) => {
    if (
      item.id === CATEGORIES.LOCATION_COUNTRY &&
      prevLicenseType === LICENSE_TYPES.TAJER
    ) {
      const lcType = item.selected
        ? LICENSE_TYPES.ECONOMIC
        : LICENSE_TYPES.TAJER;
      props.actions.licenseType.update(lcType);
    }
    const categories = {
      ...amendmentCategories,
      category: {
        ...amendmentCategories.category,
        [item.id]: item.selected,
      },
      isUploadStep: false,
    };
    props.actions.amendmentCategories.update(categories);
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
          // showSidebar={showSidebar || true}
        />
      }
    >
      <Form
        {...props}
        backButton={{
          label: i18n('button.back'),
          withArrow: true,
          alignIcon: 'start',
          uiType: 'secondary',
          onClick: () => onBack(props),
        }}
        submitButton={{
          label: i18n('button.next'),
          withArrow: true,
          uiType: 'primary',
          alignIcon: 'end',
          onClick: () => onNext(props),
        }}
      >
        <Form.Fieldset>
          <Informational>
            <ServerError
              dedErrorMessage={dedErrorMessage}
              amendmentServerError={amendmentServerError}
            />
            {subTitle && <h3>{i18n(subTitle)}</h3>}
            {description && <p>{i18n(description)}</p>}
          </Informational>
        </Form.Fieldset>

        <Form.Fieldset>
          <BusinessActivities
            items={categoryList.map((item: string) => ({
              description: i18n(`${item}.description`),
              id: item,
              selected: amendmentCategories.category[item],
              title: i18n(item),
            }))}
            onItemSelectToggle={toggleCategories}
          />
        </Form.Fieldset>
        {Object.values(amendmentCategories.category).includes(true) === false &&
          pageLoading && (
            <Alert message={i18n('category.warning')} status="error" />
          )}
      </Form>
    </Container>
  );
}

Category.propTypes = {
  ...routePropTypes,
};

export default withTemplateHooks(Category);
