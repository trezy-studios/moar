// Module imports
import { useEffect } from 'react'





const useInterval = (callback, interval) => {
  let intervalID = null

  return useEffect(() => {
    intervalID = setInterval(callback, interval)

    return () => clearInterval(intervalID)
  }, [])
}





export { useInterval }
