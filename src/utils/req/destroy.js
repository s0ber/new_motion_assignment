import {ENDPOINT} from 'constants'
import request from 'superagent'
import Cookie from 'cookies-js'
import showFlashMessage from 'actions/flashMessages/showFlashMessage'

export default function(path, dispatch) {
  return new Promise((resolve, reject) => {
    request
      .del(ENDPOINT + path)
      .send({authenticity_token: Cookie.get('_csrf_token')})
      .withCredentials()
      .end((err, res) => {
        if (err) {
          reject(err)
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
