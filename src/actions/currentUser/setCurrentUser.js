import actions from 'actions'
const {SET_CURRENT_USER} = actions

export default function(currentUser) {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser
  }
}
