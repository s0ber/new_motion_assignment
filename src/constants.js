import {paths} from 'routes'

export const ENDPOINT = 'http://api.test.thenewmotion.com'
export const ANONYMOUS = {id: 0, role: 'Anonymous'}

export const MENU_ITEMS = [
  {title: 'Map', path: paths.MAP_PATH(), icon: 'map-marker'},
  {title: 'Settings', path: paths.SETTINGS_PATH(), icon: 'gear'}
]
