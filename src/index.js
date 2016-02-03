window.__UNIVERSAL__ = false

import React from 'react'
import {render} from 'react-dom'
import Root from './containers/Root'
import createStore from './store'
import {reduxTinyRouter} from 'redux-tiny-router'

const store = createStore({}, window.location.href)

document.addEventListener('DOMContentLoaded', () => {
  reduxTinyRouter.init(store)
  render(<Root store={store}/>, document.getElementById('root'))
})

// A little hack, so we can dispatch actions from anywhere.
// Access your store this way only when there is no other way to dispatch an action.
export default store
