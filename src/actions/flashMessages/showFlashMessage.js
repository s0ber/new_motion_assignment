import {SHOW_FLASH_MESSAGE} from 'actions'
import hideFlashMessage from './hideFlashMessage'

export default function(message, type = 'notice') {
  return function(dispatch) {
    const flashMessage = {message, type}

    dispatch({
      type: SHOW_FLASH_MESSAGE,
      payload: flashMessage
    })

    setTimeout(() => {
      dispatch(hideFlashMessage(flashMessage))
    }, 2000)
  }
}
