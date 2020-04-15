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
      canvasElement.setAttribute('height', document.body.clientHeight)
      canvasElement.setAttribute('width', document.body.clientWidth)
    }
  }

  handleResize()
  useEvent(window, 'resize', handleResize)
  useGameLoop(canvasElementRef)

  return (
    <canvas
      height={document.body.clientHeight}
      ref={canvasElementRef}
      width={document.body.clientWidth} />
  )
}





export { Canvas }
