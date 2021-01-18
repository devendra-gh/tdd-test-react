import React from 'react';
import { shallow } from 'enzyme';
import { IVariables } from '@tamm/app-composer';

// import { checkValidationField } from 'client/config/utils/checkValidation';
import FileUploads from './index';

jest.mock('client/config/utils/checkValidation', () => ({
  checkValidationField: jest
    .fn()
    .mockReturnValueOnce('true')
    .mockReturnValueOnce(''),
}));

jest.mock('client/services/InternalApi', () => ({
  uploadDedDoc: jest
    .fn()
    .mockReturnValueOnce(
      Promise.resolve({
        data: {
          uploadedFileDetails: {
            nameOfFile: 'name',
            s3FilePath: 'https://test-s3-url',
          },
        },
      }),
    )
    .mockReturnValueOnce(Promise.reject(new Error('error'))),
}));

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Permit Type form', () => {
  let props: any;
  // const mockValidation: any = checkValidationField;
  beforeEach(() => {
    props = {
      i18n: jest.fn(),
      serviceType: null,
      onSubmit: jest.fn(),
      formFields: {
        testField: {
          name: 'test field',
          stateKey: 'testStateKey',
          fields: [
            {
              validationConfig: {},
              elementType: 'input',
              onChange: () => jest.fn(),
            },
          ],
        },
      },
      values: {
        documents: {
          test: [
            {
              lastModifiedDate: '',
              lastModified: '',
              name: 'test',
              type: '',
              loading: true,
              size: '',
              value: 'dummy',
              documentPath: '',
            },
          ],
        },
      },
      inputGroups: [
        {
          name: 'test',
          fields: [
            {
              validationConfig: {
                type: 'REQUIRES FILE',
              },
              elementType: 'input',
              name: 'test',
              onChange: () => jest.fn(),
            },
          ],
        },
      ],
      handleChange: jest.fn(),
      startShowingErrors: true,
      name: 'documents',
    };
  });

  it('should successfully render when serviceType is provided', () => {
    props.serviceType = 'testServiceType';
    const component = shallow(<FileUploads {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should successfully render when all else statement', () => {
    props.inputGroups = [
      {
        name: 'test',
        fields: [
          {
            validationConfig: {},
            elementType: 'input',
            onChange: () => jest.fn(),
          },
        ],
      },
    ];

    const component = shallow(<FileUploads {...props} />);
    expect(component).toMatchSnapshot();
  });

  // it('should successfully upload file', () => {
  //   const component = shallow(<FileUploads {...props} />);
  //   const FileUpload = component.find('Memo(FileUpload)');
  //   const files: IVariables[] = [
  //     {
  //       fieldName: 'test field',
  //       lastModifiedDate: 'test date',
  //       name: 'test name',
  //       type: 'custom',
  //       lastModified: 'test last modified',
  //       size: 200,
  //     },
  //   ];
  //   FileUpload.simulate('change', files);
  //   expect(props.handleChange).toHaveBeenCalled();
  // });

  it('should successfully remove file', async () => {
    const component = shallow(<FileUploads {...props} />);
    const FileUpload = component.find('FileUpload');
    const files: IVariables[] = [
      {
        fieldName: 'test field',
        lastModifiedDate: 'test date',
        name: 'test name',
        type: 'custom',
        lastModified: 'test last modified',
        size: 200,
      },
    ];
    await FileUpload.simulate('change', files);
    await FileUpload.simulate('remove', 'test name');
    expect(props.handleChange).toHaveBeenCalled();
  });
});
