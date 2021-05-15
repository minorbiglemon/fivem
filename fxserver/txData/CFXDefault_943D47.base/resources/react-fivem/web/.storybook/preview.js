import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { themes } from '@storybook/theming';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: '#ebede1' }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Story />
      </Router>
    </ThemeProvider>
  )
];