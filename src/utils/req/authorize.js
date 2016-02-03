import {ENDPOINT} from 'constants'
import request from 'superagent'
import setAccessToken from 'accessToken/set'

export default function(path, data) {
  return new Promise((resolve, reject) => {
    data = Object.assign({}, data, {grant_type: 'password'})

    request
      .post(ENDPOINT + path)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0=')
      .send(data)
      .end((err, res) => {
        if (err) {
          if (err.status == 400) {
            reject({username: 'no credentials provided'})
          } else if (err.status == 401) {
            reject({username: 'wrong credentials provided'})
          } else {
            reject(err)
          }
        } else {
          setAccessToken(res.body)
          resolve(res.body)
        }
      })
  })
}
