import React, { useEffect, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  useCoreService,
  usePhoneService,
  useVisibility,
  usePhoneVisibility
} from './core/hooks/useCoreService';
import Phone from './components/Phone';
import ItemsInterface from './components/ItemsInterface';
import { StorageProvider } from './components/ItemsInterface/StorageContext';

const post = (endpoint, body) => fetch(`https://react-fivem/${endpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify(body)
});

const useStyles = makeStyles(() => ({
  inventoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  phoneContainer: {
    position: 'fixed',
    right: 25,
    bottom: 0,
    transform: ({ togglePhone }) => (togglePhone ? 'translateY(0)' : 'translateY(calc(100% + 10px))'),
    transition: 'all 1s'
  }
}));

function App() {
  useCoreService();
  usePhoneService();
  const visibility = useVisibility();
  // const visibility = true;
  const phoneVisibility = usePhoneVisibility();
  const [togglePhone, setTogglePhone] = useState(false);
  const classes = useStyles({ togglePhone });

  const handleUI = () => {
    if (!togglePhone) {
      post('closeUI', {});
    }
  };
  useHotkeys('k', () => handleUI());

  useEffect(() => {
    if (phoneVisibility) {
      setTogglePhone(phoneVisibility);
    } else {
      setTogglePhone(phoneVisibility);
      post('closePhone', {});
    }
  }, [phoneVisibility]);

  return (
    <>
      <Box style={{ visibility: visibility ? 'visible' : 'hidden', minHeight: '100%' }}>
        <Box className={classes.inventoryContainer}>
          <StorageProvider>
            <ItemsInterface open={visibility} />
          </StorageProvider>
        </Box>
      </Box>
      <Box className={classes.phoneContainer}>
        <Phone open />
      </Box>
    </>
  );
}

export default App;
