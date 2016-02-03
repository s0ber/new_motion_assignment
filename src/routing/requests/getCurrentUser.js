import get from 'utils/req/get'
import {ANONYMOUS} from 'constants'

// Implement ajax request to get information about current user
export default function() {
  return get('/v1/me').then((user) => {
    return user
  }).catch((err) => {
    if (err.status == 401) {
      return ANONYMOUS
    }
  })
}
