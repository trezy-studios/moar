// Module imports
import { useEffect } from 'react'





const useEvent = (target, event, callback, options) => {
  return useEffect(() => {
    target.addEventListener(event, callback, options)
    return () => target.removeEventListener(event, callback)
  }, [])
}





export { useEvent }
