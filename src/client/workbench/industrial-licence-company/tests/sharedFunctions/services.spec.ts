// jest.mock('../../../sharedFunctions/services', () => ({
//   getS3File: jest.fn(),
// }));

// const getDEDToken = async (props) => {
//   const token = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/authenticateUser',
//       'POST',
//       {
//         agency: 'adbc',
//         password: 'XYZ-1234567',
//         userId: 'OSS',
//       }
//     )
//     .then((response: any) => response.data.result.token)
//     .catch((err: any) => err);
//   return token;
// };

// const businessLicenseDetailsV3 = async (props, tnNumber: string) => {
//   const token = await getDEDToken(props);
//   const result = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/businessLicenseDetailsV3?token=' +
//       token+'&licenseNo='+tnNumber,
//       'POST',
//       {}
//     )
//     .then((response: any) => response.data.result)
//     .catch((err: any) => err);
//   return result;
// }

// const getS3File = async (props) => {
//   let file: any = await props
//     .fetch(
//       `/api/proxy/ms-call/gateway/TammJourneyDocument-store-mgmt/1.0?appId=workbench-generator&userId=workbenchUserId&stage=/tmp/workbench/upload/&fileName=certificate (9).pdf__woBmoDGFIDb1y2nL8l7ILLSa8qkx`,
//       'GET',
//       {}
//     )
//     .then((response: any) => console.log("My Response:", response))
//     .catch((err: any) => console.log("Error", err));
//   return file;
// };
// const downloadFile = async (
//   applicationNumber: string,
//   capId: string,
//   instanceId: string,
//   certificateName: string,
//   props
// ) => {
//   let response: IVariables = {};
//   //const bK = props.state.businessKey;
//   //const ss = props.fetch;
//   const token = await getDEDToken(props);
//   console.log('myToken', token);
//   response = await props.fetch(
//     '/api/proxy/ms-call/gateway/TammJourneyDed/1.0/dedBusiness/businessCertificate?token=' +
//       token,
//     'POST',
//     {
//       applicationNumber: applicationNumber,
//       capId: capId,
//       certificateName: certificateName,
//       instanceId: instanceId,
//     }
//   );
//   const file = response.data.result.Certificate;
//   var newBlob = new Blob([file], {
//     type: 'application/pdf',
//   });
//   // IE doesn't allow using a blob object directly as link href
//   // instead it is necessary to use msSaveOrOpenBlob
//   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//     window.navigator.msSaveOrOpenBlob(newBlob);
//     return;
//   }
//   // For other browsers:
//   // Create a link pointing to the ObjectURL containing the blob.
//   const data = window.URL.createObjectURL(newBlob);
//   var link = document.createElement('a');
//   link.href = data;
//   link.target = '_blank';
//   link.download = certificateName + '.pdf';
//   link.click();
//   setTimeout(function () {
//     // For Firefox it is necessary to delay revoking the ObjectURL
//     window.URL.revokeObjectURL(data);
//   }, 100);
//   return true;
// };

// const getActivities = async (props: any, otherFilters: any[] = []) => {
//   const searchBy = [
//     ...[
//       {
//         field: 'activity type',
//         value: 'INDUSTRIAL ACTIVITY',
//       },
//     ],
//     ...otherFilters,
//   ];
//   const licenceList = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/getActivities',
//       'POST',
//       {
//         searchType: 'By Field',
//         searchBy: searchBy,
//         // nationalityCode: 'ARE',
//         // legalType: 'Establishment',
//         // gender: 'Male',
//         configurationList: [
//           {
//             pageNumber: '1',
//             pageSize: '1500',
//           },
//         ],
//       }
//     )
//     .then((response: any) => response.data)
//     .catch((err: any) => err);

//   const updatedList =
//     licenceList.result.activityinfoData.map((activity) => {
//       return {
//         ...activity,
//         ...{
//           _id: activity.activityCode,
//           name:
//             props.locale == 'ar'
//               ? activity.activityNameAr
//               : activity.activityNameEn,
//           price:
//             props.locale === 'ar'
//               ? `${Number(activity.dedFee).toFixed(2)} درهم`
//               : `AED ${Number(activity.dedFee).toFixed(2)}`,
//           selected: false,
//         },
//       };
//     }) || [];
//   return updatedList;
// };

// const tradeNameCheck = async (
//   props: any,
//   tradeNameEnglish: string,
//   tradenameArabic: string
// ) => {
//   const tradeNameValidity = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/tradeNameCheck',
//       'POST',
//       {
//         tradeNameEnglish,
//         tradenameArabic,
//       }
//     )
//     .then((response: any) => response.data)
//     .catch((err: any) => err);

//   return tradeNameValidity;
// };

// const tradeNameSuggestion = async (
//   props: any,
//   arabicName: string,
//   englishName: string,
//   activitCode: string,
//   legalForm: string = 'Local Establishment'
// ) => {
//   const suggestions = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/businessNameSuggestion',
//       'POST',
//       {
//         arabicName,
//         englishName,
//         legalForm,
//         activitCode, //string containing activity codes separated by ids
//       }
//     )
//     .then((response: any) => response.data.result.res)
//     .catch((err: any) => err);

//   const updatedSuggestions =
//     suggestions.map((item) => {
//       return {
//         ...item,
//         ...{
//           _id: item.serial,
//         },
//       };
//     }) || [];
//   return updatedSuggestions;
// };

// const autoFillBusinessNames = async (props: any) => {
//   const tradeNameResult = await props
//     .fetch(
//       '/api/proxy/ms-call/gateway/TammJourneyAdu-business/1.0/autoFillBusinessName',
//       'POST',
//       {}
//     )
//     .then((response: any) => response.data.result)
//     .catch((err: any) => err);

//   return tradeNameResult;
// };
// export {
//   getActivities,
//   businessLicenseDetailsV3,
//   getS3File,
//   downloadFile,
//   tradeNameCheck,
//   tradeNameSuggestion,
//   autoFillBusinessNames,
// };

it('test', () => {
  expect(1).toBe(1);
});
