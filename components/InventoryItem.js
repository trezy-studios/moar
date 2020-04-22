// Module imports
import {
  DragPreviewImage,
  useDrag,
} from 'react-dnd'
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'





const InventoryItem = props => {
  const {
    item,
    slot,
  } = props
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      slot,
      type: 'InventoryItem',
    },
    collect: monitor => ({ isDragging: Boolean(monitor.isDragging()) }),
  })

  return (
    <>
      <DragPreviewImage
        connect={preview}
        src={item.imageURL} />

      <div
        className={classnames({
          'inventory-item': true,
          'is-dragging': isDragging,
        })}
        ref={drag}>
        <img src={item.imageURL} />
      </div>
    </>
  )

  // <li
  //   className="item"
  //   key={id}>
  //   <img
  //     alt={`Picture of ${item.name}`}
  //     src={item.image} />

  //   {item.name} x{item.quantity}
  //   {(item.weight > 0) && (
  //     <span>({item.weight * item.quantity}kg)</span>
  //   )}
  // </li>
}

InventoryItem.defaultProps = {
  item: null,
}

InventoryItem.propTypes = {
  item: PropTypes.shape({
    baseValue: PropTypes.number,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    name: PropTypes.string,
    quantity: PropTypes.number,
    safeName: PropTypes.string,
    type: PropTypes.string,
    weight: PropTypes.number,
  }),
  slot: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}





export { InventoryItem }
