import actions from 'actions'
const {CHANGE_PAGE_ID} = actions

export default function(state = null, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE_ID:
      return action.payload
    default:
      return state
  }
}
