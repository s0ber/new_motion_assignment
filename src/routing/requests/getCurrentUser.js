import get from 'utils/req/get'
import {ANONYMOUS} from 'constants'

// Implement ajax request to get information about current user
export default function() {
  return new Promise((resolve, reject) => {
    resolve(ANONYMOUS)
  })
}

