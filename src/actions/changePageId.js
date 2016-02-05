import actions from 'actions'
const {CHANGE_PAGE_ID} = actions

export default function(pageId) {
  return {
    type: CHANGE_PAGE_ID,
    payload: pageId
  }
}
