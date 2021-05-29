// /* eslint-disable arrow-body-style */
import React, { useEffect, useRef, useState } from 'react';
import {
  Grid,
  Typography,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

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
    // transition: 'all .5s',
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

let dragItem;

const Item = ({
  id, storageItem, index, moveItem
}) => {
  const dragRef = useRef(null);
  const dropRef = useRef(null);
  const mounted = useRef(false);
  const { item } = storageItem;

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    if (mounted && dragRef && dropRef) {
      $(dragRef.current).draggable({
        revert: true,
        revertDuration: 0,
        helper: 'clone',
        start: (_, ui) => {
          $(ui.helper).css({
            height: '145px',
            width: '175px',
            zIndex: 100
          });
          dragItem = storageItem;
        }
      });
      $(dropRef.current).droppable({
        drop: () => {
          moveItem(dragItem.index, index);
        }
      });
    }
  }, [mounted, dragRef]);

  const classes = useStyles({ hasItem: !!item });

  return (
    <Grid
      id={id}
      className={classes.itemContainer}
      xs={3}
      item
      container
      ref={dropRef}
    >
      <Grid
        ref={item ? dragRef : null}
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
