// Module imports
import React, {
  useEffect,
} from 'react'
import {
  animated,
  interpolate,
  useSpring,
} from 'react-spring'
import { useCountUp } from 'react-countup'
import PropTypes from 'prop-types'





const FillableBar = props => {
  const {
    isLow,
    label,
    showNumbers,
  } = props
  const [currentValue, setCurrentValue] = useSpring(() => ({
    from: { value: 0 },
    value: props.currentValue,
  }))
  const [maxValue, setMaxValue] = useSpring(() => ({
    from: { value: 0 },
    value: props.maxValue,
  }))

  useEffect(() => setCurrentValue({ value: props.currentValue }), [props.currentValue])
  useEffect(() => setMaxValue({ value: props.maxValue }), [props.maxValue])

  return (
    <animated.div
      className="fillable-bar-wrapper"
      style={{
        width: maxValue.value.interpolate(value => `${Math.max(value, 200)}px`),
      }}>
      <div className="fillable-bar">
        <animated.meter
          data-animate={isLow}
          data-animation="pulse"
          data-animation-duration="0.5s"
          max={maxValue.value}
          min="0"
          value={currentValue.value} />
      </div>

      {showNumbers && (
        <span className="ratio">
          <animated.span aria-label={`Current ${label}`}>
            {currentValue.value.interpolate(value => Math.round(value))}
          </animated.span>

          <span aria-label={`Maximum ${label}`}>
            <animated.span>
              {maxValue.value.interpolate(value => `/${Math.round(value)}`)}
            </animated.span>
          </span>
        </span>
      )}
    </animated.div>
  )
}

FillableBar.defaultProps = {
  isLow: false,
  label: 'Value',
  showNumbers: false,
}

FillableBar.propTypes = {
  currentValue: PropTypes.number.isRequired,
  isLow: PropTypes.bool,
  label: PropTypes.string,
  maxValue: PropTypes.number.isRequired,
  showNumbers: PropTypes.bool,
}





export { FillableBar }
