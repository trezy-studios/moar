// Module imports
import React, {
  useEffect,
  useRef,
  useState,
} from 'react'
import { useCountUp } from 'react-countup'
import faker from 'faker'
import PropTypes from 'prop-types'





// Local imports
import { getTotalInventoryWeight } from '../helpers/getTotalInventoryWeight'
import { ItemCatalog } from '../helpers/ItemCatalog'





const InventoryPanel = props => {
  const {
    items,
    slots,
  } = props
  const {
    current: itemCatalog,
  } = useRef(new ItemCatalog)

  const totalWeight = getTotalInventoryWeight({
    itemCatalog,
    shouldRound: true,
    slots,
  })

  const {
    countUp: totalWeightCountUp,
    update: updateTotalWeight,
  } = useCountUp({ end: totalWeight })

  useEffect(() => updateTotalWeight(totalWeight), [totalWeight])

  return (
    <section
      className="framed inventory slide-out-panel"
      id="player-inventory">
      <header>
        Inventory
      </header>

      <div className="framed-content framed-dark">
        <ol>
          {Object.entries(slots).map(([slot, itemData]) => {
            const item = itemCatalog.getItemByID(itemData?.itemID)

            return (
              <li
                className="item"
                key={slot}>
                {Boolean(item) && (
                  <img src={`/game-assets/items/${item.type}/${item.safeName}.png`} />
                )}
              </li>
            )
          })}
          {/* {Object.entries(items).map(([id, item]) => (
            <li
              className="item"
              key={id}>
              <img
                alt={`Picture of ${item.name}`}
                src={item.image} />

              {item.name} x{item.quantity}
              {(item.weight > 0) && (
                <span>({item.weight * item.quantity}kg)</span>
              )}
            </li>
          ))} */}
        </ol>
      </div>

      <footer>
        {totalWeightCountUp}kg
      </footer>
    </section>
  )
}

const createItem = () => {
  const name = faker.commerce.productName()
  const size = 60

  return {
    id: faker.random.uuid(),
    image: `https://generative-placeholders.glitch.me/image?width=${size}&height=${size}&style=cellular-automata&cells=50&id=${name}`,
    name: name,
    quantity: Math.ceil(Math.random() * 99),
    weight: Math.floor(Math.random() * 10),
  }
}

const createInventory = (size = 100) => ({
  items: Array.from(Array(size), createItem).reduce((accumulator, item) => {
    accumulator[item.id] = item
    delete item.id
    return accumulator
  }, {}),

  slots: {
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
  },
})

InventoryPanel.defaultProps = {
  ...createInventory(),
}

InventoryPanel.propTypes = {
  items: PropTypes.object,
}





export { InventoryPanel }
