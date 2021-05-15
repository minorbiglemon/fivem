import '../../styles.css';
import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import PropTypes from 'prop-types';
import AppBar from '../AppBar';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px'
  }
}));

const AppContentWrapper = ({ hideAppBar, children }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <>
          <AppBar hide={hideAppBar} />
          <Box className={classes.root}>
            {children}
          </Box>
        </>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppContentWrapper;

AppContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  hideAppBar: PropTypes.bool
};

AppContentWrapper.defaultProps = {
  hideAppBar: false
};
