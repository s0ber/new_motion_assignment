import {UPDATE_MAP} from 'actions'

export default function(settings) {
  return {
    type: UPDATE_MAP,
    payload: settings
  }
}
