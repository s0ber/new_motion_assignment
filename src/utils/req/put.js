import {ENDPOINT} from 'constants'
import request from 'superagent'
import Cookie from 'cookies-js'
import showFlashMessage from 'actions/flashMessages/showFlashMessage'

export default function(path, data = {}, dispatch) {
  data = Object.assign({}, data, {authenticity_token: Cookie.get('_csrf_token')})

  return new Promise((resolve, reject) => {
    request
      .put(ENDPOINT + path)
      .send(data)
      .withCredentials()
      .end((err, res) => {
        if (err) {
          if (res.status == 422) {
            reject(res.body.errors, err)
          } else {
            reject(res.body, err)
          }
        } else {
          const response = res.body
          resolve(response)

          const notice = (response.meta && response.meta.notice) || response.notice
          if (dispatch && notice) {
            dispatch(showFlashMessage(notice))
          }
        }
      })
  })
}
