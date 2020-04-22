// Module imports
import PropTypes from 'prop-types'
import React from 'react'





// Local imports
import { FillableBar } from './FillableBar'





const HealthBar = props => {
  const {
    currentHealth,
    maxHealth,
  } = props

  return (
    <div className="health-bar">
      <FillableBar
        currentValue={currentHealth}
        isLow={currentHealth < Math.floor(maxHealth * 0.2)}
        maxValue={maxHealth}
        showNumbers />
    </div>
  )
}

HealthBar.propTypes = {
  currentHealth: PropTypes.number.isRequired,
  maxHealth: PropTypes.number.isRequired,
}





export { HealthBar }
