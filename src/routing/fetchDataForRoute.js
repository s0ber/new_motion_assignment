import {routes} from 'routes'

export default function(router) {
  return new Promise((resolve, reject) => {
    let request
    let data

    switch (router.src) {
      case routes.HOME:
        data = {pageId: 'home'}
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
