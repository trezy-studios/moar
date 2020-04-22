// Module imports
import React from 'react'
import PropTypes from 'prop-types'





// Local imports
import { AllCatalogs } from '../helpers/AllCatalogs'
import { PreloadedImage } from './PreloadedImage'





const Hotbar = props => {
  const { slots } = props

  return (
    <ol
      className="framed framed-dark framed-full framed-horizontal hotbar"
      data-animate
      data-animation="fade-in-from-bottom"
      data-animation-duration="0.5s">
      {Object.entries(slots).map(([slotKey, slot]) => {
        if (!slot) {
          return (
            <li
              className="grid-slot"
              key={slotKey} />
          )
        }

        const slotData = AllCatalogs[slot.catalog].getByID(slot.id)

        return (
          <li
            className="grid-slot"
            key={slotKey}>
            <PreloadedImage
              height={16}
              source={slotData.imageURL}
              width={16} />
          </li>
        )
      })}
    </ol>
  )
}

Hotbar.defaultProps = {
  slots: {
    0: {
      id: 0,
      catalog: 'spells',
    },
    1: {
      id: 1,
      catalog: 'spells',
    },
    2: {
      id: 2,
      catalog: 'spells',
    },
    3: null,
    4: null,
    5: null,
    6: null,
    7: {
      id: 0,
      catalog: 'items',
    },
    8: {
      id: 1,
      catalog: 'items',
    },
  },
}

Hotbar.propTypes = {
  slots: PropTypes.object,
}





export { Hotbar }
