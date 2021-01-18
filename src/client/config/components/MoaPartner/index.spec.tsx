import React from 'react';
import {
  render,
  cleanup,
  //   fireEvent,
  waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import { isPartnerReminderOpen } from 'client/config/pages/MoaConfirm/functions';
import MoaPartner from './index';

jest.mock('client/config/pages/MoaConfirm/functions');

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('MoaPartner', () => {
  let props: any;
  let mockReminder: any;
  const partners = [
    {
      moaAgreed: 'Agree',
      representativeType: '1',
      emailAddress: 'a@a.com',
      lastRemindTime: '',
      idNumber: '784-7845-6745673-4',
    },
    {
      moaAgreed: 'Agree',
      representativeType: '2',
      emailAddress: 'a@a.com',
      idNumber: '784-7845-6745673-5',
    },
    {
      moaAgreed: 'Pending',
      representativeType: '2',
      emailAddress: 'a@a.com',
      idNumber: '784-7845-6745673-6',
    },
    {
      moaAgreed: 'NotVerified',
      representativeType: '2',
      emailAddress: 'a@a.com',
      idNumber: '784-7845-6745673-7',
    },
    {
      moaAgreed: 'Disagree',
      representativeType: '2',
      emailAddress: 'a@a.com',
      idNumber: '784784567456738',
    },
  ];
  beforeEach(() => {
    props = {
      allProps: {
        i18n: jest.fn(i => i),
        partners: JSON.stringify(partners),
        moa: {
          moaModalShow: true,
          moaHTML: 'moa',
        },
        user: { IDN: '784-7845-6745673-4' },
        showMoa: true,
      },
    };
    mockReminder = isPartnerReminderOpen;
  });

  afterEach(cleanup);

  test('renders with all props', async () => {
    mockReminder.mockImplementation(() => false);
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MoaPartner {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    await waitForElement(() => getByText('status_of_moa'));
    expect(getByText('status_of_moa')).toBeInTheDocument();
  });

  test('renders with all props false reminder', () => {
    mockReminder.mockImplementation(() => false);
    props.allProps.user = { IDN: '784673243234' };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MoaPartner {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props', () => {
    mockReminder.mockImplementation(() => false);
    props.allProps.user = { IDN: '784784567456738' };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MoaPartner {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders with all props without rejection', () => {
    const partnersList = [
      {
        moaAgreed: 'Agree',
        representativeType: '1',
        emailAddress: 'a@a.com',
        lastRemindTime: '',
      },
      {
        moaAgreed: '',
        representativeType: '2',
        emailAddress: 'a@a.com',
      },
      {
        moaAgreed: 'Pending',
        representativeType: '2',
        emailAddress: 'a@a.com',
      },
      {
        moaAgreed: 'NotVerified',
        representativeType: '2',
        emailAddress: 'a@a.com',
      },
      {
        moaAgreed: 'Agree',
        representativeType: '2',
        emailAddress: 'a@a.com',
      },
    ];
    mockReminder.mockImplementation(() => true);
    props.allProps.moa.moaHTML = null;
    props.allProps.partners = JSON.stringify(partnersList);
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <MoaPartner {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
