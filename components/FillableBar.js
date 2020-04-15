// Module imports
import React, {
  useEffect,
} from 'react'
import { useCountUp } from 'react-countup'
import PropTypes from 'prop-types'





const FillableBar = props => {
  const {
    currentValue,
    isLow,
    maxValue,
  } = props
  const {
    countUp: currentValueCountUp,
    update: updateCurrentValueCountUp,
  } = useCountUp({ end: currentValue })
  const {
    countUp: maxValueCountUp,
    update: updateMaxValueCountUp,
  } = useCountUp({ end: currentValue })

  useEffect(() => updateCurrentValueCountUp(currentValue), [currentValue])
  useEffect(() => updateMaxValueCountUp(maxValue), [maxValue])

  return (
    <div className="fillable-bar">
      <meter
        data-animate={isLow}
        data-animation="pulse"
        data-animation-duration="0.5"
        max={maxValueCountUp}
        min="0"
        value={currentValueCountUp} />
    </div>
  )
}

FillableBar.defaultProps = {
  isLow: false,
}

FillableBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  isLow: PropTypes.bool,
  maxValue: PropTypes.number.isRequired,
}





export { FillableBar }
