import {SET_DEFAULT_LAT_LNG} from 'actions'

export default function(latLng) {
  return {
    type: SET_DEFAULT_LAT_LNG,
    payload: latLng
  }
}
