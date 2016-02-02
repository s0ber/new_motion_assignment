import {utils} from 'redux-tiny-router'
import createPathFn from 'utils/create_path_fn'

const routes = {
  ROOT: '/',
  LOGIN: '/login',
  PAGE_ONE: '/page_one',
  PAGE_TWO: '/page_two',
  EXAMPLES: '/examples'
}

const routesList = Object.keys(routes).map((k) => routes[k])
utils.setRoutes(routesList)

const paths = {}

Object.keys(routes).forEach((key) =>
  paths[key + '_PATH'] = createPathFn(routes[key])
)

export {routes, paths}
