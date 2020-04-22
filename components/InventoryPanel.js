// Module imports
import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import { useCountUp } from 'react-countup'
import PropTypes from 'prop-types'





// Local imports
import { getTotalInventoryWeight } from '../helpers/getTotalInventoryWeight'
import { InventoryItem } from './InventoryItem'
import { InventorySlot } from './InventorySlot'
import { AllCatalogs } from '../helpers/AllCatalogs'





const InventoryPanel = () => {
  const {
    current: itemCatalog,
  } = useRef(AllCatalogs.items)

  const [slots, setSlots] = useState({
    0: {
      itemID: 1,
      quantity: 24,
    },
    1: {
      itemID: 0,
      quantity: 16,
    },
    2: null,
    3: null,
    4: {
      itemID: 1,
      quantity: 99,
    },
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
    13: null,
    14: null,
    15: null,
    16: null,
    17: null,
    18: null,
    19: null,
  })

  const totalWeight = getTotalInventoryWeight({
    shouldRound: true,
    slots,
  })

  const {
    countUp: totalWeightCountUp,
    update: updateTotalWeight,
  } = useCountUp({ end: totalWeight })

  const onMoveItem = (fromSlot, toSlot) => {
    setSlots(oldSlots => {
      const slotsClone = { ...oldSlots }

      const item = slotsClone[fromSlot]
      const itemToSwap = slotsClone[toSlot]

      slotsClone[fromSlot] = itemToSwap
      slotsClone[toSlot] = item

      return slotsClone
    })
  }

  useEffect(() => updateTotalWeight(totalWeight), [totalWeight])

  return (
    <section
      className="framed inventory slide-out-panel"
      data-open
      id="player-inventory">
      <header>Inventory</header>

      <div className="framed-content framed-dark">
        <ol>
          {Object.entries(slots).map(([slot, itemData]) => (
            <InventorySlot
              key={slot}
              onMoveItem={onMoveItem}
              slot={slot}>
              {Boolean(itemData) && (
                <InventoryItem
                  quantity={itemData.quantity}
                  slot={slot}
                  item={itemCatalog.getByID(itemData.itemID)} />
              )}
            </InventorySlot>
          ))}
        </ol>
      </div>

      <footer>
        {totalWeightCountUp}kg
      </footer>
    </section>
  )
}





export { InventoryPanel }
