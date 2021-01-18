import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SearchInput from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('SearchInput', () => {
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
        searchText: '12',
        inputType: 'NAME',
        activitiesCurrentPage: 1,
        activitiesRecInPage: 1,
        activitiesTotalCount: 2,
        showTable: true,
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

  it('should show search, validationMessage  when inputTypes is NAME and searchtext < 3 ', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SearchInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText('validationMessage.min3char')).toBeInTheDocument();
  });

  it('should show search when inputTypes is NAME', async () => {
    props.formSelectActivity.searchText = '';
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SearchInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByLabelText('Search input')).toBeInTheDocument();
  });

  // it('onSearch', async () => {
  //   props.formSelectActivity.searchText = 'searchText';
  //   const { container } = render(
  //     <MemoryRouter>
  //       <ViewportProvider>
  //         <Viewport sm md lg xl>
  //           <SearchInput {...props} />
  //         </Viewport>
  //       </ViewportProvider>
  //     </MemoryRouter>,
  //   );
  //   fireEvent.click(
  //     container.querySelectorAll('.ui-lib-search-input__button')[0],
  //   );
  //   expect(props.onChange).toBeCalled();
  // });

  it('onChange', async () => {
    props.formSelectActivity.searchText = 'searchText';
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SearchInput {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[1],
      {
        target: {
          value: '',
        },
      },
    );
    fireEvent.change(
      container.querySelectorAll('.ui-lib-input-wrapper__content-input')[1],
      {
        target: {
          value: 'value',
        },
      },
    );
    expect(props.actions.formSelectActivity.update.mock.calls.length).toBe(2);
  });
});
