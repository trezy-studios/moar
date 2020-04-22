// Module imports
import { useEffect } from 'react'





const isTargetable = thing => {
  if (typeof thing !== 'undefined') {
    return thing instanceof EventTarget
  }

  return false
}

const useEvent = options => {
  const {
    callback,
    dependencies = [],
    event,
    options: eventOptions,
    target,
  } = options
  const eventTarget = target?.current || target

  useEffect(() => {
    if (!isTargetable(eventTarget)) {
      throw new TypeError(`useEvent target should be either a ref of type HTMLElement or an HTMLElement, got type ${eventTarget.constructor.name || 'undefined'}`)
      return false
    }

    eventTarget.addEventListener(event, callback, eventOptions)
    return () => eventTarget.removeEventListener(event, callback)
  }, dependencies)
}





export { useEvent }
