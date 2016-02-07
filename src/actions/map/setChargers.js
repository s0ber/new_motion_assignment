import actions from 'actions'
const {SET_CHARGERS} = actions

export default function(chargersData) {
  return {
    type: SET_CHARGERS,
    payload: chargersData
  }
}
