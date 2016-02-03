import authorize from 'utils/req/authorize'
import getCurrentUser from 'routing/requests/getCurrentUser'
import setCurrentUser from 'actions/currentUser/setCurrentUser'

import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'

export default function(loginData) {
  return (dispatch) => {
    return (
      authorize('/oauth2/access_token', loginData).then((res) => {
        return getCurrentUser().then((user) => {
          dispatch(setCurrentUser(user))
          dispatch(tinyActions.navigateTo(paths.HOME_PATH()))
        })
      })
    )
  }
}
