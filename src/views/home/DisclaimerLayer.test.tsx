import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@emotion/react';

import DisclaimerLayer from './DisclaimerLayer';
import theme from '../../themeGulf';

describe('For <DisclaimerLayer />: ', () => {
  const Wrapper = () => {
    return (
      <ThemeProvider theme={theme}>
        <DisclaimerLayer>
          <p>hello</p>
        </DisclaimerLayer>
      </ThemeProvider>
    );
  };

  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  const user = userEvent.setup();

  test('Should show disclaimer initially', () => {
    render(<Wrapper />);

    const disclaimer = screen.getByRole('presentation');
    expect(disclaimer).toBeInTheDocument();
    expect(screen.getByText('Disclaimer')).toBeInTheDocument();
    expect(screen.getByRole('button')).toContainHTML('Accept');
  });

  test('Children being rendered in the background', () => {
    render(<Wrapper />);

    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  test('Disclaimer should go away after clicking the Accept Button with children still rendered', async () => {
    render(<Wrapper />);

    const acceptButton = screen.getByRole('button');
    await user.click(acceptButton);

    const disclaimer = screen.queryByRole('presentation');
    expect(disclaimer).not.toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  test('LocalStorage contains correct version string after clicking Accept Button', async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
    Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
    process.env.REACT_APP_DISCLAIMER_VERSION = 'testDisclaimerVersion';

    render(<Wrapper />);

    const acceptButton = screen.getByRole('button');
    await user.click(acceptButton);

    const disclaimerVersion = localStorage.getItem('disclaimer-version');
    expect(disclaimerVersion).toMatch('testDisclaimerVersion');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('disclaimer-version', 'testDisclaimerVersion');
  });
});
