// Module imports
import PropTypes from 'prop-types'
import React from 'react'





// Local imports
import { FillableBar } from './FillableBar'





const ManaBar = props => {
  const {
    currentMana,
    maxMana,
  } = props

  return (
    <div className="mana-bar">
      <FillableBar
        currentValue={currentMana}
        isLow={currentMana < Math.floor(maxMana * 0.2)}
        maxValue={maxMana}
        showNumbers />
    </div>
  )
}

ManaBar.propTypes = {
  currentMana: PropTypes.number.isRequired,
  maxMana: PropTypes.number.isRequired,
}





export { ManaBar }
