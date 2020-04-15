// Module imports
import React from 'react'





// Local imports
import {
  Canvas,
  GameUI,
} from '../components'





const PlayPage = () => {
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <main aria-live>
      <Canvas />
      <GameUI />
    </main>
  )
}





export default PlayPage
