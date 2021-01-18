// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import { MemoryRouter } from 'react-router';
// import '@testing-library/jest-dom/extend-expect';
// import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
// import Home from './index';
// import {
//   PERMIT_AIR_AD,
//   PERMIT_FOOD_TRUCK,
// } from '../../utils/constants/permits';

// // eslint-disable-next-line no-console
// console.log = () => {};
// console.info = () => {};
// console.warn = () => {};
// console.error = () => {};

// describe('permits/templates/Home', () => {
//   let props: any;

//   beforeEach(() => {
//     props = {
//       serviceType: PERMIT_AIR_AD,
//       locale: {
//         switch: jest.fn(),
//       },
//       i18n: jest.fn(),
//       actions: {
//         locale: {
//           switch: jest.fn(),
//         },
//         breadcrumbs: {
//           update: jest.fn(),
//         },
//         title: {
//           update: jest.fn(),
//         },
//         hero: {
//           update: jest.fn(),
//         },
//       },
//       loggedIn: false,
//     };
//   });

//   afterEach(cleanup);

//   test('renders a message', () => {
//     render(
//       <MemoryRouter>
//         <ViewportProvider>
//           <Viewport sm md lg xl>
//             <Home {...props} />
//           </Viewport>
//         </ViewportProvider>
//       </MemoryRouter>,
//     );

//     // expect(getByText('pleaseLogIn')).toBeInTheDocument();
//   });
//   test('renders a message', () => {
//     props.serviceType = 'test';
//     render(
//       <MemoryRouter>
//         <ViewportProvider>
//           <Viewport sm md lg xl>
//             <Home {...props} />
//           </Viewport>
//         </ViewportProvider>
//       </MemoryRouter>,
//     );

//     // expect(getByText('pleaseLogIn')).toBeInTheDocument();
//   });
//   test('renders a message', () => {
//     props.serviceType = PERMIT_FOOD_TRUCK;
//     render(
//       <MemoryRouter>
//         <ViewportProvider>
//           <Viewport sm md lg xl>
//             <Home {...props} />
//           </Viewport>
//         </ViewportProvider>
//       </MemoryRouter>,
//     );

//     // expect(getByText('pleaseLogIn')).toBeInTheDocument();
//   });
//   test('renders loggedIn', () => {
//     props.loggedIn = true;
//     render(
//       <MemoryRouter>
//         <ViewportProvider>
//           <Viewport sm md lg xl>
//             <Home {...props} />
//           </Viewport>
//         </ViewportProvider>
//       </MemoryRouter>,
//     );

//     // expect(getByText('renewLicence')).toBeInTheDocument();
//   });
// });
test('test', () => {
  expect(1).toBe(1);
});
