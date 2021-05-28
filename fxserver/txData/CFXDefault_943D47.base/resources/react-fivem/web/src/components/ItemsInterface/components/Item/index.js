// /* eslint-disable arrow-body-style */
import React, { useRef } from 'react';
import {
  Grid,
  Typography,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import DnDItemTypes from '../../DnDItemTypes';

const useStyles = makeStyles(() => ({
  itemContainer: {
    height: '150px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '5px'
  },
  item: {
    backgroundColor: ({ isDragging, hasItem }) => {
      if (isDragging) {
        return 'rgba(0,0,0,0.5)';
      }
      if (hasItem) {
        return 'rgba(20,20,20,0.5)'; // #141414
      }
      return 'rgba(46,46,46,0.5)'; // #2e2e2e;
    },
    height: '100%',
    flexDirection: 'column',
    transition: 'all .5s',
    borderRadius: '5px',
    position: 'relative'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%'
  },
  itemName: {
    backgroundColor: 'rgba(84,108,112,0.5)', // #546c70
    width: '100%',
    borderRadius: '0 0 5px 5px'
  },
  quantity: {
    position: 'absolute',
    left: 10,
    top: 10
  }
}));

const Item = ({
  id, storageItem, index, moveItem
}) => {
  const ref = useRef(null);
  const { item } = storageItem;
  const [{ handlerId, canDrop }, drop] = useDrop({
    accept: DnDItemTypes.ITEM,
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      handlerId: monitor.getHandlerId()
    }),
    drop: (dropItem) => {
      const dragIndex = dropItem.index;
      const dropIndex = index;
      moveItem(dragIndex, dropIndex);
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: DnDItemTypes.ITEM,
    item: () => ({ item: storageItem.item, index: storageItem.index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drop(storageItem.item ? drag(ref) : ref);
  const classes = useStyles({ isDragging, canDrop, hasItem: !!storageItem.item });

  return (
    <Grid
      id={id}
      className={classes.itemContainer}
      data-handler-id={handlerId}
      xs={3}
      item
      container
    >
      <Grid
        ref={ref}
        className={classes.item}
        direction="column"
        alignItems="center"
        item
        container
      >
        {item && (
        <>
          <Typography className={classes.quantity} variant="body2">{item.quantity}</Typography>
          <Grid className={classes.imageContainer} item>
            <img src={item.image} alt={item.name} style={{ width: '50%' }} />
          </Grid>
          <Grid className={classes.itemName} item>
            <Typography align="center" variant="body2">{item.name}</Typography>
          </Grid>
        </>
        )}
      </Grid>
    </Grid>
  );
};

export default Item;

Item.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  storageItem: PropTypes.shape({
    item: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      weight: PropTypes.number,
      quantity: PropTypes.number,
      image: PropTypes.string
    }),
    index: PropTypes.number
  })
};

Item.defaultProps = {
  storageItem: null
};
