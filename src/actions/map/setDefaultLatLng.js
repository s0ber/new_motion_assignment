import actions from 'actions'
const {SET_DEFAULT_LAT_LNG} = actions

export default function(latLng) {
  return {
    type: SET_DEFAULT_LAT_LNG,
    payload: latLng
  }
}
