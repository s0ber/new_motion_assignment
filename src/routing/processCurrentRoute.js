import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'
import setDefaultLatLng from 'actions/map/setDefaultLatLng'
import setChargers from 'actions/map/setChargers'

export default function(router, data, dispatch, state) {
  switch (router.src) {
    case routes.HOME:
      break
    case routes.LOGIN:
      break
    case routes.MAP:
      if (!state.map.lat) {
        dispatch(setDefaultLatLng({lat: data.lat, lng: data.lng}))
        dispatch(setChargers(data.chargers))
      }
      break
  }

  dispatch(changePageId(data.pageId))
}
