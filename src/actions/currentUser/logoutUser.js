import removeAccessToken from 'accessToken/remove'
import actions from 'actions'
const {LOGOUT_USER} = actions

export default function() {
  return (dispatch) => {
    removeAccessToken()
    dispatch({type: LOGOUT_USER})
    return Promise.resolve()
  }
}
