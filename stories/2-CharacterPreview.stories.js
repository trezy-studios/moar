// Module imports
import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  radios,
  select,
  withKnobs,
} from "@storybook/addon-knobs"





// Local imports
import { CharacterPreview } from '../components'





export default {
  title: 'CharacterPreview',
  component: CharacterPreview,
  decorators: [
    withKnobs,
  ],
}





export const Normal = () => {
  const characterDirection = radios('Direction', {
    Left: 'left',
    Right: 'right',
  }, 'right')
  const characterGender = radios('Gender', {
    Male: 'male',
    Female: 'female',
  }, 'male')
  const characterState = radios('State', {
    Idle: 'idle',
    Running: 'running',
  }, 'idle')
  const characterTypes = select('Type', {
    Elf: 'elf',
    Knight: 'knight',
    Lizard: 'lizard',
    Wizard: 'wizard',
  }, 'elf')

  return (
    <CharacterPreview
      direction={characterDirection}
      gender={characterGender}
      state={characterState}
      type={characterTypes} />
  )
}
