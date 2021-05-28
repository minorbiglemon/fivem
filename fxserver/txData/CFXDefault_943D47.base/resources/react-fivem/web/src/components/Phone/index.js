import React from 'react';
import {
  Box,
  makeStyles,
  Paper,
  useTheme
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Color from 'color';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import RoomIcon from '@material-ui/icons/Room';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import StatusBar from './components/StatusBar';
import {
  BankingApp,
  ContactsApp,
  MessagesApp,
  PhoneApp,
  PingApp,
  SettingsApp,
  TwitterApp
} from './components/apps';
import AppContentWrapper from './components/AppContentWrapper';
import Home from './components/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    height: '550px',
    borderRadius: '20px',
    border: '4px solid #6e6e6e',
    backgroundColor: '#141414',
    padding: '5px'
  },
  screen: {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${Color(theme.palette.secondary.light).lighten(0.3)})`,
    borderRadius: '10px'
  },
  icon: {
    fontSize: '30px'
  }
}));

const Phone = ({ open, time }) => {
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const apps = [
    {
      name: 'messages', icon: <ChatBubbleIcon className={classes.icon} />, color: `linear-gradient(45deg, ${theme.palette.success.main}, ${theme.palette.success.light})`, component: <MessagesApp />
    },
    {
      name: 'phone', icon: <PhoneIcon className={classes.icon} />, color: `linear-gradient(45deg, ${Color(theme.palette.success.dark).darken(0.5)}, ${theme.palette.success.main})`, component: <PhoneApp />
    },
    {
      name: 'contacts', icon: <ContactsIcon className={classes.icon} />, color: `linear-gradient(45deg, ${theme.palette.error.dark}, ${theme.palette.error.light})`, component: <ContactsApp />
    },
    {
      name: 'twitter', icon: <TwitterIcon className={classes.icon} />, color: `linear-gradient(45deg, ${Color(theme.palette.info.dark).darken(0.3)}, ${theme.palette.info.light})`, component: <TwitterApp />
    },
    {
      name: 'banking', icon: <AccountBalanceIcon className={classes.icon} />, color: `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`, component: <BankingApp />
    },
    {
      name: 'ping', icon: <RoomIcon className={classes.icon} />, color: `linear-gradient(45deg, ${theme.palette.warning.dark}, ${theme.palette.warning.light})`, component: <PingApp />
    },
    {
      name: 'settings', icon: <SettingsIcon className={classes.icon} />, color: `linear-gradient(45deg, ${theme.palette.grey[700]}, ${theme.palette.grey[300]})`, component: <SettingsApp />
    }
  ];
  if (!open) return null;
  return (
    <Paper className={classes.root} elevation={3}>
      <Box className={classes.screen} display="flex" flexGrow={1} flexDirection="column" minHeight="100%">
        <StatusBar time={time} />
        <Switch location={location}>
          <Route path="/" exact>
            <AppContentWrapper hideAppBar>
              <Home apps={apps} />
            </AppContentWrapper>
          </Route>
          {apps.map((app) => (
            <Route path={`/${app.name}`} exact>
              <AppContentWrapper appName={app.name}>
                {app.component}
              </AppContentWrapper>
            </Route>
          ))}
        </Switch>
      </Box>
    </Paper>
  );
};

export default Phone;

Phone.propTypes = {
  open: PropTypes.bool,
  time: PropTypes.string.isRequired
};

Phone.defaultProps = {
  open: false
};
