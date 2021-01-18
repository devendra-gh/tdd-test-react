import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import TermsConditionsGroup from './index';

describe('config/components/TermsConditionsGroup', () => {
  let props: any;

  beforeEach(() => {
    props = {
      licenceType: 'tajer',
      legalType: 'establishment',
      activities: [
        {
          activityCode: '1001',
        },
      ],
      i18n: jest.fn(i => i),
      fetchAttachments: jest.fn(() => [
        {
          AuthorityEn: 'a',
          RequirementDescEn: '',
        },
        {
          AuthorityEn: 'l',
          RequirementDescEn: '',
        },
      ]),
    };
  });

  afterEach(cleanup);

  test('renders component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <TermsConditionsGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('a')).toBeInTheDocument();
    }, 500);
  });

  test('renders component without licenseType', () => {
    props.licenceType = 'instant';
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <TermsConditionsGroup {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('a')).toBeInTheDocument();
    }, 500);
  });
});
