import React from 'react';
import {
  Paper,
  makeStyles,
  Box,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { capitaliseString } from '../../../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '100%',
    position: 'relative',
    background: ({ color }) => (color || '#000'),
    borderRadius: '25%',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  text: {
    fontSize: '12px'
  }
}));

const PhoneApp = ({ name, icon, color }) => {
  const classes = useStyles({ color });
  return (
    <>
      <Paper className={classes.root} display="flex" onClick={() => console.log(`${name} clicked`)}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <span style={{ position: 'absolute', top: 'calc(50% - 14px)' }}>{icon}</span>
        </Box>
      </Paper>
      <Typography align="center" className={classes.text} variant="body2">{capitaliseString(name)}</Typography>
    </>
  );
};

export default PhoneApp;

PhoneApp.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};
