import {ENDPOINT} from 'constants'
import request from 'superagent'

export default function(path, query = {}) {
  query = Object.assign({}, query, {format: 'json'})

  return new Promise((resolve, reject) => {
    request
      .get(ENDPOINT + path)
      .query(query)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
  })
}
