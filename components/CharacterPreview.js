// Module imports
import React from 'react'
import PropTypes from 'prop-types'





const CharacterPreview = props => {
  const {
    direction,
    gender,
    state,
    type,
  } = props

  return (
    <div
      className="character-preview"
      data-character-type={type}
      data-character-direction={direction}
      data-character-gender={gender}
      data-character-state={state} />
  )
}

CharacterPreview.defaultProps = {
  direction: 'right',
  state: 'idle',
}

CharacterPreview.propTypes = {
  direction: PropTypes.string,
  gender: PropTypes.string.isRequired,
  state: PropTypes.string,
  type: PropTypes.string.isRequired,
}





export { CharacterPreview }
