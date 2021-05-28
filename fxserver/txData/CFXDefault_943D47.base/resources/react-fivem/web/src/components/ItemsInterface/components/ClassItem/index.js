/* eslint-disable react/destructuring-assignment */
// /* eslint-disable arrow-body-style */
import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Grid,
  Typography,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const classes = {
  itemContainer: {
    height: '150px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '5px'
  },
  item: {
    backgroundColor: 'rgba(46,46,46,0.5)',
    height: '100%',
    flexDirection: 'column',
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
  },
  helper: {
    height: '145px',
    width: '175px'
  }
};

class Item extends Component {
  constructor({
    moveItem, storageItem, index, dragItem, setDragItem
  }) {
    super({
      moveItem, storageItem, index, dragItem, setDragItem
    });
    this.dragRef = createRef(null);
    this.dropRef = createRef(null);
    this.state = {
      // dragItem: null
    };
  }

  componentDidMount = () => {
    const {
      storageItem, index, moveItem, setDragItem, dragItem
    } = this.props;
    $(this.dragRef.current).draggable({
      revert: true,
      revertDuration: 0,
      helper: 'clone',
      start: (_, ui) => {
        $(ui.helper).css(classes.helper);
        // this.state.dragItem = storageItem.item;
        setDragItem(storageItem);
      }
    });
    $(this.dropRef.current).droppable({
      drop: (e, ui) => {
        console.log('class', dragItem.index, index);
        // moveItem(dragItem.index, index);
      }
    });
  }

  render() {
    const { id, storageItem } = this.props;
    const { item } = storageItem;

    return (
      <Grid
        id={id}
        ref={this.dropRef}
        style={classes.itemContainer}
        xs={3}
        item
        container
      >
        <Grid
          ref={item ? this.dragRef : null}
          style={classes.item}
          direction="column"
          alignItems="center"
          item
          container
        >
          {item && (
          <>
            <Typography
              style={classes.quantity}
              variant="body2"
            >
              {item.quantity}
            </Typography>
            <Grid
              style={classes.imageContainer}
              item
            >
              <img src={item.image} alt={item.name} style={{ width: '50%' }} />
            </Grid>
            <Grid
              style={classes.itemName}
              item
            >
              <Typography align="center" variant="body2">{item.name}</Typography>
            </Grid>
          </>
          )}
        </Grid>
      </Grid>
    );
  }
}
//   const ref = useRef(null);
//   const mounted = useRef(false);
//   const { item } = storageItem;

//   useEffect(() => {
//     mounted.current = true;
//     return () => { mounted.current = false; };
//   }, []);

//   const onUpdate = (e, ui) => {
//     const $element = $(ref);
//     $element.sortable('cancel');
//     console.log('test');
//   };

//   useEffect(() => {
//     if (mounted && ref) {
//       console.log('mounted');
//       const element = $(ref);
//       console.log(element);
//       const options = {
//         update: (e, ui) => { onUpdate(e, ui); }
//       };
//       element.sortable(options);
//     }
//   }, [mounted, ref]);

//   const classes = useStyles({ hasItem: !!item });

//   return (
//     <Grid
//       id={id}
//       className={classes.itemContainer}
//       xs={3}
//       item
//       container
//     >
//       <Grid
//         ref={ref}
//         className={classes.item}
//         direction="column"
//         alignItems="center"
//         item
//         container
//       >
//         {item && (
//         <>
//           <Typography className={classes.quantity} variant="body2">{item.quantity}</Typography>
//           <Grid className={classes.imageContainer} item>
//             <img src={item.image} alt={item.name} style={{ width: '50%' }} />
//           </Grid>
//           <Grid className={classes.itemName} item>
//             <Typography align="center" variant="body2">{item.name}</Typography>
//           </Grid>
//         </>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

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
