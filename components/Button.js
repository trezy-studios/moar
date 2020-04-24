// Module imports
import PropTypes from 'prop-types'
import React from 'react'





const Button = props => {
  const {
    children,
    isSubmit,
    type,
  } = props

  return (
    <button
      className={type}
      type={isSubmit ? 'submit' : 'button'}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: null,
  isSubmit: false,
  type: 'default',
}

Button.propTypes = {
  children: PropTypes.node,
  isSubmit: PropTypes.bool,
  type: PropTypes.oneOf([
    'danger',
    'default',
    'success',
  ]),
}





export { Button }
