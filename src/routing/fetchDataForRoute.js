import {routes} from 'routes'
import getPageOneData from './requests/getPageOneData'
import getPageTwoData from './requests/getPageTwoData'

export default function(router) {
  return new Promise((resolve, reject) => {
    let request
    let data

    switch (router.src) {
      case routes.ROOT:
        data = {pageId: 'root'}
        break
      case routes.PAGE_ONE:
        request = getPageOneData()
        break
      case routes.PAGE_TWO:
        request = getPageTwoData()
        break
      case routes.EXAMPLES:
        data = {pageId: 'examples'}
        break
      case routes.LOGIN:
        data = {pageId: 'login'}
        break
      default:
        data = {pageId: null}
    }

    if (request) {
      request.then((data) => { resolve(data) })
    } else {
      resolve(data)
    }
  })
}
