// Module imports
import React, {
  useState,
} from 'react'
import PropTypes from 'prop-types'





// Local imports
import { HealthBar } from './HealthBar'
import { ManaBar } from './ManaBar'
import { useInterval } from '../effects'





const QuickStats = props => {
  const {
    maxHealth,
    maxMana,
    name,
  } = props
  const [currentHealth, setCurrentHealth] = useState(props.currentHealth)
  const [currentMana, setCurrentMana] = useState(props.currentMana)

  // TODO: Remove this in favor of real health and mana values
  useInterval(() => {
    setCurrentHealth(Math.round(Math.random() * maxHealth))
    setCurrentMana(Math.round(Math.random() * maxMana))
  }, 2000)

  return (
    <section className="quick-stats">
      <div className="character-name">
        <span>{name}</span>
      </div>

      <div
        aria-label="Character Health"
        className="character-health">
        <HealthBar
          currentHealth={currentHealth}
          maxHealth={maxHealth} />

        <span aria-label="Current Health">{currentHealth}</span>
        <span aria-hidden>{' / '}</span>
        <span aria-label="Maximum Health">{maxHealth}</span>
      </div>

      <div
        aria-label="Character Mana"
        className="character-mana">
        <ManaBar
          currentMana={currentMana}
          maxMana={maxMana} />

        <span aria-label="Current Mana">{currentMana}</span>
        <span aria-hidden>{' / '}</span>
        <span aria-label="Maximum Mana">{maxMana}</span>
      </div>
    </section>
  )
}

QuickStats.defaultProps = {
  currentHealth: 68,
  currentMana: 24,
  maxHealth: 100,
  maxMana: 100,
  name: 'Blorp the BARDbarian',
}

QuickStats.propTypes = {
  currentHealth: PropTypes.number,
  currentMana: PropTypes.number,
  maxHealth: PropTypes.number,
  maxMana: PropTypes.number,
  name: PropTypes.string,
}





export { QuickStats }
