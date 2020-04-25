// Module imports
import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  select,
  withKnobs,
} from "@storybook/addon-knobs"





// Local imports
import { LoadingMessage } from '../components'





export default {
  title: 'LoadingMessage',
  component: LoadingMessage,
  decorators: [
    withKnobs,
  ],
}





export const Normal = () => (
  <LoadingMessage />
)
