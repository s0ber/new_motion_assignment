import {LOGOUT_USER, SET_CURRENT_USER} from 'actions'
import {ANONYMOUS} from 'constants'

export default function(state = null, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case LOGOUT_USER:
      return ANONYMOUS
    default:
      return state
  }
}
