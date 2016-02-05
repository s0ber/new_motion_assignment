import actions from 'actions'
const {CHANGE_PAGE_ID} = actions

const initialState = null

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE_ID:
      return action.payload
    default:
      return state
  }
}
