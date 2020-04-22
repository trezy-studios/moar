// Module imports
import React, {
  useState,
} from 'react'
import dynamic from 'next/dynamic'





// Local imports
import { GameLoader } from '../components'

const Canvas = dynamic(() => import('../components/Canvas').then(mod => mod.Canvas))
const GameUI = dynamic(() => import('../components/GameUI').then(mod => mod.GameUI))





const PlayPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  if (!isLoaded) {
    return (
      <GameLoader
        images={[
          '/game-assets/ui/buttons/button-blue@4x.png',
          '/game-assets/ui/buttons/button-green@4x.png',
          '/game-assets/ui/buttons/button-orange@4x.png',
          '/game-assets/ui/buttons/button-red@4x.png',
          '/game-assets/ui/cursors/move@2x.png',
          '/game-assets/ui/cursors/pointer@2x.png',
          '/game-assets/ui/fillable-bar-hanger@4x.png',
          '/game-assets/ui/fillable-bar@4x.png',
          '/game-assets/ui/grid-slot@4x.png',
          '/game-assets/ui/loading-spinner@4x.png',
          '/game-assets/ui/ui-frame-dark@4x.png',
          '/game-assets/ui/ui-frame-horizontal-break@4x.png',
          '/game-assets/ui/ui-frame@4x.png',
        ]}
        onSuccess={() => setIsLoaded(true)} />
    )
  }

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
