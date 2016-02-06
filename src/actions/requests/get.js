import {ENDPOINT} from 'constants'
import request from 'superagent'
import getAccessToken from 'accessToken/get'

export default function(path, query = {}) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const accessToken = getAccessToken()

      if (!accessToken) {
        dispatch(logoutUser())
        reject({status: 401})
        return
      }

      request
        .get(ENDPOINT + path)
        .set('Authorization', `Bearer ${accessToken.access_token}`)
        .query(query)
        .end((err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res.body)
          }
        })
    })
  }
}
