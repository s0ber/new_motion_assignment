import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'

import loadCurrentUser from './loadCurrentUser'
import fetchDataForRoute from './fetchDataForRoute'
import processCurrentRoute from './processCurrentRoute'

export function processRouteChange(next, action, getState, dispatch) {
  const {router} = action
  const currentRoute = router.src

  if (action.option == 'popEvent') {
    next(action)
  } else if (router.path == getState().router.path) {
    return
  }

  loadCurrentUser(getState(), dispatch).then(() => {
    const {currentUser} = getState()
    const isLoggedIn = currentUser && currentUser.role !== 'Anonymous'

    if (isLoggedIn) {
      if (currentRoute == routes.LOGIN) {
        return dispatch(tinyActions.navigateTo(paths.HOME_PATH()))
      }
    } else if (currentRoute !== routes.HOME && currentRoute !== routes.LOGIN) {
      return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
    }

    fetchDataForRoute(router, dispatch).then((data) => {
      if (action.option !== 'popEvent') {
        next(action)
      }

      processCurrentRoute(router, data, dispatch, getState())
    })
  })
}
