import React, { useEffect, useState } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  progressBar: {
    width: ({ display }) => `${display}%`,
    height: '30px',
    backgroundColor: '#4f824b',
    borderRadius: '50px',
    transition: 'all 1s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const WeightProgressBar = ({ weight, maxWeight }) => {
  const [display, setDisplay] = useState(0);
  const classes = useStyles({ display });

  const calculatePercentage = () => {
    setDisplay((weight / maxWeight) * 100);
  };

  useEffect(() => {
    calculatePercentage(weight);
  }, [weight]);

  return (
    <Grid container>
      <Grid xs={11} style={{ width: '100%', backgroundColor: 'grey', borderRadius: '50px' }} item>
        <Grid className={classes.progressBar} item>
          {weight || null}
        </Grid>
      </Grid>
      <Grid xs={1} justify="center" alignItems="center" container item>
        {maxWeight}
      </Grid>
    </Grid>
  );
};

export default WeightProgressBar;

WeightProgressBar.propTypes = {
  weight: PropTypes.number.isRequired,
  maxWeight: PropTypes.number.isRequired
};
