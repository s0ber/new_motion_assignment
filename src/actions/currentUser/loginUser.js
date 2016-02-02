import post from 'utils/req/post'

import {LOGIN_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'

export default function(loginData) {
  return (dispatch) => {
    return post('/sessions', {user: loginData}, dispatch)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: LOGIN_USER,
            payload: res.user.user
          })

          dispatch(tinyActions.navigateTo(paths.POSITIONS_PATH()))
        }
      })
  }
}
