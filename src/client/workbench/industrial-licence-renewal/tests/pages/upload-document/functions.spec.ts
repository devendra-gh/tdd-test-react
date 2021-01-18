/* eslint-disable camelcase */
import {
  init,
  call_f1_onChange,
  call_f2_onRemove,
  call_f3_onChange,
  call_f4_onRemove,
  call_f5_onChange,
  call_f6_onRemove,
  f7_onClick,
  call_f8_onClick,
  f9_onClick,
} from '../../../pages/upload-document/functions';
// import { getSteps } from '../../../sharedFunctions/serviceSteps';

jest.mock('../../../sharedFunctions/stepUtils', () => ({
  getSteps: jest.fn(() => []),
  stepsLists: jest.fn(),
}));

// import { getS3File } from '../../../sharedFunctions/services';

jest.mock('../../../sharedFunctions/services', () => ({
  getS3File: jest.fn(),
  uploadS3File: jest.fn(),
}));
// import {getS3File} from '../../sharedFunctions/services';

// export async function init(props: any) {
//     //props.fetch
//   const {fetch, bpm} = props;
//   //props.bpm.sendMessage()

// }
// export async function onPageInit(props: any) {
//       //props.fetch
//   const {fetch, bpm} = props;
// }
// export  function call_f1_onRemove(props: any) {
// 	return (files: any[]) => {
//     props.actions.files.update(files);
//   };
// }
// export  function call_f2_onChange(props: any) {
// 	 return (files: any[]) => {
//     props.actions.files.update(files);
//     props.actions.uploadDocumentNextBtnDisabled.update(false);
//   };
// }
// export async function f3_onClick(props: any) {
// 	    //props.fetch();
//   const {fetch, bpm} = props;
//   const result = await getS3File(props);
//   //const base64Data = Buffer.from(result).toString('base64');
//   console.log("My Result is:", result)
//   const data = await props.bpm.sendMessage({
//     businessKey: props.businessKey,
//     messageName: 'onUploadDocument',
//     variables: {},
//   });
// }
// export function f4_visible(props: any) {
// 	  return props.chooseActivitiesCheckLoader;
// }

it('test', () => {
  expect(1).toBe(1);
});

describe('pages/upload-document/functions', () => {
  let props: any;
  beforeEach(() => {
    props = {
      i18n: jest.fn(i => i),
      businessKey: '',
      history: {
        push: jest.fn(),
      },
      actions: {
        showSidebar: {
          update: jest.fn(),
        },
        currentStepIndex: {
          update: jest.fn(),
        },
        currentSubStepIndex: {
          update: jest.fn(),
        },
        expandedStepIndexes: {
          update: jest.fn(),
        },
        steps: {
          update: jest.fn(),
        },
        newLeaseContractFiles: {
          update: jest.fn(),
        },
        adEnvironmentPermitFiles: {
          update: jest.fn(),
        },
        civilDefenceCertificateFiles: {
          update: jest.fn(),
        },
        loading: {
          update: jest.fn(),
        },
        newLeaseContractValidationMessage: {
          update: jest.fn(),
        },
        newLeaseContractValidateStatus: {
          update: jest.fn(),
        },
        adEnvironmentPermitValidateStatus: {
          update: jest.fn(),
        },
        adEnvironmentPermitValidationMessage: {
          update: jest.fn(),
        },
        civilDefenceCertificateValidateStatus: {
          update: jest.fn(),
        },
        civilDefenceCertificateValidationMessage: {
          update: jest.fn(),
        },
      },
      bpm: {
        sendMessage: jest.fn(),
      },
    };
  });

  it('init functions', async () => {
    await init(props);
  });

  it('call_f1_onChange functions', () => {
    call_f1_onChange(props)([]);
  });
  it('call_f2_onRemove functions', () => {
    call_f2_onRemove(props)([]);
  });
  it('call_f3_onChange functions', () => {
    call_f3_onChange(props)([]);
  });
  it('call_f4_onRemove functions', () => {
    call_f4_onRemove(props)([]);
  });
  it('call_f5_onChange functions', () => {
    call_f5_onChange(props)([]);
  });
  it('call_f6_onRemove functions', () => {
    call_f6_onRemove(props)([]);
  });
  it('f7_onClick functions', () => {
    f7_onClick(props);
  });
  it('call_f8_onClick functions if cases', () => {
    call_f8_onClick({
      ...props,
      newLeaseContractFiles: [{ status: 'success', fileId: '' }],
      civilDefenceCertificateFiles: [{ status: 'success', fileId: '' }],
      adEnvironmentPermitFiles: [{ status: 'success', fileId: '' }],
    })('');
  });
  it('call_f8_onClick functions else cases', () => {
    call_f8_onClick({
      ...props,
      newLeaseContractFiles: [{ status: 'fail', fileId: '' }],
      civilDefenceCertificateFiles: [{ status: 'fail', fileId: '' }],
      adEnvironmentPermitFiles: [{ status: 'fail', fileId: '' }],
    })('');
  });
  it('f9_onClick functions', () => {
    f9_onClick(props);
  });

  // describe('f2_onClick functions', () => {
  //   it('should properly call', async () => {
  //     await f2_onClick(props);
  //   });
  // });
});
