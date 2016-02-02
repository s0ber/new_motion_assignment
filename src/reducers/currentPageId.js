import {CHANGE_PAGE_ID} from 'actions'

const initialState = null

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE_ID:
      return action.payload
    default:
      return state
  }
}
