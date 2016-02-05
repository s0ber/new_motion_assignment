import {ENDPOINT, BASIC_AUTH_CREDENTIALS} from 'constants'
import request from 'superagent'
import setAccessToken from 'accessToken/set'

export default function(path, data) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      data = Object.assign({}, data, {grant_type: 'password'})

      request
        .post(ENDPOINT + path)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Basic ${BASIC_AUTH_CREDENTIALS}`)
        .send(data)
        .end((err, res) => {
          if (err) {
            reject(err)
          } else {
            setAccessToken(res.body)
            resolve(res.body)
          }
        })
    })
  }
}
