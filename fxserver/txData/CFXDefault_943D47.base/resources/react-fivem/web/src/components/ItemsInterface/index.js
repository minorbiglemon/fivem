import React, { useEffect, useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  makeStyles,
  TextField
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types';
import Storage from './components/Storage';
import { useStorage } from './StorageContext';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  itemContainer: {
    height: '100px',
    backgroundColor: 'red',
    padding: '5px'
  },
  item: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%'
  },
  iconButton: {
    borderRadius: 0,
    border: '1px solid #3a3a3a',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)'
  },
  controls: {
    margin: '70px 0'
  },
  paper: {
    backgroundColor: 'rgba(76,76,76,.5)'
  }
}));

const ItemsInterface = ({ open }) => {
  const classes = useStyles();
  const [inventory, setInventory] = useState([
    {
      name: 'Revolver',
      description: 'Revolver',
      weight: 10,
      quantity: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Revolver_icon.svg/1280px-Revolver_icon.svg.png',
      id: 'revolver'
    },
    {
      name: 'Revolver',
      description: 'Revolver',
      weight: 10,
      quantity: 5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Revolver_icon.svg/1280px-Revolver_icon.svg.png',
      id: 'revolver'
    },
    null,
    null,
    {
      name: 'Burger',
      description: 'Heart stopper',
      weight: 10,
      quantity: 1,
      image: 'https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_%28FF_Menu%29_6.png',
      id: 'burger'
    },
    null,
    {
      name: 'Med kit',
      description: 'This will heal you 25%',
      weight: 10,
      quantity: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Medkit_font_awesome-red.svg/512px-Medkit_font_awesome-red.svg.png',
      id: 'medkit'
    },
    {
      name: 'Lock pick',
      description: 'Helps open things',
      weight: 10,
      quantity: 1,
      image: 'https://st4.depositphotos.com/1432405/25430/v/380/depositphotos_254302384-stock-illustration-lock-picks-icon-cartoon-style.jpg',
      id: 'lockpick'
    },
    {
      name: 'Lock pick',
      description: 'Helps open things',
      weight: 10,
      quantity: 1,
      image: 'https://st4.depositphotos.com/1432405/25430/v/380/depositphotos_254302384-stock-illustration-lock-picks-icon-cartoon-style.jpg',
      id: 'lockpick'
    }
  ]);

  const [otherStorage, setOtherStorage] = useState([]);
  const [quantity, setQuantity] = useState(0);

  return (
    <Dialog maxWidth="xl" open={open} fullWidth scroll="body" PaperProps={{ className: classes.paper }}>
      <DialogContent className={classes.root}>
        <Grid direction="row" spacing={2} container>
          {/* Left side */}
          <Storage
            name="Inventory"
            items={inventory}
            quantity={quantity}
            size={52}
            maxWeight={250}
          />
          {/* Center controls */}
          <Grid className={classes.controls} xs={2} justify="space-between" alignItems="center" direction="column" item container>
            <TextField
              variant="outlined"
              style={{ boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              label="Quantity"
            />
            <Grid item>
              <div>use area</div>
            </Grid>
            <Grid item>
              <IconButton className={classes.iconButton} size="small"><SettingsIcon /></IconButton>
            </Grid>
          </Grid>
          {/* Right side */}
          <Storage
            name="Ground"
            items={otherStorage}
            quantity={quantity}
            maxWeight={500}
          />
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ItemsInterface;

ItemsInterface.propTypes = {
  open: PropTypes.bool.isRequired
};
