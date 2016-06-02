export default function(token) {
  const expireDate = new Date()
  expireDate.setSeconds(expireDate.getSeconds() + token.expires_in)

  token.expireTime = expireDate.getTime()
  token = JSON.stringify(token)
  localStorage.setItem('toptal_access_token', token)
}
