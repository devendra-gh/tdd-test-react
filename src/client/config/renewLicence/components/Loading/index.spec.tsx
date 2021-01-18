import React from 'react';
import { render } from '@testing-library/react';
import Loading from './index';

// eslint-disable-next-line no-console
console.log = () => {};
console.info = () => {};
console.warn = () => {};
console.error = () => {};

describe('Loading', () => {
  test('renders', () => {
    const { container }: any = render(<Loading />);
    expect(container.firstChild.classList.contains('spinner-wrapper')).toBe(
      true,
    );
  });
});
