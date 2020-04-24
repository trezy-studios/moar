// Style imports
import '!style-loader!css-loader!sass-loader!../scss/reset.scss'
import '!style-loader!css-loader!sass-loader!../scss/app.scss'

// Module imports
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'





addDecorator(withA11y)
addDecorator(withInfo)
