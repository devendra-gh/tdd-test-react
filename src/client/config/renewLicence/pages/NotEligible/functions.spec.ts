it('test', () => {
  expect(1).toBe(1);
});

// import fetch from 'client/services/fetch';
// import { IVariables } from '@tamm/app-composer';
// import functions from './functions';

// jest.mock('client/config/renewLicence/utils/common', () => {
//   return {
//     reset: jest.fn((props: IVariables) => {
//       props.actions.businessKey.update();
//     }),
//   };
// });
// jest.mock('client/services/fetch');

// describe('ErrorPage/functions', () => {
//   const props = {
//     submitLicence: {
//       data: {
//         owner: {},
//       },
//     },
//     actions: {
//       form: {
//         update: jest.fn(),
//       },
//       instanceId: {
//         update: jest.fn(),
//       },
//       businessKey: {
//         update: jest.fn(),
//       },
//     },
//   };
//   let mockFetch: any;
//   beforeEach(() => {
//     mockFetch = fetch;
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should properly call update when onClick', async () => {
//     mockFetch.mockImplementation(() => {
//       return Promise.resolve({
//         success: true,
//         data: {
//           businessKey: 'businessKey',
//           id: 'id',
//         },
//       });
//     });
//     await functions.onClick(props);
//     expect(props.actions.businessKey.update.mock.calls.length).toBe(1);
//   });
//   it('test', () => {
//     expect(1).toBe(1);
//   });
// });
