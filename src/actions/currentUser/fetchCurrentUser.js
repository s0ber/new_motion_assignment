import get from 'actions/requests/get'
import {ANONYMOUS} from 'constants'

export default function() {
  return (dispatch) => {
    return dispatch(get('/v1/me')).then((user) => {
      return user
    }).catch((err) => {
      if (err.status == 401) {
        return ANONYMOUS
      } else {
        throw err
      }
    })
  }
}
