// Module imports
import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  boolean,
  color,
  number,
  text,
  withKnobs,
} from "@storybook/addon-knobs"





// Local imports
import { FillableBar } from '../components'





export default {
  title: 'FillableBar',
  component: FillableBar,
  decorators: [
    withKnobs,
  ],
}





export const Normal = () => {
  const label = text('Accessibility label', 'Health')
  const fillColor = color('Fill color', '#da4e38')

  const currentValue = number('Current value', 100)
  const maxValue = number('Max value', 200)

  const isLow = boolean('Current value is low', false)

  const showNumbers = boolean('Show Numbers', true)

  return (
    <>
      <style
        dangerouslySetInnerHTML={{ __html: `
        :root {
          --meter-fill-color: ${fillColor};
        }
        ` }}
        type="text/css" />

      <FillableBar
        currentValue={currentValue}
        isLow={isLow}
        label={label}
        maxValue={maxValue}
        showNumbers={showNumbers} />
    </>
  )
}
