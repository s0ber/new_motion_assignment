import {paths} from 'routes'

export const ENDPOINT = 'http://api.test.thenewmotion.com'
export const ANONYMOUS = {id: 0, role: 'Anonymous'}
export const GOOGLE_MAPS_API_PATH = 'https://maps.googleapis.com/maps/api/js'
export const DEFAULT_MAP_LOCATION = 'Amsterdam'
export const BASIC_AUTH_CREDENTIALS = 'dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0='

export const MENU_ITEMS = [
  {title: 'Map', path: paths.MAP_PATH(), icon: 'map-marker'},
  {title: 'Settings', path: paths.SETTINGS_PATH(), icon: 'gear'}
]
