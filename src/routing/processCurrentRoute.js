import {routes, paths} from 'routes'

import changePageId from 'actions/changePageId'

export default function(router, data, dispatch) {
  switch (router.src) {
    case routes.PAGE_ONE:
      break
    case routes.PAGE_TWO:
      break
    case routes.EXAMPLES:
      break
    case routes.LOGIN:
      break
  }

  dispatch(changePageId(data.pageId))
}
