import {SET_DEFAULT_LAT_LNG, UPDATE_MAP, SET_CHARGERS} from 'actions'

export default function(state = {zoom: 12}, action) {
  switch (action.type) {
    case SET_DEFAULT_LAT_LNG:
      return {...state, lat: action.payload.lat, lng: action.payload.lng}
    case UPDATE_MAP:
      return Object.assign({}, state, action.payload)
    case SET_CHARGERS:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
