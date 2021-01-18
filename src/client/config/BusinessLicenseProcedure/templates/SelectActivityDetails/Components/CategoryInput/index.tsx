import React from 'react';
import { IVariables } from '@tamm/app-composer';
import Form from '@tamm/ui-lib-v2-form';
import Select from '@tamm/ui-lib-v2-select';

const inputTypes = {
  CATEGORY: 'CATEGORY',
  NAME: 'NAME',
};

function CategoryInput(props: IVariables) {
  const { i18n, locale, formSelectActivity, startShowingValidateError } = props;
  const {
    categories,
    inputType,
    category,
    subCategories,
    subCategory,
    showCategories,
  } = formSelectActivity;

  const onChange = (type: string, value: string) =>
    props.onChange(type, value, props);

  const categoryErrorStatus = (value: any) => {
    return startShowingValidateError && !category ? value : undefined;
  };

  const subCategoryErrorStatus = (value: any) => {
    return startShowingValidateError &&
      category &&
      subCategories &&
      subCategories.length &&
      !subCategory
      ? value
      : undefined;
  };

  return (
    <>
      {inputType === inputTypes.CATEGORY && showCategories && (
        <Form.Fieldset twoColumns>
          <Select
            value={category}
            items={
              categories &&
              categories.map((businessCategory: IVariables) => ({
                label:
                  locale === 'en'
                    ? businessCategory.description
                    : businessCategory.descriptionAr,
                id: businessCategory.description,
              }))
            }
            label={i18n('label.businessCategory')}
            onChange={value => onChange('category', value)}
            placeholder={i18n('placeholder.select')}
            help={categoryErrorStatus(i18n('validationMessage.required'))}
            validateStatus={categoryErrorStatus('error')}
          />
          <Select
            items={
              (formSelectActivity &&
                subCategories &&
                subCategories.map((businessSubCategory: IVariables) => ({
                  label:
                    locale === 'en'
                      ? businessSubCategory.description
                      : businessSubCategory.descriptionAr,
                  id: businessSubCategory.description,
                }))) ||
              []
            }
            label={i18n('label.businessSubCategory')}
            onChange={value => onChange('subCategory', value)}
            placeholder={i18n('placeholder.select')}
            disabled={!category || !subCategories || !subCategories.length}
            value={subCategory}
            help={subCategoryErrorStatus(i18n('validationMessage.required'))}
            validateStatus={subCategoryErrorStatus('error')}
          />
        </Form.Fieldset>
      )}
    </>
  );
}

export default CategoryInput;
