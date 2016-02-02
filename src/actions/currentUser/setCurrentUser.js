import {SET_CURRENT_USER} from 'actions'

export default function(currentUser) {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser
  }
}
