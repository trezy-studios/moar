// Module imports
import React, {
  useState,
} from 'react'





// Local imports
import { useInterval } from '../effects'
import loadingMessages from '../data/loading-messages'





const getRandomMessage = () => loadingMessages[Math.floor(Math.random() * loadingMessages.length)]

const LoadingMessage = () => {
  const [loadingMessage, setLoadingMessage] = useState(getRandomMessage())

  useInterval(() => setLoadingMessage(getRandomMessage()), 5000)

  return loadingMessage
}





export { LoadingMessage }
