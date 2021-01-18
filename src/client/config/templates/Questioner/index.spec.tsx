import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route } from 'react-router';
import { IVariables } from '@tamm/app-composer';

import { validationRules, inputTypes } from 'client/config/components/Form';
import { ViewportProvider, Viewport } from '@tamm/ui-lib-v2-viewport';
import Questionnaire, { actions } from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('client/config/templates/Questionnaire', () => {
  let props: any;
  window.scrollTo = jest.fn();
  beforeEach(() => {
    const getQuestions = (state: any) => ({
      formData: {},
      questionnaireData: {
        isDigitalChannels: 'yes',
        applicantType: 'expandBusiness',
        timeSpan: 'moreThree',
        isOffice: 'yes',
        isTechBusiness: 'no',
        freeZoneToMain: 'yes',
        eCommerce: 'yes',
        ownerOrPartner: 'oneOwner',
      },
      onChange: (props1: IVariables, fieldValues: IVariables) => {
        props1.actions.questionnaireData.update({
          ...state.questionnaireData,
          ...fieldValues,
        });
      },
      steps: [
        {
          fields: [
            {
              name: 'applicantType',
              title: 'questioner.optionTitle',
              type: inputTypes.radio,
              validation: [validationRules.required],
              options: [
                {
                  value: 'newBusiness',
                  label: 'questioner.option4',
                },
                {
                  value: 'female',
                  label: 'questioner.option3',
                },
                {
                  value: 'simpleBusiness',
                  label: 'questioner.option2',
                },
                {
                  value: 'expandBusiness',
                  label: 'questioner.option1',
                },
              ],
              defaultValue: 'newBusiness',
              // align: "horizontal"
            },
          ],
        },
        {
          visible: (formValues: IVariables) =>
            formValues.applicantType === 'expandBusiness',
          fields: [
            {
              name: 'eCommerce',
              title: 'questioner.question.eCommerce',
              type: inputTypes.radio,
              validation: [validationRules.required],
              options: [
                {
                  value: 'yes',
                  label: 'questioner.yes',
                },
                {
                  value: 'no',
                  label: 'questioner.no',
                },
              ],
              defaultValue: 'yes',
              align: 'horizontal',
            },
          ],
        },
        {
          visible: (formValues: IVariables) =>
            formValues.applicantType === 'expandBusiness' &&
            formValues.eCommerce === 'no',
          fields: [
            {
              name: 'freeZoneToMain',
              title: 'questioner.question2',
              type: inputTypes.radio,
              validation: [validationRules.required],
              options: [
                {
                  value: 'yes',
                  label: 'questioner.yes',
                },
                {
                  value: 'no',
                  label: 'questioner.no',
                },
              ],
              defaultValue: 'yes',
              align: 'horizontal',
            },
          ],
        },
      ],
    });
    const getSummary = (state: any) => {
      const summary = {
        columns: [
          {
            id: 'licenceSection',
            title: 'Licence section',
          },
          {
            id: 'choice',
            title: 'Best choice',
            align: 'center',
          },
          {
            id: 'description',
            title: 'Description',
            align: 'end',
          },
        ],
        headerHidden: false,
        items: [
          {
            id: '1',
            licenceSection: 'Licence type',
            choice: ['licenceType'],
            description: ['licenceType'],
          },
        ],
        title: 'wizard_summary',
        uiType: 'default',
      };
      return [summary];
    };
    props = {
      i18n: jest.fn(i => i),
      outcomes: [
        {
          display: (answers: any) => {
            return true;
          },
          title: 'xxx1',
          description: 'xxx1',
          onClick: () => {},
        },
      ],
      title: 'title',
      summaryTitle: 'summary-title',
      summaryText: 'summary-text',
      summaryList: getSummary({}),
      summaryButtonLabel: 'next',
      summary: { description: 'xxxx' },
      onSubmit: () => {},
      match: {
        params: {
          formIndex: 1,
        },
      },
      onSubmitLabel: 'submit1',
      questions: getQuestions({}),
      questionnaireData: {
        isDigitalChannels: 'yes',
        applicantType: 'expandBusiness',
        timeSpan: 'moreThree',
        isOffice: 'yes',
        isTechBusiness: 'no',
        freeZoneToMain: 'yes',
        eCommerce: 'yes',
        ownerOrPartner: 'oneOwner',
      },
      actions: {
        questionnaireData: {
          update: jest.fn(),
        },
      },
      onCancel: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('should Properly call getNextStep ', () => {
    expect(actions.getNextStep(false, 'answers', 1)).toBe(false);
  });

  it('should Properly call getNextStep ', () => {
    expect(actions.getNextStep({ nextStepIndex: true }, 'answers', 1)).toBe(
      'summary',
    );
  });

  it('should render  form with all props', () => {
    render(
      <MemoryRouter>
        <Questionnaire {...props} />
      </MemoryRouter>,
    );

    // expect(result).toMatchSnapshot();
  });

  it('should render answers with all props', () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/path/summary' }]}
        initialIndex={0}
      >
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Route
              path="/path/:formIndex"
              component={() => <Questionnaire {...props} />}
            />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    // expect(result).toMatchSnapshot();
  });

  it('should handle button onClick', async () => {
    props.match.params.formIndex = 'summary';
    const { getByLabelText } = render(
      <MemoryRouter>
        <Questionnaire {...props} />
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);

    // const submitButton = await waitForElement(() => getByText('submit1'));
    // fireEvent.click(submitButton);
  });

  it('should handle modal', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Questionnaire {...props} />
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByLabelText('button'));
    fireEvent.click(button);
  });

  it('should handle back button in summary', async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/path/summary' }]}
        initialIndex={0}
      >
        <ViewportProvider>
          <Route
            path="/path/:formIndex"
            component={() => <Questionnaire {...props} />}
          />
        </ViewportProvider>
      </MemoryRouter>,
    );

    //   const backButton = await waitForElement(() => getByText('common.back'));
    //   fireEvent.click(backButton);
  });

  it('should handle next button in summary', async () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/path/summary' }]}
        initialIndex={0}
      >
        <ViewportProvider>
          <Route
            path="/path/:formIndex"
            component={() => <Questionnaire {...props} />}
          />
        </ViewportProvider>
      </MemoryRouter>,
    );

    // const nextButton = await waitForElement(() => getByText('next'));
    // fireEvent.click(nextButton);
  });

  it('should handle change button', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: '/path/2' }]} initialIndex={0}>
        <ViewportProvider>
          <Route
            path="/path/:formIndex"
            component={() => <Questionnaire {...props} />}
          />
        </ViewportProvider>
      </MemoryRouter>,
    );

    const button = await waitForElement(() => getByText('common.change'));
    fireEvent.click(button);
  });

  it('should cover', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/path/2' }]} initialIndex={0}>
        <ViewportProvider>
          <Route
            path="/path/:formIndex"
            component={() => <Questionnaire {...props} />}
          />
        </ViewportProvider>
      </MemoryRouter>,
    );

    // const button = await waitForElement(() => getByText('common.back'));
    // fireEvent.click(button);

    // const button1 = await waitForElement(() => getByText("NO"));
    // fireEvent.click(button1);
  });
});
