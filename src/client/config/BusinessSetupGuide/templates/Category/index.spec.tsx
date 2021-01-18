import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import { Viewport, ViewportProvider } from '@tamm/ui-lib-v2-viewport';
import Category from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('BusinessSetupGuide/templates/Category', () => {
  let props: any;

  beforeEach(() => {
    props = {
      locale: null,
      i18n: jest.fn(),
      breadcrumbs: [],
      categoryEn: {
        info: [
          {
            stepTitle: 'test',
            entities: [
              {
                image: 'tst',
                title: 'test',
                subTitle: 'test',
                location: 'est',
                phone: '111',
                officeHours: 'est',
                websiteUrl: 'test',
              },
              {
                image: 'tst',
                title: 'test',
                subTitle: 'test',
                location: 'est',
                phone: '111',
                officeHours: 'est',
                websiteUrl: 'http://test.com/home',
              },
              {
                image: 'tst',
                title: 'test',
                subTitle: 'test',
                location: 'est',
                phone: '111',
                officeHours: 'est',
                websiteUrl: 'https://test.com/home',
              },
            ],
            details: [
              { text: '', title: 'test' },
              { text: 'test', title: 'test' },
              { text: '', title: 'test' },
              { text: 'test', title: 'test' },
            ],
          },
        ],
      },
      categoryAr: {
        info: [
          {
            stepTitle: 'test',
            entities: [
              {
                image: 'tst',
                title: 'test',
                subTitle: 'test',
                location: 'est',
                phone: '111',
                officeHours: 'est',
                websiteUrl: 'test',
              },
            ],
            details: [
              { text: '', title: 'test' },
              { text: 'test', title: 'test' },
              { text: '', title: 'test' },
              { text: 'test', title: 'test' },
            ],
          },
        ],
      },
      actions: {
        locale: {
          switch: jest.fn(),
        },
        breadcrumbs: {
          update: jest.fn(),
        },
        title: {
          update: jest.fn(),
        },
        hero: {
          update: jest.fn(),
        },
      },
    };
  });

  afterEach(cleanup);

  test('renders a message', () => {
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });

  test('renders a message en', () => {
    props.locale = 'en';
    render(
      <MemoryRouter>
        <ViewportProvider>
          <Viewport sm md lg xl>
            <Category {...props} />
          </Viewport>
        </ViewportProvider>
      </MemoryRouter>,
    );
  });
});
