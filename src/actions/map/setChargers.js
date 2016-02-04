import {SET_CHARGERS} from 'actions'

export default function(chargersData) {
  return {
    type: SET_CHARGERS,
    payload: {chargers: chargersData}
  }
}
