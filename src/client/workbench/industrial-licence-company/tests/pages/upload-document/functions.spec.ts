import { getS3File } from '../../../sharedFunctions/services';

jest.mock('../../../sharedFunctions/services', () => ({
  getS3File: jest.fn(),
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
