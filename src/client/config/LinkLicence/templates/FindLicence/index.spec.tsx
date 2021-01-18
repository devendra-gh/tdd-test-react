import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import SelectLicence from './index';
import { constants } from '../../helper';

jest.mock('@tamm/app-composer', () => ({
  withTemplateHooks: (component: any) => component,
}));

const currentStep = 'findLicence'; // currentStep

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Select Licence template', () => {
  let props: any;
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
      match: {},
      location: {},
      i18n: jest.fn(i => i), // should return some thing else the button label will not show.
      onBack: jest.fn(),
      handleCancelLink: jest.fn(),
      validate: jest.fn(),
      getLicenceDetails: jest.fn(),
      handleInputLicence: jest.fn(),
      onSubmit: jest.fn(),

      fileUploadData: {
        documents: {
          authorizationLetter: null,
        },
      },
      loadingLicencesDetails: false,
      submitting: false,
      currentStep,
      licenceList: [],
      licenceTable: ['licenceNumber', 'licenceType', 'tradeName'],
      selectedLicenceNumber: '',
      steps: [
        {
          name: 'findLicence',
        },
        {
          name: 'uploadDocument',
        },
        {
          name: 'getDEDApproval',
        },
      ],
      stepStatus: {
        findLicence: '',
      },
      totalSection: null,
      showErrors: false,
      transactionNumber: '',
      selectedLicenceType: 'industrialLicence',
      loadingLicense: false,
      licenceDetails: {
        status: '',
      },
      linkLicenseStatus: {
        status: '',
      },
      baseUrl: '/journeys/start-your-business',
      user: {
        SmartPassToken:
          'eyJ0eXAiOiJKV1QiLCJraWQiOiI2OVNsM2MrRlV3bloxZ0x6VVdwdzNjL1NNdEk9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoicmQ4VnVLVUs5T2w3T2V1RzR2MHB1dyIsInN1YiI6IlVBRS03ODQyMDEzMjY5NjIwNzkiLCJhdWRpdFRyYWNraW5nSWQiOiI4YTlhNDk0MC00ZGI2LTRlZGUtOWUwZC05Njk2MzY1OGQyNTAtMTE3MDI5IiwiaXNzIjoiaHR0cHM6Ly9zdGFnZS5zbWFydHBhc3MuZ292ZXJubWVudC5uZXQuYWU6NDQzL3NlY3VyZS9vYXV0aDIvVFJBIiwidG9rZW5OYW1lIjoiaWRfdG9rZW4iLCJhdWQiOlsidGFtbSJdLCJjX2hhc2giOiJKUXlPQ3J2cWpaVTV5bUhXUFRPSUFRIiwiYWNyIjoidXNlcm5hbWVwYXNzd29yZF9jaGFpbiIsIm9yZy5mb3JnZXJvY2sub3BlbmlkY29ubmVjdC5vcHMiOiJjNTdlYjgwMC1hN2M4LTQxYzctODYzMy1iZjZiNDBkNDI2Y2EiLCJhenAiOiJ0YW1tIiwiYXV0aF90aW1lIjoxNTQyMzk5NzY4MDAwLCJyZWFsbSI6Ii9UUkEiLCJleHAiOjE1NDI0MDAwNzIsInRva2VuVHlwZSI6IkpXVFRva2VuIiwiaWF0IjoxNTQyMzk5NzcyfQ.XQN35Uds5fMcmnjguUXlb-BqCFaOEzi10AlVjJGF1ajiaSo9691ux5liPkmjQG0A0LaEkxcG1cYRZ7TzJkXTYnGNXvc1yaKnI4gYirRqal01GWQPwQ3OeDnVsUVR_hSLNtxWTbsaM7p5xifJ2BgazWla9Cf2CKu2n9lIcTnExrwvsj6yWKYWKmfGXkKmdNZzfoRfsTeCuZ3SGBggQrRcOia9vq1Nu3ZlGvy9TDzjjDA7PPpq4O0ZL7BWr9lSJQJ9pI3jxtdpKqmEW6ILQYWhAbjK_yM0xuKSjcrgXRY12zeW_aF7tesRMZ9NZBgz8BmSoxf87fyGEOE8guZ01QZwdg',
        SmartPassRefreshToken: 'a4f26e08-5798-4c5e-b4d6-1959e374226c',
        'Nationality EN': 'IND',
        'Mother First Name AR': 'جميله',
        'Mother First Name EN': 'Jameelah',
        'First Name EN': 'Mahmoud Wisam',
        'First Name AR': 'بول',
        'Last Name EN': 'Mo',
        'Last Name AR': 'وايت',
        'Full Name AR': 'بول,اندرو,,,وايت',
        'Residency Number': '2017040401',
        'Residency Expiry Date': '04/04/2019',
        'Marital Status': 'Married',
        'Card Expiry Date': '04/04/2019',
        'Card Holder Signature Image':
          'SUkqAPoAAACTIM52jlZBqJYuCIqcglmA3kOzDQv7iRQiP/zsaNfrBEf/OO9vhEf7D/+k/+329tf///v/+6Xf+ER/bQIj7fS/////xXY/S/+3////X+9JfS367f/CBEf/0+l//iIiIu53gHgryZgWHCMZIzeRwacf5DzgLzsZHM5GyJw+k3s3kJsu2klO7Ou3+wzQHvhLRFR/SbIYLzvth6QIQ2/8MMjAfxoIuEL5g9v9gyEDHDFBEr4YfpaQZFVkEVUogvDI3+3gyIBvwvDe2l5BiP4JvIZ/pFIGpwwvdtLUjQZn/e9tIf+LaV1/2NiuMU09XEdcfwAQAREAAAEDAAEAAAAcAQAAAQEDAAEAAAAwAAAAAgEDAAEAAAABAAAAAwEDAAEAAAAEAAAABgEDAAEAAAAAAAAACgEDAAEAAAABAAAADQECAAEAAAAAAAAAEQEEAAEAAAAIAAAAEgEDAAEAAAABAAAAFQEDAAEAAAABAAAAFgEDAAEAAAAwAAAAFwEEAAEAAADyAAAAGgEFAAEAAADMAQAAGwEFAAEAAADUAQAAHAEDAAEAAAABAAAAKAEDAAEAAAACAAAAMQECADkAAADcAQAAAAAAAAAAgCUAACAAAACAJQAAIABJbWFnZU1hZ2ljayA1LjUuNyAwNS8yMy8wMyBROCBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwA=',
        'Date Of Birth': '02/02/1963',
        IDN: '784201326962079',
        Gender: 'Male',
        'User Unique Identifier': '362888e9-ddd1-7cc7-bbca-47945a297136',
        'Home Address City Description EN': 'Jebel Ali',
        'Home Address Emirate Description EN': 'Dubai',
        'Home Address PO Box': '-',
        Mobile: '971589004745',
        Type: 'SOP3',
        Photo:
          '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',
        ThirdPartyToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJVQUUtNzg0MjAxMzI2OTYyMDc5IiwiZnVsbG5hbWVBUiI6Itio2YjZhCzYp9mG2K_YsdmILCws2YjYp9mK2KoiLCJpc3MiOiJodHRwczovL3N0YWdlLnNtYXJ0cGFzcy5nb3Zlcm5tZW50Lm5ldC5hZTo0NDMvc2VjdXJlL29hdXRoMi9UUkEiLCJtb2JpbGUiOiI5NzE1ODkwMDQ3NDUiLCJsYXN0bmFtZUVOIjoiTW8iLCJwaG90byI6Ii85ai80QUFRU2taSlJnQUJBUUVBU0FCSUFBRC8yd0JEQUJRT0R4SVBEUlFTRVJJWEZoUVlIek1oSHh3Y0h6OHRMeVV6U2tGT1RVbEJTRVpTWEhaa1VsZHZXRVpJWm94b2IzcDloSVdFVDJPUm00K0FtbmFCaEgvLzJ3QkRBUllYRng4Ykh6d2hJVHgvVkVoVWYzOS9mMzkvZjM5L2YzOS9mMzkvZjM5L2YzOS9mMzkvZjM5L2YzOS9mMzkvZjM5L2YzOS9mMzkvZjM5L2YzOS9mMy8vd0FBUkNBQ2FBSUlEQVNJQUFoRUJBeEVCLzhRQUdnQUFBZ01CQVFBQUFBQUFBQUFBQUFBQUFBTUJBZ1FGQnYvRUFEWVFBQUlDQVFJRUF3VUhBZ2NBQUFBQUFBQUJBaEVESVRFRUVrRlJFeUpoQlRKeGdaRVVJek5DY3FHeE5GSVZOWE9pd2RIaC84UUFHUUVBQXdFQkFRQUFBQUFBQUFBQUFBQUFBQUVDQXdRRi84UUFIaEVCQVFBQ0FnTUJBUUFBQUFBQUFBQUFBQUVDRVFNeEVpRlJRV0gvMmdBTUF3RUFBaEVERVFBL0FPbUFBTnlna2dBQ1NBYnBhbWZQeG1MQXZNLzJBKzJrRG5aZmFMU1VvUWRMZE5mKy93RFltWHRmSWt2SkdMNXYyRnRYaFhYQTVVZmFrN3VjWThuZExVMGY0bGdiNVZKcnMzSFFObDQxdEFYano0OHJxRTAyTUdRQUFBZ0FFQUVnUUFBQUFBWUt5a29yVXNaODAxYlVtMGtLMEtac2ttdE5mVHNaT0p4eGFhdno5Mm1tYVhHN2FpNmZjcm14M3Jldlo5U1crT09tR1NmaEpQZXRxRXl4S0thVDhyNzZtOTRybGFzaDROVXFZYmFUR3NXUEdxMVdtbGxmRGZpTG12bFIxVndqV08ySW53N1M2aTJmalZjWFNueVYyL2czWXMvTFNuSnRQdjBNQ3hPQXhOS0hLcXZyWTlzOHNmcnFwcHEwN1JKbTRUSnpRNVc5VjBab0tZV2FvQUFHa0FBQUFBQUFSSjFGc3lUbHJ0elNlbEdySzZ4c3pLMjlQcVRWNFQycGJUMjI3NmtxVHQzcGZRVzNVaTBXWjJ1dkdHUm9tbFpWRmtKcXQwS3ZWRWxRQ0pRWExZbHdVWkowTmJaVEo3cjdqaU1vZGhiOFpXa2pVWk1XUlRVSHM3TmhwSEh5ZG9Ba2dwQUFBQUlKQUFCV2YzUG1KdHJUcFEvUDduek1jNWNseXZWYkUxZkgyckoza2FXeVplS0ZKMWN5UEd5VzZoZlpVWjZkY3VtcE9pM1F4ZmFNcWRTd3REb1pyclQ2ajB1VTRLMEt6bHlxKzVsbms0aVh1UlNYcUdoYnBxYUZaTmhLKzBMM3FyMEdSbTVhTmFocE8xdUhsNWtyNjBkRTVXSjh2RUplcDFDOFhKeWRwSUFrcG1MQUFBQUFBQVR4RzBVYy9Kck9TOVRvNTE1VXpCTmZlUDRrWk51TDNzT09pRlN6ejVaZUJGZVhxK3Z3Rys4VFNXMFY5Q1k2SkNjV2JOT0VweXBWc3VYVmpzVGJ5Sy9pUzllaVh5Snh4ZlBiSGFxUXppTkllcG1jc2l0SnJSWHR1YXMwZVpJVTR2Y1VPeG54Y1RsZk56d1hMSDVNZkJxYVVvOVNldXNGOUN5U2pza3ZrTzFPcVRPTDhWMTZIVVd5T2RMM2srbG5SS3hjL0xPa2dBRk9jQUFBQUJBQWF1UlhCb3daWSthKzUwV3JUUml6UmFYcWljbDhkMWtURVlsb0xXeUxTZEwxTTNiaUpTMHBmTVpDdWJRU3RDc2VhTXJUSG83V3ZKVzE5UmNaYXRYMUZ1NU5XdzJEUWhzdGl0MmlyazJDZTRqcStHTGxsajZNM21UaEw1NU90TzVyTk1lbkR5M2RBQUJUTVVBQUJJSklBRFNaOHlxVjl6UUt6MDQrcUZRd3lWQk5hSmpjOEhCUmIwc1UzY2FNM2RoZHdsemQwb3QvUXRDVDZ3ZEYrWHNGdFBaRFhFUEwyaTZJV1JTMFg4RnJiZXlMT0tvQWlLMHNuNEU5RWtXeC9pdzd1U1FpeXZwc3h3NUlLTzlGd2FhSU5YbjFJQUFBQUFBU3JhVzdvdXNlUnExQi93QUd2SGd4WTNjVXI3dlZqSEcwSnJPUDZ4cmg1dGVaOHZvdHc1STQxVUZyL2N6UktWSmlwSlhGSVM1akl6Y1ppNXNGcmVPcHpPcU96eFVXK0d6Umo3MG9OTDQwY25QaGxoeU9FdW1xZmRDc2FZMUNZV2l0cWlMSmF5bXBvaHNvcEU4MTZBTFVwOURkd0hEOHo4YVd5MGlqUHd2RHZQT3RvcmRuUjluTnk0REMzdTRsU004citMTkpUcVd6TFBoMDltL21HUkt4OFdta1V5dU1yTStHbXRxZnpGU2k0dW1xWjBSYzhjY21qK1RCRncrTUlEL3NzdjdrQTBlTlBhNnI2RUxZc1VmbGZveE9nTmFNWCtjYTlVSy9QWFdnQmZHdjdxS3ZmSkJmN2tVNHpoL0h3ZVZmZVIxajYraGZpWTgwK0dUMVhpWDlJdGowZ0R6cTFiVFZTVzZlNGEvSTZuSGV6dkZmaTRXb1Q2OW1jeDR1SVcrR2VtN1VXVHBwS2lteHZENHBac3F4dzZ2VjlpTVBEWjg3U1NjRStzbFYvQTdmQzhMRGhzZkxGYTlXK29TQzFiRmhXSEVvUjZkZTRuMmIvbCtEOUpyZXhsOW5LdlorSDlKVE16ZWI5QnV6RnhUdDMxWXdBWnpkeUZMclJIUWhBUzNNdXdFQUJxa1NWb2tucUFLaTZkQzhyNU1pbFJkKzhVNGhlU0k1Mm5Mb1NrbnhHS0ZYNVpTWDdML2xqWEpSVnZZUXY2akYvcFMvbUpPWDhTSzlCR3pjWHhFOVcxVU5razNxSndaWjIrZkkxZndZL2lQd3AvSVNrbEowcUsvaFc2Um14ZUluS1UzSlZhVGVocjRQaWNyaGVWWEY3ZkF5djNaTDRtMERqVTJwUnVMdFBzWmVHU2x3R0tOMG5qVjY3V2kyQisrdlZDK0IvcGNQNkkvd1RWUnBna25TMFMyWFl1S3hmbUhmbUFnQU1HQUFFQUFmLzlrPSIsImZ1bGxuYW1lRU4iOiJCQUxSQUogTkFUUkFKIENIRVRUWSIsIm5vbmNlIjoiYmoyUDMyMlNqeW4zWWVGNSIsInV1aWQiOiIzNjI4ODhlOS1kZGQxLTdjYzctYmJjYS00Nzk0NWEyOTcxMzYiLCJsYXN0bmFtZUFSIjoi2YjYp9mK2KoiLCJhdWQiOlsidGFtbSJdLCJhY3IiOiJ1c2VybmFtZXBhc3N3b3JkX2NoYWluIiwiaWRuIjoiNzg0MjAxMzI2OTYyMDc5IiwiZmlyc3RuYW1lRU4iOiJNYWhtb3VkIFdpc2FtIiwiYXpwIjoiYXBpZ3ciLCJhdXRoX3RpbWUiOjE1NDIzOTk3NzIsInVzZXJUeXBlIjoiU09QMyIsImV4cCI6MTU0MjQwMTU3MiwiaWF0IjoxNTQyMzk5NzcyLCJmaXJzdG5hbWVBUiI6Itio2YjZhCIsImp0aSI6ImNjNWNlYjRlLTRmYWItNDBmYi05N2I2LWIxYzhmN2I3NDliZCIsImVtYWlsIjoicGVyc29uYS5hZG9zcysxQGdtYWlsLmNvbSJ9.E-Is3OzK2atl4bBgCsb1zthLLcYIKgVrgQkkIPPVBXA3amCpmvZ_mQncCsi3Mry7NyV975b7AOYLOzMPkHQde32DRpTfxL_-IIinx9sv7ivjp_jtbQOVI1ywURr0Fp7OuxyHNiuxjbT4ZIxx4C0qMqE2YiUKQbGOXEOEkphgyPpted0AVAaqUFL9VMKQ_wFSWe6vL1wlux5fqs97MmARqexorTjJt1SanSGeL4yHS-8fSx-EC75a-tRqHcVWMr4S-iJh25iGUQL6CyDlC70I69TgiGpDioezhxosFFMrxvDz_98mJIYv_MbqybxRpMdXnzIaIV7J8bA3I05wA3fAew',
        SmartPassTokenExpirayTime: '11/17/2018 12:58:36 AM',
        'User Email': 'persona.adoss+1@gmail.com',
        _userPolicies: [
          {
            id: '462888e9-ddd1-7cc7-bbca-47945a297136',
            firstNameEn: 'Mohammed Waleed',
            lastNameEn: 'Mubarak',
          },
        ],
        isDemoUser: true,
      },
      loggedIn: true,
      breadcrumbs: constants.BREADCRUMBS,
      loading: {},
      title: 'service.title',
      hero: true,
      businessKey: '',
      instanceId: '',
      basket: {
        default: [],
      },
      locale: {
        locale: 'en',
      },
      _persist: {
        version: '1',
        rehydrated: true,
      },

      actions: {
        breadcrumbs: { update: jest.fn() },
        loadingLicense: { update: jest.fn() },
        selectedLicenceNumber: { update: jest.fn() },
        licenceDetails: { update: jest.fn() },
      },
      history: {
        push: jest.fn(),
      },
    };
  });

  afterEach(cleanup);

  test('renders a home template', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    // expect(container.firstChild).toMatchSnapshot();
  });
  test('Should call api when view button clicked', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'IN-1023919' };
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const inputNode = getByLabelText('input-text');
    fireEvent.change(inputNode, { value: 'IN-1023919' }); // add the licence number from the input element
    const button = await waitForElement(() =>
      getByText('button.view', { selector: 'button' }),
    );
    fireEvent.click(button);
  });
  test('Should call when view back clicked', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = await waitForElement(() =>
      getByText('button.back', { selector: 'button' }),
    );
    fireEvent.click(button);
  });
  test('Should call when view submit clicked', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'IN-1023919' };
    newProps.licenceDetails = { ...props.licenceDetails, status: 'success' };
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const button = await waitForElement(() =>
      getByText('button.next', { selector: 'button' }),
    );
    fireEvent.click(button);
  });
  test('Should call when input change with invalid licence number', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = { ...props.licenceDetails, status: '' };
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
    const inputNode = getByLabelText(
      'linkLicence.findLicence.input.label.industrialLicence',
    );
    fireEvent.change(inputNode, { value: 'TN-1023919' });
    const button = await waitForElement(() =>
      getByText('button.view', { selector: 'button' }),
    );
    fireEvent.click(button);
  });
  test('Should show the table of details for en', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'success',
      licenceNumberAr: '',
      licenceTypeAR: '',
      tradeNameAr: '',
      licenceNumberEn: '',
      licenceTypeEn: '',
      tradeNameEn: '',
    };
    newProps.validate.mo = jest.fn(() => false);
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the table of details for ar', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'success',
      licenceNumberAr: '',
      licenceTypeAR: '',
      tradeNameAr: '',
      licenceNumberEn: '',
      licenceTypeEn: '',
      tradeNameEn: '',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the table without table list', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'success',
      licenceNumberAr: '',
      licenceTypeAR: '',
      tradeNameAr: '',
      licenceNumberEn: '',
      licenceTypeEn: '',
      tradeNameEn: '',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    delete newProps.licenceTable;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the table without table list', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'success',
      licenceNumberAr: '',
      licenceTypeAR: '',
      tradeNameAr: '',
      licenceNumberEn: '',
      licenceTypeEn: '',
      tradeNameEn: '',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    newProps.linkLicenseStatus = { status: 'success', message: 'hello' };
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the licence response error', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'error',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    delete newProps.licenceTable;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the licence response info', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'info',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    delete newProps.licenceTable;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the licence response unknows', async () => {
    const newProps = { ...props, selectedLicenceNumber: 'TN-1023919' };
    newProps.licenceDetails = {
      ...props.licenceDetails,
      status: 'dfgvhb',
    };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    delete newProps.licenceTable;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
  test('Should show the licence response unknows', async () => {
    const newProps = { ...props, loadingLicense: true };
    newProps.locale = 'ar';
    newProps.validate.mo = jest.fn(() => false);
    delete newProps.licenceTable;
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <SelectLicence {...newProps} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
