// Module imports
import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  select,
  withKnobs,
} from "@storybook/addon-knobs"





// Local imports
import { AllCatalogs } from '../helpers/AllCatalogs'
import { Hotbar } from '../components'





export default {
  title: 'Hotbar',
  component: Hotbar,
  decorators: [
    withKnobs,
  ],
}





export const Normal = () => {
  const {
    items,
    spells,
  } = AllCatalogs

  const options = {
    None: null,
    ...items.items.reduce((accumulator, item) => ({
      ...accumulator,
      [`Item: ${item.name}`]: {
        id: item.id,
        catalog: 'items',
      },
    }), {}),
    ...spells.items.reduce((accumulator, item) => ({
      ...accumulator,
      [`Spell: ${item.name}`]: {
        id: item.id,
        catalog: 'spells',
      },
    }), {}),
  }

  const slots = {
    0: select('Slot 1', options, null),
    1: select('Slot 2', options, null),
    2: select('Slot 3', options, null),
    3: select('Slot 4', options, null),
    4: select('Slot 5', options, null),
    5: select('Slot 6', options, null),
    6: select('Slot 7', options, null),
    7: select('Slot 8', options, null),
  }

  return (
    <Hotbar slots={slots} />
  )
}
