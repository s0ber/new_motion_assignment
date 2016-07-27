import get from 'actions/requests/get'
import {ANONYMOUS, TEST_CURRENT_USER} from 'constants'

export default function() {
  return (dispatch) => {
    return dispatch(get('/v1/me')).then((user) => {
      return TEST_CURRENT_USER
    }).catch((err) => {
      if (err.status == 401) {
        return ANONYMOUS
      } else {
        throw err
      }
    })
  }
}
