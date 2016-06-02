import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

// Reducers
import {tinyReducer} from 'redux-tiny-router'
import * as rootReducers from 'reducers'
import {reducer as formReducer} from 'redux-form'

// Middlewares
import thunk from 'redux-thunk'
import routingMiddleware from 'routing/middleware'
import {tinyMiddleware} from 'redux-tiny-router'
import createLogger from 'redux-logger'

const reducers = combineReducers(Object.assign({}, tinyReducer, rootReducers, {form: formReducer}))
const middlewares = [thunk, routingMiddleware, tinyMiddleware, createLogger()]

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
)(createStore)

export default function(data, url) {
  return finalCreateStore(reducers, data)
}
