import React, { useEffect, useRef, useState } from 'react';
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
// import Item from '../Item';
// import Item from '../ClassItem';
import Item from '../JQueryItem';
import WeightProgressBar from '../WeightProgressBar';
import { stringToId } from '../../../../utils/strings';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '10px',
    margin: '5px',
    maxHeight: 'calc(100vh - 200px)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      background: '#080808',
      borderRadius: '0 10px 10px 0',
      width: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#242424',
      borderRadius: '0 10px 10px 0'
    }
  }
}));
let staticLayoutCopy;
const Storage = ({
  name,
  size,
  items,
  quantity,
  maxWeight
}) => {
  const classes = useStyles();
  const [layout, setLayout] = useState(Array.from(Array(size)));
  const [totalWeight, setTotalWeight] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    const layoutCopy = [...layout];
    items.forEach((item, index) => {
      if (item) {
        layoutCopy[index] = item;
      }
    });
    const weightTotal = items.reduce((accumulator, item) => (item ? accumulator + (item.weight * item.quantity) : accumulator), 0);
    setTotalWeight(weightTotal);
    setLayout(layoutCopy);
    if (mounted && !layoutCopy.every((entry) => entry === undefined)) {
      console.log('mounted');
      staticLayoutCopy = layoutCopy;
      console.log(staticLayoutCopy);
    }
  }, [items, mounted]);

  const getQuantity = (quant) => {
    const sourceQuantInt = parseInt(quant, 10);
    let quantInt = parseInt(quantity, 10);
    if (quantInt === 0) {
      quantInt = sourceQuantInt;
    }
    return quantInt;
  };

  const updateItemQuantity = (source, dest) => {
    const sourceQuantInt = parseInt(source.quantity, 10);
    const quantInt = getQuantity(source.quantity);
    const sourceIsGreater = quantInt > sourceQuantInt;
    source.quantity -= sourceIsGreater ? sourceQuantInt : quantInt;
    dest.quantity += sourceIsGreater ? sourceQuantInt : quantInt;
    return { source, dest };
  };

  const moveItem = (sourceIndex, destinationIndex) => {
    const layoutCopy = [...staticLayoutCopy];
    let sourceItem = layoutCopy[sourceIndex];
    let destItem = layoutCopy[destinationIndex];
    const quantInt = getQuantity(sourceItem.quantity);

    // move specific quantity of one item
    if (sourceItem.id === destItem?.id) {
      const { source, dest } = updateItemQuantity(sourceItem, destItem);
      sourceItem = source;
      destItem = dest;
      if (parseInt(sourceItem.quantity, 10) <= 0) {
        layoutCopy[sourceIndex] = null;
      }
    // moving an item to an empty block based on quantity chosen
    } else if (quantInt < sourceItem.quantity) {
      if (!destItem) {
        destItem = sourceItem;
        sourceItem.quantity -= quantInt;
        layoutCopy[destinationIndex] = { ...sourceItem, quantity: quantInt };
      }
    // swap item with empty item
    } else {
      layoutCopy[sourceIndex] = destItem;
      layoutCopy[destinationIndex] = sourceItem;
    }
    setLayout(layoutCopy);
    staticLayoutCopy = layoutCopy;
  };

  return (
    <Grid direction="column" item xs={5} container>
      <Grid item>
        <Typography variant="h3">{name}</Typography>
        <WeightProgressBar weight={totalWeight} maxWeight={maxWeight} />
      </Grid>
      <Grid className={classes.root} item container>
        {layout.map((item, index) => (
          <Item
            id={item ? stringToId(`${item?.name}-${index}`) : `empty-${index}`}
            key={item ? stringToId(`${item?.name}-${index}`) : `empty-${index}`}
            storageItem={{ item, index }}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </Grid>
    </Grid>
  );
};

Storage.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  quantity: PropTypes.number,
  maxWeight: PropTypes.number.isRequired,
  items: PropTypes.arrayOf({
    name: PropTypes.string,
    description: PropTypes.string,
    weight: PropTypes.number
  }).isRequired
};

Storage.defaultProps = {
  size: 20,
  quantity: 0
};

export default Storage;
