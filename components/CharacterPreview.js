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
  direction: PropTypes.oneOf([
    'left',
    'right',
  ]),
  gender: PropTypes.oneOf([
    'female',
    'male',
  ]).isRequired,
  state: PropTypes.oneOf([
    'idle',
    'running',
  ]),
  type: PropTypes.oneOf([
    'elf',
    'knight',
    'lizard',
    'wizard',
  ]).isRequired,
}





export { CharacterPreview }
