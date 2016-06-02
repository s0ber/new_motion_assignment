import removeAccessToken from './remove'
import logoutUser from 'actions/currentUser/logoutUser'

export default function() {
  let token = localStorage.getItem('toptal_access_token')

  if (!token) {
    return null
  }

  token = JSON.parse(token)

  if (token.expireTime > Date.now()) {
    return token
  } else {
    return null
  }
}
