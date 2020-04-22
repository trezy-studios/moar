// Module imports
import { useEffect } from 'react'
import Rafael from 'rafael'





// Local variables
let rafael = null





const useGameLoop = canvasElementRef => {
  return useEffect(() => {
    if (!rafael) {
      rafael = new Rafael
      window.rafael = rafael
    }

    // const mapImage = new Image
    // mapImage.src = '/game-assets/fake-map.png'

    rafael.schedule('render entities', () => {
      const canvasElement = canvasElementRef.current
      const context = canvasElement.getContext('2d')

      const height = canvasElement.clientHeight
      const width = canvasElement.clientWidth

      context.clearRect(0, 0, width, height)
      context.rect(0, 0, width, height)
      context.fillStyle = 'black'
      context.fill()

      // context.drawImage(mapImage, 0, 0)
    })

    return () => rafael.unschedule('render entities')
  }, [])
}





export { useGameLoop }
