import get from 'utils/req/get'

export default function() {
  return new Promise((resolve, reject) => {
    resolve({
      pageId: 'page2'
    })
  })
}
