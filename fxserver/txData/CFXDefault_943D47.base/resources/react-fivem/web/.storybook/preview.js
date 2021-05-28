import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { themes } from '@storybook/theming';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
    dark: { ...themes.dark, appBg: '#1f1f1f' },
    light: { ...themes.normal, appBg: '#ebede1' }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Story />
        </Router>
      </DndProvider>
    </ThemeProvider>
  )
];