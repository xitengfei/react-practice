import { createStore, applyMiddleware } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Immutable from 'immutable'
import rootReducer from '../reducers'

const initialState = Immutable.Map()

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware( reduxThunkMiddleware, createLogger({stateTransformer: state => state.toJS() }) )
)