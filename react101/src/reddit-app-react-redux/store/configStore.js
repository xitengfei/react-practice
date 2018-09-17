import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootreducer from '../reducers/index'

const loggerMiddleware  = createLogger()

const configStore = (preloadedState) => {
    return createStore(
        rootreducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

export default configStore