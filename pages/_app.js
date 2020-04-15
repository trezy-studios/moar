// Style imports
import '../scss/reset.scss'
import '../scss/app.scss'





// Module imports
import { createFirestoreInstance } from 'redux-firestore'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import React from 'react'
import withRedux from 'next-redux-wrapper'





// Local imports
import { initStore } from '../store'
import firebase from '../helpers/firebase'





const MyApp = props => {
  const {
    Component,
    isServer,
    pageProps,
    store,
  } = props
  const rrfProps = {
    firebase,
    config: {
      enableClaims: true,
      presence: 'presence',
      sessions: 'sessions',
      useFirestoreForProfile: true,
      userProfile: 'users',
    },
    createFirestoreInstance,
    dispatch: store.dispatch,
  }

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Component {...pageProps} />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}





export default withRedux(initStore)(MyApp)
