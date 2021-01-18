import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import '@testing-library/jest-dom/extend-expect';
import Ownership from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('config/components/Ownership', () => {
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
      ownership: {
        owner: [
          {
            name: 'test',
            ownership: '51',
          },
        ],
      },
      locale: 'en',
      validate: true,
      legalForm: 'PJSCSoleProp',
      licenceType: 'instant',
      branchDetails: 'branchUAE',
      countries: [
        {
          nameEn: 'India',
        },
      ],
      group: {
        representatives: {
          owner: {
            visible: true,
            min: 49,
            max: 51,
            label: 'owner',
          },
        },
      },
      files: {
        economicName: {
          tradeNameEn: 'test',
          tradeNameAr: 'test',
        },
        licenceType: {
          licenceType: 'instant',
        },
      },
      i18n: jest.fn(i => i),
      onFileUpload: jest.fn(() => jest.fn()),
      onRemoveFile: jest.fn(() => jest.fn()),
      onDelete: jest.fn(() => jest.fn()),
      onSubmit: jest.fn(),
    };
  });

  afterEach(cleanup);

  it('renders with all props', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Ownership {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );

    setTimeout(() => {
      expect(getByText('button.addProfile')).toBeInTheDocument();
    }, 1000);
  });
});

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('render', () => {
  let props: any;
  let getShallowComponent: any;

  beforeEach(() => {
    props = {
      ownership: {
        owner: [
          {
            name: 'test',
            ownership: '51',
          },
        ],
        partner: [
          {
            name: 'test',
            ownership: '51',
          },
        ],
      },
      locale: 'en',
      validate: true,
      legalForm: 'PJSCSoleProp',
      licenceType: 'instant',
      branchDetails: 'branchUAE',
      countries: [
        {
          nameEn: 'India',
        },
      ],
      group: {
        representatives: {
          owner: {
            visible: true,
            min: 49,
            max: 51,
            label: 'owner',
            company: true,
            fields: [
              {
                visible: () => true,
                name: 'test-name',
                type: 'input',
                label: 'label',
                required: true,
                disabled: () => false,
              },
              {
                name: 'test-name',
                type: 'input',
                label: 'label',
                required: false,
                disabled: true,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'input-phone',
                label: 'label',
                required: false,
                disabled: true,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'input-phone',
                label: 'label',
                required: true,
                disabled: () => false,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'select',
                label: 'label',
                required: false,
                disabled: true,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'select',
                label: 'label',
                required: true,
                disabled: () => false,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'radio',
                label: 'label',
                items: [{ name: 'name' }],
                required: false,
                disabled: true,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'radio',
                label: 'label',
                items: [{ name: 'name' }],
                required: true,
                disabled: () => false,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'file',
                label: 'label',
                required: false,
                disabled: true,
              },
              {
                visible: () => true,
                name: 'test-name',
                type: 'file',
                label: 'label',
                required: true,
                disabled: () => false,
              },
              {
                visible: () => true,
                name: 'type',
                type: 'file',
                label: 'label',
                required: true,
                disabled: () => false,
              },
            ],
            sharePercentage: {
              disabled: true,
            },
          },
        },
      },
      files: [{ fieldName: 'test-name' }],
      i18n: jest.fn(i => i),
      onFileUpload: jest.fn(() => jest.fn()),
      onRemoveFile: jest.fn(() => jest.fn()),
      onDelete: jest.fn(() => jest.fn()),
      onSubmit: jest.fn(),
    };

    getShallowComponent = shallow(<Ownership {...props} />);
  });

  it('handles toggle on button click', () => {
    // const spy = jest.spyOn(Ownership.prototype, 'onToggleModal');

    // getShallowComponent
    //   .find('Button[type="button"]')
    //   .props()
    //   .onClick('owner', { sharePercentage: '50', contactType: 'individual' });

    // getShallowComponent.find('Button[type="button"]').props();

    // getShallowComponent
    //   .find('Modal')
    //   .props()
    //   .body.props.children[0].props.submitButton.onClick();

    // console.log(
    //   getShallowComponent.find('Modal').props().body.props.children[0].props
    //     .children[0].props.children[1],
    // );

    // getShallowComponent
    //   .find('Button[type="button"]')
    //   .props()
    //   .onClick('owner');
    // console.log(getShallowComponent.find('InputTelephone[code=971]').props());

    getShallowComponent.find('Col').props().children.props.onEdit();
  });

  // it('handles toggle on button click', () => {
  //   props.group.representatives = {
  //     visible: true,
  //     min: 49,
  //     max: 51,
  //     label: 'owner',
  //     company: true,
  //     fields: [
  //       {
  //         visible: () => true,
  //         name: 'test-name',
  //         type: 'input',
  //         label: 'label',
  //         required: true,
  //         disabled: () => false,
  //       },
  //     ],
  //   };
  //   // getShallowComponent
  //   //   .find('Button[type="button"]')
  //   //   .props()
  //   //   .onClick('owner', { sharePercentage: '50', contactType: 'individual' });
  //   // getShallowComponent
  //   //   .find('Button[type="button"]')
  //   //   .props()
  //   //   .onClick('owner');
  // });
});
