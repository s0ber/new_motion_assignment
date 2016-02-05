import actions from 'actions'
const {UPDATE_MAP} = actions

export default function(settings) {
  return {
    type: UPDATE_MAP,
    payload: settings
  }
}
