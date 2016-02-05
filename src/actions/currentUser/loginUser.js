import authorize from 'actions/requests/authorize'
import fetchCurrentUser from 'actions/currentUser/fetchCurrentUser'
import setCurrentUser from 'actions/currentUser/setCurrentUser'

import {tinyActions} from 'redux-tiny-router'
import {paths} from 'routes'

export default function(loginData) {
  return (dispatch) => {
    return (
      dispatch(authorize('/oauth2/access_token', loginData))
        .then((res) => {
          return dispatch(fetchCurrentUser()).then((user) => {
            dispatch(setCurrentUser(user))
            dispatch(tinyActions.navigateTo(paths.HOME_PATH()))
          })
        }).catch((err) => {
          if (err.status == 400) {
            throw {username: 'no credentials provided'}
          } else if (err.status == 401) {
            throw {username: 'wrong credentials provided'}
          }
        })
    )
  }
}
