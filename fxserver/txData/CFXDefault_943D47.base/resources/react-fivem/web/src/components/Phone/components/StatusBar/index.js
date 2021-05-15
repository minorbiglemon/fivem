import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    borderRadius: 'inherit',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    backgroundColor: '#1a1a1a',
    padding: '5px'
  },
  gridItem: {
    padding: '0 5px'
  }
}));

const StatusBar = ({ time, pingId }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Grid className={classes.gridItem} item>
        <Typography variant="body2">{time}</Typography>
      </Grid>
      <Grid className={classes.gridItem} item>
        <Typography variant="body2">#{pingId}</Typography>
      </Grid>
    </Grid>
  );
};

export default StatusBar;

StatusBar.propTypes = {
  time: PropTypes.string,
  pingId: PropTypes.number
};

StatusBar.defaultProps = {
  time: '00:00',
  pingId: 0
};
