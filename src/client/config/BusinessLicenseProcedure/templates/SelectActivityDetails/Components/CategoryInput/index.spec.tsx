import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import CategoryInput from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('CategoryInput', () => {
  let props: IVariables;

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      history: {
        push: jest.fn(),
      },
      actions: {
        stepsStatus: {
          update: jest.fn(),
        },
        formSelectActivity: {
          update: jest.fn(),
        },
      },
      getInitialState: jest.fn(),
      formSelectActivity: {
        subCategory: '',
        categories: [
          {
            description: 'categories.description',
            descriptionAr: 'categories.descriptionAr',
          },
        ],
        subCategories: [
          {
            description: 'subCategories.description',
            descriptionAr: 'subCategories.descriptionAr',
          },
        ],
        activities: [
          {
            activityCode: 'activityCode',
            activity: 'businessActivity.activity',
            activityAr: 'businessActivity.activityAr',
          },
        ],
        showCategories: true,
        showTable: true,
        category: 'category',
        inputType: 'CATEGORY',
        loading: true,
        showError: true,
        alertText: 'alertText',
        alertStatus: 'info',
      },
      onSubmit: jest.fn(),
      i18n: (key: string) => key,
      title: 'FormTemplate',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      buttons: [
        {
          label: 'btn',
          onClick: jest.fn(),
        },
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
      list: {
        labelHeading: 'label',
        valueHeading: 'value',
        listDetails: {
          label: 'label',
          value: 'value',
        },
      },
      totalSection: 1000,
    };
  });

  it('should show businessCategory select', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('label.businessCategory')).toBeInTheDocument();
    expect(getByText('categories.description')).toBeInTheDocument();
  });

  it('should show businessCategory select arabic', async () => {
    props.locale = 'ar';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('label.businessCategory')).toBeInTheDocument();
    expect(getByText('categories.descriptionAr')).toBeInTheDocument();
  });

  it('should show validation message sub category when startShowingValidateError true', async () => {
    props.startShowingValidateError = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('validationMessage.required')).toBeInTheDocument();
  });

  it('should show validation message category when startShowingValidateError true', async () => {
    props.formSelectActivity.subCategories = undefined;
    props.formSelectActivity.category = '';
    props.startShowingValidateError = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('validationMessage.required')).toBeInTheDocument();
  });

  it('onchange subCategory', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('subCategories.description'));
    expect(props.onChange.mock.calls[0][0]).toBe('subCategory');
  });

  it('should show validation message category when startShowingValidateError true', async () => {
    props.formSelectActivity.subCategories = undefined;
    props.formSelectActivity.category = '';
    props.startShowingValidateError = true;
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <CategoryInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(getByText('categories.description'));
    expect(props.onChange.mock.calls[0][0]).toBe('category');
  });
});
