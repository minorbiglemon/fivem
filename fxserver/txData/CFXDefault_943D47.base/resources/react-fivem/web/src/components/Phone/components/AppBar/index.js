import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { capitaliseString } from '../../../../utils';

const useStyles = makeStyles(() => ({
  root: {
    background: '#000'
  }
}));

const AppBar = ({ hide, appName }) => {
  const classes = useStyles();
  if (hide) return null;
  return (
    <Grid className={classes.root} container>
      <Grid item>
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
      </Grid>
      {appName && (
        <Grid item>
          <Typography variant="body2">{capitaliseString(appName)}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default AppBar;

AppBar.propTypes = {
  hide: PropTypes.bool,
  appName: PropTypes.string
};

AppBar.defaultProps = {
  hide: false,
  appName: undefined
};
