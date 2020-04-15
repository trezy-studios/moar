// Module imports
import { useEffect } from 'react'
import Rafael from 'rafael'





// Local variables
let rafael = null





const useGameLoop = canvasElementRef => {
  return useEffect(() => {
    if (!rafael) {
      rafael = new Rafael
    }

    rafael.schedule('render entities', () => {
      const canvasElement = canvasElementRef.current
      const context = canvasElement.getContext('2d')

      const height = canvasElement.clientHeight
      const width = canvasElement.clientWidth

      context.clearRect(0, 0, width, height)
      context.rect(20, 20, 20, 20)
      context.fillStyle = 'purple'
      context.fill()
    })

    return () => rafael.unschedule('render entities')
  }, [])
}





export { useGameLoop }
