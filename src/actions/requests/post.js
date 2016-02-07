import {ENDPOINT} from 'constants'
import request from 'superagent'
import getAccessToken from 'accessToken/get'
import logoutUser from 'actions/currentUser/logoutUser'

export default function(path, data = {}) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const accessToken = getAccessToken()

      if (!accessToken) {
        dispatch(logoutUser())
        reject({status: 401})
        return
      }

      request
        .post(ENDPOINT + path)
        .set('Authorization', `Bearer ${accessToken.access_token}`)
        .send(data)
        .end((err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(response.body)
          }
        })
    })
  }
}
