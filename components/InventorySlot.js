// Module imports
import { useDrop } from 'react-dnd'
import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'





const InventorySlot = props => {
  const {
    children,
    onMoveItem,
    slot,
  } = props
  const [{ isOver }, drop] = useDrop({
		accept: 'InventoryItem',
		drop: item => onMoveItem(item.slot, slot),
		collect: monitor => ({ isOver: monitor.isOver() }),
	})

  return (
    <li
      className={classnames({
        'grid-slot': true,
        'inventory-slot': true,
        'is-dragged-over': isOver,
      })}
      ref={drop}>
      {children}
    </li>
  )
}

InventorySlot.propTypes = {
  children: PropTypes.node.isRequired,
  onMoveItem: PropTypes.func.isRequired,
  slot: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}





export { InventorySlot }
