import {ENDPOINT, BASIC_AUTH_CREDENTIALS, TEST_EMAIL, TEST_PASSWORD, TEST_ACCESS_TOKEN} from 'constants'
import request from 'superagent'
import setAccessToken from 'accessToken/set'

export default function(path, data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      data = Object.assign({}, data, {grant_type: 'password'})

      setTimeout(() => {
        if (data.username === TEST_EMAIL && data.password === TEST_PASSWORD) {
          setAccessToken(TEST_ACCESS_TOKEN)
          resolve({status: 200})
        } else if (!data.username && !data.password) {
          reject({status: 400})
        } else {
          reject({status: 401})
        }
      }, 1000)

      // request
      //   .post(ENDPOINT + path)
      //   .set('Content-Type', 'application/x-www-form-urlencoded')
      //   .set('Authorization', `Basic ${BASIC_AUTH_CREDENTIALS}`)
      //   .send(data)
      //   .end((err, res) => {
      //     if (err) {
      //       reject(err)
      //     } else {
      //       setAccessToken(res.body)
      //       resolve(res.body)
      //     }
      //   })
    })
  }
}
