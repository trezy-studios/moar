// Module imports
import React, {
  useEffect,
  useRef,
  useState,
} from 'react'





// Local imports
import {
  useEvent,
  useGameLoop,
} from '../effects'





const Canvas = () => {
  const canvasElementRef = useRef(null)
  const handleResize = () => {
    const canvasElement = canvasElementRef?.current

    if (canvasElement) {
      canvasElement.setAttribute('height', window.innerHeight)
      canvasElement.setAttribute('width', window.innerWidth)
    }
  }

  handleResize()
  useEvent({
    callback: handleResize,
    event: 'resize',
    target: window,
  })
  useGameLoop(canvasElementRef)

  return (
    <canvas
      height={window.innerHeight}
      ref={canvasElementRef}
      width={window.innerWidth} />
  )
}





export { Canvas }
