// Module imports
import {
  createStore,
  applyMiddleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reduxFirestore } from 'redux-firestore'
import thunkMiddleware from 'redux-thunk'





// Local imports
import firebase from '../helpers/firebase'
import initialState from './initialState'
import reducer from './reducers'





const initStore = (state = initialState) => createStore(
  reducer,
  state,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    reduxFirestore(firebase),
  ),
)





export { initStore }
