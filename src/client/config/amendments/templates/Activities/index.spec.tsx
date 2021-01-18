import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { IVariables } from '@tamm/app-composer';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Activities from './index';
// import { invalid } from 'moment';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Activities', () => {
  let props: IVariables;
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    props = {
      actions: {
        activity: {
          update: jest.fn(),
        },
        activityList: {
          update: jest.fn(),
        },
        licenceDetails: {
          update: jest.fn(),
        },
      },
      licenseType: 'tajer',
      // validateTransactionNumber: jest.fn(),
      // history: {
      //     push: jest.fn(),
      // },
      // onChange: jest.fn(),
      // onClick: jest.fn(),
      // onSubmit: jest.fn(),
      onSubmitAmendment: jest.fn(),
      i18n: (key: string) => key,
      title: 'Category',
      subTitle: 'subTitle',
      description: 'desc',
      locale: 'en',
      currentStep: 'economic_licence',
      currentSubStep: 'payment',
      amendmentCategories: {
        ownership: false,
        economicActivitiesOrName: false,
      },
      existingActivities: [
        // {
        //   activityCode: '4329901',
        //   activityNameEng: 'Buildings  Maintenance ',
        //   activityNameArb: 'صيانة المباني ',
        // },
        // {
        //   activityCode: '5610003',
        //   activityNameArb: 'بيع الوجبات الخفيفة (كافتيريا) (5610003)',
        //   activityNameEng: 'Snack Selling (Cafeteria) (5610003)',
        // },
      ],
      licenceDetails: {
        activities: [
          {
            activityCode: '33',
            activityNameEng: 'Buildings  Maintenance ',
            activityNameArb: 'صيانة المباني ',
          },
          {
            activityCode: '22',
            activityNameArb: 'بيع الوجبات الخفيفة (كافتيريا) (5610003)',
            activityNameEng: 'PE-Commerce Through Social Media  (4791013.2)',
          },
        ],
      },
      activity: {
        searchFields: {
          activityCategory: '',
          activitySubCategory: '',
          searchTerm: '',
        },
        changeActivities: [],
        removeActivities: [
          {
            activityCode: '5610003',
            activityNameArb: 'بيع الوجبات الخفيفة (كافتيريا) (5610003)',
            activityNameEng: 'Snack Selling (Cafeteria) (5610003)',
          },
        ],
      },
      activityList: {
        pagesInList: ['1'],
        list: [
          {
            pageNumber: '1',
            responseInfo: 'Row : 1 From : 1038 | Page : 1 From : 104',
            activityCode: '11',
            activityNameAr:
              'المتاجرة الإلكترونية من خلال مواقع التواصل الاجتماعي (4791013.2)',
            activityNameEn: 'E-Commerce Through Social Media  (4791013.2)',
          },
          {
            pageNumber: '1',
            responseInfo: 'Row : 1 From : 1038 | Page : 1 From : 104',
            activityCode: '22',
            activityNameAr:
              'المتاجرة الإلكترونية من خلال مواقع التواصل الاجتماعي (4791013.2)',
            activityNameEn: 'PE-Commerce Through Social Media  (4791013.2)',
          },
          {
            pageNumber: '1',
            responseInfo: 'Row : 1 From : 1038 | Page : 1 From : 104',
            activityCode: '33',
            activityNameAr:
              'المتاجرة الإلكترونية من خلال مواقع التواصل الاجتماعي (4791013.2)',
            activityNameEn: 'Buildings  Maintenance ',
          },
        ],
        updating: false,
        totalItems: 1,
      },
      setActivities: jest.fn(),
      backButton: jest.fn(),
      onBack: jest.fn(),
      submitButton: jest.fn(),
      createActivityPayload: jest.fn(),

      categoryType: [
        'ownership',
        'locationOrCountry',
        'economicActivitiesOrName',
        'financialDetails',
      ],
      steps: [],
      stepStatus: {
        economic_name: 'economic_name',
        'economic_name.payment': 'economic_name.payment',
      },
    };
  });

  it('should render with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should call the Pagination button is clicked', async () => {
    props = {
      ...props,
      dedErrorMessage: 'some error',
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should successfully render  summary button and click', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.back'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });

  it('should call handle activity change', async () => {
    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[0]);
  });

  it('should render with all props updating true', async () => {
    props = {
      ...props,
      activityList: {
        ...props.activityList,
        updating: true,
      },
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should render no remove activities message', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        removeActivities: [],
      },
    };

    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  it('should call submit button', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      fireEvent.click(
        getByText(buttonName, {
          selector: 'button',
        }),
      );
    });
    expect(getByText(props.subTitle)).toBeInTheDocument();
  });

  it('should populate change activity and add one more item', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        changeActivities: [
          {
            activityCode: '11',
            activityNameArb:
              'المتاجرة الإلكترونية من خلال مواقع التواصل الاجتماعي (4791013.2)',
            activityNameEng: 'E-Commerce Through Social Media  (4791013.2)',
          },
        ],
      },
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('.ui-lib-checkbox__input')[1]);
  });

  it('should remove item from change activity list', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        changeActivities: [
          {
            activityCode: '11',
            activityNameArb:
              'المتاجرة الإلكترونية من خلال مواقع التواصل الاجتماعي (4791013.2)',
            activityNameEng: 'E-Commerce Through Social Media  (4791013.2)',
          },
        ],
      },
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('input[name="11"]')[1]);
  });

  it('should remove item from removes activity list and add in exisiting activity list', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        removeActivities: [
          {
            activityCode: '33',
            activityNameEng: 'Buildings  Maintenance ',
            activityNameArb: 'صيانة المباني ',
          },
        ],
      },
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('input[name="33"]')[1]);
  });
  it('should remove item from removes activity list and add in exisiting activity list', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        removeActivities: [
          {
            activityCode: '33',
            activityNameEn: 'Buildings  Maintenance ',
            activityNameAr: 'صيانة المباني ',
          },
        ],
      },
    };

    const { container } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    fireEvent.click(container.querySelectorAll('input[name="33"]')[1]);
  });
  it('should trigger category change', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(getByText('Insurance Services'));
  });
  it('should trigger category with all value', async () => {
    const { queryAllByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(queryAllByText('global.all')[1]);
  });
  it('should display no change ', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        removeActivities: [],
        changeActivities: [],
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const buttonClick = ['button.next'];
    Object.values(buttonClick).forEach((buttonName: string) => {
      const nextButton = getByText(buttonName, {
        selector: 'button',
      });
      fireEvent.click(nextButton);
    });
  });
  it('should trigger subCategory with all value', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        searchFields: {
          activityCategory: 'AGENCIES',
          activitySubCategory: '',
          searchTerm: '',
        },
      },
    };
    const { queryAllByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    fireEvent.click(queryAllByText('global.all')[2]);
  });

  it('should trigger searchTerm with all value', async () => {
    props = {
      ...props,
      activity: {
        ...props.activity,
        searchFields: {
          activityCategory: 'AGENCIES',
          activitySubCategory: '',
          searchTerm: '',
        },
      },
    };
    const { getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Activities {...props} />,
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    const inputNode = getByLabelText('searchActivity');
    fireEvent.change(inputNode, { value: 'Audit' });
  });
});
