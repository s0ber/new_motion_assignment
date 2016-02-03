import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'

export default function(router, data, dispatch) {
  switch (router.src) {
    case routes.HOME:
      break
    case routes.LOGIN:
      break
  }

  dispatch(changePageId(data.pageId))
}
