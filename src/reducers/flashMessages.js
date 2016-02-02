import {SHOW_FLASH_MESSAGE, HIDE_FLASH_MESSAGE} from 'actions'

export default function(state = [], action) {
  switch (action.type) {
    case SHOW_FLASH_MESSAGE:
      return [...state, action.payload]
    case HIDE_FLASH_MESSAGE:
      const messageIndex = state.indexOf(action.payload)

      if (messageIndex == -1) {
        return state
      } else {
        return [
          ...state.slice(0, messageIndex),
          ...state.slice(messageIndex + 1)
        ]
      }
    default:
      return state
  }
}
