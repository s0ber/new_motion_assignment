import {ENDPOINT, TEST_ACCESS_TOKEN} from 'constants'
import request from 'superagent'
import getAccessToken from 'accessToken/get'
import logoutUser from 'actions/currentUser/logoutUser'

export default function(path, query = {}) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const accessToken = getAccessToken()

      if (!accessToken) {
        dispatch(logoutUser())
        reject({status: 401})
        return
      }

      setTimeout(() => {
        if (accessToken.access_token === TEST_ACCESS_TOKEN.access_token) {
          resolve({status: 200})
        } else {
          reject({status: 401})
        }
      }, 200)

      // request
      //   .get(ENDPOINT + path)
      //   .set('Authorization', `Bearer ${accessToken.access_token}`)
      //   .query(query)
      //   .end((err, res) => {
      //     if (err) {
      //       reject(err)
      //     } else {
      //       resolve(res.body)
      //     }
      //   })
    })
  }
}
