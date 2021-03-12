import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../index';
afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

describe('<Header />', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
