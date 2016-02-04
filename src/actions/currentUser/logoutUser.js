import removeAccessToken from 'accessToken/remove'
import {LOGOUT_USER} from 'actions'

export default function() {
  return (dispatch) => {
    removeAccessToken()
    dispatch({type: LOGOUT_USER})
    return Promise.resolve()
  }
}
