// Module imports
import React, {
  useState,
} from 'react'
import {
  animated,
  useTransition,
} from 'react-spring'
import dynamic from 'next/dynamic'





// Local imports
import { GameLoader } from '../components'

const Canvas = dynamic(() => import('../components/Canvas').then(mod => animated(mod.Canvas)))
const GameUI = dynamic(() => import('../components/GameUI').then(mod => animated(mod.GameUI)))





// Local constants
const AnimatedGameLoader = animated(GameLoader)





const PlayPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const transitions = useTransition(isLoading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const onLoaded = () => setIsLoading(false)

  return transitions.map(transition => {
    const {
      item,
      key,
      props,
    } = transition

    if (item) {
      return (
        <animated.div
          key={key}
          style={props}>
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
            onSuccess={onLoaded} />
        </animated.div>
      )
    }

    return (
      <animated.main
        aria-live
        key={key}
        style={props}>
        {(typeof window !== 'undefined') && (
          <>
            <Canvas />
            <GameUI />
          </>
        )}
      </animated.main>
    )
  })
  // if (!isLoaded) {
  //   return (
  //     <AnimatedGameLoader
  //       images={[
  //         '/game-assets/ui/buttons/button-blue@4x.png',
  //         '/game-assets/ui/buttons/button-green@4x.png',
  //         '/game-assets/ui/buttons/button-orange@4x.png',
  //         '/game-assets/ui/buttons/button-red@4x.png',
  //         '/game-assets/ui/cursors/move@2x.png',
  //         '/game-assets/ui/cursors/pointer@2x.png',
  //         '/game-assets/ui/fillable-bar-hanger@4x.png',
  //         '/game-assets/ui/fillable-bar@4x.png',
  //         '/game-assets/ui/grid-slot@4x.png',
  //         '/game-assets/ui/loading-spinner@4x.png',
  //         '/game-assets/ui/ui-frame-dark@4x.png',
  //         '/game-assets/ui/ui-frame-horizontal-break@4x.png',
  //         '/game-assets/ui/ui-frame@4x.png',
  //       ]}
  //       onSuccess={() => setIsLoaded(true)} />
  //   )
  // }

  // if (typeof window === 'undefined') {
  //   return null
  // }

  // return (
  //   <main aria-live>
  //     <Canvas />
  //     <GameUI />
  //   </main>
  // )
}





export default PlayPage
