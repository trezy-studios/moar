// Module imports
import React, {
  useEffect,
  useState,
} from 'react'
import {
  animated,
  useSpring,
  useTransition,
} from 'react-spring'
import PropTypes from 'prop-types'





// Local imports
import { LoadingMessage } from './LoadingMessage'





const GameLoader = props => {
  const {
    images,
    onSuccess,
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [loadedPercentage, setLoadedPercentage] = useSpring(() => ({ value: 0 }))
  const transitions = useTransition(isLoading, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const imageDecodeCache = {}

        try {
          let loadedImages = 0

          await Promise.all(images.map(imageURL => {
            if (imageDecodeCache[imageURL]) {
              return
            }

            imageDecodeCache[imageURL] = true

            const image = new Image
            image.src = imageURL

            const promise = image.decode()
            promise.then(() => {
              loadedImages += 1
              setLoadedPercentage({ value: loadedImages * (100 / images.length) })
            })

            return promise
          }))

          setLoadedPercentage(100)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
        }
      })()
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setTimeout(onSuccess, 2000)
    }
  }, [isLoading])

  return transitions.map(transition => {
    const {
      item,
      key,
      props,
    } = transition

    if (item) {
      return (
        <animated.div
          className="game-loader"
          key={key}
          style={props}>
          <LoadingMessage />
          <animated.progress
            max={100}
            value={loadedPercentage.value} />
        </animated.div>
      )
    }

    return (
      <animated.div
        className="game-loader"
        key={key}
        style={props}>
        Loading complete!
      </animated.div>
    )
  })

  // if (isLoading) {
  //   return (
  //     <div
  //       className="game-loader"
  //       data-animate
  //       data-animation="fade-in"
  //       data-animation-duration="0.2s">
  //       Reticulating splines...
  //       <progress
  //         max={100}
  //         value={loadedPercentageCountUp} />
  //     </div>
  //   )
  // }

  // return (
  //   <div className="game-loader">
  //     Loading complete!
  //   </div>
  // )
}

GameLoader.propTypes = {
  images: PropTypes.array.isRequired,
  onSuccess: PropTypes.func.isRequired,
}





export { GameLoader }
