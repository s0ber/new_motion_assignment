import {HIDE_FLASH_MESSAGE} from 'actions'

export default function(message) {
  return {
    type: HIDE_FLASH_MESSAGE,
    payload: message
  }
}
