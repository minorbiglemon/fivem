import { createMuiTheme } from '@material-ui/core';
import overrides from './overrides';
import palette from './palette';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
};

const typography = {
  h2: {
    fontWeight: 'bold',
    fontSize: '32px'
  },
  h3: {
    fontSize: '30px'
  },
  body1: {
    color: '#000'
  },
  body2: {
    color: '#fff'
  },
  test: {
    color: '#0f0'
  }
};

export default createMuiTheme({
  themeName: 'main theme',
  overrides,
  breakpoints,
  typography,
  palette
});
