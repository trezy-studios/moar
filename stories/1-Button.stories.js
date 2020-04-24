// Module imports
import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  select,
  boolean,
  text,
  withKnobs,
} from "@storybook/addon-knobs"





// Local imports
import { Button } from '../components'





export default {
  title: 'Button',
  component: Button,
  decorators: [
    withKnobs,
  ],
}





export const Text = () => (
  <Button
    disabled={boolean('Disabled', false)}
    onClick={action('clicked')}
    type={select('Type', {
      Default: 'default',
      Danger: 'danger',
      Success: 'success',
    })}>
    {text('Label', 'Button')}
  </Button>
)

Text.story = {
  name: 'Normal',
}
