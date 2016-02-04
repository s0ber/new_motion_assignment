import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'
import setDefaultLatLng from 'actions/map/setDefaultLatLng'

export default function(router, data, dispatch, state) {
  switch (router.src) {
    case routes.HOME:
      break
    case routes.LOGIN:
      break
    case routes.MAP:
      if (!state.map.lat) {
        dispatch(setDefaultLatLng({lat: data.lat, lng: data.lng}))
      }
      break
  }

  dispatch(changePageId(data.pageId))
}
