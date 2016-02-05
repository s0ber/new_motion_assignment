import scriptJs from 'scriptjs'
import {GOOGLE_MAPS_API_PATH, DEFAULT_MAP_LOCATION} from 'constants'
import getChargersData from './getChargersData'

export default function() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      scriptJs(GOOGLE_MAPS_API_PATH, () => {
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({address: DEFAULT_MAP_LOCATION}, (results, status) => {
          if (status == 'OK') {
            const latLng = results[0].geometry.location
            resolve({
              pageId: 'map',
              lat: latLng.lat(),
              lng: latLng.lng(),
              chargers: getChargersData()
            })
          }
        })
      })
    })
  }
}
