import get from 'utils/req/get'

import {LOGOUT_USER} from 'actions'
import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'
import showFlashMessage from 'actions/flashMessages/showFlashMessage'

export default function() {
  return (dispatch) => {
    return get('/logout').then((res) => {
      if (res.success) {
        dispatch({type: LOGOUT_USER})
        if (res.notice) {
          dispatch(showFlashMessage(res.notice))
        }
        dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
      }
    })
  }
}
