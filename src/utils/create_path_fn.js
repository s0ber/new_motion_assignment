import qs from 'query-string'

export default function(routeString) {
  return (params = {}) => {
    let path = routeString
    let key
    const filteredParams = Object.assign({}, params)

    const matchedParams = routeString.match(/\/:[\w-_]+/g)
    matchedParams && matchedParams.forEach((param) => {
      key = param.slice(2)
      delete filteredParams[key]
      path = path.replace(param, params[key] ? ('/' + params[key]) : '')
    })

    if (Object.keys(filteredParams).length > 0) {
      path += `?${qs.stringify(filteredParams)}`
    }

    return path
  }
}
