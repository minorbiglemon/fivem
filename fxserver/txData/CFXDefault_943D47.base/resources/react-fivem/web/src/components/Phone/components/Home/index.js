import {
  Grid
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhoneApp from '../PhoneApp';

const Home = ({ apps }) => (
  <Grid spacing={2} container>
    {apps.map((app) => (
      <Grid elevation={2} xs={3} key={app.name} item>
        <Link to={`/${app.name}`}>
          <PhoneApp name={app.name} color={app.color} icon={app.icon} />
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default Home;

Home.propTypes = {
  apps: PropTypes.object.isRequired
};
